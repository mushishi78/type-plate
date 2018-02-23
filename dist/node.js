"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDoctype(node) {
    return node.hasOwnProperty("doctype");
}
exports.isDoctype = isDoctype;
function isComment(node) {
    return node.hasOwnProperty("comment");
}
exports.isComment = isComment;
function isUnescaped(node) {
    return node.hasOwnProperty("unescaped");
}
exports.isUnescaped = isUnescaped;
function a(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({ tag: "a", attributes: attributes, children: children });
    };
}
exports.a = a;
function abbr(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "abbr",
            attributes: attributes,
            children: children
        });
    };
}
exports.abbr = abbr;
function acronym(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "acronym",
            attributes: attributes,
            children: children
        });
    };
}
exports.acronym = acronym;
function address(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "address",
            attributes: attributes,
            children: children
        });
    };
}
exports.address = address;
function applet(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "applet",
            attributes: attributes,
            children: children
        });
    };
}
exports.applet = applet;
function area(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "area",
            attributes: attributes,
            children: children
        });
    };
}
exports.area = area;
function article(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "article",
            attributes: attributes,
            children: children
        });
    };
}
exports.article = article;
function aside(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "aside",
            attributes: attributes,
            children: children
        });
    };
}
exports.aside = aside;
function audio(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "audio",
            attributes: attributes,
            children: children
        });
    };
}
exports.audio = audio;
function b(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({ tag: "b", attributes: attributes, children: children });
    };
}
exports.b = b;
function base(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "base",
            attributes: attributes,
            children: children
        });
    };
}
exports.base = base;
function basefont(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "basefont",
            attributes: attributes,
            children: children
        });
    };
}
exports.basefont = basefont;
function bdi(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "bdi",
            attributes: attributes,
            children: children
        });
    };
}
exports.bdi = bdi;
function bdo(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "bdo",
            attributes: attributes,
            children: children
        });
    };
}
exports.bdo = bdo;
function bgsound(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "bgsound",
            attributes: attributes,
            children: children
        });
    };
}
exports.bgsound = bgsound;
function big(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "big",
            attributes: attributes,
            children: children
        });
    };
}
exports.big = big;
function blink(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "blink",
            attributes: attributes,
            children: children
        });
    };
}
exports.blink = blink;
function blockquote(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "blockquote",
            attributes: attributes,
            children: children
        });
    };
}
exports.blockquote = blockquote;
function body(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "body",
            attributes: attributes,
            children: children
        });
    };
}
exports.body = body;
function br(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "br",
            attributes: attributes,
            children: children
        });
    };
}
exports.br = br;
function button(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "button",
            attributes: attributes,
            children: children
        });
    };
}
exports.button = button;
function canvas(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "canvas",
            attributes: attributes,
            children: children
        });
    };
}
exports.canvas = canvas;
function caption(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "caption",
            attributes: attributes,
            children: children
        });
    };
}
exports.caption = caption;
function center(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "center",
            attributes: attributes,
            children: children
        });
    };
}
exports.center = center;
function cite(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "cite",
            attributes: attributes,
            children: children
        });
    };
}
exports.cite = cite;
function code(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "code",
            attributes: attributes,
            children: children
        });
    };
}
exports.code = code;
function col(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "col",
            attributes: attributes,
            children: children
        });
    };
}
exports.col = col;
function colgroup(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "colgroup",
            attributes: attributes,
            children: children
        });
    };
}
exports.colgroup = colgroup;
function command(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "command",
            attributes: attributes,
            children: children
        });
    };
}
exports.command = command;
function comment(comment) {
    return { comment: comment };
}
exports.comment = comment;
function content(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "content",
            attributes: attributes,
            children: children
        });
    };
}
exports.content = content;
function data(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "data",
            attributes: attributes,
            children: children
        });
    };
}
exports.data = data;
function datalist(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "datalist",
            attributes: attributes,
            children: children
        });
    };
}
exports.datalist = datalist;
function dd(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "dd",
            attributes: attributes,
            children: children
        });
    };
}
exports.dd = dd;
function del(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "del",
            attributes: attributes,
            children: children
        });
    };
}
exports.del = del;
function details(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "details",
            attributes: attributes,
            children: children
        });
    };
}
exports.details = details;
function dfn(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "dfn",
            attributes: attributes,
            children: children
        });
    };
}
exports.dfn = dfn;
function dialog(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "dialog",
            attributes: attributes,
            children: children
        });
    };
}
exports.dialog = dialog;
function dir(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "dir",
            attributes: attributes,
            children: children
        });
    };
}
exports.dir = dir;
function div(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "div",
            attributes: attributes,
            children: children
        });
    };
}
exports.div = div;
function dl(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "dl",
            attributes: attributes,
            children: children
        });
    };
}
exports.dl = dl;
function doctype() {
    var children = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        children[_i] = arguments[_i];
    }
    return { doctype: true, children: children };
}
exports.doctype = doctype;
function dt(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "dt",
            attributes: attributes,
            children: children
        });
    };
}
exports.dt = dt;
function element(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "element",
            attributes: attributes,
            children: children
        });
    };
}
exports.element = element;
function em(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "em",
            attributes: attributes,
            children: children
        });
    };
}
exports.em = em;
function embed(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "embed",
            attributes: attributes,
            children: children
        });
    };
}
exports.embed = embed;
function fieldset(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "fieldset",
            attributes: attributes,
            children: children
        });
    };
}
exports.fieldset = fieldset;
function figcaption(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "figcaption",
            attributes: attributes,
            children: children
        });
    };
}
exports.figcaption = figcaption;
function figure(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "figure",
            attributes: attributes,
            children: children
        });
    };
}
exports.figure = figure;
function font(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "font",
            attributes: attributes,
            children: children
        });
    };
}
exports.font = font;
function footer(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "footer",
            attributes: attributes,
            children: children
        });
    };
}
exports.footer = footer;
function form(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "form",
            attributes: attributes,
            children: children
        });
    };
}
exports.form = form;
function frame(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "frame",
            attributes: attributes,
            children: children
        });
    };
}
exports.frame = frame;
function frameset(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "frameset",
            attributes: attributes,
            children: children
        });
    };
}
exports.frameset = frameset;
function h1(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "h1",
            attributes: attributes,
            children: children
        });
    };
}
exports.h1 = h1;
function h2(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "h2",
            attributes: attributes,
            children: children
        });
    };
}
exports.h2 = h2;
function h3(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "h3",
            attributes: attributes,
            children: children
        });
    };
}
exports.h3 = h3;
function h4(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "h4",
            attributes: attributes,
            children: children
        });
    };
}
exports.h4 = h4;
function head(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "head",
            attributes: attributes,
            children: children
        });
    };
}
exports.head = head;
function header(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "header",
            attributes: attributes,
            children: children
        });
    };
}
exports.header = header;
function hgroup(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "hgroup",
            attributes: attributes,
            children: children
        });
    };
}
exports.hgroup = hgroup;
function hr(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "hr",
            attributes: attributes,
            children: children
        });
    };
}
exports.hr = hr;
function html(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "html",
            attributes: attributes,
            children: children
        });
    };
}
exports.html = html;
function i(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({ tag: "i", attributes: attributes, children: children });
    };
}
exports.i = i;
function iframe(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "iframe",
            attributes: attributes,
            children: children
        });
    };
}
exports.iframe = iframe;
function image(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "image",
            attributes: attributes,
            children: children
        });
    };
}
exports.image = image;
function img(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "img",
            attributes: attributes,
            children: children
        });
    };
}
exports.img = img;
function input(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "input",
            attributes: attributes,
            children: children
        });
    };
}
exports.input = input;
function ins(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "ins",
            attributes: attributes,
            children: children
        });
    };
}
exports.ins = ins;
function isindex(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "isindex",
            attributes: attributes,
            children: children
        });
    };
}
exports.isindex = isindex;
function kbd(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "kbd",
            attributes: attributes,
            children: children
        });
    };
}
exports.kbd = kbd;
function keygen(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "keygen",
            attributes: attributes,
            children: children
        });
    };
}
exports.keygen = keygen;
function label(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "label",
            attributes: attributes,
            children: children
        });
    };
}
exports.label = label;
function legend(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "legend",
            attributes: attributes,
            children: children
        });
    };
}
exports.legend = legend;
function li(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "li",
            attributes: attributes,
            children: children
        });
    };
}
exports.li = li;
function link(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "link",
            attributes: attributes,
            children: children
        });
    };
}
exports.link = link;
function listing(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "listing",
            attributes: attributes,
            children: children
        });
    };
}
exports.listing = listing;
function main(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "main",
            attributes: attributes,
            children: children
        });
    };
}
exports.main = main;
function map(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "map",
            attributes: attributes,
            children: children
        });
    };
}
exports.map = map;
function mark(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "mark",
            attributes: attributes,
            children: children
        });
    };
}
exports.mark = mark;
function marquee(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "marquee",
            attributes: attributes,
            children: children
        });
    };
}
exports.marquee = marquee;
function menu(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "menu",
            attributes: attributes,
            children: children
        });
    };
}
exports.menu = menu;
function menuitem(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "menuitem",
            attributes: attributes,
            children: children
        });
    };
}
exports.menuitem = menuitem;
function meta(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "meta",
            attributes: attributes,
            children: children
        });
    };
}
exports.meta = meta;
function meter(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "meter",
            attributes: attributes,
            children: children
        });
    };
}
exports.meter = meter;
function multicol(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "multicol",
            attributes: attributes,
            children: children
        });
    };
}
exports.multicol = multicol;
function nav(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "nav",
            attributes: attributes,
            children: children
        });
    };
}
exports.nav = nav;
function nextid(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "nextid",
            attributes: attributes,
            children: children
        });
    };
}
exports.nextid = nextid;
function nobr(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "nobr",
            attributes: attributes,
            children: children
        });
    };
}
exports.nobr = nobr;
function noembed(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "noembed",
            attributes: attributes,
            children: children
        });
    };
}
exports.noembed = noembed;
function noframes(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "noframes",
            attributes: attributes,
            children: children
        });
    };
}
exports.noframes = noframes;
function noscript(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "noscript",
            attributes: attributes,
            children: children
        });
    };
}
exports.noscript = noscript;
function object(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "object",
            attributes: attributes,
            children: children
        });
    };
}
exports.object = object;
function ol(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "ol",
            attributes: attributes,
            children: children
        });
    };
}
exports.ol = ol;
function optgroup(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "optgroup",
            attributes: attributes,
            children: children
        });
    };
}
exports.optgroup = optgroup;
function option(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "option",
            attributes: attributes,
            children: children
        });
    };
}
exports.option = option;
function output(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "output",
            attributes: attributes,
            children: children
        });
    };
}
exports.output = output;
function p(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({ tag: "p", attributes: attributes, children: children });
    };
}
exports.p = p;
function param(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "param",
            attributes: attributes,
            children: children
        });
    };
}
exports.param = param;
function picture(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "picture",
            attributes: attributes,
            children: children
        });
    };
}
exports.picture = picture;
function plaintext(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "plaintext",
            attributes: attributes,
            children: children
        });
    };
}
exports.plaintext = plaintext;
function pre(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "pre",
            attributes: attributes,
            children: children
        });
    };
}
exports.pre = pre;
function progress(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "progress",
            attributes: attributes,
            children: children
        });
    };
}
exports.progress = progress;
function q(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({ tag: "q", attributes: attributes, children: children });
    };
}
exports.q = q;
function rp(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "rp",
            attributes: attributes,
            children: children
        });
    };
}
exports.rp = rp;
function rt(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "rt",
            attributes: attributes,
            children: children
        });
    };
}
exports.rt = rt;
function rtc(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "rtc",
            attributes: attributes,
            children: children
        });
    };
}
exports.rtc = rtc;
function ruby(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "ruby",
            attributes: attributes,
            children: children
        });
    };
}
exports.ruby = ruby;
function s(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({ tag: "s", attributes: attributes, children: children });
    };
}
exports.s = s;
function samp(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "samp",
            attributes: attributes,
            children: children
        });
    };
}
exports.samp = samp;
function script(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "script",
            attributes: attributes,
            children: children
        });
    };
}
exports.script = script;
function section(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "section",
            attributes: attributes,
            children: children
        });
    };
}
exports.section = section;
function select(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "select",
            attributes: attributes,
            children: children
        });
    };
}
exports.select = select;
function shadow(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "shadow",
            attributes: attributes,
            children: children
        });
    };
}
exports.shadow = shadow;
function slot(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "slot",
            attributes: attributes,
            children: children
        });
    };
}
exports.slot = slot;
function small(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "small",
            attributes: attributes,
            children: children
        });
    };
}
exports.small = small;
function source(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "source",
            attributes: attributes,
            children: children
        });
    };
}
exports.source = source;
function spacer(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "spacer",
            attributes: attributes,
            children: children
        });
    };
}
exports.spacer = spacer;
function span(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "span",
            attributes: attributes,
            children: children
        });
    };
}
exports.span = span;
function strike(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "strike",
            attributes: attributes,
            children: children
        });
    };
}
exports.strike = strike;
function strong(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "strong",
            attributes: attributes,
            children: children
        });
    };
}
exports.strong = strong;
function style(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "style",
            attributes: attributes,
            children: children
        });
    };
}
exports.style = style;
function sub(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "sub",
            attributes: attributes,
            children: children
        });
    };
}
exports.sub = sub;
function summary(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "summary",
            attributes: attributes,
            children: children
        });
    };
}
exports.summary = summary;
function sup(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "sup",
            attributes: attributes,
            children: children
        });
    };
}
exports.sup = sup;
function table(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "table",
            attributes: attributes,
            children: children
        });
    };
}
exports.table = table;
function tbody(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "tbody",
            attributes: attributes,
            children: children
        });
    };
}
exports.tbody = tbody;
function td(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "td",
            attributes: attributes,
            children: children
        });
    };
}
exports.td = td;
function template(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "template",
            attributes: attributes,
            children: children
        });
    };
}
exports.template = template;
function textarea(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "textarea",
            attributes: attributes,
            children: children
        });
    };
}
exports.textarea = textarea;
function tfoot(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "tfoot",
            attributes: attributes,
            children: children
        });
    };
}
exports.tfoot = tfoot;
function th(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "th",
            attributes: attributes,
            children: children
        });
    };
}
exports.th = th;
function thead(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "thead",
            attributes: attributes,
            children: children
        });
    };
}
exports.thead = thead;
function time(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "time",
            attributes: attributes,
            children: children
        });
    };
}
exports.time = time;
function title(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "title",
            attributes: attributes,
            children: children
        });
    };
}
exports.title = title;
function tr(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "tr",
            attributes: attributes,
            children: children
        });
    };
}
exports.tr = tr;
function track(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "track",
            attributes: attributes,
            children: children
        });
    };
}
exports.track = track;
function tt(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "tt",
            attributes: attributes,
            children: children
        });
    };
}
exports.tt = tt;
function u(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({ tag: "u", attributes: attributes, children: children });
    };
}
exports.u = u;
function ul(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "ul",
            attributes: attributes,
            children: children
        });
    };
}
exports.ul = ul;
function var_(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "var",
            attributes: attributes,
            children: children
        });
    };
}
exports.var_ = var_;
function video(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "video",
            attributes: attributes,
            children: children
        });
    };
}
exports.video = video;
function wbr(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "wbr",
            attributes: attributes,
            children: children
        });
    };
}
exports.wbr = wbr;
function xmp(attributes) {
    if (attributes === void 0) { attributes = {}; }
    return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return ({
            tag: "xmp",
            attributes: attributes,
            children: children
        });
    };
}
exports.xmp = xmp;
