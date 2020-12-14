/**
 * contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc.
 * https://www.w3schools.com/tags/tag_body.asp
 */
export class Body extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    set scripts(arg: void);
    get scripts(): void;
    /********************
     ***** Elements *****
     *******************/
    /** script tags to show before closing the tag */
    _scripts: any;
    /*******************
     ***** Methods *****
     ******************/
    /**
     * contains JavaScript statements or points to an external script file
     * https://www.w3schools.com/tags/tag_script.asp
     * @param {any} contents value or array of values to go inside the script element
     * @param {string} url URL path of a script file
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    script(contents: any, url: string, attributes: object): void;
}
/**
 * insert comments in the source code and are not displayed
 * https://www.w3schools.com/tags/tag_comment.asp
 */
export class Comment {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the comment
     * @param {boolean} blockClose insert new line after comment close
     * @param {boolean} inline all on one line
     */
    constructor(contents: any, blockClose: boolean, inline: boolean);
    set contents(arg: any);
    /** contents [array] */
    get contents(): any;
    set blockClose(arg: boolean);
    /** insert new line after comment close [boolean] */
    get blockClose(): boolean;
    set inline(arg: boolean);
    /**********************
     ***** Properties *****
     *********************/
    /** all on one line */
    get inline(): boolean;
    /**
     * @type {boolean}
     * @private
     */
    private _inline;
    /**
     * @type {boolean}
     * @private
     */
    private _blockClose;
    /**
     * @type any
     * @private
     */
    private _contents;
    /*******************
     ***** Methods *****
     ******************/
    /**
     * add content
     * @param {any} value value or array of values to go inside the HTML comment element
     * @returns {void}
     */
    add(value: any): void;
    /**
     * open the HTML comment
     * @returns {string}
     */
    start(): string;
    /**
     * close the HTML comment
     * @returns {string}
     */
    stop(): string;
    /**
     * convert the object to a string
     * @returns {string}
     */
    toString(): string;
}
/** container for all the head elements, including the title for the document, scripts, styles, meta information, and more */
export class Head extends BootstrapTag {
    /**
     * container for all the head elements, including the title for the document, scripts, styles, meta information, and more
     * https://www.w3schools.com/tags/tag_head.asp
     *
     * @param {any} titleContents contents for the title element
     * @param {any} contents contents for the head element
     * @param {object} attributes attributes for the head element
     */
    constructor(titleContents: any, contents: any, attributes: object);
    set metadatas(arg: any);
    get metadatas(): any;
    set resourceLinks(arg: any);
    get resourceLinks(): any;
    /********************
     ***** Elements *****
     *******************/
    /** metadata tags [array] */
    _metadatas: any;
    /** linked resource documents [array] */
    _resourceLinks: any;
    /** style tags [array] */
    _styles: any;
    /**********************
     ***** Properties *****
     *********************/
    /**
     * character set
     * https://www.w3schools.com/tags/att_meta_charset.asp
     */
    charset: any;
    /*******************
     ***** Methods *****
     ******************/
    /**
     * provides metadata about the HTML document
     * https://www.w3schools.com/tags/tag_meta.asp
     * @param {any} name name for the metadata element
     * @param {any} content value for the metadata element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    metadata(name: any, content: any, attributes: object): void;
    /**
     * link between a document and an external resource
     * https://www.w3schools.com/tags/tag_link.asp
     * @param {string} url path to the linked file
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    resourceLink(url: string, attributes: object): void;
}
/**
 * link between a document and an external resource
 * https://www.w3schools.com/tags/tag_link.asp
 */
export class ResourceLink extends CrossOriginTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url: any, attributes: object);
    set url(arg: any);
    get url(): any;
    set rel(arg: any);
    get rel(): any;
    /**
     * media query that specifies on what device the linked document will be displayed
     * https://www.w3schools.com/tags/att_link_media.asp
     */
    _media: any;
    set media(arg: any);
    get media(): any;
    /**
     * relationship between the current document and the linked document
     * valid values: alternate, author, dns-prefetch, help, icon, license, next, pingback, preconnect, prefetch, preload, prerender, prev, search, stylesheet
     */
    _rel: any;
    /**
     * size of the linked resource (for rel="icon" only)
     * valid values: «height»x«width», any
     */
    _sizes: any;
    set sizes(arg: any);
    get sizes(): any;
    /**
     * media type of the linked document
     * http://www.iana.org/assignments/media-types/
     */
    _type: any;
    set type(arg: any);
    get type(): any;
    /** location of the linked document */
    _url: any;
}
/**
 * document type and the container for all other HTML elements
 * https://www.w3schools.com/tags/tag_html.asp
 */
export class HTML extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} titleContents contents for the title element
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(titleContents: any, contents: any, attributes: object);
    /** HTML head tag */
    head: Head;
    /********************
     ***** Elements *****
     *******************/
    /** HTML body tag */
    body: Body;
    set metadatas(arg: any);
    /** meta tags [array] */
    get metadatas(): any;
    set resourceLinks(arg: any);
    /** linked resource documents [array] */
    get resourceLinks(): any;
    set scripts(arg: void);
    /** script tags to show before closing the tag */
    get scripts(): void;
    set charset(arg: any);
    /**********************
     ***** Properties *****
     *********************/
    /**
     * character set
     * https://www.w3schools.com/tags/att_meta_charset.asp
     */
    get charset(): any;
    /**
     * add Bootstrap and its dependencies
     * @param {string} bootstrapCSS URL for Bootstrap CSS, null means latest from JSDelivr CDN
     * @param {string} bootstrapJS URL for Bootstrap JavaScript, null means latest from JSDelivr CDN
     * @param {boolean} bootstrapAdditionalJS include additional Bootstrap JavaScript for initializing smart modals, popovers, and tooltips
     * @param {string} jqueryJS URL for jQuery JavaScript, null means latest for Bootstrap from jQuery Code CDN (full functionality)
     * @param {string} popperJS URL for jQuery JavaScript, null means latest for Bootstrap from JSDelivr CDN
     * @param {string} fontawesomeCSS URL for FontAwesome CSS, null means latest from FontAwesome (all icons), false means do not include
     */
    bootstrap(bootstrapCSS: string, bootstrapJS: string, bootstrapAdditionalJS: boolean, jqueryJS: string, popperJS: string, fontawesomeCSS: string): void;
    /**
     * provides metadata about the HTML document
     * https://www.w3schools.com/tags/tag_meta.asp
     * @param {any} name name for the metadata element
     * @param {any} content value for the metadata element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    metadata(name: any, content: any, attributes: object): void;
    /**
     * link between a document and an external resource
     * https://www.w3schools.com/tags/tag_link.asp
     * @param {string} url path to the linked file
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    resourceLink(url: string, attributes: object): void;
    /**
     * contains JavaScript statements or points to an external script file
     * https://www.w3schools.com/tags/tag_script.asp
     * @param {any} contents value or array of values to go inside the script element
     * @param {string} url URL path of a script file
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    script(contents: any, url: string, attributes: object): void;
}
/**
 * provides metadata about the HTML document
 * https://www.w3schools.com/tags/tag_meta.asp
 */
export class Metadata extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} name name for the metadata element
     * @param {any} content value for the metadata element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(name: any, content: any, attributes: object);
    set name(arg: any);
    get name(): any;
    set content(arg: any);
    get content(): any;
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * character encoding for the HTML document
     * https://www.w3schools.com/tags/att_meta_charset.asp
     */
    _charset: any;
    set charset(arg: any);
    get charset(): any;
    /** metadata value */
    _content: any;
    /**
     * metadata name
     * valid values: application-name, author, description, generator, keywords, viewport
     */
    _name: any;
    /**
     * provides an HTTP header for the information/value of the content attribute and can be used to simulate an HTTP response header
     * https://www.w3schools.com/tags/att_meta_http_equiv.asp
     */
    _headerEquivalent: any;
    set headerEquivalent(arg: any);
    get headerEquivalent(): any;
    /**********************
     ***** Properties *****
     *********************/
    /** character encoding for the document */
    _contentType: any;
    set contentType(arg: any);
    get contentType(): any;
    /**
     * the preferred style sheet to use (must match the value of the title attribute on a link element in the same document, or it
     * must match the value of the title attribute on a style element in the same document)
     */
    _defaultStyle: any;
    set defaultStyle(arg: any);
    get defaultStyle(): any;
    /** time interval (in seconds) for the document to refresh itself, optionally append the time with "; url=http://www.example.com/" to relocate */
    _refresh: any;
    set refresh(arg: any);
    get refresh(): any;
}
/**
 * contains JavaScript statements or points to an external script file
 * https://www.w3schools.com/tags/tag_script.asp
 */
export class Script extends CrossOriginTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} url URL path of a script file
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, url: string, attributes: object);
    set url(arg: any);
    get url(): any;
    /**********************
     ***** Attributes *****
     *********************/
    /** specifies that the script is executed asynchronously (only for external scripts) [boolean] */
    _async: any;
    set async(arg: any);
    get async(): any;
    /**
     * character encoding used in an external script file
     * https://www.w3schools.com/charsets/default.asp
     */
    _charset: any;
    set charset(arg: any);
    get charset(): any;
    /** specifies that the script is executed when the page has finished parsing (only for external scripts) [boolean] */
    _defer: any;
    set defer(arg: any);
    get defer(): any;
    /**
     * media type
     * http://www.iana.org/assignments/media-types/media-types.xhtml
     */
    _type: any;
    set type(arg: any);
    get type(): any;
    /** location of the external script file (not needed when code is embedded) */
    _url: any;
}
/**
 * contains embedded styling information
 * https://www.w3schools.com/tags/tag_style.asp
 */
