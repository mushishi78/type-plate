import { Node, isDoctype, isComment, isUnescaped } from "./node";
import { styleNames } from "./style";
import * as sanitize from "sanitize-html";

export function print(node: Node) {
  if (typeof node === "string") {
    return sanitize(node);
  }
  if (isUnescaped(node)) {
    return node.unescaped;
  }
  if (isComment(node)) {
    return "<!--" + node.comment + "-->";
  }

  const children =
    node.children.length > 0 ? node.children.map(print).join("") : "";

  if (isDoctype(node)) {
    return "<!DOCTYPE html>" + children;
  }

  let s = "<" + node.tag;

  for (const key in node.attributes) {
    let value = node.attributes[key];

    let printedKey = key;
    if (key === "classes") {
      printedKey = "class";
      value = value.join(" ");
    }

    if (key === "style") {
      const styleObj = value;
      const styleStrs = [];

      for (const styleKey in styleObj) {
        styleStrs.push(`${styleNames[styleKey]}:${styleObj[styleKey]}`);
      }

      value = styleStrs.join(";");
    }

    s += " " + printedKey;

    if (typeof value === "boolean") continue;

    s += "=";

    if (typeof value === "number") {
      s += value;
    }

    if (typeof value === "string") {
      s += `"${value}"`;
    }
  }

  if (voidTags.indexOf(node.tag) >= 0) {
    s += " />";
  } else {
    s += `>${children}</${node.tag}>`;
  }

  return s;
}

const voidTags = [
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
