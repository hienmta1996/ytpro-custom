/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/jintr@3.3.1/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import {
    parse as e
} from "/npm/acorn@8.14.1/+esm";
class t {
    constructor(e, t) {
        this.node = e, this.visitor = t
    }
    run() {}
}
const i = (e, t) => Object.defineProperty(t, "name", {
    value: e
});
class s extends Error {
    constructor(e, t) {
        super(e), t && (this.info = t)
    }
}
var r = Object.freeze({
    __proto__: null,
    namedFunction: i,
    JinterError: s
});
class n extends t {
    handleMemberExpression(e, t, i) {
        const s = this.visitor.visitNode(e.object),
            r = this.visitor.visitNode(e.property),
            n = i(s[r], t);
        return s[r] = n
    }
    handleIdentifier(e, t, i) {
        const s = i(this.visitor.visitNode(e), t);
        return this.visitor.scope.set(e.name, s), this.visitor.scope.get(e.name)
    }
    run() {
        const {
            operator: e,
            left: t,
            right: i
        } = this.node, s = this.visitor.visitNode(i), r = n.operatorMap[e];
        if (r) return "MemberExpression" === t.type ? this.handleMemberExpression(t, s, r) : "Identifier" === t.type ? this.handleIdentifier(t, s, r) : void console.warn("Unhandled left node type:", t.type);
        console.warn("Unhandled operator:", e)
    }
}
n.operatorMap = {
    "=": (e, t) => t,
    "+=": (e, t) => e + t,
    "-=": (e, t) => e - t,
    "*=": (e, t) => e * t,
    "/=": (e, t) => e / t,
    "%=": (e, t) => e % t,
    "**=": (e, t) => e ** t,
    "<<=": (e, t) => e << t,
    ">>=": (e, t) => e >> t,
    ">>>=": (e, t) => e >>> t,
    "&=": (e, t) => e & t,
    "^=": (e, t) => e ^ t,
    "|=": (e, t) => e | t
};
class o extends t {
    run() {
        const {
            operator: e,
            left: t,
            right: i
        } = this.node, s = this.visitor.visitNode(t), r = this.visitor.visitNode(i), n = o.operatorMap[e];
        if (n) return n(s, r);
        console.warn("Unhandled binary operator:", e)
    }
}
o.operatorMap = {
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "+": (e, t) => e + t,
    "-": (e, t) => e - t,
    "*": (e, t) => e * t,
    "/": (e, t) => e / t,
    "%": (e, t) => e % t,
    "**": (e, t) => e ** t,
    "&": (e, t) => e & t,
    "|": (e, t) => e | t,
    "^": (e, t) => e ^ t,
    "<<": (e, t) => e << t,
    ">>": (e, t) => e >> t,
    ">>>": (e, t) => e >>> t,
    in: (e, t) => e in t,
    instanceof: (e, t) => e instanceof t
};
var a, d, h, c = function(e, t, i, s) {
    if ("a" === i && !s) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === i ? s : "a" === i ? s.call(e) : s ? s.value : t.get(e)
};
const p = {
    forEach: (e, t, i) => {
        const s = t;
        e.length > 1 && i.scope.set("_this", e.slice(-1)[0]);
        let r = 0;
        for (const t of s) e[0]([t, r++, s])
    },
    toString: (e, t) => t.toString()
};
a = new WeakSet, d = function() {
    if ("MemberExpression" === this.node.callee.type || "Identifier" === this.node.callee.type) {
        const e = c(this, a, "m", h).call(this, this.node.callee);
        throw new s(`${e} is not a function`)
    }
    if ("SequenceExpression" === this.node.callee.type) {
        const e = [],
            t = [];
        throw e.push("("), this.node.callee.expressions.forEach((e => {
            "Literal" === e.type ? t.push(e.raw || "") : "Identifier" === e.type ? t.push(e.name) : "MemberExpression" === e.type && (e.computed ? t.push(`${this.visitor.getName(e.object)}[${this.visitor.getName(e.property)||"..."}]`) : t.push(`${this.visitor.getName(e.object)}.${this.visitor.getName(e.property)}`))
        })), e.push(t.join(", ")), e.push(")"), new s(`${e.join("")} is not a function`)
    }
}, h = function e(t) {
    if ("Identifier" === t.type) return t.name;
    if ("MemberExpression" === t.type) {
        return `${c(this,a,"m",e).call(this,t.object)}${t.computed?`[${this.visitor.getName(t.property)||"..."}]`:`.${this.visitor.getName(t.property)}`}`
    }
    return "<unknown>"
};
class l extends t {
    run() {
        const {
            operator: e,
            left: t,
            right: i
        } = this.node, s = l.operatorMap[e];
        if (s) return s(this.visitor, t, i);
        console.warn("Unhandled logical operator:", e)
    }
}
l.operatorMap = {
    "&&": (e, t, i) => {
        const s = e.visitNode(t);
        return !0 === s ? e.visitNode(i) : s
    },
    "||": (e, t, i) => e.visitNode(t) || e.visitNode(i),
    "??": (e, t, i) => {
        const s = (e, t) => t && "undefined" === e ? void 0 : e,
            r = s(e.visitNode(t), "Identifier" === t.type),
            n = s(e.visitNode(i), "Identifier" === i.type);
        return r ?? n
    }
};
var u, v, f, m, y = function(e, t, i, s) {
    if ("a" === i && !s) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === i ? s : "a" === i ? s.call(e) : s ? s.value : t.get(e)
};
u = new WeakSet, v = function() {
    const e = this.node.computed ? this.visitor.visitNode(this.node.key) : this.visitor.getName(this.node.key),
        t = this.visitor.visitNode(this.node.value);
    if (e) return {
        [e]: t
    }
}, f = function() {
    throw new TypeError("Not implemented: Property.get")
}, m = function() {
    throw new TypeError("Not implemented: Property.set")
};
class N extends t {
    static isValidOperator(e) {
        return e in N.operatorMap
    }
    run() {
        const {
            operator: e,
            argument: t
        } = this.node;
        if (N.isValidOperator(e)) return N.operatorMap[e](this.visitor, t);
        console.warn("Unhandled unary operator:", e)
    }
}
N.operatorMap = {
    "-": (e, t) => -e.visitNode(t),
    "+": (e, t) => +e.visitNode(t),
    "!": (e, t) => !e.visitNode(t),
    "~": (e, t) => ~e.visitNode(t),
    void: (e, t) => {
        e.visitNode(t)
    },
    typeof: (e, t) => {
        const i = e.visitNode(t);
        return "Identifier" === t.type && "undefined" === i ? "undefined" : typeof e.visitNode(t)
    },
    delete: (e, t) => {
        if ("MemberExpression" === t.type) {
            return delete e.visitNode(t.object)[t.computed ? e.visitNode(t.property) : e.getName(t.property)]
        }
        return "Identifier" !== t.type || !e.scope.has(t.name) || e.scope.delete(t.name)
    }
};
var w, x, b = Object.freeze({
        __proto__: null,
        ArrayExpression: class extends t {
            run() {
                return this.node.elements.map((e => this.visitor.visitNode(e)))
            }
        },
        ArrowFunctionExpression: class extends t {
            run() {
                const {
                    params: e,
                    body: t
                } = this.node, s = i("anonymous function", (i => {
                    let s = 0;
                    for (const t of e) this.visitor.visitNode(t), "Identifier" === t.type ? this.visitor.scope.set(t.name, i[s]) : console.warn("Unhandled param type", t.type), s++;
                    return this.visitor.visitNode(t)
                }));
                return s
            }
        },
        AssignmentExpression: n,
        BinaryExpression: o,
        BlockStatement: class extends t {
            run() {
                for (const e of this.node.body) {
                    const t = this.visitor.visitNode(e);
                    if ("ReturnStatement" === e.type) return t;
                    if ("$jintr_break_" === t || "$jintr_continue_" === t) return t;
                    if (("WhileStatement" === e.type || "IfStatement" === e.type || "ForStatement" === e.type || "TryStatement" === e.type) && t) return t
                }
            }
        },
        BreakStatement: class extends t {
            run() {
                return "$jintr_break_"
            }
        },
        CallExpression: class extends t {
            constructor() {
                super(...arguments), a.add(this)
            }
            run() {
                let e, t;
                if ("MemberExpression" === this.node.callee.type ? (e = this.visitor.getName(this.node.callee.object), t = this.visitor.getName(this.node.callee.property)) : "Identifier" === this.node.callee.type && (t = this.node.callee.name), e && this.visitor.listeners[e]) {
                    const t = this.visitor.listeners[e](this.node, this.visitor);
                    if ("__continue_exec" !== t) return t
                }
                if (t && "toString" !== t && this.visitor.listeners[t]) {
                    const e = this.visitor.listeners[t](this.node, this.visitor);
                    if ("__continue_exec" !== e) return e
                }
                if ("MemberExpression" === this.node.callee.type) {
                    const e = this.visitor.visitNode(this.node.callee.object),
                        t = this.node.callee.computed ? this.visitor.visitNode(this.node.callee.property) : this.visitor.getName(this.node.callee.property),
                        i = this.node.arguments.map((e => this.visitor.visitNode(e)));
                    return t in p ? p[t](i, e, this.visitor) : (e || c(this, a, "m", d).call(this), "function" != typeof e[t] && c(this, a, "m", d).call(this), e[t].toString().includes("[native code]") ? e[t](...i) : e[t](i))
                }
                const i = this.visitor.visitNode(this.node.callee),
                    s = this.node.arguments.map((e => this.visitor.visitNode(e)));
                return "function" != typeof i && c(this, a, "m", d).call(this), i(s)
            }
        },
        ConditionalExpression: class extends t {
            run() {
                const {
                    test: e,
                    consequent: t,
                    alternate: i
                } = this.node;
                return this.visitor.visitNode(e) ? this.visitor.visitNode(t) : this.visitor.visitNode(i)
            }
        },
        ContinueStatement: class extends t {
            run() {
                return "$jintr_continue_"
            }
        },
        EmptyStatement: class extends t {
            run() {}
        },
        ExpressionStatement: class extends t {
            run() {
                return this.visitor.visitNode(this.node.expression)
            }
        },
        ForOfStatement: class extends t {
            run() {
                this.visitor.visitNode(this.node.left);
                const e = this.visitor.visitNode(this.node.right);
                for (const t of e) {
                    if ("VariableDeclaration" === this.node.left.type && "Identifier" === this.node.left.declarations[0].id.type) this.visitor.scope.set(this.node.left.declarations[0].id.name, t);
                    else if ("VariableDeclaration" === this.node.left.type && "ObjectPattern" === this.node.left.declarations[0].id.type)
                        for (const e of this.node.left.declarations[0].id.properties) "Property" === e.type && "Identifier" === e.value.type && "Identifier" === e.key.type && this.visitor.scope.set(e.value.name, t[e.key.name]);
                    const e = this.visitor.visitNode(this.node.body);
                    if ("$jintr_break_" === e) break;
                    if ("$jintr_continue_" !== e && (e && "ExpressionStatement" !== this.node.body.type)) return e
                }
            }
        },
        ForStatement: class extends t {
            run() {
                this.node.init && this.visitor.visitNode(this.node.init);
                const e = () => !this.node.test || this.visitor.visitNode(this.node.test);
                for (;;) {
                    if (!e()) break;
                    const t = this.visitor.visitNode(this.node.body);
                    if ("$jintr_continue_" !== t) {
                        if ("$jintr_break_" === t) break;
                        if (this.node.update && this.visitor.visitNode(this.node.update), t && "ExpressionStatement" !== this.node.body.type) return t
                    }
                }
            }
        },
        FunctionDeclaration: class extends t {
            run() {
                const {
                    params: e,
                    body: t
                } = this.node, s = this.visitor.visitNode(this.node.id), r = i(s, (i => {
                    let s = 0;
                    for (const t of e) this.visitor.visitNode(t), "Identifier" === t.type ? this.visitor.scope.set(t.name, i[s]) : console.warn("Unhandled param type", t.type), s++;
                    return this.visitor.visitNode(t)
                }));
                this.visitor.scope.set(s, r)
            }
        },
        FunctionExpression: class extends t {
            run() {
                const {
                    params: e,
                    body: t
                } = this.node, s = i("anonymous function", (i => {
                    let s = 0;
                    for (const t of e) this.visitor.visitNode(t), "Identifier" === t.type ? this.visitor.scope.set(t.name, i[s]) : console.warn("Unhandled param type", t.type), s++;
                    return this.visitor.visitNode(t)
                }));
                return s
            }
        },
        Identifier: class extends t {
            run() {
                if (this.visitor.listeners[this.node.name]) {
                    const e = this.visitor.listeners[this.node.name](this.node, this.visitor);
                    if ("__continue_exec" !== e) return e
                }
                return this.visitor.scope.has(this.node.name) ? this.visitor.scope.get(this.node.name) : this.node.name
            }
        },
        IfStatement: class extends t {
            run() {
                return this.visitor.visitNode(this.node.test) ? this.visitor.visitNode(this.node.consequent) : this.node.alternate ? this.visitor.visitNode(this.node.alternate) : void 0
            }
        },
        Literal: class extends t {
            run() {
                return this.node.value
            }
        },
        LogicalExpression: l,
        MemberExpression: class extends t {
            run() {
                const {
                    object: e,
                    property: t,
                    computed: i
                } = this.node, s = this.visitor.visitNode(e), r = i ? this.visitor.visitNode(t) : this.visitor.getName(t);
                if (void 0 !== r || null !== r) {
                    if (this.visitor.listeners[r]) {
                        const e = this.visitor.listeners[r](this.node, this.visitor);
                        if ("__continue_exec" !== e) return e
                    }
                    return s?.[r]
                }
            }
        },
        NewExpression: class extends t {
            run() {
                const e = this.visitor.visitNode(this.node.callee),
                    t = this.node.arguments.map((e => this.visitor.visitNode(e)));
                return t.length ? new e(t) : new e
            }
        },
        ObjectExpression: class extends t {
            run() {
                let e = {};
                for (const t of this.node.properties) {
                    if ("Property" !== t.type) throw new Error(`Unhandled property type: ${t.type}`);
                    e = {
                        ...e,
                        ...this.visitor.visitNode(t)
                    }
                }
                return e
            }
        },
        Property: class extends t {
            constructor() {
                super(...arguments), u.add(this)
            }
            run() {
                switch (this.node.kind) {
                    case "init":
                        return y(this, u, "m", v).call(this);
                    case "get":
                        return y(this, u, "m", f).call(this);
                    case "set":
                        return y(this, u, "m", m).call(this);
                    default:
                        throw new Error(`Unhandled property kind: ${this.node.kind}`)
                }
            }
        },
        ReturnStatement: class extends t {
            run() {
                if (this.node.argument) return this.visitor.visitNode(this.node.argument)
            }
        },
        SequenceExpression: class extends t {
            run() {
                let e;
                for (const t of this.node.expressions) e = this.visitor.visitNode(t);
                return e
            }
        },
        SwitchCase: class extends t {
            run() {
                for (const e of this.node.consequent) {
                    const t = this.visitor.visitNode(e);
                    if ("ContinueStatement" === e.type || "BreakStatement" === e.type) return t
                }
            }
        },
        SwitchStatement: class extends t {
            run() {
                const e = this.visitor.visitNode(this.node.discriminant);
                let t = !1,
                    i = -1,
                    s = 0;
                for (;;) {
                    const r = this.node.cases[s];
                    if (t) {
                        const e = this.visitor.visitNode(r);
                        if ("$jintr_break_" === e) break;
                        if ("$jintr_continue_" === e) return e;
                        if (++s, s >= this.node.cases.length) {
                            s = 0;
                            break
                        }
                    } else {
                        if (t = r && e === this.visitor.visitNode(r.test), void 0 === t && s > this.node.cases.length) break;
                        !r || t || r.test ? r || t || -1 === i ? t || ++s : (t = !0, s = i) : (i = s, s += 1)
                    }
                }
            }
        },
        TemplateLiteral: class extends t {
            run() {
                let e = "";
                for (let t = 0; t < this.node.quasis.length; ++t) {
                    const i = this.node.quasis[t];
                    if ("TemplateElement" !== i.type) throw new Error(`Unhandled quasi type: ${i.type}`);
                    if (null === i.value.cooked) throw new Error(`Invalid template literal: ${i.value.raw}`);
                    if (void 0 !== i.value.cooked && (e += i.value.cooked), !i.tail) {
                        const s = this.node.expressions[t];
                        if (void 0 === s) throw new Error(`Expected expression after: ${i.value}`);
                        e += this.visitor.visitNode(s)
                    }
                }
                return e
            }
        },
        ThisExpression: class extends t {
            run() {
                return this.visitor.scope.get("_this")
            }
        },
        ThrowStatement: class extends t {
            run() {
                throw this.visitor.visitNode(this.node.argument)
            }
        },
        TryStatement: class extends t {
            run() {
                try {
                    return this.visitor.visitNode(this.node.block)
                } catch (e) {
                    if (this.node.handler) return this.node.handler.param && "Identifier" === this.node.handler.param.type && this.visitor.scope.set(this.node.handler.param.name, e), this.visitor.visitNode(this.node.handler.body)
                } finally {
                    this.visitor.visitNode(this.node.finalizer)
                }
            }
        },
        UnaryExpression: N,
        UpdateExpression: class extends t {
            run() {
                switch (this.node.operator) {
                    case "++":
                        if ("MemberExpression" === this.node.argument.type) {
                            return this.visitor.visitNode(this.node.argument.object)[this.visitor.visitNode(this.node.argument.property)]++
                        }
                        if ("Identifier" === this.node.argument.type) {
                            let e = this.visitor.visitNode(this.node.argument);
                            return this.visitor.scope.set(this.node.argument.name, e + 1), this.node.prefix ? ++e : e
                        }
                        break;
                    case "--":
                        if ("MemberExpression" === this.node.argument.type) {
                            return this.visitor.visitNode(this.node.argument.object)[this.visitor.visitNode(this.node.argument.property)]--
                        }
                        if ("Identifier" === this.node.argument.type) {
                            let e = this.visitor.visitNode(this.node.argument);
                            return this.visitor.scope.set(this.node.argument.name, e - 1), this.node.prefix ? --e : e
                        }
                }
            }
        },
        VariableDeclaration: class extends t {
            run() {
                this.node.declarations.forEach((e => {
                    const {
                        id: t,
                        init: i
                    } = e, s = this.visitor.getName(t), r = i ? this.visitor.visitNode(i) : void 0;
                    s && this.visitor.scope.set(s, r), "object" == typeof r && null !== r && this.visitor.scope.set("_this", r)
                }))
            }
        },
        WhileStatement: class extends t {
            run() {
                for (; this.visitor.visitNode(this.node.test);) {
                    const e = this.visitor.visitNode(this.node.body);
                    if ("$jintr_break_" === e) break;
                    if ("$jintr_continue_" !== e && e) return e
                }
            }
        }
    }),
    g = function(e, t, i, s) {
        if ("a" === i && !s) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === i ? s : "a" === i ? s.call(e) : s ? s.value : t.get(e)
    };
