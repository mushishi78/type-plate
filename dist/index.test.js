"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tap = require("tap");
var $ = require("./index");
var validate = require("html5-validator");
var website = require("./website.test");
tap.test("renders basic page", function (t) {
    var ast = $.doctype($.html()($.head()($.title()("TypePlate example")), $.body()($.div({ classes: ["main"] })("This is pretty neat"))));
    var html = $.print(ast);
    t.equal(html, "<!DOCTYPE html><html>" +
        "<head><title>TypePlate example</title></head>" +
        '<body><div class="main">This is pretty neat</div></body></html>');
    validate(html).then(function (result) {
        t.same(result.messages, []);
        t.end();
    });
});
tap.test("renders void tags", function (t) {
    var ast = $.input({ type: "button" })();
    t.equal($.print(ast), '<input type="button" />');
    t.end();
});
tap.test("renders booleans", function (t) {
    var ast = $.input({ type: "checkbox", checked: true })();
    t.equal($.print(ast), '<input type="checkbox" checked />');
    t.end();
});
tap.test("sanitizes content", function (t) {
    var ast = $.div()('<script>alert("naughty code");</script>');
    t.equal($.print(ast), "<div></div>");
    t.end();
});
tap.test("renders website", function (t) {
    var html = $.print(website.ast);
    validate(html).then(function (result) {
        t.same(result.messages, []);
        t.end();
    });
});
tap.test("translates style from camel case", function (t) {
    var ast = $.div({
        style: {
            backgroundSize: "200px",
            whiteSpace: "wrap"
        }
    })();
    t.equal($.print(ast), '<div style="background-size:200px;white-space:wrap"></div>');
    t.end();
});
