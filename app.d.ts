/**
 * contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc.
 * https://www.w3schools.com/tags/tag_body.asp
 */
export class Body extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    set scripts(arg: void);
    /** script tags to show before closing the tag */
    get scripts(): void;
    /********************
     ***** Elements *****
     *******************/
    /**
     * @type {Script[]}
     * @protected
     */
    protected _scripts: Script[];
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
    /** contents */
    get contents(): any;
    set blockClose(arg: boolean);
    /** insert new line after comment close */
    get blockClose(): boolean;
    set inline(arg: boolean);
    /** all on one line */
    get inline(): boolean;
    /**********************
     ***** Properties *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _inline: boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _blockClose: boolean;
    /**
     * @type any
     * @protected
     */
    protected _contents: any;
    /*******************
     ***** Methods *****
     ******************/
    /**
     * add content
     * @param {any} value value or array of values to go inside the HTML comment element
     */
    add(value: any): void;
    /** open the HTML comment */
    start(): string;
    /** close the HTML comment */
    stop(): string;
    /** convert the object to a string */
    toString(): string;
}
/** container for all the head elements, including the title for the document, scripts, styles, meta information, and more */
export class Head extends HTMLTag {
    /**
     * container for all the head elements, including the title for the document, scripts, styles, meta information, and more
     * https://www.w3schools.com/tags/tag_head.asp
     *
     * @param {any} titleContents contents for the title element
     * @param {any} contents contents for the head element
     * @param {object} attributes attributes for the head element
     */
    constructor(titleContents: any, contents: any, attributes: object);
    set metadatas(arg: Metadata[]);
    /** metadata tags [array] */
    get metadatas(): Metadata[];
    set resourceLinks(arg: ResourceLink[]);
    /** linked resource documents */
    get resourceLinks(): ResourceLink[];
    /********************
     ***** Elements *****
     *******************/
    /**
     * @type {Metadata[]}
     * @protected
     */
    protected _metadatas: Metadata[];
    /**
     * @type {ResourceLink[]}
     * @protected
     */
    protected _resourceLinks: ResourceLink[];
    /**
     * @type {Style[]}
     * @protected
     */
    protected _styles: Style[];
    /**********************
     ***** Properties *****
     *********************/
    /**
     * character set
     * https://www.w3schools.com/tags/att_meta_charset.asp
     * @type {string}
     */
    charset: string;
    /*******************
     ***** Methods *****
     ******************/
    /**
     * provides metadata about the HTML document
     * https://www.w3schools.com/tags/tag_meta.asp
     * @param {'application-name' | 'author' | 'description' | 'generator' | 'keywords' | 'viewport' | Metadata} name name for the metadata element
     * @param {string} content value for the metadata element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    metadata(name: 'application-name' | 'author' | 'description' | 'generator' | 'keywords' | 'viewport' | Metadata, content: string, attributes: object): void;
    /**
     * link between a document and an external resource
     * https://www.w3schools.com/tags/tag_link.asp
     * @param {string | ResourceLink} url path to the linked file
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    resourceLink(url: string | ResourceLink, attributes: object): void;
}
/**
 * link between a document and an external resource
 * https://www.w3schools.com/tags/tag_link.asp
 */
export class ResourceLink extends CrossOriginTag {
    /**
     * create a new instance of the object
     * @param {string} url path to the linked file
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url: string, attributes: object);
    set url(arg: string);
    /** location of the linked document */
    get url(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _media: string;
    set media(arg: string);
    /**
     * media query that specifies on what device the linked document will be displayed
     * https://www.w3schools.com/tags/att_link_media.asp
     */
    get media(): string;
    /**
     * @type {'alternate' | 'author' | 'dns-prefetch' | 'help' | 'icon' | 'license' | 'next' | 'pingback' | 'preconnect' | 'prefetch' | 'preload' | 'prerender' | 'prev' | 'search' | 'stylesheet'}
     * @protected
     */
    protected _relationship: 'alternate' | 'author' | 'dns-prefetch' | 'help' | 'icon' | 'license' | 'next' | 'pingback' | 'preconnect' | 'prefetch' | 'preload' | 'prerender' | 'prev' | 'search' | 'stylesheet';
    set relationship(arg: "search" | "alternate" | "next" | "prev" | "prerender" | "icon" | "author" | "stylesheet" | "dns-prefetch" | "help" | "license" | "pingback" | "preconnect" | "prefetch" | "preload");
    /**
     * relationship between the current document and the linked document
     * valid values: alternate, author, dns-prefetch, help, icon, license, next, pingback, preconnect, prefetch, preload, prerender, prev, search, stylesheet
     */
    get relationship(): "search" | "alternate" | "next" | "prev" | "prerender" | "icon" | "author" | "stylesheet" | "dns-prefetch" | "help" | "license" | "pingback" | "preconnect" | "prefetch" | "preload";
    /**
     * @type {string}
     * @protected
     */
    protected _sizes: string;
    set sizes(arg: string);
    /**
     * size of the linked resource (for rel="icon" only)
     * valid values: «height»x«width», any
     */
    get sizes(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _type: string;
    set type(arg: string);
    /**
     * media type of the linked document
     * http://www.iana.org/assignments/media-types/
     */
    get type(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _url: string;
}
/**
 * document type and the container for all other HTML elements
 * https://www.w3schools.com/tags/tag_html.asp
 */
export class HTML extends HTMLTag {
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
    set metadatas(arg: Metadata[]);
    /** meta tags */
    get metadatas(): Metadata[];
    set resourceLinks(arg: ResourceLink[]);
    /** linked resource documents [array] */
    get resourceLinks(): ResourceLink[];
    set scripts(arg: Script[]);
    /**
     * script tags to show before closing the tag
     * @type {Script[]}
     */
    get scripts(): Script[];
    set charset(arg: string);
    /**********************
     ***** Properties *****
     *********************/
    /**
     * character set
     * https://www.w3schools.com/tags/att_meta_charset.asp
     * @type {string}
     */
    get charset(): string;
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
     * @param {'application-name' | 'author' | 'description' | 'generator' | 'keywords' | 'viewport' | Metadata} name name for the metadata element
     * @param {string} content value for the metadata element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    metadata(name: 'application-name' | 'author' | 'description' | 'generator' | 'keywords' | 'viewport' | Metadata, content: string, attributes: object): void;
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
export class Metadata extends HTMLTag {
    /**
     * create a new instance of the object
     * @param {'application-name' | 'author' | 'description' | 'generator' | 'keywords' | 'viewport'} name name for the metadata element
     * @param {string} content value for the metadata element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(name: 'application-name' | 'author' | 'description' | 'generator' | 'keywords' | 'viewport', content: string, attributes: object);
    set name(arg: "application-name" | "author" | "description" | "generator" | "keywords" | "viewport");
    /** metadata name */
    get name(): "application-name" | "author" | "description" | "generator" | "keywords" | "viewport";
    set content(arg: string);
    /** metadata value */
    get content(): string;
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * @type {string}
     * @protected
     */
    protected _charset: string;
    set charset(arg: string);
    /**
     * character encoding for the HTML document
     * https://www.w3schools.com/tags/att_meta_charset.asp
     */
    get charset(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _content: string;
    /**
     * @type {'application-name' | 'author' | 'description' | 'generator' | 'keywords' | 'viewport'}
     * @protected
     */
    protected _name: 'application-name' | 'author' | 'description' | 'generator' | 'keywords' | 'viewport';
    /**
     * @type {string}
     * @protected
     */
    protected _headerEquivalent: string;
    set headerEquivalent(arg: string);
    /**
     * provides an HTTP header for the information/value of the content attribute and can be used to simulate an HTTP response header
     * https://www.w3schools.com/tags/att_meta_http_equiv.asp
     */
    get headerEquivalent(): string;
    /**********************
     ***** Properties *****
     *********************/
    /**
     * @type {string}
     * @protected
     */
    protected _contentType: string;
    set contentType(arg: string);
    /** character encoding for the document */
    get contentType(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _defaultStyle: string;
    set defaultStyle(arg: string);
    /**
     * the preferred style sheet to use (must match the value of the title attribute on a link element in the same document, or it
     * must match the value of the title attribute on a style element in the same document)
     */
    get defaultStyle(): string;
    /**
     * @type {number | string}
     * @protected
     */
    protected _refresh: number | string;
    set refresh(arg: string | number);
    /** time interval (in seconds) for the document to refresh itself, optionally append the time with "; url=http://www.example.com/" to relocate */
    get refresh(): string | number;
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
    set url(arg: string);
    /** location of the external script file (not needed when code is embedded) */
    get url(): string;
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _async: boolean;
    set async(arg: boolean);
    /** specifies that the script is executed asynchronously (only for external scripts) */
    get async(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _charset: string;
    set charset(arg: string);
    /**
     * character encoding used in an external script file
     * https://www.w3schools.com/charsets/default.asp
     */
    get charset(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _defer: string;
    set defer(arg: string);
    /** specifies that the script is executed when the page has finished parsing (only for external scripts) */
    get defer(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _type: string;
    set type(arg: string);
    /**
     * media type
     * http://www.iana.org/assignments/media-types/media-types.xhtml
     */
    get type(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _url: string;
}
/**
 * contains embedded styling information
 * https://www.w3schools.com/tags/tag_style.asp
 */
export class Style extends HTMLTag {
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
     * @type {string}
     * @protected
     */
    protected _media: string;
    set media(arg: string);
    /**
     * specifies what media/device the media resource is optimized for
     * https://www.w3schools.com/tags/att_style_media.asp
     */
    get media(): string;
}
/**
 * defines the title of the document, shows in browser toolbar, favorites, and search engine results
 * https://www.w3schools.com/tags/tag_title.asp
 */
export class Title extends HTMLTag {
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
export class Abbreviation extends BootstrapTag {
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
export class Address extends BootstrapTag {
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
export class Article extends BootstrapTag {
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
export class Aside extends BootstrapTag {
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
export class Bold extends BootstrapTag {
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
export class BlockQuote extends BootstrapTag {
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
export class Cite extends BootstrapTag {
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
export class Code extends BootstrapTag {
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
export class Deleted extends BootstrapTag {
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
export class DefinitionDescription extends BootstrapTag {
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
export class DefinitionList extends BootstrapTag {
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
export class DefinitionTerm extends BootstrapTag {
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
export class Details extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} summmary value or array of values to go inside the summary element
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(summary: any, contents: any, attributes: object);
    /********************
     ***** Elements *****
     *******************/
    /**
     * detail summary
     * @type DetailSummary
     */
    summary: DetailSummary;
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _open: boolean;
    set open(arg: boolean);
    /** specifies whether the details should be visible to the user */
    get open(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _onToggle: string;
    set onToggle(arg: string);
    /** fires when the user opens or closes the element */
    get onToggle(): string;
}
/**
 * visible heading for Details, which can be clicked to view/hide the details
 * https://www.w3schools.com/tags/tag_summary.asp
 */
export class DetailSummary extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * generic container for grouping content for styling/visual purposes
 * https://www.w3schools.com/tags/tag_div.asp
 */
export class Division extends BootstrapTag {
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
export class Emphasis extends BootstrapTag {
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
export class Figure extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {string} url path to the image
     * @param {string} alternateText alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references) – https://webaim.org/techniques/alttext/
     * @param {any} contents value or array of values to go inside the caption element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url: string, alternateText: string, caption: any, attributes: object);
    /**
     * @type {Image}
     * @protected
     */
    protected _image: Image;
    set caption(arg: FigureCaption);
    /**
     * caption for a <figure> element
     * https://www.w3schools.com/tags/tag_figcaption.asp
     */
    get caption(): FigureCaption;
    /********************
     ***** Elements *****
     *******************/
    /**
     * @type {FigureCaption}
     * @protected
     */
    protected _caption: FigureCaption;
    /**********************
     ***** Properties *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _captionOnTop: boolean;
    set captionOnTop(arg: boolean);
    /** put the caption element above the figure (default: false) */
    get captionOnTop(): boolean;
}
/**
 * caption for a <figure> element
 * https://www.w3schools.com/tags/tag_figcaption.asp
 */
export class FigureCaption extends BootstrapTag {
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
export class Footer extends BootstrapTag {
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
export class Header extends BootstrapTag {
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
export class Heading1 extends BootstrapTag {
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
export class Heading2 extends BootstrapTag {
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
export class Heading3 extends BootstrapTag {
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
export class Heading4 extends BootstrapTag {
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
export class Heading5 extends BootstrapTag {
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
export class Heading6 extends BootstrapTag {
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
export class Highlight extends BootstrapTag {
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
export class Italics extends BootstrapTag {
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
export class Icon extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {string} name FontAwesome class name (e.g., "fas fa-camera")
     * @param {string} ariaLabel accessibility string value that labels the current element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(name: string, ariaLabel: string, attributes: object);
}
/**
 * inline frame for embedding another document
 * https://www.w3schools.com/tags/tag_iframe.asp
 */
export class InlineFrame extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {string} url address of the document to embed
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url: string, attributes: object);
    set url(arg: string);
    /** address of the document to embed */
    get url(): string;
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _allowFullScreen: boolean;
    set allowFullScreen(arg: boolean);
    /** allow iframe to go into fullscreen mode (i.e., videos) */
    get allowFullScreen(): boolean;
    /**
     * @type {number}
     * @protected
     */
    protected _height: number;
    set height(arg: number);
    /** height in pixels */
    get height(): number;
    /**
     * @type {number}
     * @protected
     */
    protected _name: number;
    set name(arg: number);
    /** name of the iframe (can be used to reference the element in a JavaScript, or as the value of the target attribute of an <a> or <form> element, or the formtarget attribute of an <input> or <button> element) */
    get name(): number;
    /**
     * @type {string}
     * @protected
     */
    protected _sandbox: string;
    set sandbox(arg: string);
    /**
     * enables an extra set of restrictions for the content in the iframe (whitelist)
     * valid values: true (fully restrict) allow-forms, allow-pointer-lock, allow-popups, allow-same-origin, allow-scripts, allow-top-navigation
     */
    get sandbox(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _url: string;
    /**
     * @type {number}
     * @protected
     */
    protected _width: number;
    set width(arg: number);
    /**  width in pixels */
    get width(): number;
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
    set url(arg: string);
    /** URL path of an image file */
    get url(): string;
    set alternateText(arg: string);
    /**
     * alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references)
     * https://webaim.org/techniques/alttext/
     */
    get alternateText(): string;
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * @type {string}
     * @protected
     */
    protected _alternateText: string;
    /**
     * @type {number}
     * @protected
     */
    protected _height: number;
    set height(arg: number);
    /** height in pixels */
    get height(): number;
    /**
     * @type {boolean}
     * @protected
     */
    protected _isMap: boolean;
    set isMap(arg: boolean);
    /** specifies that the image is part of a server-side image-map (an image-map is an image with clickable areas) */
    get isMap(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _longDescription: string;
    set longDescription(arg: string);
    /** URL to a detailed description of an image */
    get longDescription(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _url: string;
    /**
     * @type {string}
     * @protected
     */
    protected _useMap: string;
    set useMap(arg: string);
    /**
     * specifies an image as a client-side image-map (an image-map is an image with clickable areas)
     * valid value: hash character ("#") plus the name of the <map> element to use
     */
    get useMap(): string;
    /**
     * @type {number}
     * @protected
     */
    protected _width: number;
    set width(arg: number);
    /** width in pixels */
    get width(): number;
    /**********************
     ***** Properties *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _thumbnail: boolean;
    set thumbnail(arg: boolean);
    /**
     * add a thin, rounded border
     * https://getbootstrap.com/docs/4.5/content/images/#image-thumbnails
     */
    get thumbnail(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _responsive: boolean;
    set responsive(arg: boolean);
    /**
     * make the image responsive by scaling it with the parent element
     * https://getbootstrap.com/docs/4.5/content/images/#responsive-images
     */
    get responsive(): boolean;
}
/**
 * underline (insertion)
 * https://www.w3schools.com/tags/tag_ins.asp
 */
export class Insert extends BootstrapTag {
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
export class Line extends BootstrapTag {
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
export class LineBreak extends BootstrapTag {
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
export class Link extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {string} url URL of the page the link goes to
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url: string, contents: any, attributes: object);
    set url(arg: string);
    /** URL of the page the link goes to */
    get url(): string;
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _download: boolean;
    set download(arg: boolean);
    /**
     * specifies that the target will be downloaded when a user clicks on the hyperlink
     */
    get download(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _linkLanguage: string;
    set linkLanguage(arg: string);
    /**
     * language code of the text in the linked document
     * https://www.w3schools.com/tags/ref_language_codes.asp
     */
    get linkLanguage(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _media: string;
    set media(arg: string);
    /**
     * media query that specifies on what device the linked document will be displayed
     * https://www.w3schools.com/tags/att_link_media.asp
     */
    get media(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _ping: string;
    set ping(arg: string);
    /** specifies a list of URLs (separated by spaces) to be notified if the user follows the hyperlink, sending a short HTTP POST request to the specified URL(s) */
    get ping(): string;
    /**
     * @type {'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noreferrer' | 'noopener' | 'prev' | 'search' | 'tag'}
     * @protected
     */
    protected _relationship: 'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noreferrer' | 'noopener' | 'prev' | 'search' | 'tag';
    set relationship(arg: "search" | "alternate" | "next" | "prev" | "tag" | "author" | "help" | "license" | "bookmark" | "external" | "nofollow" | "noreferrer" | "noopener");
    /** relationship between the current document and the linked document */
    get relationship(): "search" | "alternate" | "next" | "prev" | "tag" | "author" | "help" | "license" | "bookmark" | "external" | "nofollow" | "noreferrer" | "noopener";
    /**
     * @type {'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'unsafe-url'}
     * @protected
     */
    protected _referrerPolicy: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'unsafe-url';
    set referrerPolicy(arg: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "unsafe-url");
    /** specifies which referrer to send */
    get referrerPolicy(): "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "unsafe-url";
    /**
     * @type {string}
     * @protected
     */
    protected _target: string;
    set target(arg: string);
    /**
     * specifies where to open the linked document
     * valid values: _blank, _parent, _self, _top, «frame»
     */
    get target(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _type: string;
    set type(arg: string);
    /**
     * media type of the linked document
     * http://www.iana.org/assignments/media-types/
     */
    get type(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _url: string;
}
/**
 * list of items
 * https://www.w3schools.com/tags/tag_ol.asp
 * https://www.w3schools.com/tags/tag_ul.asp
 */
export class List extends BootstrapTag {
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
    /**
     * @type {boolean}
     * @protected
     */
    protected _reversed: boolean;
    set reversed(arg: boolean);
    /** ordered list should be descending (9, 8, 7, …) */
    get reversed(): boolean;
    /**
     * @type {number}
     * @protected
     */
    protected _startingValue: number;
    set startingValue(arg: any);
    /** starting value for ordered lists */
    get startingValue(): any;
    /**
     * @type {'1' | 'A' | 'a' | 'I' | 'i'}
     * @protected
     */
    protected _type: '1' | 'A' | 'a' | 'I' | 'i';
    set type(arg: "a" | "i" | "1" | "A" | "I");
    /**
     * markers to use for ordered lists
     * valid values: 1, A, a, I, i
     */
    get type(): "a" | "i" | "1" | "A" | "I";
}
/**
 * list item for ordered/unordered lists
 * https://www.w3schools.com/tags/tag_li.asp
 */
export class ListItem extends BootstrapTag {
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
     * @type {number}
     * @protected
     */
    protected _value: number;
    set value(arg: number);
    /** value of a list item, where the following list items will increment from that number (only for ordered lists) */
    get value(): number;
}
/**
 * monospaced and preserves whitespace (pre-formatted)
 * https://www.w3schools.com/tags/tag_pre.asp
 */
export class Monospace extends BootstrapTag {
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
export class Navigation extends BootstrapTag {
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
export class Output extends BootstrapTag {
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
     * @type {string}
     * @protected
     */
    protected _for: string;
    set for(arg: string);
    /**
     * specifies the relationship between the result of the calculation, and the elements used in the calculation
     * valid value: element ID(s) (space-separated)
     */
    get for(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _form: string;
    /**
     * @type {string}
     * @protected
     */
    protected _name: string;
    set name(arg: string);
    /** element name (for use by calculation trigger code) */
    get name(): string;
}
/**
 * paragraph
 * https://www.w3schools.com/tags/tag_p.asp
 */
export class Paragraph extends BootstrapTag {
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
export class Quote extends BootstrapTag {
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
export class Strike extends BootstrapTag {
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
export class Section extends BootstrapTag {
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
export class Small extends BootstrapTag {
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
export class Span extends BootstrapTag {
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
export class Strong extends BootstrapTag {
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
export class Subscript extends BootstrapTag {
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
export class Superscript extends BootstrapTag {
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
 * TODO: add various methods for SVG elements: https://www.w3schools.com/graphics/svg_intro.asp
 */
export class SVG extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {number} width width in pixels
     * @param {number} height height in pixels
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, width: number, height: number, attributes: object);
    set width(arg: number);
    /** width in pixels */
    get width(): number;
    set height(arg: number);
    /** height in pixels */
    get height(): number;
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * @type {number}
     * @protected
     */
    protected _height: number;
    /**
     * @type {number}
     * @protected
     */
    protected _width: number;
}
/**
 * defining instance of a term (i.e., the parent container of this tag must also contain the definition/explanation for this term)
 * TIP: use the ID so it's easily linked to via "#id")
 * https://www.w3schools.com/tags/tag_dfn.asp
 */
export class Term extends BootstrapTag {
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
export class Time extends BootstrapTag {
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
     * @type {string}
     * @protected
     */
    protected _timestamp: string;
    set timestamp(arg: string);
    /** SQL-like timestamp so that browsers can offer to add date reminders through the user's calendar, and search engines can produce smarter search results, etc. */
    get timestamp(): string;
}
/**
 * underline
 * https://www.w3schools.com/tags/tag_u.asp
 */
export class Underline extends BootstrapTag {
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
export class Table extends BootstrapTag {
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
    /**
     * table caption
     * @type {TableCaption}
     */
    caption: TableCaption;
    /********************
     ***** Elements *****
     *******************/
    /**
     * table body
     * @type {TableBody}
     */
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
export class TableCaption extends BootstrapTag {
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
    /**
     * @type {string}
     * @protected
     */
    protected _abbreviation: string;
    /**
     * @type {'col' | 'colgroup' | 'row' | 'rowgroup'}
     * @protected
     */
    protected _scope: 'col' | 'colgroup' | 'row' | 'rowgroup';
    set scope(arg: "col" | "colgroup" | "row" | "rowgroup");
    /** specifies what the header cell is a header for */
    get scope(): "col" | "colgroup" | "row" | "rowgroup";
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
    /**
     * @type {boolean}
     * @protected
     */
    protected _active: boolean;
    set active(arg: boolean);
    /** active state */
    get active(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _block: boolean;
    set block(arg: boolean);
    /** block-level (full-width) */
    get block(): boolean;
    /**
     * @type {'sm' | 'lg'}
     * @protected
     */
    protected _scale: 'sm' | 'lg';
    set scale(arg: "sm" | "lg");
    /**
     * button size
     * valid values: null (default), sm (small), lg (large)
     */
    get scale(): "sm" | "lg";
    /**
     * @type {'button' | 'reset' | 'submit'}
     * @protected
     */
    protected _type: 'button' | 'reset' | 'submit';
    set type(arg: "button" | "reset" | "submit");
    /**
     * type of button
     * valid values: button, reset, submit
     */
    get type(): "button" | "reset" | "submit";
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
    /**
     * @type {boolean}
     * @protected
     */
    protected _multiple: boolean;
    set multiple(arg: boolean);
    /** specifies that multiple options can be selected at once */
    get multiple(): boolean;
    /**
     * @type {'sm' | 'lg'}
     * @protected
     */
    protected _scale: 'sm' | 'lg';
    set scale(arg: "sm" | "lg");
    /**
     * dropdown size
     * valid values: null (default), sm (small), lg (large)
     */
    get scale(): "sm" | "lg";
    /**
     * @type {number}
     * @protected
     */
    protected _size: number;
    set size(arg: number);
    /** number of visible options in a drop-down list */
    get size(): number;
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
    /**
     * @type {string}
     * @protected
     */
    protected _label: string;
}
/**
 * dropdown item
 * https://www.w3schools.com/tags/tag_option.asp
 */
export class DropdownOption extends HTMLTag {
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
    /**
     * @type {string}
     * @protected
     */
    protected _label: string;
    /**
     * @type {boolean}
     * @protected
     */
    protected _selected: boolean;
    /** pre-select item when the page loads [boolean] */
    set selected(arg: any);
    /**
     * @type {string}
     * @protected
     */
    protected _value: string;
    set value(arg: string);
    /** field value to submit when selected */
    get value(): string;
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
    /**
     * wrapper for holding all the components
     * @type Division
     */
    wrapper: Division;
}
/**
 * form element container
 * https://www.w3schools.com/tags/tag_form.asp
 * https://getbootstrap.com/docs/4.5/components/forms/
 */
export class Form extends BootstrapTag {
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
     * @type {boolean}
     * @protected
     */
    protected _autoComplete: boolean;
    set autoComplete(arg: boolean);
    /** allow auto-complete */
    get autoComplete(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _charset: string;
    set charset(arg: string);
    /**
     * character encoding for the form submission (default is the document's encoding)
     * https://www.w3schools.com/tags/att_meta_charset.asp
     */
    get charset(): string;
    /**
     * @type {boolean}
     * @protected
     */
    protected _fileUpload: boolean;
    set fileUpload(arg: boolean);
    /** form has a file upload element */
    get fileUpload(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _inline: boolean;
    set inline(arg: boolean);
    /** display a series of labels, form controls, and buttons on a single horizontal row */
    get inline(): boolean;
    /**
     * @type {'get' | 'post'}
     * @protected
     */
    protected _method: 'get' | 'post';
    set method(arg: "get" | "post");
    /** HTTP method to use when sending form data */
    get method(): "get" | "post";
    /**
     * @type {string}
     * @protected
     */
    protected _name: string;
    set name(arg: string);
    /** name for the form; used to reference elements in a JavaScript, or to reference form data after a form is submitted */
    get name(): string;
    /**
     * @type {boolean}
     * @protected
     */
    protected _noValidate: boolean;
    set noValidate(arg: boolean);
    /** form should not be validated when submitted */
    get noValidate(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _target: string;
    set target(arg: string);
    /**
     * specifies where to display the response that is received after submitting the form
     * valid values: _blank, _parent, _self, _top, «frame»
     */
    get target(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _url: string;
    set url(arg: string);
    /** URL where to send data when the form is submitted */
    get url(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onSubmit: string;
    set onSubmit(arg: string);
    /** fires when a form is submitted */
    get onSubmit(): string;
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
    /**
     * @type {boolean}
     * @protected
     */
    protected _autoComplete: boolean;
    set autoComplete(arg: boolean);
    /** allow auto-complete */
    get autoComplete(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _list: string;
    /**
     * @type {string}
     * @protected
     */
    protected _max: string;
    set max(arg: string);
    /** maximum value (number/date) */
    get max(): string;
    /**
     * @type {number}
     * @protected
     */
    protected _maxLength: number;
    set maxLength(arg: number);
    /** maximum number of characters */
    get maxLength(): number;
    /**
     * @type {string}
     * @protected
     */
    protected _min: string;
    set min(arg: string);
    /** minimum value (number/date) */
    get min(): string;
    /**
     * @type {boolean}
     * @protected
     */
    protected _multiple: boolean;
    set multiple(arg: boolean);
    /** user can enter more than one value for file (Ctrl/Shift + Select) or email (comma-separated) */
    get multiple(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _pattern: string;
    set pattern(arg: string);
    /** regular expression for validation */
    get pattern(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _placeholder: string;
    set placeholder(arg: string);
    /** short hint that describes the expected value */
    get placeholder(): string;
    /**
     * @type {boolean}
     * @protected
     */
    protected _plainText: boolean;
    set plainText(arg: boolean);
    /** remove the default form field styling and preserve the correct margin and padding */
    get plainText(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _readOnly: boolean;
    set readOnly(arg: boolean);
    /** input field is read-only */
    get readOnly(): boolean;
    /**
     * @type {number}
     * @protected
     */
    protected _size: number;
    set size(arg: number);
    /** width in characters */
    get size(): number;
    /**
     * @type {'sm' | 'lg'}
     * @protected
     */
    protected _scale: 'sm' | 'lg';
    set scale(arg: "sm" | "lg");
    /**
     * input size
     * valid values: null (default), sm (small), lg (large)
     */
    get scale(): "sm" | "lg";
    /**
     * @type {number}
     * @protected
     */
    protected _step: number;
    set step(arg: number);
    /** interval between legal numbers */
    get step(): number;
    /**
     * @type {'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'}
     * @protected
     */
    protected _type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
    set type(arg: "number" | "search" | "password" | "hidden" | "button" | "time" | "image" | "text" | "reset" | "submit" | "date" | "url" | "checkbox" | "radio" | "file" | "color" | "datetime-local" | "email" | "month" | "range" | "tel" | "week");
    /** type of input */
    get type(): "number" | "search" | "password" | "hidden" | "button" | "time" | "image" | "text" | "reset" | "submit" | "date" | "url" | "checkbox" | "radio" | "file" | "color" | "datetime-local" | "email" | "month" | "range" | "tel" | "week";
    /**
     * @type {string}
     * @protected
     */
    protected _value: string;
    set value(arg: string);
    /** field value to submit */
    get value(): string;
    /********************************
     ***** Attributes: TextArea *****
     *******************************/
    /**
     * @type {number}
     * @protected
     */
    protected _columns: number;
    set columns(arg: number);
    /** visible width */
    get columns(): number;
    /**
     * @type {number}
     * @protected
     */
    protected _rows: number;
    set rows(arg: number);
    /** visible number of lines */
    get rows(): number;
    /**
     * @type {'hard' | 'soft'}
     * @protected
     */
    protected _wrap: 'hard' | 'soft';
    set wrap(arg: "hard" | "soft");
    /**
     * how the text in a text area is to be wrapped when submitted in a form
     * valid values: hard (adds newlines, must have cols defined), soft (not wrapped, default)
     */
    get wrap(): "hard" | "soft";
    /**************************************
     ***** Attributes: Checkbox/Radio *****
     *************************************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _checked: boolean;
    set checked(arg: boolean);
    /** for "checkbox"/"radio" types; element should be pre-selected when the page loads */
    get checked(): boolean;
    /****************************
     ***** Attributes: File *****
     ***************************/
    /**
     * @type {string}
     * @protected
     */
    protected _accept: string;
    set accept(arg: string);
    /**
     * for "file" type
     * valid values: «extension», audio/*, video/*, image/*, «media_type» – http://www.iana.org/assignments/media-types/
     */
    get accept(): string;
    /*****************************
     ***** Attributes: Image *****
     ****************************/
    /**
     * @type {string}
     * @protected
     */
    protected _alternateText: string;
    set alternateText(arg: string);
    /**
     * for "image" type; alternate text (for accessibility and broken links)
     * https://webaim.org/techniques/alttext/
     */
    get alternateText(): string;
    /**
     * @type {number}
     * @protected
     */
    protected _height: number;
    set height(arg: number);
    /** for "image" type; height in pixels */
    get height(): number;
    /**
     * @type {number}
     * @protected
     */
    protected _width: number;
    set width(arg: number);
    /** for "image" type; width in pixels */
    get width(): number;
}
/**
 * label for a form element
 * https://www.w3schools.com/tags/tag_label.asp
 */
export class Label extends BootstrapTag {
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
    /**
     * @type {string}
     * @protected
     */
    protected _for: string;
    set for(arg: string);
    /** ID for the form element the label is bound to */
    get for(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _form: string;
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
/**
 * extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs
 * https://getbootstrap.com/docs/4.5/components/input-group/
 */
export class InputGroup extends Division {
    /**
     * create a new instance of the object
     * @param {any} prepend value or array of values to go inside the prepended element
     * @param {any} contents value or array of values to go inside the Input Group element
     * @param {any} append value or array of values to go inside the appended element
     * @param {object} attributes key–value pairs of HTML attributes and other properties for the Input Group element
     */
    constructor(prepend: any, contents: any, append: any, attributes: object);
    /**
     * element that goes before the main content
     * @type {Division}
     */
    prepend: Division;
    /********************
     ***** Elements *****
     *******************/
    /**
     * element that goes after the main content
     * @type {Division}
     */
    append: Division;
    /**********************
     ***** Properties *****
     *********************/
    /**
     * @type {'sm' | 'lg'}
     * @protected
     */
    protected _scale: 'sm' | 'lg';
    set scale(arg: "sm" | "lg");
    /**
     * input group size
     * valid values: null (default), sm (small), lg (large)
     */
    get scale(): "sm" | "lg";
    /*******************
     ***** Methods *****
     ******************/
    /**
     * add append contents
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    addAppend(contents: any, attributes: object): void;
    /**
     * add prepend contents
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    addPrepend(contents: any, attributes: object): void;
}
/***********************************************************************************************************************
 ************************************************** Bootstrap Content **************************************************
 **********************************************************************************************************************/
/**
 * primary opinionated heading
 * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
 */
export class DisplayHeading1 extends Heading1 {
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
export class DisplayHeading2 extends Heading2 {
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
export class DisplayHeading3 extends Heading3 {
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
export class DisplayHeading4 extends Heading4 {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * larger paragraph that stands out more than regular paragraph
 * https://getbootstrap.com/docs/4.5/content/typography/#lead
 */
export class LeadingParagraph extends Paragraph {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
}
/**
 * hide elements on all devices except screen readers
 * https://getbootstrap.com/docs/4.5/utilities/screen-readers/
 */
export class ScreenReader extends Span {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /**********************
     ***** Properties *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _focusable: boolean;
    set focusable(arg: any);
    /** how the element again when it’s focused (e.g. by a keyboard-only user) */
    get focusable(): any;
}
/***************************************************************************************************************************
 ************************************************** Bootstrap: Components **************************************************
 **************************************************************************************************************************/
/**
 * provides contextual feedback messages for typical user actions
 * https://getbootstrap.com/docs/4.5/components/alerts/
 */
export class Alert extends Division {
    /**************************
     ***** Static Methods *****
     *************************/
    /**
     * add Bootstrap classes for headings
     * @param {Heading1 | Heading2 | Heading3 | Heading4 | Heading5 | Heading6} heading
     */
    static formatHeading(heading: Heading1 | Heading2 | Heading3 | Heading4 | Heading5 | Heading6): Heading1 | Heading2 | Heading3 | Heading4 | Heading5 | Heading6;
    /**
     * add Bootstrap classes for links
     * @param {Link} link
     */
    static formatLink(link: Link): Link;
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /********************
     ***** Elements *****
     *******************/
    /**
     * button to dismiss alert
     * @type {Button}
     */
    dismissButton: Button;
    /**********************
     ***** Properties *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _dismissible: boolean;
    set dismissible(arg: boolean);
    /** alert can be closed out */
    get dismissible(): boolean;
}
/**
 * indicate the loading state of a component or page
 * https://getbootstrap.com/docs/4.5/components/spinners/
 */
export class Spinner extends Division {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the screen reader
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, attributes: object);
    /**********************
     ***** Properties *****
     *********************/
    /**
     * @type {'sm' | string}
     * @protected
     */
    protected _scale: 'sm' | string;
    set scale(arg: string);
    /**
     * size of spinner
     * valid values: null, sm, styling units (e.g., "3rem")
     */
    get scale(): string;
    /**
     * @type {'border' | 'grow'}
     * @protected
     */
    protected _type: 'border' | 'grow';
    set type(arg: "border" | "grow");
    /**
     * type of spinner
     * valid values: border (horseshoe), grow (pulsing dot)
     */
    get type(): "border" | "grow";
    /*****************************
     ***** Protected Methods *****
     ****************************/
    /**
     * type and scale are interdependent
     * @param {any} type
     * @param {any} scale
     * @protected
     */
    protected _setTypeScale(type: any, scale: any): void;
}
/****************************************************************************************************************************
 ************************************************** Bootstrap: Grid System **************************************************
 ***************************************************************************************************************************/
/**
 * twelve column grid system by breakpoint
 * https://getbootstrap.com/docs/4.5/layout/grid/
 */
export class Column extends Division {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} column grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} columnSmall small breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} columnMedium medium breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} columnLarge large breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} columnXL extra-large breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents: any, column: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, columnSmall: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, columnMedium: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, columnLarge: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, columnXL: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, attributes: object);
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
    set fluid(arg: boolean);
    /** 100% width across all viewport and device sizes (true) or responsive pixel width (false) */
    get fluid(): boolean;
    /**********************
     ***** Properties *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _fluid: boolean;
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
/** Bootstrap support (abstract) */
declare class BootstrapTag extends HTMLTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag: string, contents: any, attributes: object);
    /*************************************
     ***** Alignment and Positioning *****
     ************************************/
    /**
     * @type {'center' | 'left' | 'right'}
     * @protected
     */
    protected _align: 'center' | 'left' | 'right';
    set align(arg: "left" | "right" | "center");
    /**
     * align text components
     * https://getbootstrap.com/docs/4.5/utilities/text/#text-alignment
     */
    get align(): "left" | "right" | "center";
    /**
     * @type {'center' | 'left' | 'right'}
     * @protected
     */
    protected _alignSmall: 'center' | 'left' | 'right';
    set alignSmall(arg: "left" | "right" | "center");
    /**
     * small breakpoint align text components
     * https://getbootstrap.com/docs/4.5/utilities/text/#text-alignment
     */
    get alignSmall(): "left" | "right" | "center";
    /**
     * @type {'center' | 'left' | 'right'}
     * @protected
     */
    protected _alignMedium: 'center' | 'left' | 'right';
    set alignMedium(arg: "left" | "right" | "center");
    /**
     * medium breakpoint align text components
     * https://getbootstrap.com/docs/4.5/utilities/text/#text-alignment
     */
    get alignMedium(): "left" | "right" | "center";
    /**
     * @type {'center' | 'left' | 'right'}
     * @protected
     */
    protected _alignLarge: 'center' | 'left' | 'right';
    set alignLarge(arg: "left" | "right" | "center");
    /**
     * large breakpoint align text components
     * https://getbootstrap.com/docs/4.5/utilities/text/#text-alignment
     */
    get alignLarge(): "left" | "right" | "center";
    /**
     * @type {'center' | 'left' | 'right'}
     * @protected
     */
    protected _alignXL: 'center' | 'left' | 'right';
    set alignXL(arg: "left" | "right" | "center");
    /**
     * extra-large breakpoint align text components
     * https://getbootstrap.com/docs/4.5/utilities/text/#text-alignment
     */
    get alignXL(): "left" | "right" | "center";
    /**
     * @type {'absolute' | 'fixed' | 'fixed-bottom' | 'fixed-top' | 'relative' | 'static' | 'sticky' | 'sticky-top'}
     * @protected
     */
    protected _position: 'absolute' | 'fixed' | 'fixed-bottom' | 'fixed-top' | 'relative' | 'static' | 'sticky' | 'sticky-top';
    set position(arg: "absolute" | "fixed" | "fixed-bottom" | "fixed-top" | "relative" | "static" | "sticky" | "sticky-top");
    /**
     * align text components
     * https://getbootstrap.com/docs/4.5/utilities/position/
     */
    get position(): "absolute" | "fixed" | "fixed-bottom" | "fixed-top" | "relative" | "static" | "sticky" | "sticky-top";
    /*******************
     ***** Borders *****
     ******************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _borders: boolean;
    set borders(arg: boolean);
    /**
     * border on all sides (true); subtractive (false)
     * https://getbootstrap.com/docs/4.5/utilities/borders/
     */
    get borders(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _borderBottom: boolean;
    set borderBottom(arg: boolean);
    /**
     * bottom border (true); subtractive (false)
     * https://getbootstrap.com/docs/4.5/utilities/borders/
     */
    get borderBottom(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _borderLeft: boolean;
    set borderLeft(arg: boolean);
    /**
     * left border (true); subtractive (false)
     * https://getbootstrap.com/docs/4.5/utilities/borders/
     */
    get borderLeft(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _borderRight: boolean;
    set borderRight(arg: boolean);
    /**
     * right border (true); subtractive (false)
     * https://getbootstrap.com/docs/4.5/utilities/borders/
     */
    get borderRight(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _borderTop: boolean;
    set borderTop(arg: boolean);
    /**
     * top border (true); subtractive (false)
     * https://getbootstrap.com/docs/4.5/utilities/borders/
     */
    get borderTop(): boolean;
    /**
     * @type {true | false | 'bottom' | 'circle' | 'left' | 'pill' | 'right' | 'rounded' | 'top'}
     * @protected
     */
    protected _borderRadius: true | false | 'bottom' | 'circle' | 'left' | 'pill' | 'right' | 'rounded' | 'top';
    set borderRadius(arg: boolean | "left" | "right" | "bottom" | "top" | "circle" | "pill" | "rounded");
    /**
     * Bootstrap border theme
     * valid values: danger, dark, info, light, primary, secondary, success, warning, white
     * https://getbootstrap.com/docs/4.5/utilities/borders/#border-color
     */
    get borderRadius(): boolean | "left" | "right" | "bottom" | "top" | "circle" | "pill" | "rounded";
    /**
     * @type {string}
     * @protected
     */
    protected _borderTheme: string;
    set borderTheme(arg: string);
    /**
     * Bootstrap border theme
     * valid values: danger, dark, info, light, primary, secondary, success, warning, white
     * https://getbootstrap.com/docs/4.5/utilities/borders/#border-color
     */
    get borderTheme(): string;
    /***********************
     ***** Grid System *****
     **********************/
    /**
     * @type {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}
     * @protected
     */
    protected _gridColumn: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    set gridColumn(arg: true | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
    /**
     * grid column width
     * valid values are: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    get gridColumn(): true | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * @type {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}
     * @protected
     */
    protected _gridColumnSmall: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    set gridColumnSmall(arg: true | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
    /**
     * small breakpoint grid column width
     * valid values are: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    get gridColumnSmall(): true | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * @type {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}
     * @protected
     */
    protected _gridColumnMedium: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    set gridColumnMedium(arg: true | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
    /**
     * medium breakpoint grid column width
     * valid values are: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    get gridColumnMedium(): true | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * @type {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}
     * @protected
     */
    protected _gridColumnLarge: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    set gridColumnLarge(arg: true | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
    /**
     * large breakpoint grid column width
     * valid values are: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    get gridColumnLarge(): true | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * @type {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}
     * @protected
     */
    protected _gridColumnXL: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    set gridColumnXL(arg: true | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
    /**
     * extra-large breakpoint grid column width
     * valid values are: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    get gridColumnXL(): true | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * @type {boolean}
     * @protected
     */
    protected _gridFormRow: boolean;
    set gridFormRow(arg: boolean);
    /**
     * variation of the standard grid row that overrides the default column gutters for tighter and more compact layouts [boolean]
     * https://getbootstrap.com/docs/4.5/components/forms/#form-row
     */
    get gridFormRow(): boolean;
    /**
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11}
     * @protected
     */
    protected _gridOffset: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    set gridOffset(arg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11);
    /**
     * move the grid column to the right (i.e., increase the left margin) by given number of columns
     * https://getbootstrap.com/docs/4.5/layout/grid/#offsetting-columns
     */
    get gridOffset(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    /**
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11}
     * @protected
     */
    protected _gridOffsetSmall: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    set gridOffsetSmall(arg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11);
    /**
     * small breakpoint move the grid column to the right (i.e., increase the left margin) by given number of columns
     * https://getbootstrap.com/docs/4.5/layout/grid/#offsetting-columns
     */
    get gridOffsetSmall(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    /**
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11}
     * @protected
     */
    protected _gridOffsetMedium: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    set gridOffsetMedium(arg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11);
    /**
     * medium breakpoint move the grid column to the right (i.e., increase the left margin) by given number of columns
     * https://getbootstrap.com/docs/4.5/layout/grid/#offsetting-columns
     */
    get gridOffsetMedium(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    /**
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11}
     * @protected
     */
    protected _gridOffsetLarge: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    set gridOffsetLarge(arg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11);
    /**
     * large breakpoint move the grid column to the right (i.e., increase the left margin) by given number of columns
     * https://getbootstrap.com/docs/4.5/layout/grid/#offsetting-columns
     */
    get gridOffsetLarge(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    /**
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11}
     * @protected
     */
    protected _gridOffsetXL: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    set gridOffsetXL(arg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11);
    /**
     * extra-large breakpoint move the grid column to the right (i.e., increase the left margin) by given number of columns
     * valid values: 1–12 (number of columns)
     * https://getbootstrap.com/docs/4.5/layout/grid/#offsetting-columns
     */
    get gridOffsetXL(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    /**
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}
     * @protected
     */
    protected _gridOrder: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    set gridOrder(arg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
    /**
     * grid column order
     * https://getbootstrap.com/docs/4.5/layout/grid/#reordering
     */
    get gridOrder(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}
     * @protected
     */
    protected _gridOrderSmall: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    set gridOrderSmall(arg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
    /**
     * small breakpoint grid column order
     * https://getbootstrap.com/docs/4.5/layout/grid/#reordering
     */
    get gridOrderSmall(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}
     * @protected
     */
    protected _gridOrderMedium: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    set gridOrderMedium(arg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
    /**
     * medium breakpoint grid column order
     * https://getbootstrap.com/docs/4.5/layout/grid/#reordering
     */
    get gridOrderMedium(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}
     * @protected
     */
    protected _gridOrderLarge: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    set gridOrderLarge(arg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
    /**
     * large breakpoint grid column order
     * https://getbootstrap.com/docs/4.5/layout/grid/#reordering
     */
    get gridOrderLarge(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}
     * @protected
     */
    protected _gridOrderXL: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    set gridOrderXL(arg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12);
    /**
     * extra-large breakpoint grid column order
     * https://getbootstrap.com/docs/4.5/layout/grid/#reordering
     */
    get gridOrderXL(): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    /**
     * @type {boolean}
     * @protected
     */
    protected _gridRow: boolean;
    set gridRow(arg: boolean);
    /**
     * wrapper for grid columns
     * https://getbootstrap.com/docs/4.5/layout/grid/
     */
    get gridRow(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _gridRowNoGutters: boolean;
    set gridRowNoGutters(arg: boolean);
    /**
     * keep margins/padding [true]; remove margins/padding from the row and all immediate children columns [false]
     * https://getbootstrap.com/docs/4.5/layout/grid/#gutters
     * https://getbootstrap.com/docs/4.5/layout/grid/#no-gutters
     */
    get gridRowNoGutters(): boolean;
    /******************
     ***** Layout *****
     *****************/
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _margins: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set margins(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * margins for all sides
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get margins(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsSmall: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsSmall(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * small breakpoint margins for all sides
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsSmall(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsMedium: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsMedium(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * medium breakpoint margins for all sides
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsMedium(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsLarge: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsLarge(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * large breakpoint margins for all sides
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsLarge(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsXL: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsXL(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * extra-large breakpoint margins for all sides
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsXL(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsX: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsX(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * left/right margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsX(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsXSmall: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsXSmall(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * small breakpoint left/right margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsXSmall(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsXMedium: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsXMedium(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * medium breakpoint left/right margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsXMedium(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsXLarge: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsXLarge(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * large breakpoint left/right margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsXLarge(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsXXL: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsXXL(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * extra-large breakpoint left/right margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsXXL(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsY: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsY(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * top/bottom margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsY(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsYSmall: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsYSmall(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * small breakpoint top/bottom margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsYSmall(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsYMedium: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsYMedium(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * medium breakpoint top/bottom margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsYMedium(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsYLarge: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsYLarge(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * large breakpoint top/bottom margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsYLarge(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginsYXL: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginsYXL(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * extra-large breakpoint top/bottom margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginsYXL(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginBottom: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginBottom(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * bottom margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginBottom(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginBottomSmall: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginBottomSmall(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * small breakpoint bottom margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginBottomSmall(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginBottomMedium: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginBottomMedium(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * medium breakpoint bottom margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginBottomMedium(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginBottomLarge: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginBottomLarge(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * large breakpoint bottom margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginBottomLarge(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginBottomXL: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginBottomXL(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * extra-large breakpoint bottom margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginBottomXL(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginLeft: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginLeft(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * left margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginLeft(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginLeftSmall: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginLeftSmall(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * small breakpoint left margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginLeftSmall(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginLeftMedium: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginLeftMedium(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * medium breakpoint left margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginLeftMedium(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginLeftLarge: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginLeftLarge(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * large breakpoint left margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginLeftLarge(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginLeftXL: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginLeftXL(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * extra-large breakpoint left margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginLeftXL(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginRight: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginRight(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * right margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginRight(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginRightSmall: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginRightSmall(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * small breakpoint right margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginRightSmall(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginRightMedium: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginRightMedium(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * medium breakpoint right margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginRightMedium(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginRightLarge: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginRightLarge(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * large breakpoint right margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginRightLarge(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginRightXL: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginRightXL(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * extra-large breakpoint right margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginRightXL(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginTop: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginTop(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * top margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginTop(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginTopSmall: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginTopSmall(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * small breakpoint top margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginTopSmall(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginTopMedium: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginTopMedium(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * medium breakpoint top margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginTopMedium(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginTopLarge: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginTopLarge(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * large breakpoint top margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginTopLarge(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {-5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _marginTopXL: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set marginTopXL(arg: 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2);
    /**
     * extra-large breakpoint top margin
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get marginTopXL(): 0 | "auto" | 1 | 2 | -1 | 3 | 4 | 5 | -5 | -4 | -3 | -2;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _padding: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set padding(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * padding for all sides
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get padding(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingSmall: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingSmall(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * small breakpoint padding for all sides
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingSmall(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingMedium: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingMedium(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * medium breakpoint padding for all sides
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingMedium(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingLarge: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingLarge(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * large breakpoint padding for all sides
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingLarge(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingXL: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingXL(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * extra-large breakpoint padding for all sides
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingXL(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingBottom: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingBottom(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * bottom padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingBottom(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingBottomSmall: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingBottomSmall(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * small breakpoint bottom padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingBottomSmall(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingBottomMedium: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingBottomMedium(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * medium breakpoint bottom padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingBottomMedium(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingBottomLarge: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingBottomLarge(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * large breakpoint bottom padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingBottomLarge(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingBottomXL: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingBottomXL(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * extra-large breakpoint bottom padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingBottomXL(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingLeft: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingLeft(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * left padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingLeft(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingLeftSmall: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingLeftSmall(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * small breakpoint left padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingLeftSmall(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingLeftMedium: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingLeftMedium(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * medium breakpoint left padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingLeftMedium(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingLeftLarge: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingLeftLarge(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * large breakpoint left padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingLeftLarge(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingLeftXL: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingLeftXL(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * extra-large breakpoint left padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingLeftXL(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingRight: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingRight(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * right padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingRight(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingRightSmall: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingRightSmall(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * small breakpoint right padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingRightSmall(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingRightMedium: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingRightMedium(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * medium breakpoint right padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingRightMedium(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingRightLarge: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingRightLarge(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * large breakpoint right padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingRightLarge(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingRightXL: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingRightXL(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * extra-large breakpoint right padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingRightXL(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingTop: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingTop(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * top padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingTop(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingTopSmall: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingTopSmall(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * small breakpoint top padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingTopSmall(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingTopMedium: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingTopMedium(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * medium breakpoint top padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingTopMedium(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingTopLarge: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingTopLarge(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * large breakpoint top padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingTopLarge(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingTopXL: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingTopXL(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * extra-large breakpoint top padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingTopXL(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingX: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingX(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * left/right padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingX(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingXSmall: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingXSmall(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * small breakpoint left/right padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingXSmall(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingXMedium: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingXMedium(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * medium breakpoint left/right padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingXMedium(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingXLarge: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingXLarge(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * large breakpoint left/right padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingXLarge(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingXXL: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingXXL(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * extra-large breakpoint left/right padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingXXL(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingY: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingY(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * top/bottom padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingY(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingYSmall: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingYSmall(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * small breakpoint top/bottom padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingYSmall(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingYMedium: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingYMedium(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * medium breakpoint top/bottom padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingYMedium(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingYLarge: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingYLarge(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * large breakpoint top/bottom padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingYLarge(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /**
     * @type {0 | 1 | 2 | 3 | 4 | 5 | 'auto'}
     * @protected
     */
    protected _paddingYXL: 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
    set paddingYXL(arg: 0 | "auto" | 1 | 2 | 3 | 4 | 5);
    /**
     * extra-large breakpoint top/bottom padding
     * https://getbootstrap.com/docs/4.5/utilities/spacing/
     */
    get paddingYXL(): 0 | "auto" | 1 | 2 | 3 | 4 | 5;
    /******************
     ***** Sizing *****
     *****************/
    /**
     * @type {25 | 50 | 75 | 100 | 'auto'}
     * @protected
     */
    protected _maxHeight: 25 | 50 | 75 | 100 | 'auto';
    set maxHeight(arg: "auto" | 25 | 50 | 75 | 100);
    /**
     * maximum height in relation to the element's parent
     * https://getbootstrap.com/docs/4.5/utilities/sizing/#relative-to-the-parent
     */
    get maxHeight(): "auto" | 25 | 50 | 75 | 100;
    /**
     * @type {25 | 50 | 75 | 100 | 'auto'}
     * @protected
     */
    protected _maxWidth: 25 | 50 | 75 | 100 | 'auto';
    set maxWidth(arg: "auto" | 25 | 50 | 75 | 100);
    /**
     * maximum width in relation to the element's parent
     * https://getbootstrap.com/docs/4.5/utilities/sizing/#relative-to-the-parent
     */
    get maxWidth(): "auto" | 25 | 50 | 75 | 100;
    /**
     * @type {25 | 50 | 75 | 100 | 'auto'}
     * @protected
     */
    protected _relativeHeight: 25 | 50 | 75 | 100 | 'auto';
    set relativeHeight(arg: "auto" | 25 | 50 | 75 | 100);
    /**
     * height relative to element's parent
     * https://getbootstrap.com/docs/4.5/utilities/sizing/#relative-to-the-parent
     */
    get relativeHeight(): "auto" | 25 | 50 | 75 | 100;
    /**
     * @type {25 | 50 | 75 | 100 | 'auto'}
     * @protected
     */
    protected _relativeWidth: 25 | 50 | 75 | 100 | 'auto';
    set relativeWidth(arg: "auto" | 25 | 50 | 75 | 100);
    /**
     * width relative to element's parent
     * https://getbootstrap.com/docs/4.5/utilities/sizing/#relative-to-the-parent
     */
    get relativeWidth(): "auto" | 25 | 50 | 75 | 100;
    /**
     * @type {25 | 50 | 75 | 100 | 'auto'}
     * @protected
     */
    protected _viewportHeight: 25 | 50 | 75 | 100 | 'auto';
    set viewportHeight(arg: "auto" | 25 | 50 | 75 | 100);
    /**
     * height relative to the viewport/screen
     * https://getbootstrap.com/docs/4.5/utilities/sizing/#relative-to-the-viewport
     */
    get viewportHeight(): "auto" | 25 | 50 | 75 | 100;
    /**
     * @type {25 | 50 | 75 | 100 | 'auto'}
     * @protected
     */
    protected _viewportWidth: 25 | 50 | 75 | 100 | 'auto';
    set viewportWidth(arg: "auto" | 25 | 50 | 75 | 100);
    /**
     * width relative to the viewport/screen
     * https://getbootstrap.com/docs/4.5/utilities/sizing/#relative-to-the-viewport
     */
    get viewportWidth(): "auto" | 25 | 50 | 75 | 100;
    /**
     * @type {25 | 50 | 75 | 100 | 'auto'}
     * @protected
     */
    protected _viewportMinHeight: 25 | 50 | 75 | 100 | 'auto';
    set viewportMinHeight(arg: "auto" | 25 | 50 | 75 | 100);
    /**
     * minimum height relative to the viewport/screen
     * https://getbootstrap.com/docs/4.5/utilities/sizing/#relative-to-the-viewport
     */
    get viewportMinHeight(): "auto" | 25 | 50 | 75 | 100;
    /**
     * @type {25 | 50 | 75 | 100 | 'auto'}
     * @protected
     */
    protected _viewportMinWidth: 25 | 50 | 75 | 100 | 'auto';
    set viewportMinWidth(arg: "auto" | 25 | 50 | 75 | 100);
    /**
     * minimum width relative to the viewport/screen
     * https://getbootstrap.com/docs/4.5/utilities/sizing/#relative-to-the-viewport
     */
    get viewportMinWidth(): "auto" | 25 | 50 | 75 | 100;
    /*****************
     ***** Theme *****
     ****************/
    /**
     * @type {string}
     * @protected
     */
    protected _textTheme: string;
    set textTheme(arg: string);
    /**
     * Bootstrap text theme
     * valid values: black-50, body, danger, dark, info, light, muted, primary, secondary, success, warning, white, white-50
     */
    get textTheme(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _theme: string;
    set theme(arg: string);
    /**
     * Bootstrap background theme
     * valid values: danger, dark, info, light, primary, secondary, success, transparent, warning
     */
    get theme(): string;
    /**
     * @type {boolean}
     * @protected
     */
    protected _outline: boolean;
    set outline(arg: boolean);
    /**
     * Bootstrap outline theme
     * outline with theme color (via borders) [true] instead of background color [false]
     */
    get outline(): boolean;
    /**
     * background/outline theme are mutually exclusive
     * @param {boolean} outline border theme (true) or background (false)
     * @param {string} theme theme color
     * @protected
     */
    protected _setOutlineTheme(outline: boolean, theme: string): void;
    /**********************
     ***** Typography *****
     *********************/
    /**
     * @type {1 | 2 | 3 | 4}
     * @protected
     */
    protected _displayHeading: 1 | 2 | 3 | 4;
    set displayHeading(arg: 1 | 2 | 3 | 4);
    /**
     * larger, slighly more opinionated heading style
     * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
     */
    get displayHeading(): 1 | 2 | 3 | 4;
    /**
     * @type {boolean}
     * @protected
     */
    protected _leading: boolean;
    set leading(arg: boolean);
    /**
     * make element stand out (e.g., leading paragraph)
     * https://getbootstrap.com/docs/4.5/content/typography/#lead
     */
    get leading(): boolean;
}
/***************************************************************************************************************
 ************************************************** HTML Core **************************************************
 **************************************************************************************************************/
/** baseline HTML element (abstract) */
declare class HTMLTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag: string, contents: any, attributes: object);
    set tag(arg: string);
    /** tag: HTML tag element */
    get tag(): string;
    set contents(arg: any);
    /** contents for innerHTML */
    get contents(): any;
    set attributes(arg: any);
    /** attributes: HTML attributes */
    get attributes(): any;
    /**********************************
     ***** Properties: Essentials *****
     *********************************/
    /**
     * @type {object}
     * @protected
     */
    protected _attributes: object;
    set classes(arg: string[]);
    /**
     * classes: CSS classes defined in a style sheet
     * @type {string[]}
     */
    get classes(): string[];
    set styles(arg: string[]);
    /**
     * inline CSS style(s)
     * @type {string[]}
     */
    get styles(): string[];
    /**
     * @type {boolean}
     * @protected
     */
    protected _blockClose: boolean;
    set blockClose(arg: boolean);
    /** blockClose: add newline after close tag */
    get blockClose(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _blockOpen: boolean;
    set blockOpen(arg: boolean);
    /** blockOpen: add newline after open tag */
    get blockOpen(): boolean;
    /**
     * @type {any}
     * @protected
     */
    protected _contents: any;
    /**
     * @type {boolean}
     * @protected
     */
    protected _selfClosing: boolean;
    set selfClosing(arg: boolean);
    /** selfClosing: self-closing tag */
    get selfClosing(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _tag: string;
    /****************************
     ***** Properties: ARIA *****
     ***************************/
    /**
     * @type {string}
     * @protected
     */
    protected _ariaControls: string;
    set ariaControls(arg: string);
    /** ID(s) for element(s) whose contents or presence are controlled by the current element */
    get ariaControls(): string;
    /**
     * @type {'date' | 'location' | 'page' | 'step' | 'time'}
     * @protected
     */
    protected _ariaCurrent: 'date' | 'location' | 'page' | 'step' | 'time';
    set ariaCurrent(arg: "time" | "date" | "location" | "page" | "step");
    get ariaCurrent(): "time" | "date" | "location" | "page" | "step";
    /**
     * @type {string}
     * @protected
     */
    protected _ariaDescribedBy: string;
    set ariaDescribedBy(arg: string);
    /** ID(s) for element(s) that describes the object */
    get ariaDescribedBy(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _ariaDetails: string;
    set ariaDetails(arg: string);
    /** ID for the element that provides a detailed, extended description for the object */
    get ariaDetails(): string;
    /**
     * @type {boolean}
     * @protected
     */
    protected _ariaDisabled: boolean;
    set ariaDisabled(arg: boolean);
    /** the element is perceivable but disabled, so it is not editable or otherwise operable */
    get ariaDisabled(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _ariaExpanded: boolean;
    set ariaExpanded(arg: boolean);
    /** indicates whether the element, or another grouping element it controls, is currently expanded or collapsed */
    get ariaExpanded(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _ariaHidden: boolean;
    set ariaHidden(arg: boolean);
    /** indicates whether the element is exposed to an accessibility API */
    get ariaHidden(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _ariaLabel: string;
    set ariaLabel(arg: string);
    /** string value that labels the current element */
    get ariaLabel(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _ariaLabelledBy: string;
    set ariaLabelledBy(arg: string);
    /** ID(s) for the element(s) that label the current element */
    get ariaLabelledBy(): string;
    /**
     * @type {number}
     * @protected
     */
    protected _ariaValueMax: number;
    set ariaValueMax(arg: number);
    /** maximum allowed value for a range widget */
    get ariaValueMax(): number;
    /**
     * @type {number}
     * @protected
     */
    protected _ariaValueMin: number;
    set ariaValueMin(arg: number);
    /** minimum allowed value for a range widget */
    get ariaValueMin(): number;
    /**
     * @type {number}
     * @protected
     */
    protected _ariaValueNow: number;
    set ariaValueNow(arg: number);
    /** current value for a range widget */
    get ariaValueNow(): number;
    /**
     * @type {string}
     * @protected
     */
    protected _role: string;
    set role(arg: string);
    /**
     * role type of user interface element
     * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
     */
    get role(): string;
    /********************************
     ***** Properties: Standard *****
     *******************************/
    /**
     * @type {string}
     * @protected
     */
    protected _accessKey: string;
    set accessKey(arg: string);
    /** define shortcut key to activate/focus when (Alt / Alt+Shift / Cmd) + AccessKey [single character] */
    get accessKey(): string;
    /**
     * @type {boolean}
     * @protected
     */
    protected _disabled: boolean;
    set disabled(arg: boolean);
    /** not available for all elements */
    get disabled(): boolean;
    set tabIndex(arg: number);
    /** tabbing order */
    get tabIndex(): number;
    /**
     * @type {'auto' | 'ltr' | 'rtl'}
     * @protected
     */
    protected _direction: 'auto' | 'ltr' | 'rtl';
    set direction(arg: NotificationDirection);
    /** text direction for the content [auto, ltr, rtl] */
    get direction(): NotificationDirection;
    /**
     * @type {true | false | 'auto'}
     * @protected
     */
    protected _draggable: true | false | 'auto';
    set draggable(arg: boolean | "auto");
    /**
     * element can be dragged (requires JavaScript)
     * https://www.w3schools.com/html/html5_draganddrop.asp
     */
    get draggable(): boolean | "auto";
    /**
     * @type {boolean}
     * @protected
     */
    protected _editable: boolean;
    set editable(arg: boolean);
    /** content is editable [boolean] */
    get editable(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _hidden: boolean;
    set hidden(arg: boolean);
    /** hide element because it is not yet (or no longer) relevant */
    get hidden(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _id: string;
    set id(arg: string);
    /** unique identifier [alphanumeric, underscore, hyphen] */
    get id(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _language: string;
    set language(arg: string);
    /**
     * language of the element's content [2-character code]
     * https://www.w3schools.com/tags/ref_language_codes.asp
     */
    get language(): string;
    /**
     * @type {boolean}
     * @protected
     */
    protected _spellcheck: boolean;
    set spellcheck(arg: boolean);
    /** content should be spellchecked */
    get spellcheck(): boolean;
    /**
     * @type {number}
     * @protected
     */
    protected _tabIndex: number;
    /**
     * @type {string}
     * @protected
     */
    protected _title: string;
    set title(arg: string);
    /** extra information about an element */
    get title(): string;
    /***********************************
     ***** Properties: Form Events *****
     **********************************/
    /**
     * form events – applies to almost all HTML elements, but is most used in form elements
     * https://www.w3schools.com/tags/ref_eventattributes.asp
     */
    /**
     * @type {string}
     * @protected
     */
    protected _onBlur: string;
    set onBlur(arg: string);
    /** loses focus */
    get onBlur(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onChange: string;
    set onChange(arg: string);
    /** value of the element is changed */
    get onChange(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onContextMenu: string;
    set onContextMenu(arg: string);
    /** context menu is triggered */
    get onContextMenu(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onFocus: string;
    set onFocus(arg: string);
    /** gets focus */
    get onFocus(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onInput: string;
    set onInput(arg: string);
    /** gets user input */
    get onInput(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onInvalid: string;
    set onInvalid(arg: string);
    /** element is invalid */
    get onInvalid(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onReset: string;
    set onReset(arg: string);
    /** reset button in a form is clicked */
    get onReset(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onSearch: string;
    set onSearch(arg: string);
    /** user writes something in a search field (for <input type="search">) */
    get onSearch(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onSelect: string;
    set onSelect(arg: string);
    /** some text has been selected in an element */
    get onSelect(): string;
    /***************************************
     ***** Properties: Keyboard Events *****
     **************************************/
    /**
     * @type {string}
     * @protected
     */
    protected _onKeyDown: string;
    set onKeyDown(arg: string);
    /** user is pressing a key */
    get onKeyDown(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onKeyPress: string;
    set onKeyPress(arg: string);
    /** user presses a key */
    get onKeyPress(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onKeyUp: string;
    set onKeyUp(arg: string);
    /** user releases a key */
    get onKeyUp(): string;
    /************************************
     ***** Properties: Mouse Events *****
     ***********************************/
    /**
     * @type {string}
     * @protected
     */
    protected _onClick: string;
    set onClick(arg: string);
    /** mouse click on the element */
    get onClick(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onDoubleClick: string;
    set onDoubleClick(arg: string);
    /** mouse double-click on the element */
    get onDoubleClick(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onMouseDown: string;
    set onMouseDown(arg: string);
    /** mouse button is pressed down on an element */
    get onMouseDown(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onMouseMove: string;
    set onMouseMove(arg: string);
    /** mouse pointer is moving while it is over an element */
    get onMouseMove(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onMouseOut: string;
    set onMouseOut(arg: string);
    /** mouse pointer moves off of an element */
    get onMouseOut(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onMouseOver: string;
    set onMouseOver(arg: string);
    /** mouse pointer moves over an element */
    get onMouseOver(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onMouseUp: string;
    set onMouseUp(arg: string);
    /** mouse button is released over an element */
    get onMouseUp(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onWheel: string;
    set onWheel(arg: string);
    /** mouse wheel rolls up or down over an element */
    get onWheel(): string;
    /***********************************
     ***** Properties: Drag Events *****
     **********************************/
    /**
     * @type {string}
     * @protected
     */
    protected _onDrag: string;
    set onDrag(arg: string);
    /** element is dragged */
    get onDrag(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onDragEnd: string;
    set onDragEnd(arg: string);
    /** end of a drag operation */
    get onDragEnd(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onDragEnter: string;
    set onDragEnter(arg: string);
    /** has been dragged to a valid drop target */
    get onDragEnter(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onDragLeave: string;
    set onDragLeave(arg: string);
    /** leaves a valid drop target */
    get onDragLeave(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onDragOver: string;
    set onDragOver(arg: string);
    /** being dragged over a valid drop target */
    get onDragOver(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onDragStart: string;
    set onDragStart(arg: string);
    /** start of a drag operation */
    get onDragStart(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onDrop: string;
    set onDrop(arg: string);
    /** dragged element is being dropped */
    get onDrop(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onScroll: string;
    set onScroll(arg: string);
    /** element's scrollbar is being scrolled */
    get onScroll(): string;
    /****************************************
     ***** Properties: Clipboard Events *****
     ***************************************/
    /**
     * @type {string}
     * @protected
     */
    protected _onCopy: string;
    set onCopy(arg: string);
    /** user copies the content of an element */
    get onCopy(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onCut: string;
    set onCut(arg: string);
    /** user cuts the content of an element */
    get onCut(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _onPaste: string;
    set onPaste(arg: string);
    /** user pastes some content in an element */
    get onPaste(): string;
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
     * @param {string | string[]} value string or array of strings of CSS classes
     */
    class(value: string | string[]): void;
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
     * @param {string | string[]} value string or array of strings of CSS classes
     */
    removeClass(value: string | string[]): void;
    /**
     * remove style(s) from style attribute array
     * @param {string | string[]} value string or array of strings of CSS styles
     */
    removeStyle(value: string | string[]): void;
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
     * @protected
     */
    protected _setBooleanValue(key: string, value: boolean, onOff: boolean): void;
    /**
     * set/unset the attribute for a standard value (i.e., attribute="value")
     * @param {string} key attribute key
     * @param {string} value attribute value (null removes attribute)
     * @protected
     */
    protected _setStandardValue(key: string, value: string): void;
    /**
     * set/unset the attribute for a toggle value (i.e., true = attribute, false = no attribute)
     * @param {string} key attribute key
     * @param {boolean} value attribute value (true: attribute without a value, null/false: remove attribute)
     * @protected
     */
    protected _setTogglableValue(key: string, value: boolean): void;
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
     * @param {any} summmary value or array of values to go inside the summary element
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    details(summary: any, contents: any, attributes: object): void;
    /**
     * visible heading for Details, which can be clicked to view/hide the details
     * https://www.w3schools.com/tags/tag_summary.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    detailSummary(contents: any, attributes: object): void;
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
     * @param {string} name FontAwesome class name (e.g., "fas fa-camera")
     * @param {string} ariaLabel accessibility string value that labels the current element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    icon(name: string, ariaLabel: string, attributes: object): void;
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
     * strikethrough (no longer accurate)
     * https://www.w3schools.com/tags/tag_s.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    strike(contents: any, attributes: object): void;
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
     * @param {number} width width in pixels
     * @param {number} height height in pixels
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    svg(contents: any, width: number, height: number, attributes: object): void;
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
     * extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs
     * https://getbootstrap.com/docs/4.5/components/input-group/
     * @param {any} prepend value or array of values to go inside the prepended element
     * @param {any} contents value or array of values to go inside the Input Group element
     * @param {any} append value or array of values to go inside the appended element
     * @param {object} attributes key–value pairs of HTML attributes and other properties for the Input Group element
     */
    inputGroup(prepend: any, contents: any, append: any, attributes: object): void;
    /**
     * label for a form element
     * https://www.w3schools.com/tags/tag_label.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} forID ID for the form element the label is for
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    label(contents: any, forID: string, attributes: object): void;
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
    /*************************************
     ***** Bootstrap Content Methods *****
     ************************************/
    /**
     * primary opinionated heading
     * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    displayHeading1(contents: any, attributes: object): void;
    /**
     * secondary opinionated heading
     * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    displayHeading2(contents: any, attributes: object): void;
    /**
     * tertiary opinionated heading
     * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    displayHeading3(contents: any, attributes: object): void;
    /**
     * quaternary opinionated heading
     * https://getbootstrap.com/docs/4.5/content/typography/#display-headings
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    displayHeading4(contents: any, attributes: object): void;
    /**
     * larger paragraph that stands out more than regular paragraph
     * https://getbootstrap.com/docs/4.5/content/typography/#lead
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    leadingParagraph(contents: any, attributes: object): void;
    /**
     * hide elements on all devices except screen readers
     * https://getbootstrap.com/docs/4.5/utilities/screen-readers/
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    screenReader(contents: any, attributes: object): void;
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
    /**
     * indicate the loading state of a component or page
     * https://getbootstrap.com/docs/4.5/components/spinners/
     * @param {any} contents value or array of values to go inside the screen reader
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    spinner(contents: any, attributes: object): void;
    /**********************************
     ***** Bootstrap Grid Methods *****
     *********************************/
    /**
     * twelve column grid system by breakpoint
     * https://getbootstrap.com/docs/4.5/layout/grid/
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} column grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} columnSmall small breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} columnMedium medium breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} columnLarge large breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} columnXL extra-large breakpoint grid column width; valid values: true (equal-width), auto (natural width of their content), or 1–12 (number of columns)
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    column(contents: any, column: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, columnSmall: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, columnMedium: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, columnLarge: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, columnXL: true | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, attributes: object): void;
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
declare class CrossOriginTag extends HTMLTag {
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
     * @type {'anonymous' | 'use-credentials'}
     * @protected
     */
    protected _crossOrigin: 'anonymous' | 'use-credentials';
    set crossOrigin(arg: "anonymous" | "use-credentials");
    /** how the element handles cross-origin requests */
    get crossOrigin(): "anonymous" | "use-credentials";
    /**
     * @type {string}
     * @protected
     */
    protected _integrity: string;
    set integrity(arg: string);
    /** base64-encoded cryptographic hash of the resource, used to verify that the fetched resource has been delivered free of unexpected manipulation */
    get integrity(): string;
    /*****************************
     ***** Protected Methods *****
     ****************************/
    /**
     * set crossOrigin and integrity (interrelated)
     * @param {any} crossOrigin
     * @param {any} integrity
     * @protected
     */
    protected _crossOriginIntegrity(crossOrigin: any, integrity: any): void;
}
/** shared features of table sections (abstract) */
declare class TableSectionTag extends BootstrapTag {
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
declare class TableCellTag extends BootstrapTag {
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
    /**
     * @type {number}
     * @protected
     */
    protected _columnSpan: number;
    set columnSpan(arg: number);
    /** number of columns a cell should span */
    get columnSpan(): number;
    /**
     * @type {string}
     * @protected
     */
    protected _headers: string;
    set headers(arg: string);
    /** specifies one or more header cells a cell is related to; valid value(s): <th> ID(s) */
    get headers(): string;
    /**
     * @type {number}
     * @protected
     */
    protected _rowSpan: number;
    set rowSpan(arg: number);
    /** number of rows a header cell should span */
    get rowSpan(): number;
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
    /**
     * @type {boolean}
     * @protected
     */
    protected _fileUpload: boolean;
    set fileUpload(arg: boolean);
    /** form has a file upload element */
    get fileUpload(): boolean;
    /**
     * @type {'get' | 'post'}
     * @protected
     */
    protected _method: 'get' | 'post';
    set method(arg: "get" | "post");
    /** HTTP method to use when sending form data */
    get method(): "get" | "post";
    /**
     * @type {boolean}
     * @protected
     */
    protected _noValidate: boolean;
    set noValidate(arg: boolean);
    /** form should not be validated when submitted */
    get noValidate(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _target: string;
    set target(arg: string);
    /**
     * specifies where to display the response that is received after submitting the form
     * valid values: _blank, _parent, _self, _top, «frame»
     */
    get target(): string;
    /**
     * @type {string}
     * @protected
     */
    protected _url: string;
    set url(arg: string);
    /** URL where to send data when the form is submitted */
    get url(): string;
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
    /**
     * container holding input and label
     * @type {Division}
     */
    wrapper: Division;
    /**********************
     ***** Attributes *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _checked: boolean;
    set checked(arg: boolean);
    /** element should be pre-selected when the page loads */
    get checked(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _readOnly: boolean;
    set readOnly(arg: boolean);
    /** input field is read-only */
    get readOnly(): boolean;
    /**
     * @type {'checkbox' | 'radio'}
     * @protected
     */
    protected _type: 'checkbox' | 'radio';
    set type(arg: "checkbox" | "radio");
    /** valid values: checkbox, radio */
    get type(): "checkbox" | "radio";
    /**
     * @type {string}
     * @protected
     */
    protected _value: string;
    set value(arg: string);
    /** field value to submit */
    get value(): string;
    /**********************
     ***** Properties *****
     *********************/
    /**
     * @type {boolean}
     * @protected
     */
    protected _inline: boolean;
    set inline(arg: boolean);
    /** stack horizontally instead of vertically */
    get inline(): boolean;
    /**
     * @type {boolean}
     * @protected
     */
    protected _switch: boolean;
    set switch(arg: boolean);
    /** stack horizontally instead of vertically */
    get switch(): boolean;
    /*****************************
     ***** Protected Methods *****
     ****************************/
    /**
      * inline/switch are interdependent
      * @param {boolean} inline new value for inline
      * @param {boolean} switcher new value for switch
      * @protected
      */
    protected _setInlineSwitch(inline: boolean, switcher: boolean): void;
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
declare class FormTag extends BootstrapTag {
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
    /**
     * @type {boolean}
     * @protected
     */
    protected _autoFocus: boolean;
    set autoFocus(arg: boolean);
    /** element should automatically get focus when the page loads */
    get autoFocus(): boolean;
    /**
     * @type {string}
     * @protected
     */
    protected _form: string;
    /**
     * @type {string}
     * @protected
     */
    protected _name: string;
    set name(arg: string);
    /** element name */
    get name(): string;
    /**
     * @type {boolean}
     * @protected
     */
    protected _required: boolean;
    set required(arg: boolean);
    /** required to set/select a value before submitting the form */
    get required(): boolean;
}
export {};
