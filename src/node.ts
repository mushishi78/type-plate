import {
  Attributes,
  CSSProperties,
  AnchorAttributes,
  AudioAttributes,
  AreaAttributes,
  BaseAttributes,
  BlockquoteAttributes,
  ButtonAttributes,
  CanvasAttributes,
  ColAttributes,
  ColgroupAttributes,
  DetailsAttributes,
  DelAttributes,
  DialogAttributes,
  EmbedAttributes,
  FieldsetAttributes,
  FormAttributes,
  HtmlAttributes,
  IframeAttributes,
  ImgAttributes,
  InsAttributes,
  InputAttributes,
  KeygenAttributes,
  LabelAttributes,
  LiAttributes,
  LinkAttributes,
  MapAttributes,
  MenuAttributes,
  MetaAttributes,
  MeterAttributes,
  QuoteAttributes,
  ObjectAttributes,
  OlAttributes,
  OptgroupAttributes,
  OptionAttributes,
  OutputAttributes,
  ParamAttributes,
  ProgressAttributes,
  ScriptAttributes,
  SelectAttributes,
  SourceAttributes,
  StyleAttributes,
  TableAttributes,
  TextareaAttributes,
  TdAttributes,
  ThAttributes,
  TimeAttributes,
  TrackAttributes,
  VideoAttributes
} from "./attributes";

export type Node = Element | string | Unescaped | Comment | Doctype;

export interface Element {
  tag: string;
  attributes: Attributes;
  children: Node[];
}

export interface Doctype {
  doctype: true;
  children: Node[];
}

export function isDoctype(node: Node): node is Doctype {
  return node.hasOwnProperty("doctype");
}

export interface Comment {
  comment: string;
}

export function isComment(node: Node): node is Comment {
  return node.hasOwnProperty("comment");
}

export interface Unescaped {
  unescaped: string;
}

export function isUnescaped(node: Node): node is Unescaped {
  return node.hasOwnProperty("unescaped");
}

export function a(attributes: AnchorAttributes = {}) {
  return (...children: Node[]): Element => ({ tag: "a", attributes, children });
}

export function abbr(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "abbr",
    attributes,
    children
  });
}

export function acronym(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "acronym",
    attributes,
    children
  });
}

export function address(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "address",
    attributes,
    children
  });
}

export function applet(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "applet",
    attributes,
    children
  });
}

export function area(attributes: AreaAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "area",
    attributes,
    children
  });
}

export function article(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "article",
    attributes,
    children
  });
}

export function aside(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "aside",
    attributes,
    children
  });
}

export function audio(attributes: AudioAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "audio",
    attributes,
    children
  });
}

export function b(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({ tag: "b", attributes, children });
}

export function base(attributes: BaseAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "base",
    attributes,
    children
  });
}

export function basefont(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "basefont",
    attributes,
    children
  });
}

export function bdi(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "bdi",
    attributes,
    children
  });
}

export function bdo(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "bdo",
    attributes,
    children
  });
}

export function bgsound(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "bgsound",
    attributes,
    children
  });
}

export function big(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "big",
    attributes,
    children
  });
}

export function blink(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "blink",
    attributes,
    children
  });
}

export function blockquote(attributes: BlockquoteAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "blockquote",
    attributes,
    children
  });
}

export function body(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "body",
    attributes,
    children
  });
}

export function br(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "br",
    attributes,
    children
  });
}

export function button(attributes: ButtonAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "button",
    attributes,
    children
  });
}

export function canvas(attributes: CanvasAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "canvas",
    attributes,
    children
  });
}

export function caption(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "caption",
    attributes,
    children
  });
}

export function center(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "center",
    attributes,
    children
  });
}

export function cite(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "cite",
    attributes,
    children
  });
}

export function code(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "code",
    attributes,
    children
  });
}

export function col(attributes: ColAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "col",
    attributes,
    children
  });
}

export function colgroup(attributes: ColgroupAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "colgroup",
    attributes,
    children
  });
}

export function command(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "command",
    attributes,
    children
  });
}