class E {
    constructor() {
        w.add(this), this.scope = new Map, this.listeners = {}, this.ast = []
    }
    setAST(e) {
        this.ast = e
    }
    run() {
        let e;
        for (const t of this.ast) e = this.visitNode(t);
        return e
    }
    visitNode(e) {
        if (!e) return null;
        const t = g(this, w, "m", x).call(this, e.type);
        if (t) {
            return new t(e, this).run()
        }
        return null
    }
    getName(e) {
        return "Identifier" === e.type ? e.name : "Literal" === e.type ? e.value : void 0
    }
    on(e, t) {
        this.listeners[e] = t
    }
}
w = new WeakSet, x = function(e) {
    const t = b[e];
    return t || console.warn("[JINTER]:", `JavaScript node "${e}" not implemented!\nIf this is causing unexpected behavior, please report it at https://github.com/LuanRT/Jinter/issues/new`), t
};
var _, j = function(e, t, i, s, r) {
        if ("m" === s) throw new TypeError("Private method is not writable");
        if ("a" === s && !r) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === s ? r.call(e, i) : r ? r.value = i : t.set(e, i), i
    },
    S = function(e, t, i, s) {
        if ("a" === i && !s) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === i ? s : "a" === i ? s.call(e) : s ? s.value : t.get(e)
    };
