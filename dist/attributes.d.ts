export interface Attributes {
    accessKey?: string;
    classes?: string[];
    contentEditable?: boolean;
    contextMenu?: string;
    dir?: string;
    draggable?: boolean;
    hidden?: boolean;
    id?: string;
    lang?: string;
    slot?: string;
    spellCheck?: boolean;
    style?: CSSProperties;
    tabIndex?: number;
    title?: string;
    inputMode?: string;
    is?: string;
    radioGroup?: string;
    role?: string;
    about?: string;
    datatype?: string;
    inlist?: any;
    prefix?: string;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    color?: string;
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
    results?: number;
    security?: string;
    unselectable?: boolean;
    accept?: string;
    acceptCharset?: string;
    action?: string;
    allowFullScreen?: boolean;
    allowTransparency?: boolean;
    alt?: string;
    as?: string;
    async?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    autoPlay?: boolean;
    capture?: boolean;
    cellPadding?: number | string;
    cellSpacing?: number | string;
    charSet?: string;
    challenge?: string;
    checked?: boolean;
    cite?: string;
    classID?: string;
    cols?: number;
    colSpan?: number;
    content?: string;
    controls?: boolean;
    coords?: string;
    crossOrigin?: string;
    data?: string;
    dateTime?: string;
    default?: boolean;
    defer?: boolean;
    disabled?: boolean;
    download?: any;
    encType?: string;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    frameBorder?: number | string;
    headers?: string;
    height?: number | string;
    high?: number;
    href?: string;
    hrefLang?: string;
    htmlFor?: string;
    httpEquiv?: string;
    integrity?: string;
    keyParams?: string;
    keyType?: string;
    kind?: string;
    label?: string;
    list?: string;
    loop?: boolean;
    low?: number;
    manifest?: string;
    marginHeight?: number;
    marginWidth?: number;
    max?: number | string;
    maxLength?: number;
    media?: string;
    mediaGroup?: string;
    method?: string;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    muted?: boolean;
    name?: string;
    nonce?: string;
    noValidate?: boolean;
    open?: boolean;
    optimum?: number;
    pattern?: string;
    placeholder?: string;
    playsInline?: boolean;
    poster?: string;
    preload?: string;
    readOnly?: boolean;
    rel?: string;
    required?: boolean;
    reversed?: boolean;
    rows?: number;
    rowSpan?: number;
    sandbox?: string;
    scope?: string;
    scoped?: boolean;
    scrolling?: string;
    seamless?: boolean;
    selected?: boolean;
    shape?: string;
    size?: number;
    sizes?: string;
    span?: number;
    src?: string;
    srcDoc?: string;
    srcLang?: string;
    srcSet?: string;
    start?: number;
    step?: number | string;
    summary?: string;
    target?: string;
    type?: string;
    useMap?: string;
    value?: string | string[] | number;
    width?: number | string;
    wmode?: string;
    wrap?: string;
    "aria-activedescendant"?: string;
    "aria-atomic"?: boolean | "false" | "true";
    "aria-autocomplete"?: "none" | "inline" | "list" | "both";
    "aria-busy"?: boolean | "false" | "true";
    "aria-checked"?: boolean | "false" | "mixed" | "true";
    "aria-colcount"?: number;
    "aria-colindex"?: number;
    "aria-colspan"?: number;
    "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time";
    "aria-describedby"?: string;
    "aria-details"?: string;
    "aria-disabled"?: boolean | "false" | "true";
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup";
    "aria-errormessage"?: string;
    "aria-expanded"?: boolean | "false" | "true";
    "aria-flowto"?: string;
    "aria-grabbed"?: boolean | "false" | "true";
    "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
    "aria-hidden"?: boolean | "false" | "true";
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling";
    "aria-keyshortcuts"?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-level"?: number;
    "aria-live"?: "off" | "assertive" | "polite";
    "aria-modal"?: boolean | "false" | "true";
    "aria-multiline"?: boolean | "false" | "true";
    "aria-multiselectable"?: boolean | "false" | "true";
    "aria-orientation"?: "horizontal" | "vertical";
    "aria-owns"?: string;
    "aria-placeholder"?: string;
    "aria-posinset"?: number;
    "aria-pressed"?: boolean | "false" | "mixed" | "true";
    "aria-readonly"?: boolean | "false" | "true";
    "aria-relevant"?: "additions" | "additions text" | "all" | "removals" | "text";
    "aria-required"?: boolean | "false" | "true";
    "aria-roledescription"?: string;
    "aria-rowcount"?: number;
    "aria-rowindex"?: number;
    "aria-rowspan"?: number;
    "aria-selected"?: boolean | "false" | "true";
    "aria-setsize"?: number;
    "aria-sort"?: "none" | "ascending" | "descending" | "other";
    "aria-valuemax"?: number;
    "aria-valuemin"?: number;
    "aria-valuenow"?: number;
    "aria-valuetext"?: string;
    onCopy?: string;
    onCopyCapture?: string;
    onCut?: string;
    onCutCapture?: string;
    onPaste?: string;
    onPasteCapture?: string;
    onCompositionEnd?: string;
    onCompositionEndCapture?: string;
    onCompositionStart?: string;
    onCompositionStartCapture?: string;
    onCompositionUpdate?: string;
    onCompositionUpdateCapture?: string;
    onFocus?: string;
    onFocusCapture?: string;
    onBlur?: string;
    onBlurCapture?: string;
    onChange?: string;
    onChangeCapture?: string;
    onInput?: string;
    onInputCapture?: string;
    onReset?: string;
    onResetCapture?: string;
    onSubmit?: string;
    onSubmitCapture?: string;
    onInvalid?: string;
    onInvalidCapture?: string;
    onLoad?: string;
    onLoadCapture?: string;
    onError?: string;
    onErrorCapture?: string;
    onKeyDown?: string;
    onKeyDownCapture?: string;
    onKeyPress?: string;
    onKeyPressCapture?: string;
    onKeyUp?: string;
    onKeyUpCapture?: string;
    onAbort?: string;
    onAbortCapture?: string;
    onCanPlay?: string;
    onCanPlayCapture?: string;
    onCanPlayThrough?: string;
    onCanPlayThroughCapture?: string;
    onDurationChange?: string;
    onDurationChangeCapture?: string;
    onEmptied?: string;
    onEmptiedCapture?: string;
    onEncrypted?: string;
    onEncryptedCapture?: string;
    onEnded?: string;
    onEndedCapture?: string;
    onLoadedData?: string;
    onLoadedDataCapture?: string;
    onLoadedMetadata?: string;
    onLoadedMetadataCapture?: string;
    onLoadStart?: string;
    onLoadStartCapture?: string;
    onPause?: string;
    onPauseCapture?: string;
    onPlay?: string;
    onPlayCapture?: string;
    onPlaying?: string;
    onPlayingCapture?: string;
    onProgress?: string;
    onProgressCapture?: string;
    onRateChange?: string;
    onRateChangeCapture?: string;
    onSeeked?: string;
    onSeekedCapture?: string;
    onSeeking?: string;
    onSeekingCapture?: string;
    onStalled?: string;
    onStalledCapture?: string;
    onSuspend?: string;
    onSuspendCapture?: string;
    onTimeUpdate?: string;
    onTimeUpdateCapture?: string;
    onVolumeChange?: string;
    onVolumeChangeCapture?: string;
    onWaiting?: string;
    onWaitingCapture?: string;
    onClick?: string;
    onClickCapture?: string;
    onContextMenu?: string;
    onContextMenuCapture?: string;
    onDoubleClick?: string;
    onDoubleClickCapture?: string;
    onDrag?: string;
    onDragCapture?: string;
    onDragEnd?: string;
    onDragEndCapture?: string;
    onDragEnter?: string;
    onDragEnterCapture?: string;
    onDragExit?: string;
    onDragExitCapture?: string;
    onDragLeave?: string;
    onDragLeaveCapture?: string;
    onDragOver?: string;
    onDragOverCapture?: string;
    onDragStart?: string;
    onDragStartCapture?: string;
    onDrop?: string;
    onDropCapture?: string;
    onMouseDown?: string;
    onMouseDownCapture?: string;
    onMouseEnter?: string;
    onMouseLeave?: string;
    onMouseMove?: string;
    onMouseMoveCapture?: string;
    onMouseOut?: string;
    onMouseOutCapture?: string;
    onMouseOver?: string;
    onMouseOverCapture?: string;
    onMouseUp?: string;
    onMouseUpCapture?: string;
    onSelect?: string;
    onSelectCapture?: string;
    onTouchCancel?: string;
    onTouchCancelCapture?: string;
    onTouchEnd?: string;
    onTouchEndCapture?: string;
    onTouchMove?: string;
    onTouchMoveCapture?: string;
    onTouchStart?: string;
    onTouchStartCapture?: string;
    onScroll?: string;
    onScrollCapture?: string;
    onWheel?: string;
    onWheelCapture?: string;
    onAnimationStart?: string;
    onAnimationStartCapture?: string;
    onAnimationEnd?: string;
    onAnimationEndCapture?: string;
    onAnimationIteration?: string;
    onAnimationIterationCapture?: string;
    onTransitionEnd?: string;
    onTransitionEndCapture?: string;
}
export declare type CSSWideKeyword = "initial" | "inherit" | "unset";
export declare type CSSPercentage = string;
export declare type CSSLength = number | string;
export interface CSSProperties {
    alignContent?: CSSWideKeyword | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
    alignItems?: CSSWideKeyword | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    alignSelf?: CSSWideKeyword | "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    alignmentAdjust?: CSSWideKeyword | any;
    alignmentBaseline?: CSSWideKeyword | any;
    animationDelay?: CSSWideKeyword | any;
    animationDirection?: CSSWideKeyword | any;
    animationIterationCount?: CSSWideKeyword | any;
    animationName?: CSSWideKeyword | any;
    animationPlayState?: CSSWideKeyword | any;
    appearance?: CSSWideKeyword | any;
    backfaceVisibility?: CSSWideKeyword | any;
    background?: CSSWideKeyword | any;
    backgroundAttachment?: CSSWideKeyword | "scroll" | "fixed" | "local";
    backgroundBlendMode?: CSSWideKeyword | any;
    backgroundColor?: CSSWideKeyword | any;
    backgroundComposite?: CSSWideKeyword | any;
    backgroundImage?: CSSWideKeyword | any;
    backgroundOrigin?: CSSWideKeyword | any;
    backgroundPosition?: CSSWideKeyword | any;
    backgroundRepeat?: CSSWideKeyword | any;
    backgroundSize?: CSSWideKeyword | any;
    baselineShift?: CSSWideKeyword | any;
    behavior?: CSSWideKeyword | any;
    border?: CSSWideKeyword | any;
    borderBottom?: CSSWideKeyword | any;
    borderBottomColor?: CSSWideKeyword | any;
    borderBottomLeftRadius?: CSSWideKeyword | CSSLength;
    borderBottomRightRadius?: CSSWideKeyword | CSSLength;
    borderBottomStyle?: CSSWideKeyword | any;
    borderBottomWidth?: CSSWideKeyword | any;
    borderCollapse?: CSSWideKeyword | any;
    borderColor?: CSSWideKeyword | any;
    borderCornerShape?: CSSWideKeyword | any;
    borderImageSource?: CSSWideKeyword | any;
    borderImageWidth?: CSSWideKeyword | any;
    borderLeft?: CSSWideKeyword | any;
    borderLeftColor?: CSSWideKeyword | any;
    borderLeftStyle?: CSSWideKeyword | any;
    borderLeftWidth?: CSSWideKeyword | any;
    borderRadius?: CSSWideKeyword | CSSLength;
    borderRight?: CSSWideKeyword | any;
    borderRightColor?: CSSWideKeyword | any;
    borderRightStyle?: CSSWideKeyword | any;
    borderRightWidth?: CSSWideKeyword | any;
    borderSpacing?: CSSWideKeyword | any;
    borderStyle?: CSSWideKeyword | any;
    borderTop?: CSSWideKeyword | any;
    borderTopColor?: CSSWideKeyword | any;
    borderTopLeftRadius?: CSSWideKeyword | CSSLength;
    borderTopRightRadius?: CSSWideKeyword | CSSLength;
    borderTopStyle?: CSSWideKeyword | any;
    borderTopWidth?: CSSWideKeyword | any;
    borderWidth?: CSSWideKeyword | any;
    bottom?: CSSWideKeyword | any;
    boxAlign?: CSSWideKeyword | any;
    boxDecorationBreak?: CSSWideKeyword | any;
    boxDirection?: CSSWideKeyword | any;
    boxLineProgression?: CSSWideKeyword | any;
    boxLines?: CSSWideKeyword | any;
    boxOrdinalGroup?: CSSWideKeyword | any;
    boxFlex?: CSSWideKeyword | number;
    boxFlexGroup?: CSSWideKeyword | number;
    boxShadow?: CSSWideKeyword | any;
    breakAfter?: CSSWideKeyword | any;
    breakBefore?: CSSWideKeyword | any;
    breakInside?: CSSWideKeyword | any;
    clear?: CSSWideKeyword | any;
    clip?: CSSWideKeyword | any;
    clipRule?: CSSWideKeyword | any;
    color?: CSSWideKeyword | any;
    columnCount?: CSSWideKeyword | number | "auto";
    columnFill?: CSSWideKeyword | any;
    columnGap?: CSSWideKeyword | any;
    columnRule?: CSSWideKeyword | any;
    columnRuleColor?: CSSWideKeyword | any;
    columnRuleWidth?: CSSWideKeyword | any;
    columnSpan?: CSSWideKeyword | any;
    columnWidth?: CSSWideKeyword | any;
    columns?: CSSWideKeyword | any;
    counterIncrement?: CSSWideKeyword | any;
    counterReset?: CSSWideKeyword | any;
    cue?: CSSWideKeyword | any;
    cueAfter?: CSSWideKeyword | any;
    cursor?: CSSWideKeyword | any;
    direction?: CSSWideKeyword | any;
    display?: CSSWideKeyword | any;
    fill?: CSSWideKeyword | any;
    fillOpacity?: CSSWideKeyword | number;
    fillRule?: CSSWideKeyword | any;
    filter?: CSSWideKeyword | any;
    flex?: CSSWideKeyword | number | string;
    flexAlign?: CSSWideKeyword | any;
    flexBasis?: CSSWideKeyword | any;
    flexDirection?: CSSWideKeyword | "row" | "row-reverse" | "column" | "column-reverse";
    flexFlow?: CSSWideKeyword | string;
    flexGrow?: CSSWideKeyword | number;
    flexItemAlign?: CSSWideKeyword | any;
    flexLinePack?: CSSWideKeyword | any;
    flexOrder?: CSSWideKeyword | any;
    flexShrink?: CSSWideKeyword | number;
    flexWrap?: CSSWideKeyword | "nowrap" | "wrap" | "wrap-reverse";
    float?: CSSWideKeyword | any;
    flowFrom?: CSSWideKeyword | any;
    font?: CSSWideKeyword | any;
    fontFamily?: CSSWideKeyword | any;
    fontKerning?: CSSWideKeyword | any;
    fontSize?: CSSWideKeyword | "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large" | "larger" | "smaller" | CSSLength | CSSPercentage;
    fontSizeAdjust?: CSSWideKeyword | "none" | number;
    fontStretch?: CSSWideKeyword | "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded";
    fontStyle?: CSSWideKeyword | "normal" | "italic" | "oblique";
    fontSynthesis?: CSSWideKeyword | any;
    fontVariant?: CSSWideKeyword | any;
    fontVariantAlternates?: CSSWideKeyword | any;
    fontWeight?: CSSWideKeyword | "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    gridArea?: CSSWideKeyword | any;
    gridColumn?: CSSWideKeyword | any;
    gridColumnEnd?: CSSWideKeyword | any;
    gridColumnStart?: CSSWideKeyword | any;
    gridRow?: CSSWideKeyword | any;
    gridRowEnd?: CSSWideKeyword | any;
    gridRowPosition?: CSSWideKeyword | any;
    gridRowSpan?: CSSWideKeyword | any;
    gridTemplateAreas?: CSSWideKeyword | any;
    gridTemplateColumns?: CSSWideKeyword | any;
    gridTemplateRows?: CSSWideKeyword | any;
    height?: CSSWideKeyword | any;
    hyphenateLimitChars?: CSSWideKeyword | any;
    hyphenateLimitLines?: CSSWideKeyword | any;
    hyphenateLimitZone?: CSSWideKeyword | any;
    hyphens?: CSSWideKeyword | any;
    imeMode?: CSSWideKeyword | any;
    justifyContent?: CSSWideKeyword | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch";
    layoutGrid?: CSSWideKeyword | any;
    layoutGridChar?: CSSWideKeyword | any;
    layoutGridLine?: CSSWideKeyword | any;
    layoutGridMode?: CSSWideKeyword | any;
    layoutGridType?: CSSWideKeyword | any;
    left?: CSSWideKeyword | any;
    letterSpacing?: CSSWideKeyword | any;
    lineBreak?: CSSWideKeyword | any;
    lineClamp?: CSSWideKeyword | number;
    lineHeight?: CSSWideKeyword | "normal" | number | CSSLength | CSSPercentage;
    listStyle?: CSSWideKeyword | any;
    listStyleImage?: CSSWideKeyword | any;
    listStylePosition?: CSSWideKeyword | any;
    listStyleType?: CSSWideKeyword | any;
    margin?: CSSWideKeyword | any;
    marginBottom?: CSSWideKeyword | any;
    marginLeft?: CSSWideKeyword | any;
    marginRight?: CSSWideKeyword | any;
    marginTop?: CSSWideKeyword | any;
    marqueeDirection?: CSSWideKeyword | any;
    marqueeStyle?: CSSWideKeyword | any;
    mask?: CSSWideKeyword | any;
    maskBorder?: CSSWideKeyword | any;
    maskBorderRepeat?: CSSWideKeyword | any;
    maskBorderSlice?: CSSWideKeyword | any;
    maskBorderSource?: CSSWideKeyword | any;
    maskBorderWidth?: CSSWideKeyword | any;
    maskClip?: CSSWideKeyword | any;
    maskOrigin?: CSSWideKeyword | any;
    maxFontSize?: CSSWideKeyword | any;
    maxHeight?: CSSWideKeyword | any;
    maxWidth?: CSSWideKeyword | any;
    minHeight?: CSSWideKeyword | any;
    minWidth?: CSSWideKeyword | any;
    opacity?: CSSWideKeyword | number;
    order?: CSSWideKeyword | number;
    orphans?: CSSWideKeyword | number;
    outline?: CSSWideKeyword | any;
    outlineColor?: CSSWideKeyword | any;
    outlineOffset?: CSSWideKeyword | any;
    overflow?: CSSWideKeyword | "auto" | "hidden" | "scroll" | "visible";
    overflowStyle?: CSSWideKeyword | any;
    overflowX?: CSSWideKeyword | "auto" | "hidden" | "scroll" | "visible";
    overflowY?: CSSWideKeyword | "auto" | "hidden" | "scroll" | "visible";
    padding?: CSSWideKeyword | any;
    paddingBottom?: CSSWideKeyword | any;
    paddingLeft?: CSSWideKeyword | any;
    paddingRight?: CSSWideKeyword | any;
    paddingTop?: CSSWideKeyword | any;
    pageBreakAfter?: CSSWideKeyword | any;
    pageBreakBefore?: CSSWideKeyword | any;
    pageBreakInside?: CSSWideKeyword | any;
    pause?: CSSWideKeyword | any;
    pauseAfter?: CSSWideKeyword | any;
    pauseBefore?: CSSWideKeyword | any;
    perspective?: CSSWideKeyword | any;
    perspectiveOrigin?: CSSWideKeyword | any;
    pointerEvents?: CSSWideKeyword | any;
    position?: CSSWideKeyword | "static" | "relative" | "absolute" | "fixed" | "sticky";
    punctuationTrim?: CSSWideKeyword | any;
    quotes?: CSSWideKeyword | any;
    regionFragment?: CSSWideKeyword | any;
    restAfter?: CSSWideKeyword | any;
    restBefore?: CSSWideKeyword | any;
    right?: CSSWideKeyword | any;
    rubyAlign?: CSSWideKeyword | any;
    rubyPosition?: CSSWideKeyword | any;
    shapeImageThreshold?: CSSWideKeyword | any;
    shapeInside?: CSSWideKeyword | any;
    shapeMargin?: CSSWideKeyword | any;
    shapeOutside?: CSSWideKeyword | any;
    speak?: CSSWideKeyword | any;
    speakAs?: CSSWideKeyword | any;
    strokeOpacity?: CSSWideKeyword | number;
    strokeWidth?: CSSWideKeyword | CSSPercentage | CSSLength;
    tabSize?: CSSWideKeyword | any;
    tableLayout?: CSSWideKeyword | any;
    textAlign?: CSSWideKeyword | any;
    textAlignLast?: CSSWideKeyword | any;
    textDecoration?: CSSWideKeyword | any;
    textDecorationColor?: CSSWideKeyword | any;
    textDecorationLine?: CSSWideKeyword | any;
    textDecorationLineThrough?: CSSWideKeyword | any;
    textDecorationNone?: CSSWideKeyword | any;
    textDecorationOverline?: CSSWideKeyword | any;
    textDecorationSkip?: CSSWideKeyword | any;
    textDecorationStyle?: CSSWideKeyword | any;
    textDecorationUnderline?: CSSWideKeyword | any;
    textEmphasis?: CSSWideKeyword | any;
    textEmphasisColor?: CSSWideKeyword | any;
    textEmphasisStyle?: CSSWideKeyword | any;
    textHeight?: CSSWideKeyword | any;
    textIndent?: CSSWideKeyword | any;
    textJustifyTrim?: CSSWideKeyword | any;
    textKashidaSpace?: CSSWideKeyword | any;
    textLineThrough?: CSSWideKeyword | any;
    textLineThroughColor?: CSSWideKeyword | any;
    textLineThroughMode?: CSSWideKeyword | any;
    textLineThroughStyle?: CSSWideKeyword | any;
    textLineThroughWidth?: CSSWideKeyword | any;
    textOverflow?: CSSWideKeyword | any;
    textOverline?: CSSWideKeyword | any;
    textOverlineColor?: CSSWideKeyword | any;
    textOverlineMode?: CSSWideKeyword | any;
    textOverlineStyle?: CSSWideKeyword | any;
    textOverlineWidth?: CSSWideKeyword | any;
    textRendering?: CSSWideKeyword | any;
    textScript?: CSSWideKeyword | any;
    textShadow?: CSSWideKeyword | any;
    textTransform?: CSSWideKeyword | any;
    textUnderlinePosition?: CSSWideKeyword | any;
    textUnderlineStyle?: CSSWideKeyword | any;
    top?: CSSWideKeyword | any;
    touchAction?: CSSWideKeyword | any;
    transform?: CSSWideKeyword | any;
    transformOrigin?: CSSWideKeyword | any;
    transformOriginZ?: CSSWideKeyword | any;
    transformStyle?: CSSWideKeyword | any;
    transition?: CSSWideKeyword | any;
    transitionDelay?: CSSWideKeyword | any;
    transitionDuration?: CSSWideKeyword | any;
    transitionProperty?: CSSWideKeyword | any;
    transitionTimingFunction?: CSSWideKeyword | any;
    unicodeBidi?: CSSWideKeyword | any;
    unicodeRange?: CSSWideKeyword | any;
    userFocus?: CSSWideKeyword | any;
    userInput?: CSSWideKeyword | any;
    verticalAlign?: CSSWideKeyword | any;
    visibility?: CSSWideKeyword | any;
    voiceBalance?: CSSWideKeyword | any;
    voiceDuration?: CSSWideKeyword | any;
    voiceFamily?: CSSWideKeyword | any;
    voicePitch?: CSSWideKeyword | any;
    voiceRange?: CSSWideKeyword | any;
    voiceRate?: CSSWideKeyword | any;
    voiceStress?: CSSWideKeyword | any;
    voiceVolume?: CSSWideKeyword | any;
    whiteSpace?: CSSWideKeyword | any;
    whiteSpaceTreatment?: CSSWideKeyword | any;
    widows?: CSSWideKeyword | number;
    width?: CSSWideKeyword | any;
    wordBreak?: CSSWideKeyword | any;
    wordSpacing?: CSSWideKeyword | any;
    wordWrap?: CSSWideKeyword | any;
    wrapFlow?: CSSWideKeyword | any;
    wrapMargin?: CSSWideKeyword | any;
    wrapOption?: CSSWideKeyword | any;
    writingMode?: CSSWideKeyword | any;
    zIndex?: CSSWideKeyword | "auto" | number;
    zoom?: CSSWideKeyword | "auto" | number | CSSPercentage;
}
export interface AnchorAttributes extends Attributes {
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    rel?: string;
    target?: string;
    type?: string;
    as?: string;
}
export interface AudioAttributes extends MediaAttributes {
}
export interface AreaAttributes extends Attributes {
    alt?: string;
    coords?: string;
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    rel?: string;
    shape?: string;
    target?: string;
}
export interface BaseAttributes extends Attributes {
    href?: string;
    target?: string;
}
export interface BlockquoteAttributes extends Attributes {
    cite?: string;
}
export interface ButtonAttributes extends Attributes {
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    type?: string;
    value?: string | string[] | number;
}
export interface CanvasAttributes extends Attributes {
    height?: number | string;
    width?: number | string;
}
export interface ColAttributes extends Attributes {
    span?: number;
    width?: number | string;
}
export interface ColgroupAttributes extends Attributes {
    span?: number;
}
export interface DetailsAttributes extends Attributes {
    open?: boolean;
}
export interface DelAttributes extends Attributes {
    cite?: string;
    dateTime?: string;
}
export interface DialogAttributes extends Attributes {
    open?: boolean;
}
export interface EmbedAttributes extends Attributes {
    height?: number | string;
    src?: string;
    type?: string;
    width?: number | string;
}
export interface FieldsetAttributes extends Attributes {
    disabled?: boolean;
    form?: string;
    name?: string;
}
export interface FormAttributes extends Attributes {
    acceptCharset?: string;
    action?: string;
    autoComplete?: string;
    encType?: string;
    method?: string;
    name?: string;
    noValidate?: boolean;
    target?: string;
}
export interface HtmlAttributes extends Attributes {
    manifest?: string;
}
export interface IframeAttributes extends Attributes {
    allowFullScreen?: boolean;
    allowTransparency?: boolean;
    frameBorder?: number | string;
    height?: number | string;
    marginHeight?: number;
    marginWidth?: number;
    name?: string;
    sandbox?: string;
    scrolling?: string;
    seamless?: boolean;
    src?: string;
    srcDoc?: string;
    width?: number | string;
}
export interface ImgAttributes extends Attributes {
    alt?: string;
    crossOrigin?: "anonymous" | "use-credentials" | "";
    height?: number | string;
    sizes?: string;
    src?: string;
    srcSet?: string;
    useMap?: string;
    width?: number | string;
}
export interface InsAttributes extends Attributes {
    cite?: string;
    dateTime?: string;
}
export interface InputAttributes extends Attributes {
    accept?: string;
    alt?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    capture?: boolean;
    checked?: boolean;
    crossOrigin?: string;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    height?: number | string;
    list?: string;
    max?: number | string;
    maxLength?: number;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    name?: string;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number | string;
    type?: string;
    value?: string | string[] | number;
    width?: number | string;
    onChange?: string;
}
export interface KeygenAttributes extends Attributes {
    autoFocus?: boolean;
    challenge?: string;
    disabled?: boolean;
    form?: string;
    keyType?: string;
    keyParams?: string;
    name?: string;
}
export interface LabelAttributes extends Attributes {
    form?: string;
    htmlFor?: string;
}
export interface LiAttributes extends Attributes {
    value?: string | string[] | number;
}
export interface LinkAttributes extends Attributes {
    as?: string;
    crossOrigin?: string;
    href?: string;
    hrefLang?: string;
    integrity?: string;
    media?: string;
    rel?: string;
    sizes?: string;
    type?: string;
}
export interface MapAttributes extends Attributes {
    name?: string;
}
export interface MenuAttributes extends Attributes {
    type?: string;
}
export interface MediaAttributes extends Attributes {
    autoPlay?: boolean;
    controls?: boolean;
    controlsList?: string;
    crossOrigin?: string;
    loop?: boolean;
    mediaGroup?: string;
    muted?: boolean;
    playsinline?: boolean;
    preload?: string;
    src?: string;
}
export interface MetaAttributes extends Attributes {
    charSet?: string;
    content?: string;
    httpEquiv?: string;
    name?: string;
}
export interface MeterAttributes extends Attributes {
    form?: string;
    high?: number;
    low?: number;
    max?: number | string;
    min?: number | string;
    optimum?: number;
    value?: string | string[] | number;
}
export interface QuoteAttributes extends Attributes {
    cite?: string;
}
export interface ObjectAttributes extends Attributes {
    classID?: string;
    data?: string;
    form?: string;
    height?: number | string;
    name?: string;
    type?: string;
    useMap?: string;
    width?: number | string;
    wmode?: string;
}
export interface OlAttributes extends Attributes {
    reversed?: boolean;
    start?: number;
}
export interface OptgroupAttributes extends Attributes {
    disabled?: boolean;
    label?: string;
}
export interface OptionAttributes extends Attributes {
    disabled?: boolean;
    label?: string;
    selected?: boolean;
    value?: string | string[] | number;
}
export interface OutputAttributes extends Attributes {
    form?: string;
    htmlFor?: string;
    name?: string;
}
export interface ParamAttributes extends Attributes {
    name?: string;
    value?: string | string[] | number;
}
export interface ProgressAttributes extends Attributes {
    max?: number | string;
    value?: string | string[] | number;
}
export interface ScriptAttributes extends Attributes {
    async?: boolean;
    charSet?: string;
    crossOrigin?: string;
    defer?: boolean;
    integrity?: string;
    nonce?: string;
    src?: string;
    type?: string;
}
export interface SelectAttributes extends Attributes {
    autoFocus?: boolean;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    name?: string;
    required?: boolean;
    size?: number;
    value?: string | string[] | number;
    onChange?: string;
}
export interface SourceAttributes extends Attributes {
    media?: string;
    sizes?: string;
    src?: string;
    srcSet?: string;
    type?: string;
}
export interface StyleAttributes extends Attributes {
    media?: string;
    nonce?: string;
    scoped?: boolean;
    type?: string;
}
export interface TableAttributes extends Attributes {
    cellPadding?: number | string;
    cellSpacing?: number | string;
    summary?: string;
}
export interface TextareaAttributes extends Attributes {
    autoComplete?: string;
    autoFocus?: boolean;
    cols?: number;
    dirName?: string;
    disabled?: boolean;
    form?: string;
    maxLength?: number;
    minLength?: number;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    rows?: number;
    value?: string | string[] | number;
    wrap?: string;
    onChange?: string;
}
export interface TdAttributes extends Attributes {
    colSpan?: number;
    headers?: string;
    rowSpan?: number;
    scope?: string;
}
export interface ThAttributes extends Attributes {
    colSpan?: number;
    headers?: string;
    rowSpan?: number;
    scope?: string;
}
export interface TimeAttributes extends Attributes {
    dateTime?: string;
}
export interface TrackAttributes extends Attributes {
    default?: boolean;
    kind?: string;
    label?: string;
    src?: string;
    srcLang?: string;
}
export interface VideoAttributes extends MediaAttributes {
    height?: number | string;
    playsInline?: boolean;
    poster?: string;
    width?: number | string;
}