export function comment(comment: string): Comment {
  return { comment };
}

export function content(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "content",
    attributes,
    children
  });
}

export function data(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "data",
    attributes,
    children
  });
}

export function datalist(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "datalist",
    attributes,
    children
  });
}

export function dd(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "dd",
    attributes,
    children
  });
}

export function del(attributes: DelAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "del",
    attributes,
    children
  });
}

export function details(attributes: DetailsAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "details",
    attributes,
    children
  });
}

export function dfn(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "dfn",
    attributes,
    children
  });
}

export function dialog(attributes: DialogAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "dialog",
    attributes,
    children
  });
}

export function dir(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "dir",
    attributes,
    children
  });
}

export function div(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "div",
    attributes,
    children
  });
}

export function dl(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "dl",
    attributes,
    children
  });
}

export function doctype(...children: Node[]): Doctype {
  return { doctype: true, children };
}

export function dt(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "dt",
    attributes,
    children
  });
}

export function element(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "element",
    attributes,
    children
  });
}

export function em(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "em",
    attributes,
    children
  });
}

export function embed(attributes: EmbedAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "embed",
    attributes,
    children
  });
}

export function fieldset(attributes: FieldsetAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "fieldset",
    attributes,
    children
  });
}

export function figcaption(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "figcaption",
    attributes,
    children
  });
}

export function figure(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "figure",
    attributes,
    children
  });
}

export function font(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "font",
    attributes,
    children
  });
}

export function footer(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "footer",
    attributes,
    children
  });
}

export function form(attributes: FormAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "form",
    attributes,
    children
  });
}

export function frame(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "frame",
    attributes,
    children
  });
}

export function frameset(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "frameset",
    attributes,
    children
  });
}

export function h1(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "h1",
    attributes,
    children
  });
}

export function h2(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "h2",
    attributes,
    children
  });
}

export function h3(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "h3",
    attributes,
    children
  });
}

export function h4(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "h4",
    attributes,
    children
  });
}

export function head(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "head",
    attributes,
    children
  });
}

export function header(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "header",
    attributes,
    children
  });
}

export function hgroup(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "hgroup",
    attributes,
    children
  });
}

export function hr(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "hr",
    attributes,
    children
  });
}

export function html(attributes: HtmlAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "html",
    attributes,
    children
  });
}

export function i(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({ tag: "i", attributes, children });
}

export function iframe(attributes: IframeAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "iframe",
    attributes,
    children
  });
}

export function image(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "image",
    attributes,
    children
  });
}

export function img(attributes: ImgAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "img",
    attributes,
    children
  });
}

export function input(attributes: InputAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "input",
    attributes,
    children
  });
}

export function ins(attributes: InsAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "ins",
    attributes,
    children
  });
}

export function isindex(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "isindex",
    attributes,
    children
  });
}

export function kbd(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "kbd",
    attributes,
    children
  });
}

export function keygen(attributes: KeygenAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "keygen",
    attributes,
    children
  });
}

export function label(attributes: LabelAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "label",
    attributes,
    children
  });
}

export function legend(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "legend",
    attributes,
    children
  });
}

export function li(attributes: LiAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "li",
    attributes,
    children
  });
}

export function link(attributes: LinkAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "link",
    attributes,
    children
  });
}

export function listing(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "listing",
    attributes,
    children
  });
}

export function main(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "main",
    attributes,
    children
  });
}

export function map(attributes: MapAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "map",
    attributes,
    children
  });
}

export function mark(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "mark",
    attributes,
    children
  });
}

export function marquee(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "marquee",
    attributes,
    children
  });
}

export function menu(attributes: MenuAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "menu",
    attributes,
    children
  });
}

export function menuitem(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "menuitem",
    attributes,
    children
  });
}

export function meta(attributes: MetaAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "meta",
    attributes,
    children
  });
}

export function meter(attributes: MeterAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "meter",
    attributes,
    children
  });
}

export function multicol(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "multicol",
    attributes,
    children
  });
}

export function nav(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "nav",
    attributes,
    children
  });
}

export function nextid(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "nextid",
    attributes,
    children
  });
}

