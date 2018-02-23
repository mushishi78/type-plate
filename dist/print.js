"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = require("./node");
var style_1 = require("./style");
var sanitize = require("sanitize-html");
function print(node) {
    if (typeof node === "string") {
        return sanitize(node);
    }
    if (node_1.isUnescaped(node)) {
        return node.unescaped;
    }
    if (node_1.isComment(node)) {
        return "<!--" + node.comment + "-->";
    }
    var children = node.children.length > 0 ? node.children.map(print).join("") : "";
    if (node_1.isDoctype(node)) {
        return "<!DOCTYPE html>" + children;
    }
    var s = "<" + node.tag;
    for (var key in node.attributes) {
        var value = node.attributes[key];
        var printedKey = key;
        if (key === "classes") {
            printedKey = "class";
            value = value.join(" ");
        }
        if (key === "style") {
            var styleObj = value;
            var styleStrs = [];
            for (var styleKey in styleObj) {
                styleStrs.push(style_1.styleNames[styleKey] + ":" + styleObj[styleKey]);
            }
            value = styleStrs.join(";");
        }
        s += " " + printedKey;
        if (typeof value === "boolean")
            continue;
        s += "=";
        if (typeof value === "number") {
            s += value;
        }
        if (typeof value === "string") {
            s += "\"" + value + "\"";
        }
    }
    if (voidTags.indexOf(node.tag) >= 0) {
        s += " />";
    }
    else {
        s += ">" + children + "</" + node.tag + ">";
    }
    return s;
}
exports.print = print;
var voidTags = [
    "area",
    "base",
    "br",
    "col",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "command",
    "keygen",
    "source"
];
