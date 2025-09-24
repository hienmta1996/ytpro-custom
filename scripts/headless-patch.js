// ==== YTPRO HEADLESS PATCH ====
// bật chế độ headless
window.__YTPRO_HEADLESS__ = true;
window.__YTPRO_INTERCEPT__ = true;

// write(...) của script cũ có thể ghi vào DOM -> vô hiệu hoá để tránh lỗi DOM null
window.write = function (x) {
  try { console.log('[YTPRO]', x); } catch (e) {}
};

// Callback nhận info trong môi trường không có Android (debug)
window.onYtproInfo = function (info) {
  try {
    if (window.Android && typeof Android.onInfo === 'function') {
      Android.onInfo(JSON.stringify(info));
    } else {
      console.log('[YTPRO] onYtproInfo (no Android):', info);
    }
  } catch (e) { console.log('[YTPRO] onYtproInfo error', e); }
};

// Chặn/dẫn hướng mọi lời gọi UI -> Android.onInfo
(function hardHookHandle() {
  try {
    // Khoá handleDownloadStreams để các script khác không ghi đè
    Object.defineProperty(window, 'handleDownloadStreams', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: function (info) {
        try {
          if (window.Android && typeof Android.onInfo === 'function') {
            Android.onInfo(JSON.stringify(info));
          } else if (typeof window.onYtproInfo === 'function') {
            window.onYtproInfo(info);
          }
        } catch (e) {
          console.log('[YTPRO] onInfo error', e);
        }
        // KHÔNG dựng UI, return silently
        return undefined;
      }
    });
  } catch (e) {
    // Fallback nếu defineProperty bị chặn
    window.handleDownloadStreams = function (info) {
      try {
        if (window.Android && typeof Android.onInfo === 'function') {
          Android.onInfo(JSON.stringify(info));
        } else if (typeof window.onYtproInfo === 'function') {
          window.onYtproInfo(info);
        }
      } catch (_) {}
    };
  }
})();

// Chống gọi trùng GDS (ví dụ SPA kích lại, hashchange, v.v.)
(function deDup() {
  window.__YTPRO_LAST_KEY__ = null;
  window.__YTPRO_LAST_AT__  = 0;
  window.__YTPRO_GDS_RUNNING__ = false;

  window.__YTPRO_CALL_GDS_ONCE__ = function (run) {
    try {
      const href = location.href;
      let key = null;
      const u = new URL(href);
      if (u.pathname.startsWith('/shorts/')) {
        key = u.pathname.split('/shorts/')[1].split(/[?&#]/)[0] || null;
      } else {
        key = u.searchParams.get('v');
      }
      key = key || href;

      const now = Date.now();
      if (window.__YTPRO_GDS_RUNNING__) return false;
      if (window.__YTPRO_LAST_KEY__ === key && (now - window.__YTPRO_LAST_AT__) < 5000) return false;

      window.__YTPRO_GDS_RUNNING__ = true;
      window.__YTPRO_LAST_KEY__ = key;
      window.__YTPRO_LAST_AT__  = now;

      Promise.resolve().then(run).finally(() => { window.__YTPRO_GDS_RUNNING__ = false; });
      return true;
    } catch (e) {
      Promise.resolve().then(run);
      return true;
    }
  };
})();

// API tiện dụng: gọi với videoId (tuỳ chọn). Nếu không truyền -> tự lấy từ URL.
window.ytproRun = function (videoIdOpt) {
  const call = () => {
    try {
      window.__YTPRO_INTERCEPT__ = true;
      if (typeof window.getDownloadStreams !== 'function') {
        throw new Error('getDownloadStreams is not ready');
      }
      if (videoIdOpt) {
        // phiên bản innertube.js mới của bạn đã hỗ trợ truyền videoId; nếu chưa, bỏ tham số.
        getDownloadStreams(videoIdOpt);
      } else {
        getDownloadStreams();
      }
    } catch (e) {
      console.log('[YTPRO] ytproRun error', e);
    }
  };
  if (typeof window.__YTPRO_CALL_GDS_ONCE__ === 'function') {
    window.__YTPRO_CALL_GDS_ONCE__(call);
  } else {
    call();
  }
};

// Tắt các hook UI có thể tự động gọi GDS nhiều lần (nếu có trong script cũ)
window.onhashchange = null;