export function nobr(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "nobr",
    attributes,
    children
  });
}

export function noembed(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "noembed",
    attributes,
    children
  });
}

export function noframes(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "noframes",
    attributes,
    children
  });
}

export function noscript(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "noscript",
    attributes,
    children
  });
}

export function object(attributes: ObjectAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "object",
    attributes,
    children
  });
}

export function ol(attributes: OlAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "ol",
    attributes,
    children
  });
}

export function optgroup(attributes: OptgroupAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "optgroup",
    attributes,
    children
  });
}

export function option(attributes: OptionAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "option",
    attributes,
    children
  });
}

export function output(attributes: OutputAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "output",
    attributes,
    children
  });
}

export function p(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({ tag: "p", attributes, children });
}

export function param(attributes: ParamAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "param",
    attributes,
    children
  });
}

export function picture(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "picture",
    attributes,
    children
  });
}

export function plaintext(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "plaintext",
    attributes,
    children
  });
}

export function pre(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "pre",
    attributes,
    children
  });
}

export function progress(attributes: ProgressAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "progress",
    attributes,
    children
  });
}

export function q(attributes: QuoteAttributes = {}) {
  return (...children: Node[]): Element => ({ tag: "q", attributes, children });
}

export function rp(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "rp",
    attributes,
    children
  });
}

export function rt(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "rt",
    attributes,
    children
  });
}

export function rtc(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "rtc",
    attributes,
    children
  });
}

export function ruby(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "ruby",
    attributes,
    children
  });
}

export function s(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({ tag: "s", attributes, children });
}

export function samp(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "samp",
    attributes,
    children
  });
}

export function script(attributes: ScriptAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "script",
    attributes,
    children
  });
}

export function section(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "section",
    attributes,
    children
  });
}

export function select(attributes: SelectAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "select",
    attributes,
    children
  });
}

export function shadow(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "shadow",
    attributes,
    children
  });
}

export function slot(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "slot",
    attributes,
    children
  });
}

export function small(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "small",
    attributes,
    children
  });
}

export function source(attributes: SourceAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "source",
    attributes,
    children
  });
}

export function spacer(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "spacer",
    attributes,
    children
  });
}

export function span(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "span",
    attributes,
    children
  });
}

export function strike(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "strike",
    attributes,
    children
  });
}

export function strong(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "strong",
    attributes,
    children
  });
}

export function style(attributes: StyleAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "style",
    attributes,
    children
  });
}

export function sub(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "sub",
    attributes,
    children
  });
}

export function summary(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "summary",
    attributes,
    children
  });
}

export function sup(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "sup",
    attributes,
    children
  });
}

export function table(attributes: TableAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "table",
    attributes,
    children
  });
}

export function tbody(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "tbody",
    attributes,
    children
  });
}

export function td(attributes: TdAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "td",
    attributes,
    children
  });
}

export function template(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "template",
    attributes,
    children
  });
}

export function textarea(attributes: TextareaAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "textarea",
    attributes,
    children
  });
}

export function tfoot(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "tfoot",
    attributes,
    children
  });
}

export function th(attributes: ThAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "th",
    attributes,
    children
  });
}

export function thead(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "thead",
    attributes,
    children
  });
}

export function time(attributes: TimeAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "time",
    attributes,
    children
  });
}

export function title(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "title",
    attributes,
    children
  });
}

export function tr(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "tr",
    attributes,
    children
  });
}

export function track(attributes: TrackAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "track",
    attributes,
    children
  });
}

export function tt(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "tt",
    attributes,
    children
  });
}

export function u(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({ tag: "u", attributes, children });
}

export function ul(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "ul",
    attributes,
    children
  });
}

export function var_(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "var",
    attributes,
    children
  });
}

export function video(attributes: VideoAttributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "video",
    attributes,
    children
  });
}

export function wbr(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "wbr",
    attributes,
    children
  });
}

export function xmp(attributes: Attributes = {}) {
  return (...children: Node[]): Element => ({
    tag: "xmp",
    attributes,
    children
  });
}
