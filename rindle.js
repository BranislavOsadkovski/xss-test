/*! For license information please see rindle.3d5b30df.js.LICENSE.txt */
( () => {
    "use strict";
    const {entries: e, setPrototypeOf: t, isFrozen: n, getPrototypeOf: o, getOwnPropertyDescriptor: r} = Object;
    let {freeze: i, seal: a, create: l} = Object
      , {apply: c, construct: s} = "undefined" != typeof Reflect && Reflect;
    i || (i = function(e) {
        return e
    }
    ),
    a || (a = function(e) {
        return e
    }
    ),
    c || (c = function(e, t, n) {
        return e.apply(t, n)
    }
    ),
    s || (s = function(e, t) {
        return new e(...t)
    }
    );
    const u = w(Array.prototype.forEach)
      , m = w(Array.prototype.lastIndexOf)
      , p = w(Array.prototype.pop)
      , f = w(Array.prototype.push)
      , d = w(Array.prototype.splice)
      , h = w(String.prototype.toLowerCase)
      , g = w(String.prototype.toString)
      , T = w(String.prototype.match)
      , y = w(String.prototype.replace)
      , E = w(String.prototype.indexOf)
      , A = w(String.prototype.trim)
      , _ = w(Object.prototype.hasOwnProperty)
      , b = w(RegExp.prototype.test)
      , S = (N = TypeError,
    function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return s(N, t)
    }
    );
    var N;
    function w(e) {
        return function(t) {
            t instanceof RegExp && (t.lastIndex = 0);
            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                o[r - 1] = arguments[r];
            return c(e, t, o)
        }
    }
    function R(e, o) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h;
        t && t(e, null);
        let i = o.length;
        for (; i--; ) {
            let t = o[i];
            if ("string" == typeof t) {
                const e = r(t);
                e !== t && (n(o) || (o[i] = e),
                t = e)
            }
            e[t] = !0
        }
        return e
    }
    function v(e) {
        for (let t = 0; t < e.length; t++)
            _(e, t) || (e[t] = null);
        return e
    }
    function L(t) {
        const n = l(null);
        for (const [o,r] of e(t))
            _(t, o) && (Array.isArray(r) ? n[o] = v(r) : r && "object" == typeof r && r.constructor === Object ? n[o] = L(r) : n[o] = r);
        return n
    }
    function O(e, t) {
        for (; null !== e; ) {
            const n = r(e, t);
            if (n) {
                if (n.get)
                    return w(n.get);
                if ("function" == typeof n.value)
                    return w(n.value)
            }
            e = o(e)
        }
        return function() {
            return null
        }
    }
    const D = i(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"])
      , C = i(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"])
      , x = i(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"])
      , k = i(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"])
      , I = i(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"])
      , M = i(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"])
      , U = i(["#text"])
      , z = i(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"])
      , P = i(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"])
      , H = i(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"])
      , F = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"])
      , B = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm)
      , W = a(/<%[\w\W]*|[\w\W]*%>/gm)
      , G = a(/\$\{[\w\W]*/gm)
      , Y = a(/^data-[\-\w.\u00B7-\uFFFF]+$/)
      , j = a(/^aria-[\-\w]+$/)
      , $ = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i)
      , X = a(/^(?:\w+script|data):/i)
      , q = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)
      , K = a(/^html$/i)
      , V = a(/^[a-z][.\w]*(-[.\w]+)+$/i);
    var Z = Object.freeze({
        __proto__: null,
        ARIA_ATTR: j,
        ATTR_WHITESPACE: q,
        CUSTOM_ELEMENT: V,
        DATA_ATTR: Y,
        DOCTYPE_NAME: K,
        ERB_EXPR: W,
        IS_ALLOWED_URI: $,
        IS_SCRIPT_OR_DATA: X,
        MUSTACHE_EXPR: B,
        TMPLIT_EXPR: G
    });
    const J = function() {
        return "undefined" == typeof window ? null : window
    };
    var Q = function t() {
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J();
        const o = e => t(e);
        if (o.version = "3.2.6",
        o.removed = [],
        !n || !n.document || 9 !== n.document.nodeType || !n.Element)
            return o.isSupported = !1,
            o;
        let {document: r} = n;
        const a = r
          , c = a.currentScript
          , {DocumentFragment: s, HTMLTemplateElement: N, Node: w, Element: v, NodeFilter: B, NamedNodeMap: W=n.NamedNodeMap || n.MozNamedAttrMap, HTMLFormElement: G, DOMParser: Y, trustedTypes: j} = n
          , X = v.prototype
          , q = O(X, "cloneNode")
          , V = O(X, "remove")
          , Q = O(X, "nextSibling")
          , ee = O(X, "childNodes")
          , te = O(X, "parentNode");
        if ("function" == typeof N) {
            const e = r.createElement("template");
            e.content && e.content.ownerDocument && (r = e.content.ownerDocument)
        }
        let ne, oe = "";
        const {implementation: re, createNodeIterator: ie, createDocumentFragment: ae, getElementsByTagName: le} = r
          , {importNode: ce} = a;
        let se = {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: []
        };
        o.isSupported = "function" == typeof e && "function" == typeof te && re && void 0 !== re.createHTMLDocument;
        const {MUSTACHE_EXPR: ue, ERB_EXPR: me, TMPLIT_EXPR: pe, DATA_ATTR: fe, ARIA_ATTR: de, IS_SCRIPT_OR_DATA: he, ATTR_WHITESPACE: ge, CUSTOM_ELEMENT: Te} = Z;
        let {IS_ALLOWED_URI: ye} = Z
          , Ee = null;
        const Ae = R({}, [...D, ...C, ...x, ...I, ...U]);
        let _e = null;
        const be = R({}, [...z, ...P, ...H, ...F]);
        let Se = Object.seal(l(null, {
            tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
            }
        }))
          , Ne = null
          , we = null
          , Re = !0
          , ve = !0
          , Le = !1
          , Oe = !0
          , De = !1
          , Ce = !0
          , xe = !1
          , ke = !1
          , Ie = !1
          , Me = !1
          , Ue = !1
          , ze = !1
          , Pe = !0
          , He = !1
          , Fe = !0
          , Be = !1
          , We = {}
          , Ge = null;
        const Ye = R({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
        let je = null;
        const $e = R({}, ["audio", "video", "img", "source", "image", "track"]);
        let Xe = null;
        const qe = R({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"])
          , Ke = "http://www.w3.org/1998/Math/MathML"
          , Ve = "http://www.w3.org/2000/svg"
          , Ze = "http://www.w3.org/1999/xhtml";
        let Je = Ze
          , Qe = !1
          , et = null;
        const tt = R({}, [Ke, Ve, Ze], g);
        let nt = R({}, ["mi", "mo", "mn", "ms", "mtext"])
          , ot = R({}, ["annotation-xml"]);
        const rt = R({}, ["title", "style", "font", "a", "script"]);
        let it = null;
        const at = ["application/xhtml+xml", "text/html"];
        let lt = null
          , ct = null;
        const st = r.createElement("form")
          , ut = function(e) {
            return e instanceof RegExp || e instanceof Function
        }
          , mt = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!ct || ct !== e) {
                if (e && "object" == typeof e || (e = {}),
                e = L(e),
                it = -1 === at.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE,
                lt = "application/xhtml+xml" === it ? g : h,
                Ee = _(e, "ALLOWED_TAGS") ? R({}, e.ALLOWED_TAGS, lt) : Ae,
                _e = _(e, "ALLOWED_ATTR") ? R({}, e.ALLOWED_ATTR, lt) : be,
                et = _(e, "ALLOWED_NAMESPACES") ? R({}, e.ALLOWED_NAMESPACES, g) : tt,
                Xe = _(e, "ADD_URI_SAFE_ATTR") ? R(L(qe), e.ADD_URI_SAFE_ATTR, lt) : qe,
                je = _(e, "ADD_DATA_URI_TAGS") ? R(L($e), e.ADD_DATA_URI_TAGS, lt) : $e,
                Ge = _(e, "FORBID_CONTENTS") ? R({}, e.FORBID_CONTENTS, lt) : Ye,
                Ne = _(e, "FORBID_TAGS") ? R({}, e.FORBID_TAGS, lt) : L({}),
                we = _(e, "FORBID_ATTR") ? R({}, e.FORBID_ATTR, lt) : L({}),
                We = !!_(e, "USE_PROFILES") && e.USE_PROFILES,
                Re = !1 !== e.ALLOW_ARIA_ATTR,
                ve = !1 !== e.ALLOW_DATA_ATTR,
                Le = e.ALLOW_UNKNOWN_PROTOCOLS || !1,
                Oe = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR,
                De = e.SAFE_FOR_TEMPLATES || !1,
                Ce = !1 !== e.SAFE_FOR_XML,
                xe = e.WHOLE_DOCUMENT || !1,
                Me = e.RETURN_DOM || !1,
                Ue = e.RETURN_DOM_FRAGMENT || !1,
                ze = e.RETURN_TRUSTED_TYPE || !1,
                Ie = e.FORCE_BODY || !1,
                Pe = !1 !== e.SANITIZE_DOM,
                He = e.SANITIZE_NAMED_PROPS || !1,
                Fe = !1 !== e.KEEP_CONTENT,
                Be = e.IN_PLACE || !1,
                ye = e.ALLOWED_URI_REGEXP || $,
                Je = e.NAMESPACE || Ze,
                nt = e.MATHML_TEXT_INTEGRATION_POINTS || nt,
                ot = e.HTML_INTEGRATION_POINTS || ot,
                Se = e.CUSTOM_ELEMENT_HANDLING || {},
                e.CUSTOM_ELEMENT_HANDLING && ut(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Se.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                e.CUSTOM_ELEMENT_HANDLING && ut(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Se.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Se.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                De && (ve = !1),
                Ue && (Me = !0),
                We && (Ee = R({}, U),
                _e = [],
                !0 === We.html && (R(Ee, D),
                R(_e, z)),
                !0 === We.svg && (R(Ee, C),
                R(_e, P),
                R(_e, F)),
                !0 === We.svgFilters && (R(Ee, x),
                R(_e, P),
                R(_e, F)),
                !0 === We.mathMl && (R(Ee, I),
                R(_e, H),
                R(_e, F))),
                e.ADD_TAGS && (Ee === Ae && (Ee = L(Ee)),
                R(Ee, e.ADD_TAGS, lt)),
                e.ADD_ATTR && (_e === be && (_e = L(_e)),
                R(_e, e.ADD_ATTR, lt)),
                e.ADD_URI_SAFE_ATTR && R(Xe, e.ADD_URI_SAFE_ATTR, lt),
                e.FORBID_CONTENTS && (Ge === Ye && (Ge = L(Ge)),
                R(Ge, e.FORBID_CONTENTS, lt)),
                Fe && (Ee["#text"] = !0),
                xe && R(Ee, ["html", "head", "body"]),
                Ee.table && (R(Ee, ["tbody"]),
                delete Ne.tbody),
                e.TRUSTED_TYPES_POLICY) {
                    if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                        throw S('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                    if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                        throw S('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                    ne = e.TRUSTED_TYPES_POLICY,
                    oe = ne.createHTML("")
                } else
                    void 0 === ne && (ne = function(e, t) {
                        if ("object" != typeof e || "function" != typeof e.createPolicy)
                            return null;
                        let n = null;
                        const o = "data-tt-policy-suffix";
                        t && t.hasAttribute(o) && (n = t.getAttribute(o));
                        const r = "dompurify" + (n ? "#" + n : "");
                        try {
                            return e.createPolicy(r, {
                                createHTML: e => e,
                                createScriptURL: e => e
                            })
                        } catch (e) {
                            return console.warn("TrustedTypes policy " + r + " could not be created."),
                            null
                        }
                    }(j, c)),
                    null !== ne && "string" == typeof oe && (oe = ne.createHTML(""));
                i && i(e),
                ct = e
            }
        }
          , pt = R({}, [...C, ...x, ...k])
          , ft = R({}, [...I, ...M])
          , dt = function(e) {
            f(o.removed, {
                element: e
            });
            try {
                te(e).removeChild(e)
            } catch (t) {
                V(e)
            }
        }
          , ht = function(e, t) {
            try {
                f(o.removed, {
                    attribute: t.getAttributeNode(e),
                    from: t
                })
            } catch (e) {
                f(o.removed, {
                    attribute: null,
                    from: t
                })
            }
            if (t.removeAttribute(e),
            "is" === e)
                if (Me || Ue)
                    try {
                        dt(t)
                    } catch (e) {}
                else
                    try {
                        t.setAttribute(e, "")
                    } catch (e) {}
        }
          , gt = function(e) {
            let t = null
              , n = null;
            if (Ie)
                e = "<remove></remove>" + e;
            else {
                const t = T(e, /^[\r\n\t ]+/);
                n = t && t[0]
            }
            "application/xhtml+xml" === it && Je === Ze && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
            const o = ne ? ne.createHTML(e) : e;
            if (Je === Ze)
                try {
                    t = (new Y).parseFromString(o, it)
                } catch (e) {}
            if (!t || !t.documentElement) {
                t = re.createDocument(Je, "template", null);
                try {
                    t.documentElement.innerHTML = Qe ? oe : o
                } catch (e) {}
            }
            const i = t.body || t.documentElement;
            return e && n && i.insertBefore(r.createTextNode(n), i.childNodes[0] || null),
            Je === Ze ? le.call(t, xe ? "html" : "body")[0] : xe ? t.documentElement : i
        }
          , Tt = function(e) {
            return ie.call(e.ownerDocument || e, e, B.SHOW_ELEMENT | B.SHOW_COMMENT | B.SHOW_TEXT | B.SHOW_PROCESSING_INSTRUCTION | B.SHOW_CDATA_SECTION, null)
        }
          , yt = function(e) {
            return e instanceof G && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof W) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
        }
          , Et = function(e) {
            return "function" == typeof w && e instanceof w
        };
        function At(e, t, n) {
            u(e, e => {
                e.call(o, t, n, ct)
            }
            )
        }
        const _t = function(e) {
            let t = null;
            if (At(se.beforeSanitizeElements, e, null),
            yt(e))
                return dt(e),
                !0;
            const n = lt(e.nodeName);
            if (At(se.uponSanitizeElement, e, {
                tagName: n,
                allowedTags: Ee
            }),
            Ce && e.hasChildNodes() && !Et(e.firstElementChild) && b(/<[/\w!]/g, e.innerHTML) && b(/<[/\w!]/g, e.textContent))
                return dt(e),
                !0;
            if (7 === e.nodeType)
                return dt(e),
                !0;
            if (Ce && 8 === e.nodeType && b(/<[/\w]/g, e.data))
                return dt(e),
                !0;
            if (!Ee[n] || Ne[n]) {
                if (!Ne[n] && St(n)) {
                    if (Se.tagNameCheck instanceof RegExp && b(Se.tagNameCheck, n))
                        return !1;
                    if (Se.tagNameCheck instanceof Function && Se.tagNameCheck(n))
                        return !1
                }
                if (Fe && !Ge[n]) {
                    const t = te(e) || e.parentNode
                      , n = ee(e) || e.childNodes;
                    if (n && t)
                        for (let o = n.length - 1; o >= 0; --o) {
                            const r = q(n[o], !0);
                            r.__removalCount = (e.__removalCount || 0) + 1,
                            t.insertBefore(r, Q(e))
                        }
                }
                return dt(e),
                !0
            }
            return e instanceof v && !function(e) {
                let t = te(e);
                t && t.tagName || (t = {
                    namespaceURI: Je,
                    tagName: "template"
                });
                const n = h(e.tagName)
                  , o = h(t.tagName);
                return !!et[e.namespaceURI] && (e.namespaceURI === Ve ? t.namespaceURI === Ze ? "svg" === n : t.namespaceURI === Ke ? "svg" === n && ("annotation-xml" === o || nt[o]) : Boolean(pt[n]) : e.namespaceURI === Ke ? t.namespaceURI === Ze ? "math" === n : t.namespaceURI === Ve ? "math" === n && ot[o] : Boolean(ft[n]) : e.namespaceURI === Ze ? !(t.namespaceURI === Ve && !ot[o]) && !(t.namespaceURI === Ke && !nt[o]) && !ft[n] && (rt[n] || !pt[n]) : !("application/xhtml+xml" !== it || !et[e.namespaceURI]))
            }(e) ? (dt(e),
            !0) : "noscript" !== n && "noembed" !== n && "noframes" !== n || !b(/<\/no(script|embed|frames)/i, e.innerHTML) ? (De && 3 === e.nodeType && (t = e.textContent,
            u([ue, me, pe], e => {
                t = y(t, e, " ")
            }
            ),
            e.textContent !== t && (f(o.removed, {
                element: e.cloneNode()
            }),
            e.textContent = t)),
            At(se.afterSanitizeElements, e, null),
            !1) : (dt(e),
            !0)
        }
          , bt = function(e, t, n) {
            if (Pe && ("id" === t || "name" === t) && (n in r || n in st))
                return !1;
            if (ve && !we[t] && b(fe, t))
                ;
            else if (Re && b(de, t))
                ;
            else if (!_e[t] || we[t]) {
                if (!(St(e) && (Se.tagNameCheck instanceof RegExp && b(Se.tagNameCheck, e) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(e)) && (Se.attributeNameCheck instanceof RegExp && b(Se.attributeNameCheck, t) || Se.attributeNameCheck instanceof Function && Se.attributeNameCheck(t)) || "is" === t && Se.allowCustomizedBuiltInElements && (Se.tagNameCheck instanceof RegExp && b(Se.tagNameCheck, n) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(n))))
                    return !1
            } else if (Xe[t])
                ;
            else if (b(ye, y(n, ge, "")))
                ;
            else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== E(n, "data:") || !je[e])
                if (Le && !b(he, y(n, ge, "")))
                    ;
                else if (n)
                    return !1;
            return !0
        }
          , St = function(e) {
            return "annotation-xml" !== e && T(e, Te)
        }
          , Nt = function(e) {
            At(se.beforeSanitizeAttributes, e, null);
            const {attributes: t} = e;
            if (!t || yt(e))
                return;
            const n = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: _e,
                forceKeepAttr: void 0
            };
            let r = t.length;
            for (; r--; ) {
                const i = t[r]
                  , {name: a, namespaceURI: l, value: c} = i
                  , s = lt(a)
                  , m = c;
                let f = "value" === a ? m : A(m);
                if (n.attrName = s,
                n.attrValue = f,
                n.keepAttr = !0,
                n.forceKeepAttr = void 0,
                At(se.uponSanitizeAttribute, e, n),
                f = n.attrValue,
                !He || "id" !== s && "name" !== s || (ht(a, e),
                f = "user-content-" + f),
                Ce && b(/((--!?|])>)|<\/(style|title)/i, f)) {
                    ht(a, e);
                    continue
                }
                if (n.forceKeepAttr)
                    continue;
                if (!n.keepAttr) {
                    ht(a, e);
                    continue
                }
                if (!Oe && b(/\/>/i, f)) {
                    ht(a, e);
                    continue
                }
                De && u([ue, me, pe], e => {
                    f = y(f, e, " ")
                }
                );
                const d = lt(e.nodeName);
                if (bt(d, s, f)) {
                    if (ne && "object" == typeof j && "function" == typeof j.getAttributeType)
                        if (l)
                            ;
                        else
                            switch (j.getAttributeType(d, s)) {
                            case "TrustedHTML":
                                f = ne.createHTML(f);
                                break;
                            case "TrustedScriptURL":
                                f = ne.createScriptURL(f)
                            }
                    if (f !== m)
                        try {
                            l ? e.setAttributeNS(l, a, f) : e.setAttribute(a, f),
                            yt(e) ? dt(e) : p(o.removed)
                        } catch (t) {
                            ht(a, e)
                        }
                } else
                    ht(a, e)
            }
            At(se.afterSanitizeAttributes, e, null)
        }
          , wt = function e(t) {
            let n = null;
            const o = Tt(t);
            for (At(se.beforeSanitizeShadowDOM, t, null); n = o.nextNode(); )
                At(se.uponSanitizeShadowNode, n, null),
                _t(n),
                Nt(n),
                n.content instanceof s && e(n.content);
            At(se.afterSanitizeShadowDOM, t, null)
        };
        return o.sanitize = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = null
              , r = null
              , i = null
              , l = null;
            if (Qe = !e,
            Qe && (e = "\x3c!--\x3e"),
            "string" != typeof e && !Et(e)) {
                if ("function" != typeof e.toString)
                    throw S("toString is not a function");
                if ("string" != typeof (e = e.toString()))
                    throw S("dirty is not a string, aborting")
            }
            if (!o.isSupported)
                return e;
            if (ke || mt(t),
            o.removed = [],
            "string" == typeof e && (Be = !1),
            Be) {
                if (e.nodeName) {
                    const t = lt(e.nodeName);
                    if (!Ee[t] || Ne[t])
                        throw S("root node is forbidden and cannot be sanitized in-place")
                }
            } else if (e instanceof w)
                n = gt("\x3c!----\x3e"),
                r = n.ownerDocument.importNode(e, !0),
                1 === r.nodeType && "BODY" === r.nodeName || "HTML" === r.nodeName ? n = r : n.appendChild(r);
            else {
                if (!Me && !De && !xe && -1 === e.indexOf("<"))
                    return ne && ze ? ne.createHTML(e) : e;
                if (n = gt(e),
                !n)
                    return Me ? null : ze ? oe : ""
            }
            n && Ie && dt(n.firstChild);
            const c = Tt(Be ? e : n);
            for (; i = c.nextNode(); )
                _t(i),
                Nt(i),
                i.content instanceof s && wt(i.content);
            if (Be)
                return e;
            if (Me) {
                if (Ue)
                    for (l = ae.call(n.ownerDocument); n.firstChild; )
                        l.appendChild(n.firstChild);
                else
                    l = n;
                return (_e.shadowroot || _e.shadowrootmode) && (l = ce.call(a, l, !0)),
                l
            }
            let m = xe ? n.outerHTML : n.innerHTML;
            return xe && Ee["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && b(K, n.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + m),
            De && u([ue, me, pe], e => {
                m = y(m, e, " ")
            }
            ),
            ne && ze ? ne.createHTML(m) : m
        }
        ,
        o.setConfig = function() {
            mt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
            ke = !0
        }
        ,
        o.clearConfig = function() {
            ct = null,
            ke = !1
        }
        ,
        o.isValidAttribute = function(e, t, n) {
            ct || mt({});
            const o = lt(e)
              , r = lt(t);
            return bt(o, r, n)
        }
        ,
        o.addHook = function(e, t) {
            "function" == typeof t && f(se[e], t)
        }
        ,
        o.removeHook = function(e, t) {
            if (void 0 !== t) {
                const n = m(se[e], t);
                return -1 === n ? void 0 : d(se[e], n, 1)[0]
            }
            return p(se[e])
        }
        ,
        o.removeHooks = function(e) {
            se[e] = []
        }
        ,
        o.removeAllHooks = function() {
            se = {
                afterSanitizeAttributes: [],
                afterSanitizeElements: [],
                afterSanitizeShadowDOM: [],
                beforeSanitizeAttributes: [],
                beforeSanitizeElements: [],
                beforeSanitizeShadowDOM: [],
                uponSanitizeAttribute: [],
                uponSanitizeElement: [],
                uponSanitizeShadowNode: []
            }
        }
        ,
        o
    }();
    const ee = e => new URLSearchParams(window.location.search.substring(1)).getAll(e)
      , te = ["betby.scoreframe.statscore.com", "disir.oddin.gg", "esports.onlive.vn", "gsm-widgets.betstream.betgenius.com", "host.vpplayer.tech", "liveshare.huya.com", "play.afreecatv.com", "player.kick.com", "player.twitch.tv", "smd.sportplayer.io", "www.youtube.com", "dacast.com"]
      , ne = e => `https://www.youtube.com/embed/${new URLSearchParams(new URL(e).search).get("v")}?autoplay=1&mute=1`
      , oe = e => `${e}?autoplay=true&mute=true`
      , re = (e, t) => `${e}&${t.map(e => `parent[]=${e}`).join("&")}`
      , ie = ( () => {
        const [e] = ee("rindleUrl")
          , t = new URL(e);
        if ("https:" !== t.protocol || !te.includes(t.host))
            return;
        const n = ee("parent")
          , o = [{
            match: "youtube.com",
            transform: ne
        },const n = ee("parent")
          , o = [{
            match: "branislavosadkovski.github.io",
            transform: ne
        }, {
            match: "dacast.com",
            transform: oe
        }, {
            match: "host.vpplayer.tech",
            transform: e
        }].find(t => {
            let {match: n} = t;
            return e.includes(n)
        }
        )
          , r = o ? o.transform : re
          , i = "function" == typeof r ? r(e, n) : r;
        return Q.sanitize(i)
    }
    )();
    if (ie) {
        const e = document.createElement("iframe");
        e.id = "rindle-frame",
        e.scrolling = "no",
        e.width = "100%",
        e.allowFullscreen = !0,
        e.height = "100%",
        e.allow = "autoplay",
        e.src = ie,
        document.body.appendChild(e)
    }
}
)();
//# sourceMappingURL=rindle.3d5b30df.js.map