export class Style extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * specifies what media/device the media resource is optimized for
     * https://www.w3schools.com/tags/att_style_media.asp
     */
    _media: any;
    set media(arg: any);
    get media(): any;
}
/**
 * defines the title of the document, shows in browser toolbar, favorites, and search engine results
 * https://www.w3schools.com/tags/tag_title.asp
 */
export class Title extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/******************************************************************************************************************
 ************************************************** HTML Content **************************************************
 *****************************************************************************************************************/
/**
 * abbreviation or acronym
 * https://www.w3schools.com/tags/tag_abbr.asp
 */
export class Abbreviation extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} title expands the abbreviation
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, title: string, attributes: object);
}
/**
 * contact information for the author/owner of a document (within <body>) or an article (within <article>)
 * https://www.w3schools.com/tags/tag_address.asp
 */
export class Address extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * standalone piece of content that would make sense if syndicated as a news item
 * https://www.w3schools.com/tags/tag_article.asp
 */
export class Article extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * block of content that is related to the main content around it, but can be removed without reducing the main content meaning
 * https://www.w3schools.com/tags/tag_aside.asp
 */
export class Aside extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * highlight without emphasis (bold)
 * https://www.w3schools.com/tags/tag_b.asp
 */
export class Bold extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * quote blocks of content from another source
 * TIP: use <q> for inline (short) quotations
 * https://www.w3schools.com/tags/tag_blockquote.asp
 */
export class BlockQuote extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** URL source of the quotation */
    _cite: any;
}
/**
 * cited reference (i.e., title of a work)
 * https://www.w3schools.com/tags/tag_cite.asp
 */
export class Cite extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * computer code block (monospaced)
 * https://www.w3schools.com/tags/tag_code.asp
 */
export class Code extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * deleted content (strikethrough)
 * https://www.w3schools.com/tags/tag_del.asp
 */
export class Deleted extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * definition description
 * https://www.w3schools.com/tags/tag_dd.asp
 */
export class DefinitionDescription extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * definition list
 * https://www.w3schools.com/tags/tag_dl.asp
 */
export class DefinitionList extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {object} contents key–value pairs to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: object, attributes: object);
}
/**
 * definition term/name
 * https://www.w3schools.com/tags/tag_dt.asp
 */
export class DefinitionTerm extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * additional details that the user can view or hide on demand
 * https://www.w3schools.com/tags/tag_details.asp
 */
export class Details extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    set summary(arg: any);
    get summary(): any;
    /**********************
     ***** Attributes *****
     *********************/
    /** specifies whether the details should be visible to the user [boolean] */
    _open: any;
    set open(arg: any);
    get open(): any;
    /** fires when the user opens or closes the element */
    _onToggle: any;
    set onToggle(arg: any);
    get onToggle(): any;
    /********************
     ***** Elements *****
     *******************/
    _summary: any;
}
/**
 * generic container for grouping content for styling/visual purposes
 * https://www.w3schools.com/tags/tag_div.asp
 */
export class Division extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * emphasized text (italics)
 * https://www.w3schools.com/tags/tag_em.asp
 */
export class Emphasis extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * self-contained content, like illustrations, diagrams, photos, code listings, etc.
 * TIP: if removed it should not affect the flow of the document
 * https://www.w3schools.com/tags/tag_figure.asp
 */
export class Figure extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {string} url path to the image
     * @param {string} alternateText alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references) – https://webaim.org/techniques/alttext/
     * @param {any} contents value or array of values to go inside the caption element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url: string, alternateText: string, caption: any, attributes: object);
    /**
     * image
     * https://www.w3schools.com/tags/tag_img.asp
     */
    _image: Image;
    set caption(arg: any);
    get caption(): any;
    /********************
     ***** Elements *****
     *******************/
    /**
     * caption for a <figure> element
     * https://www.w3schools.com/tags/tag_figcaption.asp
     */
    _caption: any;
    /**********************
     ***** Properties *****
     *********************/
    /** put the caption element above the figure (default: false) [boolean] */
    _captionOnTop: any;
    set captionOnTop(arg: any);
    get captionOnTop(): any;
}
/**
 * caption for a <figure> element
 * https://www.w3schools.com/tags/tag_figcaption.asp
 */
export class FigureCaption extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * contains information about its containing element: authorship, copyright, contact, sitemap, links to related content, etc.
 * TIP: contact information inside a <footer> element should go inside an <address> tag
 * https://www.w3schools.com/tags/tag_footer.asp
 */
export class Footer extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * thematic group of introductory or navigational aids, typically with a h#, logo/icon, and/or authorship
 * https://www.w3schools.com/tags/tag_header.asp
 */
export class Header extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * primary heading
 * https://www.w3schools.com/tags/tag_hn.asp
 */
export class Heading1 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * secondary heading
 * https://www.w3schools.com/tags/tag_hn.asp
 */
export class Heading2 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * tertiary heading
 * https://www.w3schools.com/tags/tag_hn.asp
 */
export class Heading3 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * quaternary heading
 * https://www.w3schools.com/tags/tag_hn.asp
 */
export class Heading4 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * quinary heading
 * https://www.w3schools.com/tags/tag_hn.asp
 */
export class Heading5 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * senary heading
 * https://www.w3schools.com/tags/tag_hn.asp
 */
export class Heading6 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * marked text (highlighted)
 * https://www.w3schools.com/tags/tag_mark.asp
 */
export class Highlight extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * alternate voice or mood, used to indicate a technical term, foreign phrase, thought, name (italics)
 * TIP: usually use <em>, <strong>, <mark>, <cite>, <dfn> (define) instead
 * https://www.w3schools.com/tags/tag_i.asp
 */
export class Italics extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * FontAwesome icon
 * https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
 */
export class Icon extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} name FontAwesome class name (e.g., "fas fa-camera")
     * @param {any} ariaLabel accessibility string value that labels the current element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(name: any, ariaLabel: any, attributes: object);
}
/**
 * inline frame for embedding another document
 * https://www.w3schools.com/tags/tag_iframe.asp
 */
export class InlineFrame extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {string} url address of the document to embed
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url: string, attributes: object);
    set url(arg: any);
    get url(): any;
    /**********************
     ***** Attributes *****
     *********************/
    /** allow iframe to go into fullscreen mode (i.e., videos) [boolean] */
    _allowFullScreen: any;
    set allowFullScreen(arg: any);
    get allowFullScreen(): any;
    /** height in pixels */
    _height: any;
    set height(arg: any);
    get height(): any;
    /** name of the iframe (can be used to reference the element in a JavaScript, or as the value of the target attribute of an <a> or <form> element, or the formtarget attribute of an <input> or <button> element) */
    _name: any;
    set name(arg: any);
    get name(): any;
    /** enables an extra set of restrictions for the content in the iframe (whitelist); valid values: true (fully restrict) allow-forms, allow-pointer-lock, allow-popups, allow-same-origin, allow-scripts, allow-top-navigation */
    _sandbox: any;
    set sandbox(arg: any);
    get sandbox(): any;
    /** address of the document to embed */
    _url: any;
    /**  width in pixels */
    _width: any;
    set width(arg: any);
    get width(): any;
}
/**
 * image
 * https://www.w3schools.com/tags/tag_img.asp
 */
export class Image extends CrossOriginTag {
    /**
     * create a new instance of the object
     * @param {string} url URL path of an image file
     * @param {string} alternateText alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references) – https://webaim.org/techniques/alttext/
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url: string, alternateText: string, attributes: object);
    set url(arg: any);
    get url(): any;
    set alternateText(arg: any);
    get alternateText(): any;
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references)
     * https://webaim.org/techniques/alttext/
     */
    _alternateText: any;
    /** height in pixels */
    _height: any;
    set height(arg: any);
    get height(): any;
    /** specifies that the image is part of a server-side image-map (an image-map is an image with clickable areas) [boolean] */
    _isMap: any;
    set isMap(arg: any);
    get isMap(): any;
    /** URL to a detailed description of an image */
    _longDescription: any;
    set longDescription(arg: any);
    get longDescription(): any;
    /** URL path of an image file */
    _url: any;
    /** specifies an image as a client-side image-map (an image-map is an image with clickable areas); valid value: hash character ("#") plus the name of the <map> element to use */
    _useMap: any;
    set useMap(arg: any);
    get useMap(): any;
    /** width in pixels */
    _width: any;
    set width(arg: any);
    get width(): any;
}
/**
 * underline (insertion)
 * https://www.w3schools.com/tags/tag_ins.asp
 */
export class Insert extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * horizontal ruler for a thematic break (e.g. a shift of topic)
 * https://www.w3schools.com/tags/tag_hr.asp
 */
export class Line extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(attributes: object);
}
/**
 * line break
 * https://www.w3schools.com/tags/tag_br.asp
 */
export class LineBreak extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(attributes: object);
}
/**
 * hyperlink (anchor)
 * https://www.w3schools.com/tags/tag_a.asp
 */
