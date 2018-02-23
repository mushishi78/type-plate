import * as tap from "tap";
import * as $ from "./index";
import * as validate from "html5-validator";
import * as website from "./website.test";

tap.test("renders basic page", t => {
  const ast = $.doctype(
    $.html()(
      $.head()($.title()("TypePlate example")),
      $.body()($.div({ classes: ["main"] })("This is pretty neat"))
    )
  );

  const html = $.print(ast);
  t.equal(
    html,
    "<!DOCTYPE html><html>" +
      "<head><title>TypePlate example</title></head>" +
      '<body><div class="main">This is pretty neat</div></body></html>'
  );
  validate(html).then(result => {
    t.same(result.messages, []);
    t.end();
  });
});

tap.test("renders void tags", t => {
  const ast = $.input({ type: "button" })();
  t.equal($.print(ast), '<input type="button" />');
  t.end();
});

tap.test("renders booleans", t => {
  const ast = $.input({ type: "checkbox", checked: true })();
  t.equal($.print(ast), '<input type="checkbox" checked />');
  t.end();
});

tap.test("sanitizes content", t => {
  const ast = $.div()('<script>alert("naughty code");</script>');
  t.equal($.print(ast), "<div></div>");
  t.end();
});

tap.test("renders website", t => {
  const html = $.print(website.ast);
  validate(html).then(result => {
    t.same(result.messages, []);
    t.end();
  });
});

tap.test("translates style from camel case", t => {
  const ast = $.div({
    style: {
      backgroundSize: "200px",
      whiteSpace: "wrap"
    }
  })();

  t.equal(
    $.print(ast),
    '<div style="background-size:200px;white-space:wrap"></div>'
  );
  t.end();
});