class k {
    constructor() {
        _.set(this, []), this.visitor = new E, this.scope = this.visitor.scope, this.scope.set("print", (e => console.log(...e))), this.defineObject("console", console), this.defineObject("Math", Math), this.defineObject("String", String), this.defineObject("Number", Number), this.defineObject("Array", Array), this.defineObject("Date", Date)
    }
    defineObject(e, t) {
        this.visitor.on(e, ((e, i) => {
            if ("Identifier" === e.type) return t;
            if ("CallExpression" === e.type && "MemberExpression" === e.callee.type) {
                const s = i.visitNode(e.callee.property),
                    r = e.arguments.map((e => i.visitNode(e))),
                    n = t[s];
                return n ? n.apply(t, r) : "__continue_exec"
            }
            return "__continue_exec"
        }))
    }
    evaluate(e) {
        const t = k.parseScript(e);
        return j(this, _, t.body, "f"), this.visitor.setAST(S(this, _, "f")), this.visitor.run()
    }
    static parseScript(t, i) {
        try {
            return e(t, {
                ecmaVersion: 2020,
                ...i || {}
            })
        } catch (e) {
            const i = e.message.match(/\((\d+):(\d+)\)/);
            if (i) {
                const r = parseInt(i[1], 10),
                    n = parseInt(i[2], 10),
                    o = t.split("\n")[r - 1],
                    a = o ? o.substring(Math.max(0, n - 10), n + 10) : "";
                throw new s(`${e.message.replace(/\(.*\)/,"").trim()} at line ${r}, column ${n}: ${a}`, {
                    errorLine: o
                })
            }
            throw new s(e.message)
        }
    }
}
_ = new WeakMap;
export {
    k as Jinter, b as Nodes, r as Utils, k as
    default
};
//# sourceMappingURL=/sm/7aec0ec91430a8275ba57c2c14ecc2c51b042588f74ddd83ddbafbf30686b667.map