export class Link extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {string} url URL of the page the link goes to
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url: string, contents: any, attributes: object);
    set url(arg: any);
    get url(): any;
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * specifies that the target will be downloaded when a user clicks on the hyperlink
     * valid values: true, URL
     */
    _download: any;
    set download(arg: any);
    get download(): any;
    /**
     * language code of the text in the linked document
     * https://www.w3schools.com/tags/ref_language_codes.asp
     */
    _linkLanguage: any;
    set linkLanguage(arg: any);
    get linkLanguage(): any;
    /**
     * media query that specifies on what device the linked document will be displayed
     * https://www.w3schools.com/tags/att_link_media.asp
     */
    _media: any;
    set media(arg: any);
    get media(): any;
    /** specifies a list of URLs (separated by spaces) to be notified if the user follows the hyperlink, sending a short HTTP POST request to the specified URL(s) */
    _ping: any;
    set ping(arg: any);
    get ping(): any;
    /**
     * relationship between the current document and the linked document
     * valid values: alternate, author, bookmark, external, help, license, next, nofollow, noreferrer, noopener, prev, search, tag
     */
    _rel: any;
    set rel(arg: any);
    get rel(): any;
    /**
     * specifies which referrer to send
     * valid values: no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, unsafe-url
     */
    _referrerPolicy: any;
    set referrerPolicy(arg: any);
    get referrerPolicy(): any;
    /**
     * specifies where to open the linked document
     * valid values: _blank, _parent, _self, _top, «frame»
     */
    _target: any;
    set target(arg: any);
    get target(): any;
    /**
     * media type of the linked document
     * http://www.iana.org/assignments/media-types/
     */
    _type: any;
    set type(arg: any);
    get type(): any;
    /** URL of the page the link goes to */
    _url: any;
}
/**
 * list of items
 * https://www.w3schools.com/tags/tag_ol.asp
 * https://www.w3schools.com/tags/tag_ul.asp
 */
export class List extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} items items to add to the list
     * @param {boolean} ordered list is ordered (i.e., numbered); default is false (i.e., unordered/bulleted)
     * @param {object} attributes key–value pairs of HTML attributes and other properties for the list
     * @param {any} itemAttributes key–value pairs of HTML attributes and other properties for the list items
     */
    constructor(items: any, ordered: boolean, attributes: object, itemAttributes: any);
    /**********************
     ***** Attributes *****
     *********************/
    /** ordered list should be descending (9, 8, 7, …) [boolean] */
    _reversed: any;
    set reversed(arg: any);
    get reversed(): any;
    /** starting value for ordered lists [number] */
    _startingValue: any;
    set startingValue(arg: any);
    get startingValue(): any;
    /**
     * markers to use for ordered lists
     * valid values: 1, A, a, I, i
     */
    _type: any;
    set type(arg: any);
    get type(): any;
}
/**
 * list item for ordered/unordered lists
 * https://www.w3schools.com/tags/tag_li.asp
 */
export class ListItem extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** value of a list item [number], where the following list items will increment from that number (only for ordered lists) */
    _value: any;
    set value(arg: any);
    get value(): any;
}
/**
 * monospaced and preserves whitespace (pre-formatted)
 * https://www.w3schools.com/tags/tag_pre.asp
 */
export class Monospace extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * major navigation information (i.e., not just a group of links) and other constructs (e.g., search form)
 * https://www.w3schools.com/tags/tag_nav.asp
 */
export class Navigation extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * represents the result of a calculation (like one performed by a script)
 * https://www.w3schools.com/tags/tag_output.asp
 */
export class Output extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** specifies the relationship between the result of the calculation, and the elements used in the calculation; valid value: element ID(s) (space-separated) */
    _for: any;
    set for(arg: any);
    get for(): any;
    /** one or more forms the output belongs to; valid value: form ID(s) (space-separated) */
    _form: any;
    /** element name (for use by calculation trigger code) */
    _name: any;
    set name(arg: any);
    get name(): any;
}
/**
 * paragraph
 * https://www.w3schools.com/tags/tag_p.asp
 */
export class Paragraph extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * short quote (inline, with quotation marks)
 * TIP: use BlockQuote for longer quotations
 * https://www.w3schools.com/tags/tag_q.asp
 */
export class Quote extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * strikethrough (no longer accurate)
 * https://www.w3schools.com/tags/tag_s.asp
 */
export class Strike extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * used to either group different articles into different purposes or subjects, or to define the different sections of a single article
 * https://www.w3schools.com/tags/tag_section.asp
 */
export class Section extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * smaller text (e.g., fine print)
 * https://www.w3schools.com/tags/tag_small.asp
 */
export class Small extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * span for grouping inline elements
 * https://www.w3schools.com/tags/tag_span.asp
 */
export class Span extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * important text (bold)
 * https://www.w3schools.com/tags/tag_strong.asp
 */
export class Strong extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * subscript
 * https://www.w3schools.com/tags/tag_sub.asp
 */
export class Subscript extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * superscript
 * https://www.w3schools.com/tags/tag_sup.asp
 */
export class Superscript extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * visible heading for the <details> element, which can be clicked to view/hide the details
 * https://www.w3schools.com/tags/tag_summary.asp
 */
export class Summary extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * Scalable Vector Graphics (text-based image)
 * https://www.w3schools.com/tags/tag_svg.asp
 * TODO: test themeable
 * TODO: add various methods for SVG elements: https://www.w3schools.com/graphics/svg_intro.asp
 */
export class SVG extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {int} width width in pixels
     * @param {int} height height in pixels
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, width: any, height: any, attributes: object);
    set width(arg: any);
    get width(): any;
    set height(arg: any);
    get height(): any;
    /**********************
     ***** Attributes *****
     *********************/
    /** height in pixels */
    _height: any;
    /** width in pixels */
    _width: any;
}
/**
 * defining instance of a term (i.e., the parent container of this tag must also contain the definition/explanation for this term)
 * TIP: use the ID so it's easily linked to via "#id")
 * https://www.w3schools.com/tags/tag_dfn.asp
 */
export class Term extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * human-readable date/time, optionally with a SQL-like timestamp
 * https://www.w3schools.com/tags/tag_time.asp
 */
export class Time extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** SQL-like timestamp so that browsers can offer to add date reminders through the user's calendar, and search engines can produce smarter search results, etc. */
    _timestamp: any;
    set timestamp(arg: any);
    get timestamp(): any;
}
/**
 * underline
 * https://www.w3schools.com/tags/tag_u.asp
 */
export class Underline extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * tabular data (rows and columns)
 * https://www.w3schools.com/tags/tag_table.asp
 */
export class Table extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {any} caption value or array of values to go inside the HTML caption element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     * @param {object} captionAttributes key–value pairs of HTML attributes and other properties for the table caption
     * @param {object} headerAttributes key–value pairs of HTML attributes and other properties for the table caption
     * @param {object} bodyAttributes key–value pairs of HTML attributes and other properties for the table caption
     * @param {object} footerAttributes key–value pairs of HTML attributes and other properties for the table caption
     */
    constructor(contents: any, caption: any, attributes: object, captionAttributes: object, headerAttributes: object, bodyAttributes: object, footerAttributes: object);
    /** table caption */
    caption: TableCaption;
    /********************
     ***** Elements *****
     *******************/
    /** table body */
    body: TableBody;
}
/**
 * table body
 * https://www.w3schools.com/tags/tag_tbody.asp
 */
export class TableBody extends TableSectionTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * table caption
 * https://www.w3schools.com/tags/tag_caption.asp
 */
export class TableCaption extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * table data cell
 * https://www.w3schools.com/tags/tag_td.asp
 */
export class TableCell extends TableCellTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * table footer
 * https://www.w3schools.com/tags/tag_tfoot.asp
 */
export class TableFooter extends TableSectionTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * table header
 * https://www.w3schools.com/tags/tag_thead.asp
 */
export class TableHeader extends TableSectionTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * table heading for a column or row
 * https://www.w3schools.com/tags/tag_th.asp
 */
export class TableHeading extends TableCellTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** abbreviated version of the content in a header cell; it has no visual effect in ordinary web browsers, but can be used by screen readers */
    _abbreviation: any;
    /**
     * specifies what the header cell is a header for
     * valid values: col, colgroup, row, rowgroup
     */
    _scope: any;
    set scope(arg: any);
    get scope(): any;
}
/**
 * clickable button
 * https://www.w3schools.com/tags/tag_button.asp
 * https://getbootstrap.com/docs/4.5/components/buttons/
 */
export class Button extends FormSubmitTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** active state [boolean] */
    _active: any;
    set active(arg: any);
    get active(): any;
    /** block-level (full-width) [boolean] */
    _block: any;
    set block(arg: any);
    get block(): any;
    /**
     * button size
     * valid values: null (default), sm (small), lg (large)
     */
    _scale: any;
    set scale(arg: any);
    get scale(): any;
    /**
     * type of button
     * valid values: button, reset, submit
     */
    _type: any;
    set type(arg: any);
    get type(): any;
}
/**
 * checkbox (on/off, yes/no, etc.)
 * https://www.w3schools.com/tags/tag_input.asp
 * https://getbootstrap.com/docs/4.5/components/forms/#checkboxes-and-radios
 * https://getbootstrap.com/docs/4.5/components/forms/#checkboxes-and-radios-1
 */
export class Checkbox extends FormToggleElement {
    /**
     * create a new instance of the object
     * @param {any} label value or array of values to go inside the label
     * @param {string} value field value to submit when checked
     * @param {string} name field name to submit when checked
     * @param {boolean} checked element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(label: any, value: string, name: string, checked: boolean, attributes: object);
}
/**
 * dropdown container of options
 * https://www.w3schools.com/tags/tag_select.asp
 * https://getbootstrap.com/docs/4.5/components/forms/#select-menu
 */
export class Dropdown extends DropdownContainerTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} name field name to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, name: string, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** specifies that multiple options can be selected at once [boolean] */
    _multiple: any;
    set multiple(arg: any);
    get multiple(): any;
    /**
     * dropdown size
     * valid values: null (default), sm (small), lg (large)
     */
    _scale: any;
    set scale(arg: any);
    get scale(): any;
    /** number of visible options in a drop-down list [number] */
    _size: any;
    set size(arg: any);
    get size(): any;
}
/**
 * collection of sub-options within a dropdown
 * https://www.w3schools.com/tags/tag_optgroup.asp
 */
export class DropdownGroup extends DropdownContainerTag {
    constructor(contents: any, label: any, attributes: any);
    /**********************
     ***** Attributes *****
     *********************/
    /** label to display */
    _label: any;
}
/**
 * dropdown item
 * https://www.w3schools.com/tags/tag_option.asp
 */
export class DropdownOption extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} value field value to submit when selected
     * @param {boolean} selected element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, value: string, selected: boolean, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** shorter label to display */
    _label: any;
    /** pre-select item when the page loads [boolean] */
    _selected: any;
    set selected(arg: any);
    /** field value to submit when selected */
    _value: any;
    set value(arg: any);
    get value(): any;
}
/**
 * file browser for uploading files
 * NOTE: don't forget to flag the Form with fileUpload = true
 * https://www.w3schools.com/tags/tag_input.asp
 * https://getbootstrap.com/docs/4.5/components/forms/#file-browser
 */
export class FileUploader extends FormTag {
    /**
     * create a new instance of the object
     * @param {any} label value or array of values to go inside the label
     * @param {string} name field name to submit when checked
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(label: any, name: string, attributes: object);
    /** wrapper for holding all the components */
    wrapper: Division;
}
/**
 * form element container
 * https://www.w3schools.com/tags/tag_form.asp
 * https://getbootstrap.com/docs/4.5/components/forms/
 */
export class Form extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** allow auto-complete [boolean] */
    _autoComplete: any;
    set autoComplete(arg: any);
    get autoComplete(): any;
    /**
     * character encoding for the form submission (default is the document's encoding)
     * https://www.w3schools.com/tags/att_meta_charset.asp
     */
    _charset: any;
    set charset(arg: any);
    get charset(): any;
    /** form has a file upload element [boolean] */
    _fileUpload: any;
    set fileUpload(arg: any);
    get fileUpload(): any;
    /** display a series of labels, form controls, and buttons on a single horizontal row [boolean] */
    _inline: any;
    set inline(arg: any);
    get inline(): any;
    /**
     * HTTP method to use when sending form data
     * valid values: get, post
     */
    _method: any;
    set method(arg: any);
    get method(): any;
    /** name for the form; used to reference elements in a JavaScript, or to reference form data after a form is submitted (for $_POST array) */
    _name: any;
    set name(arg: any);
    get name(): any;
    /** form should not be validated when submitted [boolean] */
    _noValidate: any;
    set noValidate(arg: any);
    get noValidate(): any;
    /**
     * specifies where to display the response that is received after submitting the form
     * valid values: _blank, _parent, _self, _top, «frame»
     */
    _target: any;
    set target(arg: any);
    get target(): any;
    /** URL where to send data when the form is submitted */
    _url: any;
    set url(arg: any);
    get url(): any;
    /** fires when a form is submitted */
    _onSubmit: any;
    set onSubmit(arg: any);
    get onSubmit(): any;
}
/**
 * generic input tag
 * https://www.w3schools.com/tags/tag_input.asp
 * https://www.w3schools.com/tags/tag_textarea.asp
 */
export class Input extends FormSubmitTag {
    /**
     * create a new instance of the object
     * @param {string} value field value to submit
     * @param {string} name field name to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(value: string, name: string, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** allow auto-complete [boolean] */
    _autoComplete: any;
    set autoComplete(arg: any);
    get autoComplete(): any;
    /** <datalist> element containing pre-defined options */
    _list: any;
    /** maximum value (number/date) */
    _max: any;
    set max(arg: any);
    get max(): any;
    /** maximum number of characters */
    _maxLength: any;
    set maxLength(arg: any);
    get maxLength(): any;
    /** minimum value (number/date) */
    _min: any;
    set min(arg: any);
    get min(): any;
    /** user can enter more than one value for file (Ctrl/Shift + Select) or email (comma-separated) [boolean] */
    _multiple: any;
    set multiple(arg: any);
    get multiple(): any;
    /** regular expression for validation */
    _pattern: any;
    set pattern(arg: any);
    get pattern(): any;
    /** short hint that describes the expected value */
    _placeholder: any;
    set placeholder(arg: any);
    get placeholder(): any;
    /** remove the default form field styling and preserve the correct margin and padding [boolean] */
    _plainText: any;
    set plainText(arg: any);
    get plainText(): any;
    /** input field is read-only [boolean] */
    _readOnly: any;
    set readOnly(arg: any);
    get readOnly(): any;
    /** width in characters */
    _size: any;
    set size(arg: any);
    get size(): any;
    /**
     * input size
     * valid values: null (default), sm (small), lg (large)
     */
    _scale: any;
    set scale(arg: any);
    get scale(): any;
    /** interval between legal numbers */
    _step: any;
    set step(arg: any);
    get step(): any;
    /** valid values: button, checkbox, color, date, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week */
    _type: any;
    set type(arg: any);
    get type(): any;
    /** field value to submit */
    _value: any;
    set value(arg: any);
    get value(): any;
    /********************************
     ***** Attributes: TextArea *****
     *******************************/
    /** visible width */
    _columns: any;
    set columns(arg: any);
    get columns(): any;
    /** visible number of lines */
    _rows: any;
    set rows(arg: any);
    get rows(): any;
    /**
     * how the text in a text area is to be wrapped when submitted in a form
     * valid values: hard (adds newlines, must have cols defined), soft (not wrapped, default)
     */
    _wrap: any;
    set wrap(arg: any);
    get wrap(): any;
    /**************************************
     ***** Attributes: Checkbox/Radio *****
     *************************************/
    /** for "checkbox"/"radio" types; element should be pre-selected when the page loads [boolean] */
    _checked: any;
    set checked(arg: any);
    get checked(): any;
    /****************************
     ***** Attributes: File *****
     ***************************/
    /**
     * for "file" type
     * valid values: «extension», audio/*, video/*, image/*, «media_type» – http://www.iana.org/assignments/media-types/
     */
    _accept: any;
    set accept(arg: any);
    get accept(): any;
    /*****************************
     ***** Attributes: Image *****
     ****************************/
    /**
     * for "image" type; alternate text (for accessibility and broken links)
     * https://webaim.org/techniques/alttext/
     */
    _alternateText: any;
    set alternateText(arg: any);
    get alternateText(): any;
    /** for "image" type; height in pixels */
    _height: any;
    set height(arg: any);
    get height(): any;
    /** for "image" type; width in pixels */
    _width: any;
    set width(arg: any);
    get width(): any;
}
/**
 * label for a form element
 * https://www.w3schools.com/tags/tag_label.asp
 */
export class Label extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} forID ID of the form element the label is for
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, forID: string, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** specifies the form element a label is bound to; valid value: element ID */
    _for: any;
    set for(arg: any);
    get for(): any;
    /** one or more forms the label belongs to; valid value: form ID(s) (space-separated) */
    _form: any;
}
/**
 * radio button (selecting one in the set de-selects the others)
 * https://www.w3schools.com/tags/tag_input.asp
 * https://getbootstrap.com/docs/4.5/components/forms/#checkboxes-and-radios
 * https://getbootstrap.com/docs/4.5/components/forms/#checkboxes-and-radios-1
 */
export class Radio extends FormToggleElement {
    /**
     * create a new instance of the object
     * @param {any} label value or array of values to go inside the label
     * @param {string} value field value to submit when checked
     * @param {string} name field name to submit when checked
     * @param {boolean} checked element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(label: any, value: string, name: string, checked: boolean, attributes: object);
}
/**
 * single-line or multi-line textbox
 * https://www.w3schools.com/tags/tag_input.asp
 * https://www.w3schools.com/tags/tag_textarea.asp
 */
export class Textbox extends Input {
    /**
     * create a new instance of the object
     * @param {string} value field value to submit
     * @param {string} name field name to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(value: string, name: string, attributes: object);
}
/*********************
 ***** Bootstrap *****
 ********************/
/**
 * form group element–label combo
 * https://getbootstrap.com/docs/4.5/components/forms/#form-groups
 */
export class FormGroup extends Division {
    /**
     * create a new instance of the object
     * @param {any} label  value or array of values to go inside the Label element
     * @param {any} contents value or array of values to go inside the Form Group element
     * @param {object} attributes key–value pairs of HTML attributes and other properties for the Form Group element
     * @param {object} labelAttributes key–value pairs of HTML attributes and other properties for the Label element
     */
    constructor(label: any, contents: any, attributes: object, labelAttributes: object);
}
/***********************************************************************************************************************
 ************************************************** Bootstrap Content **************************************************
 **********************************************************************************************************************/
/**
 * primary opinionated heading
 * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
 */
export class Display1 extends Heading1 {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * secondary opinionated heading
 * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
 */
export class Display2 extends Heading2 {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * tertiary opinionated heading
 * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
 */
export class Display3 extends Heading3 {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * quaternary opinionated heading
 * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
 */
export class Display4 extends Heading4 {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**************************************************************************************************************************
 ************************************************** Bootstrap Components **************************************************
 *************************************************************************************************************************/
/**
 * provides contextual feedback messages for typical user actions
 * https://getbootstrap.com/docs/4.5/components/alerts/
 */
export class Alert extends Division {
    /**************************
     ***** Static Methods *****
     *************************/
    static formatHeading(heading: any): any;
    static formatLink(link: any): any;
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /********************
     ***** Elements *****
     *******************/
    /** button to dismiss alert */
    dismissButton: Button;
    /**********************
     ***** Attributes *****
     *********************/
    /** alert can be closed out (boolean) */
    _dismissible: any;
    set dismissible(arg: any);
    get dismissible(): any;
}
/*****************************************************************************************************************
 ************************************************** Grid System **************************************************
 ****************************************************************************************************************/
/**
 * twelve column grid system by breakpoint
 * https://getbootstrap.com/docs/4.5/layout/grid/
 */
export class Column extends Division {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {any} column grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {any} columnSmall small breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {any} columnMedium medium breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {any} columnLarge large breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {any} columnXL extra-large breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, column: any, columnSmall: any, columnMedium: any, columnLarge: any, columnXL: any, attributes: object);
}
/**
 * provide a means to center and horizontally pad your site’s contents
 * https://getbootstrap.com/docs/4.5/layout/grid/
 */
export class Container extends Section {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {boolean} fluid provide a means to center and horizontally pad your site’s contents
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, fluid: boolean, attributes: object);
    set fluid(arg: any);
    get fluid(): any;
    /**********************
     ***** Properties *****
     *********************/
    /** 100% width across all viewport and device sizes (true) or responsive pixel width (false) */
    _fluid: any;
}
/**
 * variation of the standard grid row that overrides the default column gutters for tighter and more compact layouts
 * https://getbootstrap.com/docs/4.5/components/forms/#form-row
 */
export class FormRow extends Division {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * wrapper for grid columns
 * https://getbootstrap.com/docs/4.5/layout/grid/
 */
export class Row extends Division {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**********************************************************************************************************
 ************************************************** Demo **************************************************
 *********************************************************************************************************/
/**
 * demonstrate all supported Bootstrap features
 * NOTE: this simply returns a string, which should probably be put into an HTML body that includes the required components (Bootstrap CSS/JS, jQuery, etc.)
 */
export function demo(): string;
/** theme support (abstract) */
declare class ThemeableTag extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag: string, contents: any, attributes: object);
    /**********************
     ***** Properties *****
     *********************/
    /**
     * Bootstrap text theme
     * valid values: black-50, body, danger, dark, info, light, muted, primary, secondary, success, warning, white, white-50
     */
    _textTheme: any;
    set textTheme(arg: any);
    get textTheme(): any;
    /**
     * Bootstrap background theme
     * valid values: danger, dark, info, light, primary, secondary, success, transparent, warning
     */
    _theme: any;
    set theme(arg: any);
    get theme(): any;
    /**
     * Bootstrap outline theme
     * outline with theme color (via borders) instead of background color (boolean)
     */
    _outline: any;
    set outline(arg: any);
    get outline(): any;
    /*****************************
     ***** Protected Methods *****
     ****************************/
    /**
     * background/outline theme are mutually exclusive
     * @param {boolean} outline border theme (true) or background (false)
     * @param {string} theme theme color
     */
    _setOutlineTheme(outline: boolean, theme: string): void;
}
/***************************************************************************************************************
 ************************************************** HTML Core **************************************************
 **************************************************************************************************************/
/** baseline HTML element (abstract) */
declare class BootstrapTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag: string, contents: any, attributes: object);
    set tag(arg: any);
    get tag(): any;
    set contents(arg: any);
    get contents(): any;
    set attributes(arg: any);
    get attributes(): any;
    /**********************************
     ***** Properties: Essentials *****
     *********************************/
    /** attributes: HTML attributes (object) */
    _attributes: any;
    set classes(arg: any);
    /** classes: CSS classes defined in a style sheet (numeric array) */
    get classes(): any;
    set styles(arg: any);
    /** styles: inline CSS style(s) (numeric array) */
    get styles(): any;
    /** blockClose: add newline after close tag (boolean) */
    _blockClose: any;
    set blockClose(arg: any);
    get blockClose(): any;
    /** blockOpen: add newline after open tag (boolean) */
    _blockOpen: any;
    set blockOpen(arg: any);
    get blockOpen(): any;
    /** contents for innerHTML (array) */
    _contents: any;
    /** selfClosing: self-closing tag (boolean) */
    _selfClosing: any;
    set selfClosing(arg: any);
    get selfClosing(): any;
    /** tag: HTML tag element (string) */
    _tag: any;
    /****************************
     ***** Properties: ARIA *****
     ***************************/
    /** identifies the element (or elements) whose contents or presence are controlled by the current element (ID) */
    _ariaControls: any;
    set ariaControls(arg: any);
    get ariaControls(): any;
    _ariaCurrent: any;
    set ariaCurrent(arg: any);
    get ariaCurrent(): any;
    /** identifies the element (or elements) that describes the object (ID) */
    _ariaDescribedBy: any;
    set ariaDescribedBy(arg: any);
    get ariaDescribedBy(): any;
    /** identifies the element that provides a detailed, extended description for the object (ID) */
    _ariaDetails: any;
    set ariaDetails(arg: any);
    get ariaDetails(): any;
    /** the element is perceivable but disabled, so it is not editable or otherwise operable (boolean)' */
    _ariaDisabled: any;
    set ariaDisabled(arg: any);
    get ariaDisabled(): any;
    /** indicates whether the element, or another grouping element it controls, is currently expanded or collapsed (boolean) */
    _ariaExpanded: any;
    set ariaExpanded(arg: any);
    get ariaExpanded(): any;
    /** indicates whether the element is exposed to an accessibility API (boolean) */
    _ariaHidden: any;
    set ariaHidden(arg: any);
    get ariaHidden(): any;
    /** string value that labels the current element */
    _ariaLabel: any;
    set ariaLabel(arg: any);
    get ariaLabel(): any;
    /** identifies the element (or elements) that labels the current element (ID) */
    _ariaLabelledBy: any;
    set ariaLabelledBy(arg: any);
    get ariaLabelledBy(): any;
    /** maximum allowed value for a range widget */
    _ariaValueMax: any;
    set ariaValueMax(arg: any);
    get ariaValueMax(): any;
    /** minimum allowed value for a range widget */
    _ariaValueMin: any;
    set ariaValueMin(arg: any);
    get ariaValueMin(): any;
    /** current value for a range widget */
    _ariaValueNow: any;
    set ariaValueNow(arg: any);
    get ariaValueNow(): any;
    /**
     * role type of user interface elementttttttt
     * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
     */
    _role: any;
    set role(arg: any);
    get role(): any;
    /********************************
     ***** Properties: Standard *****
     *******************************/
    /** define shortcut key to activate/focus when (Alt / Alt+Shift / Cmd) + AccessKey [single character] */
    _accessKey: any;
    set accessKey(arg: any);
    get accessKey(): any;
    /** not available for all elements [boolean] */
    _disabled: any;
    set disabled(arg: any);
    get disabled(): any;
    set tabIndex(arg: any);
    get tabIndex(): any;
    /** text direction for the content [auto, ltr, rtl] */
    _direction: any;
    set direction(arg: any);
    get direction(): any;
    /**
     * element can be dragged (requires JavaScript) [true, false, auto]
     * https://www.w3schools.com/html/html5_draganddrop.asp
     */
    _draggable: any;
    set draggable(arg: any);
    get draggable(): any;
    /** content is editable [boolean] */
    _editable: any;
    set editable(arg: any);
    get editable(): any;
    /** hide element because it is not yet (or no longer) relevant [boolean] */
    _hidden: any;
    set hidden(arg: any);
    get hidden(): any;
    /** unique identifier [alphanumeric, underscore, hyphen] */
    _id: any;
    set id(arg: any);
    get id(): any;
    /**
     * language of the element's content [2-character code]
     * https://www.w3schools.com/tags/ref_language_codes.asp
     */
    _language: any;
    set language(arg: any);
    get language(): any;
    /** content should be spellchecked [boolean] */
    _spellcheck: any;
    set spellcheck(arg: any);
    get spellcheck(): any;
    /** tabbing order [numeric] */
    _tabIndex: any;
    /** extra information about an element [text] */
    _title: any;
    set title(arg: any);
    get title(): any;
    /***********************************
     ***** Properties: Form Events *****
     **********************************/
    /**
     * form events – applies to almost all HTML elements, but is most used in form elements
     * https://www.w3schools.com/tags/ref_eventattributes.asp
     */
    /** loses focus */
    _onBlur: any;
    set onBlur(arg: any);
    get onBlur(): any;
    /** value of the element is changed */
    _onChange: any;
    set onChange(arg: any);
    get onChange(): any;
    /** context menu is triggered */
    _onContextMenu: any;
    set onContextMenu(arg: any);
    get onContextMenu(): any;
    /** gets focus */
    _onFocus: any;
    set onFocus(arg: any);
    get onFocus(): any;
    /** gets user input */
    _onInput: any;
    set onInput(arg: any);
    get onInput(): any;
    /** element is invalid */
    _onInvalid: any;
    set onInvalid(arg: any);
    get onInvalid(): any;
    /** reset button in a form is clicked */
    _onReset: any;
    set onReset(arg: any);
    get onReset(): any;
    /** user writes something in a search field (for <input type="search">) */
    _onSearch: any;
    set onSearch(arg: any);
    get onSearch(): any;
    /** some text has been selected in an element */
    _onSelect: any;
    set onSelect(arg: any);
    get onSelect(): any;
    /***************************************
     ***** Properties: Keyboard Events *****
     **************************************/
    /** user is pressing a key */
    _onKeyDown: any;
    set onKeyDown(arg: any);
    get onKeyDown(): any;
    /** user presses a key */
    _onKeyPress: any;
    set onKeyPress(arg: any);
    get onKeyPress(): any;
    /** user releases a key */
    _onKeyUp: any;
    set onKeyUp(arg: any);
    get onKeyUp(): any;
    /************************************
     ***** Properties: Mouse Events *****
     ***********************************/
    /** mouse click on the element */
    _onClick: any;
    set onClick(arg: any);
    get onClick(): any;
    /** mouse double-click on the element */
    _onDoubleClick: any;
    set onDoubleClick(arg: any);
    get onDoubleClick(): any;
    /** mouse button is pressed down on an element */
    _onMouseDown: any;
    set onMouseDown(arg: any);
    get onMouseDown(): any;
    /** mouse pointer is moving while it is over an element */
    _onMouseMove: any;
    set onMouseMove(arg: any);
    get onMouseMove(): any;
    /** mouse pointer moves off of an element */
    _onMouseOut: any;
    set onMouseOut(arg: any);
    get onMouseOut(): any;
    /** mouse pointer moves over an element */
    _onMouseOver: any;
    set onMouseOver(arg: any);
    get onMouseOver(): any;
    /** mouse button is released over an element */
    _onMouseUp: any;
    set onMouseUp(arg: any);
    get onMouseUp(): any;
    /** mouse wheel rolls up or down over an element */
    _onWheel: any;
    set onWheel(arg: any);
    get onWheel(): any;
    /***********************************
     ***** Properties: Drag Events *****
     **********************************/
    /** element is dragged */
    _onDrag: any;
    set onDrag(arg: any);
    get onDrag(): any;
    /** end of a drag operation */
    _onDragEnd: any;
    set onDragEnd(arg: any);
    get onDragEnd(): any;
    /** has been dragged to a valid drop target */
    _onDragEnter: any;
    set onDragEnter(arg: any);
    get onDragEnter(): any;
    /** leaves a valid drop target */
    _onDragLeave: any;
    set onDragLeave(arg: any);
    get onDragLeave(): any;
    /** being dragged over a valid drop target */
    _onDragOver: any;
    set onDragOver(arg: any);
    get onDragOver(): any;
    /** start of a drag operation */
    _onDragStart: any;
    set onDragStart(arg: any);
    get onDragStart(): any;
    /** dragged element is being dropped */
    _onDrop: any;
    set onDrop(arg: any);
    get onDrop(): any;
    /** element's scrollbar is being scrolled */
    _onScroll: any;
    set onScroll(arg: any);
    get onScroll(): any;
    /****************************************
     ***** Properties: Clipboard Events *****
     ***************************************/
    /** user copies the content of an element */
    _onCopy: any;
    set onCopy(arg: any);
    get onCopy(): any;
    /** user cuts the content of an element */
    _onCut: any;
    set onCut(arg: any);
    get onCut(): any;
    /** user pastes some content in an element */
    _onPaste: any;
    set onPaste(arg: any);
    get onPaste(): any;
    /****************************
     ***** Properties: Grid *****
     ***************************/
    /**
     * grid column width
     * valid values are: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    _gridColumn: any;
    set gridColumn(arg: any);
    get gridColumn(): any;
    /**
     * small breakpoint grid column width
     * valid values are: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    _gridColumnSmall: any;
    set gridColumnSmall(arg: any);
    get gridColumnSmall(): any;
    /**
     * medium breakpoint grid column width
     * valid values are: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    _gridColumnMedium: any;
    set gridColumnMedium(arg: any);
    get gridColumnMedium(): any;
    /**
     * large breakpoint grid column width
     * valid values are: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    _gridColumnLarge: any;
    set gridColumnLarge(arg: any);
    get gridColumnLarge(): any;
    /**
     * extra-large breakpoint grid column width
     * valid values are: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    _gridColumnXL: any;
    set gridColumnXL(arg: any);
    get gridColumnXL(): any;
    /**
     * variation of the standard grid row that overrides the default column gutters for tighter and more compact layouts [boolean]
     * https://getbootstrap.com/docs/4.5/components/forms/#form-row
     */
    _gridFormRow: any;
    set gridFormRow(arg: any);
    get gridFormRow(): any;
    /**
     * move the grid column to the right (i.e., increase the left margin) by given number of columns
     * valid values: 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/#offsetting-columns
     */
    _gridOffset: any;
    set gridOffset(arg: any);
    get gridOffset(): any;
    /**
     * small breakpoint move the grid column to the right (i.e., increase the left margin) by given number of columns
     * valid values: 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/#offsetting-columns
     */
    _gridOffsetSmall: any;
    set gridOffsetSmall(arg: any);
    get gridOffsetSmall(): any;
    /**
     * medium breakpoint move the grid column to the right (i.e., increase the left margin) by given number of columns
     * valid values: 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/#offsetting-columns
     */
    _gridOffsetMedium: any;
    set gridOffsetMedium(arg: any);
    get gridOffsetMedium(): any;
    /**
     * large breakpoint move the grid column to the right (i.e., increase the left margin) by given number of columns
     * valid values: 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/#offsetting-columns
     */
    _gridOffsetLarge: any;
    set gridOffsetLarge(arg: any);
    get gridOffsetLarge(): any;
    /**
     * extra-large breakpoint move the grid column to the right (i.e., increase the left margin) by given number of columns
     * valid values: 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/#offsetting-columns
     */
    _gridOffsetXL: any;
    set gridOffsetXL(arg: any);
    get gridOffsetXL(): any;
    /**
     * grid column order
     * valid values: 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/#reordering
     */
    _gridOrder: any;
    set gridOrder(arg: any);
    get gridOrder(): any;
    /**
     * small breakpoint grid column order
     * valid values: 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/#reordering
     */
    _gridOrderSmall: any;
    set gridOrderSmall(arg: any);
    get gridOrderSmall(): any;
    /**
     * medium breakpoint grid column order
     * valid values: 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/#reordering
     */
    _gridOrderMedium: any;
    set gridOrderMedium(arg: any);
    get gridOrderMedium(): any;
    /**
     * large breakpoint grid column order
     * valid values: 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/#reordering
     */
    _gridOrderLarge: any;
    set gridOrderLarge(arg: any);
    get gridOrderLarge(): any;
    /**
     * extra-large breakpoint grid column order
     * valid values: 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/#reordering
     */
    _gridOrderXL: any;
    set gridOrderXL(arg: any);
    get gridOrderXL(): any;
    /**
     * wrapper for grid columns [boolean]
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    _gridRow: any;
    set gridRow(arg: any);
    get gridRow(): any;
    /**
     * keep margins/padding (true); remove margins/padding from the row and all immediate children columns (false) [boolean]
     * https://getbootstrap.com/docs/4.5/layout/grid/#gutters
     * https://getbootstrap.com/docs/4.5/layout/grid/#no-gutters
     */
    _gridRowNoGutters: any;
    set gridRowNoGutters(arg: any);
    get gridRowNoGutters(): any;
    /*******************
     ***** Methods *****
     ******************/
    /**
     * add content
     * @param {any} value value or array of values to go inside the HTML element
     */
    add(value: any): void;
    /** assign a unique ID */
    uniqueID(): void;
    /**
     * add a class
     * @param {any} value string or array of strings of CSS classes
     */
    class(value: any): void;
    /**
     * get/set "data-*" attributes
     * @param {string} key attribute key
     * @param {any} value attribute value (undefined: return current value, null: removes attribute, otherwise: set the value)
     */
    data(key: string, value?: any): any;
    /** contents of the tag */
    innerHTML(): string;
    /**
     * remove class(es) from class attribute array
     * @param {any} value string or array of strings of CSS classes
     */
    removeClass(value: any): void;
    /**
     * remove style(s) from style attribute array
     * @param {any} value string or array of strings of CSS styles
     */
    removeStyle(value: any): void;
    /** open the HTML tag */
    start(): string;
    /** close the HTML tag */
    stop(): string;
    /**
     * add a style
     * @param {any} value string or array of strings of CSS styles
     */
    style(value: any): void;
    /** convert the object to a string */
    toString(): string;
    /*****************************
     ***** Protected Methods *****
     ****************************/
    /**
     * set/unset the attribute for a boolean value (i.e., convert true to "true"/"on" and false to "false"/"off")
     * @param {string} key attribute key
     * @param {boolean} value attribute value (null removes attribute)
     * @param {boolean} onOff true: on/off, false (default): true/false
     */
    _setBooleanValue(key: string, value: boolean, onOff: boolean): void;
    /**
     * set/unset the attribute for a standard value (i.e., attribute="value")
     * @param {string} key attribute key
     * @param {any} value attribute value (null removes attribute)
     */
    _setStandardValue(key: string, value: any): void;
    /**
     * set/unset the attribute for a toggle value (i.e., true = attribute, false = no attribute)
     * @param {any} key attribute key
     * @param {any} value attribute value (true: attribute without a value, null/false: remove attribute)
     */
    _setTogglableValue(key: any, value: any): void;
    /*****************************
     ***** HTML Core Methods *****
     ****************************/
    /**
     * insert comments in the source code and are not displayed
     * https://www.w3schools.com/tags/tag_comment.asp
     * @param {any} contents value or array of values to go inside the comment
     * @param {boolean} blockClose insert new line after comment close
     * @param {boolean} inline all on one line
     */
    comment(contents: any, blockClose: boolean, inline: boolean): void;
    /***************************
     ***** Content Methods *****
     **************************/
    /**
     * abbreviation or acronym
     * https://www.w3schools.com/tags/tag_abbr.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} title expands the abbreviation
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    abbreviation(contents: any, title: string, attributes: object): void;
    /**
     * contact information for the author/owner of a document (within <body>) or an article (within <article>)
     * https://www.w3schools.com/tags/tag_address.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    address(contents: any, attributes: object): void;
    /**
     * standalone piece of content that would make sense if syndicated as a news item
     * https://www.w3schools.com/tags/tag_article.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    article(contents: any, attributes: object): void;
    /**
     * block of content that is related to the main content around it, but can be removed without reducing the main content meaning
     * https://www.w3schools.com/tags/tag_aside.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    aside(contents: any, attributes: object): void;
    /**
     * highlight without emphasis (bold)
     * https://www.w3schools.com/tags/tag_b.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    bold(contents: any, attributes: object): void;
    /**
     * quote blocks of content from another source
     * TIP: use <q> for inline (short) quotations
     * https://www.w3schools.com/tags/tag_blockquote.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    blockQuote(contents: any, attributes: object): void;
    /**
     * cited reference (i.e., title of a work)
     * https://www.w3schools.com/tags/tag_cite.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    cite(contents: any, attributes: object): void;
    /**
     * computer code block (monospaced)
     * https://www.w3schools.com/tags/tag_code.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    code(contents: any, attributes: object): void;
    /**
     * definition list
     * https://www.w3schools.com/tags/tag_dl.asp
     * @param {object} contents key–value pairs to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    definitionList(contents: object, attributes: object): void;
    /**
     * deleted (strikethrough)
     * https://www.w3schools.com/tags/tag_del.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    deleted(contents: any, attributes: object): void;
    /**
     * additional details that the user can view or hide on demand
     * https://www.w3schools.com/tags/tag_details.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    details(contents: any, attributes: object): void;
    /**
     * primary opinionated heading
     * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    display1(contents: any, attributes: object): void;
    /**
     * secondary opinionated heading
     * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    display2(contents: any, attributes: object): void;
    /**
     * tertiary opinionated heading
     * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    display3(contents: any, attributes: object): void;
    /**
     * quaternary opinionated heading
     * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    display4(contents: any, attributes: object): void;
    /**
     * generic container for grouping content for styling/visual purposes
     * https://www.w3schools.com/tags/tag_div.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    division(contents: any, attributes: object): void;
    /**
     * emphasized text (italics)
     * https://www.w3schools.com/tags/tag_em.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    emphasis(contents: any, attributes: object): void;
    /**
     * self-contained content, like illustrations, diagrams, photos, code listings, etc.
     * TIP: if removed it should not affect the flow of the document
     * https://www.w3schools.com/tags/tag_figure.asp
     * @param {string} url path to the image
     * @param {string} alternateText alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references) – https://webaim.org/techniques/alttext/
     * @param {any} caption value or array of values to go inside the caption element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    figure(url: string, alternateText: string, caption: any, attributes: object): void;
    /**
     * contains information about its containing element: authorship, copyright, contact, sitemap, links to related content, etc.
     * TIP: contact information inside a <footer> element should go inside an <address> tag
     * https://www.w3schools.com/tags/tag_footer.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    footer(contents: any, attributes: object): void;
    /**
     * thematic group of introductory or navigational aids, typically with a h#, logo/icon, and/or authorship
     * https://www.w3schools.com/tags/tag_header.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    header(contents: any, attributes: object): void;
    /**
     * primary heading
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading1(contents: any, attributes: object): void;
    /**
     * secondary heading
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading2(contents: any, attributes: object): void;
    /**
     * tertiary heading
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading3(contents: any, attributes: object): void;
    /**
     * quaternary heading
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading4(contents: any, attributes: object): void;
    /**
     * quinary heading
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading5(contents: any, attributes: object): void;
    /**
     * senary heading
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading6(contents: any, attributes: object): void;
    /**
     * marked text (highlight)
     * https://www.w3schools.com/tags/tag_mark.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    highlight(contents: any, attributes: object): void;
    /**
     * FontAwesome icon
     * https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
     * @param {any} name FontAwesome class name (e.g., "fas fa-camera")
     * @param {any} ariaLabel accessibility string value that labels the current element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    icon(name: any, ariaLabel: any, attributes: object): void;
    /**
     * inline frame for embedding another document
     * https://www.w3schools.com/tags/tag_iframe.asp
     * @param {string} url address of the document to embed
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    inlineFrame(url: string, attributes: object): void;
    /**
     * image
     * https://www.w3schools.com/tags/tag_img.asp
     * @param {string} url URL path of an image file
     * @param {string} alternateText alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references) – https://webaim.org/techniques/alttext/
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    image(url: string, alternateText: string, attributes: object): void;
    /**
     * insertion (underlined)
     * https://www.w3schools.com/tags/tag_ins.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    insert(contents: any, attributes: object): void;
    /**
     * alternate voice or mood, used to indicate a technical term, foreign phrase, thought, name (italics)
     * TIP: usually use <em>, <strong>, <mark>, <cite>, <dfn> (define) instead
     * https://www.w3schools.com/tags/tag_i.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    italics(contents: any, attributes: object): void;
    /**
     * horizontal ruler for a thematic break (e.g. a shift of topic)
     * https://www.w3schools.com/tags/tag_hr.asp
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    line(attributes: object): void;
    /**
     * line break
     * https://www.w3schools.com/tags/tag_br.asp
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    lineBreak(attributes: object): void;
    /**
     * hyperlink (anchor)
     * https://www.w3schools.com/tags/tag_a.asp
     * @param {string} url URL of the page the link goes to
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    link(url: string, contents: any, attributes: object): void;
    /**
     * monospaced and preserves whitespace (pre-formatted)
     * https://www.w3schools.com/tags/tag_pre.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    monospace(contents: any, attributes: object): void;
    /**
     * major navigation information (i.e., not just a group of links) and other constructs (e.g., search form)
     * https://www.w3schools.com/tags/tag_nav.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    navigation(contents: any, attributes: object): void;
    /**
     * list of items
     * https://www.w3schools.com/tags/tag_ol.asp
     * https://www.w3schools.com/tags/tag_ul.asp
     * @param {any} items items to add to the list
     * @param {boolean} ordered list is ordered (i.e., numbered); default is false (i.e., unordered/bulleted)
     * @param {object} attributes key–value pairs of HTML attributes and other properties for the list
     * @param {any} itemAttributes key–value pairs of HTML attributes and other properties for the list items
     */
    list(items: any, ordered: boolean, attributes: object, itemAttributes: any): void;
    /**
     * represents the result of a calculation (like one performed by a script)
     * https://www.w3schools.com/tags/tag_output.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    output(contents: any, attributes: object): void;
    /**
     * paragraph
     * https://www.w3schools.com/tags/tag_p.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    paragraph(contents: any, attributes: object): void;
    /**
     * short quote (inline, with quotation marks)
     * TIP: use BlockQuote for longer quotations
     * https://www.w3schools.com/tags/tag_q.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    quote(contents: any, attributes: object): void;
    /**
     * strikethrough (no longer accurate)
     * https://www.w3schools.com/tags/tag_s.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    strike(contents: any, attributes: object): void;
    /**
     * used to either group different articles into different purposes or subjects, or to define the different sections of a single article
     * https://www.w3schools.com/tags/tag_section.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    section(contents: any, attributes: object): void;
    /**
     * smaller text (e.g., fine print)
     * https://www.w3schools.com/tags/tag_small.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    small(contents: any, attributes: object): void;
    /**
     * span for grouping inline elements
     * https://www.w3schools.com/tags/tag_span.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    span(contents: any, attributes: object): void;
    /**
     * important text (bold)
     * https://www.w3schools.com/tags/tag_strong.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    strong(contents: any, attributes: object): void;
    /**
     * subscript
     * https://www.w3schools.com/tags/tag_sub.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    subscript(contents: any, attributes: object): void;
    /**
     * superscript
     * https://www.w3schools.com/tags/tag_sup.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    superscript(contents: any, attributes: object): void;
    /**
     * Scalable Vector Graphics (text-based image)
     * https://www.w3schools.com/tags/tag_svg.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {int} width width in pixels
     * @param {int} height height in pixels
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    svg(contents: any, width: any, height: any, attributes: object): void;
    /**
     * defining instance of a term (i.e., the parent container of this tag must also contain the definition/explanation for this term)
     * TIP: use the ID so it's easily linked to via "#id")
     * https://www.w3schools.com/tags/tag_dfn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    term(contents: any, attributes: object): void;
    /**
     * tabular data (rows and columns)
     * https://www.w3schools.com/tags/tag_table.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {any} caption value or array of values to go inside the HTML caption element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     * @param {object} captionAttributes key–value pairs of HTML attributes and other properties for the table caption
     * @param {object} headerAttributes key–value pairs of HTML attributes and other properties for the table caption
     * @param {object} bodyAttributes key–value pairs of HTML attributes and other properties for the table caption
     * @param {object} footerAttributes key–value pairs of HTML attributes and other properties for the table caption
     */
    table(contents: any, caption: any, attributes: object, captionAttributes: object, headerAttributes: object, bodyAttributes: object, footerAttributes: object): void;
    /**
     * human-readable date/time, optionally with a SQL-like timestamp
     * https://www.w3schools.com/tags/tag_time.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    time(contents: any, attributes: object): void;
    /**
     * underline
     * https://www.w3schools.com/tags/tag_u.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    underline(contents: any, attributes: object): void;
    /************************
     ***** Form Methods *****
     ***********************/
    /**
     * clickable button
     * https://www.w3schools.com/tags/tag_button.asp
     * https://getbootstrap.com/docs/4.5/components/buttons/
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    button(contents: any, attributes: object): void;
    /**
     * checkbox (on/off, yes/no, etc.)
     * https://www.w3schools.com/tags/tag_input.asp
     * https://getbootstrap.com/docs/4.5/components/forms/#checkboxes-and-radios
     * https://getbootstrap.com/docs/4.5/components/forms/#checkboxes-and-radios-1
     * @param {any} label value or array of values to go inside the label
     * @param {string} value field value to submit when checked
     * @param {string} name field name to submit when checked
     * @param {boolean} checked element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    checkbox(label: any, value: string, name: string, checked: boolean, attributes: object): void;
    /**
     * dropdown container of options
     * https://www.w3schools.com/tags/tag_select.asp
     * https://getbootstrap.com/docs/4.5/components/forms/#select-menu
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} name field name to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    dropdown(contents: any, name: string, attributes: object): void;
    /**
     * file browser for uploading files
     * NOTE: don't forget to flag the Form with fileUpload = true
     * https://www.w3schools.com/tags/tag_input.asp
     * https://getbootstrap.com/docs/4.5/components/forms/#file-browser
     * @param {any} label value or array of values to go inside the label
     * @param {string} name field name to submit when checked
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    fileUploader(label: any, name: string, attributes: object): void;
    /**
     * form element container
     * https://www.w3schools.com/tags/tag_asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    form(contents: any, attributes: object): void;
    /**
     * form group element–label combo
     * https://getbootstrap.com/docs/4.5/components/forms/#form-groups
     * @param {any} label  value or array of values to go inside the Label element
     * @param {any} contents value or array of values to go inside the Form Group element
     * @param {object} attributes key–value pairs of HTML attributes and other properties for the Form Group element
     * @param {object} labelAttributes key–value pairs of HTML attributes and other properties for the Label element
     */
    formGroup(label: any, contents: any, attributes: object, labelAttributes: object): void;
    /**
     * generic input tag
     * https://www.w3schools.com/tags/tag_input.asp
     * https://www.w3schools.com/tags/tag_textarea.asp
     * @param {string} value field value to submit
     * @param {string} name field name to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    input(value: string, name: string, attributes: object): void;
    /**
     * label for a form element
     * https://www.w3schools.com/tags/tag_label.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {any} forID ID for the form element the label is for
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    label(contents: any, forID: any, attributes: object): void;
    /**
     * radio button (selecting one in the set de-selects the others)
     * https://www.w3schools.com/tags/tag_input.asp
     * https://getbootstrap.com/docs/4.5/components/forms/#checkboxes-and-radios
     * https://getbootstrap.com/docs/4.5/components/forms/#checkboxes-and-radios-1
     * @param {any} label value or array of values to go inside the label
     * @param {string} value field value to submit
     * @param {string} name field name to submit
     * @param {boolean} checked element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    radio(label: any, value: string, name: string, checked: boolean, attributes: object): void;
    /**
     * single-line or multi-line textbox
     * https://www.w3schools.com/tags/tag_input.asp
     * https://www.w3schools.com/tags/tag_textarea.asp
     * @param {string} value field value to submit
     * @param {string} name field name to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    textbox(value: string, name: string, attributes: object): void;
    /***************************************
     ***** Bootstrap Component Methods *****
     **************************************/
    /**
     * provides contextual feedback messages for typical user actions
     * https://getbootstrap.com/docs/4.5/components/alerts/
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    alert(contents: any, attributes: object): void;
    /**********************************
     ***** Bootstrap Grid Methods *****
     *********************************/
    /**
     * twelve column grid system by breakpoint
     * https://getbootstrap.com/docs/4.5/layout/grid/
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {any} column grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {any} columnSmall small breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {any} columnMedium medium breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {any} columnLarge large breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {any} columnXL extra-large breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    column(contents: any, column: any, columnSmall: any, columnMedium: any, columnLarge: any, columnXL: any, attributes: object): void;
    /**
     * provide a means to center and horizontally pad your site’s contents
     * https://getbootstrap.com/docs/4.5/layout/grid/
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {boolean} fluid provide a means to center and horizontally pad your site’s contents
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    container(contents: any, fluid: boolean, attributes: object): void;
    /**
     * variation of the standard grid row that overrides the default column gutters for tighter and more compact layouts
     * https://getbootstrap.com/docs/4.5/components/forms/#form-row
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    formRow(contents: any, attributes: object): void;
    /**
     * wrapper for grid columns
     * https://getbootstrap.com/docs/4.5/layout/grid/
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    row(contents: any, attributes: object): void;
}
/**
 * cross-site linked resources (abstract)
 * https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
 */
declare class CrossOriginTag extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag: string, contents: any, attributes: object);
    /**********************
     ***** Properties *****
     *********************/
    /** how the element handles cross-origin requests; valid values: anonymous, use-credentials */
    _crossOrigin: any;
    set crossOrigin(arg: any);
    get crossOrigin(): any;
    /** base64-encoded cryptographic hash of the resource, used to verify that the fetched resource has been delivered free of unexpected manipulation */
    _integrity: any;
    set integrity(arg: any);
    get integrity(): any;
    /*****************************
     ***** Protected Methods *****
     ****************************/
    /**
     * set crossOrigin and integrity (interrelated)
     * @param {any} crossOrigin
     * @param {any} integrity
     */
    _crossOriginIntegrity(crossOrigin: any, integrity: any): void;
}
/** shared features of table sections (abstract) */
declare class TableSectionTag extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag: string, contents: any, attributes: object);
}
/*****************
 ***** Table *****
 ****************/
/** shared features of table cells (abstract) */
declare class TableCellTag extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag: string, contents: any, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** number of columns a cell should span */
    _colSpan: any;
    /** specifies one or more header cells a cell is related to; valid value(s): <th> ID(s) */
    _headers: any;
    /** number of rows a header cell should span */
    _rowSpan: any;
}
/** form submit element (abstract) */
declare class FormSubmitTag extends FormTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} name field name to submit
     * @param {string} value field value to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag: string, contents: any, name: string, value: string, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** form has a file upload element [boolean] */
    _fileUpload: any;
    set fileUpload(arg: any);
    get fileUpload(): any;
    /**
     * HTTP method to use when sending form data
     * valid values: get, post
     */
    _method: any;
    set method(arg: any);
    get method(): any;
    /** form should not be validated when submitted [boolean] */
    _noValidate: any;
    set noValidate(arg: any);
    get noValidate(): any;
    /**
     * specifies where to display the response that is received after submitting the form
     * valid values: _blank, _parent, _self, _top, «frame»
     */
    _target: any;
    set target(arg: any);
    get target(): any;
    /** URL where to send data when the form is submitted */
    _url: any;
    set url(arg: any);
    get url(): any;
}
/** form toggle element (abstract) */
declare class FormToggleElement extends FormTag {
    /**
     * create a new instance of the object
     * @param {string} type valid values: checkbox, radio
     * @param {any} label value or array of values to go inside the label
     * @param {string} value field value to submit when checked
     * @param {string} name field name to submit when checked
     * @param {boolean} checked element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(type: string, label: any, value: string, name: string, checked: boolean, attributes: object);
    wrapper: Division;
    /**********************
     ***** Attributes *****
     *********************/
    /** element should be pre-selected when the page loads [boolean] */
    _checked: any;
    set checked(arg: any);
    get checked(): any;
    /** input field is read-only (boolean) */
    _readOnly: any;
    set readOnly(arg: any);
    get readOnly(): any;
    /** valid values: checkbox, radio */
    _type: any;
    set type(arg: any);
    get type(): any;
    /** field value to submit */
    _value: any;
    set value(arg: any);
    get value(): any;
    /**********************
     ***** Properties *****
     *********************/
    /** stack horizontally instead of vertically [boolean] */
    _inline: any;
    set inline(arg: any);
    get inline(): any;
    /** stack horizontally instead of vertically [boolean] */
    _switch: any;
    set switch(arg: any);
    get switch(): any;
    /*******************
     ***** Methods *****
     ******************/
    /**
      * inline/switch are interdependent
      * @param {boolean} inline new value for inline
      * @param {boolean} switcher new value for switch
      */
    _setInlineSwitch(inline: boolean, switcher: boolean): void;
}
/** container for dropdown options (abstract) */
declare class DropdownContainerTag extends FormTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} name field name to submit
     * @param {string} value field value to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag: string, contents: any, name: string, value: string, attributes: object);
    /**
     * search the dropdown contents for the specified value, select it, and de-select other options
     * @param {any} value
     */
    select(value: any): void;
}
/**********************************************************************************************************
 ************************************************** Form **************************************************
 *********************************************************************************************************/
/** form input element (abstract) */
declare class FormTag extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} name field name to submit
     * @param {string} value field value to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag: string, contents: any, name: string, value: string, attributes: object);
    /**********************
     ***** Attributes *****
     *********************/
    /** element should automatically get focus when the page loads [boolean] */
    _autoFocus: any;
    set autoFocus(arg: any);
    get autoFocus(): any;
    /** defines one or more form (space-separated) that the element belongs to */
    _form: any;
    /** element name */
    _name: any;
    set name(arg: any);
    get name(): any;
    /** required to set/select a value before submitting the form [boolean] */
    _required: any;
    set required(arg: any);
    get required(): any;
}
export {};
