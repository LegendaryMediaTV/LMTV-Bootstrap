'use strict';


/***************************************************************************************************************
 ************************************************** HTML Core **************************************************
 **************************************************************************************************************/

/** baseline HTML element (abstract) */
class BootstrapTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag, contents, attributes) {
        // convert parameters to properties
        this.tag = tag;
        this.contents = contents;

        // initialize attributes
        this.attributes = attributes;
    }


    /**********************************
     ***** Properties: Essentials *****
     *********************************/

    /** attributes: HTML attributes (object) */
    _attributes;
    get attributes() { return this._attributes; }
    set attributes(value) {
        // is empty or object
        if (!value || typeof value === 'object') {
            // create blank object/arrays
            this._attributes = {};
            this.classes = null;
            this.styles = null;

            // is object, use as-is
            if (typeof value === 'object') {
                for (const [objectKey, objectValue] of Object.entries(value))
                    this[objectKey] = objectValue;
            }
        }
        // something else, throw error
        else
            throw 'HTML attributes must be an object of key–value pairs: ' + (typeof value);
    }

    /** blockClose: add newline after close tag (boolean) */
    _blockClose;
    get blockClose() { return this._blockClose; }
    set blockClose(value) { this._blockClose = value ? true : false; }

    /** blockOpen: add newline after open tag (boolean) */
    _blockOpen;
    get blockOpen() { return this._blockOpen; }
    set blockOpen(value) { this._blockOpen = value ? true : false; }

    /** classes: CSS classes defined in a style sheet (numeric array) */
    get classes() { return this._attributes.class; }
    set classes(value) {
        // is empty, create blank array
        if (value !== 0 && !value)
            this._attributes.class = [];
        // is single item, create array of one
        else if (!Array.isArray(value))
            this._attributes.class = [value];
        // is array, use as-is
        else
            this._attributes.class = value;
    }

    /** contents for innerHTML (array) */
    _contents;
    get contents() { return this._contents; }
    set contents(value) {
        // is empty, create blank array
        if (value !== 0 && !value)
            this._contents = [];
        // is single item, create array of one
        else if (!Array.isArray(value))
            this._contents = [value];
        // is array, use as-is
        else
            this._contents = value;
    }

    /** selfClosing: self-closing tag (boolean) */
    _selfClosing;
    get selfClosing() { return this._selfClosing; }
    set selfClosing(value) { this._selfClosing = value ? true : false; }

    /** styles: inline CSS style(s) (numeric array) */
    get styles() { return this._attributes.style; }
    set styles(value) {
        // is empty, create blank array
        if (value !== 0 && !value)
            this._attributes.style = [];
        // is single item, create array of one
        else if (!Array.isArray(value))
            this._attributes.style = [value];
        // is array, use as-is
        else
            this._attributes.style = value;
    }

    /** tag: HTML tag element (string) */
    _tag;
    get tag() { return this._tag; }
    set tag(value) {
        if (value.match(/^[a-z1-6]+$/i)) {
            // set value
            this._tag = value.toLowerCase();

            // set dependencies
            this._selfClosing = ['br', 'hr', 'img', 'input', 'link', 'meta'].indexOf(this._tag) !== -1;
            this._blockOpen =
                [
                    'html', 'head', 'body',
                    'article', 'nav', 'section',
                    'ol', 'ul',
                    'table', 'thead', 'tbody'
                ].indexOf(this._tag) !== -1
                ;
            this._blockClose =
                [
                    'head', 'meta', 'link', 'title',
                    'body', 'script', 'style',
                    'article', 'aside', 'blockquote', 'div', 'footer', 'header', 'nav', 'pre', 'section', 'summary', 'video',
                    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'hr', 'dl',
                    'ol', 'ul', 'li',
                    'table', 'caption', 'thead', 'tbody', 'tr'
                ].indexOf(this._tag) !== -1
                ;
        }
        else
            throw 'HTML tags must consist of one or more letters: ' + value;
    }


    /****************************
     ***** Properties: ARIA *****
     ***************************/

    // Accessible Rich Internet Applications (ARIA) attributes – https://www.w3.org/TR/wai-aria-1.1/

    /** identifies the element (or elements) whose contents or presence are controlled by the current element (ID) */
    _ariaControls;
    get ariaControls() { return this._ariaControls; }
    set ariaControls(value) {
        this._ariaControls = value;
        this._setStandardValue('aria-controls', value);
    }

    /* element that represents the current item within a container or set of related elements; valid values: page, step, location, date, time */
    _ariaCurrent;
    get ariaCurrent() { return this._ariaCurrent; }
    set ariaCurrent(value) {
        this._ariaCurrent = value;
        this._setStandardValue('aria-current', value);
    }

    /** identifies the element (or elements) that describes the object (ID) */
    _ariaDescribedBy;
    get ariaDescribedBy() { return this._ariaDescribedBy; }
    set ariaDescribedBy(value) {
        this._ariaDescribedBy = value;
        this._setStandardValue('aria-describedby', value);
    }

    /** identifies the element that provides a detailed, extended description for the object (ID) */
    _ariaDetails;
    get ariaDetails() { return this._ariaDetails; }
    set ariaDetails(value) {
        this._ariaDetails = value;
        this._setStandardValue('aria-details', value);
    }

    /** the element is perceivable but disabled, so it is not editable or otherwise operable (boolean)' */
    _ariaDisabled;
    get ariaDisabled() { return this._ariaDisabled; }
    set ariaDisabled(value) {
        this._ariaDisabled = value;
        this._setBooleanValue('aria-disabled', value);
    }

    /** indicates whether the element, or another grouping element it controls, is currently expanded or collapsed (boolean) */
    _ariaExpanded;
    get ariaExpanded() { return this._ariaExpanded; }
    set ariaExpanded(value) {
        this._ariaExpanded = value;
        this._setBooleanValue('aria-expanded', value);
    }

    /** indicates whether the element is exposed to an accessibility API (boolean) */
    _ariaHidden;
    get ariaHidden() { return this._ariaHidden; }
    set ariaHidden(value) {
        this._ariaHidden = value;
        this._setBooleanValue('aria-hidden', value);
    }

    /** string value that labels the current element */
    _ariaLabel;
    get ariaLabel() { return this._ariaLabel; }
    set ariaLabel(value) {
        this._ariaLabel = value;
        this._setStandardValue('aria-label', value);
    }

    /** identifies the element (or elements) that labels the current element (ID) */
    _ariaLabelledBy;
    get ariaLabelledBy() { return this._ariaLabelledBy; }
    set ariaLabelledBy(value) {
        this._ariaLabelledBy = value;
        this._setStandardValue('aria-labelledby', value);
    }

    /** maximum allowed value for a range widget */
    _ariaValueMax;
    get ariaValueMax() { return this._ariaValueMax; }
    set ariaValueMax(value) {
        this._ariaValueMax = value;
        this._setStandardValue('aria-valuemax', value);
    }

    /** minimum allowed value for a range widget */
    _ariaValueMin;
    get ariaValueMin() { return this._ariaValueMin; }
    set ariaValueMin(value) {
        this._ariaValueMin = value;
        this._setStandardValue('aria-valuemin', value);
    }

    /** current value for a range widget */
    _ariaValueNow;
    get ariaValueNow() { return this._ariaValueNow; }
    set ariaValueNow(value) {
        this._ariaValueNow = value;
        this._setStandardValue('aria-valuenow', value);
    }

    /**
     * role type of user interface elementttttttt
     * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
     */
    _role;
    get role() { return this._role; }
    set role(value) {
        this._role = value;
        this._setStandardValue('role', value);
    }


    /********************************
     ***** Properties: Standard *****
     *******************************/

    // standard attributes – https://www.w3schools.com/tags/ref_attributes.asp and https://www.w3schools.com/tags/ref_standardattributes.asp

    /** define shortcut key to activate/focus when (Alt / Alt+Shift / Cmd) + AccessKey [single character] */
    _accessKey;
    get accessKey() { return this._accessKey; }
    set accessKey(value) {
        this._accessKey = value;
        this._setStandardValue('accesskey', value);
    }

    /** not available for all elements [boolean] */
    _disabled;
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = value;
        this._setTogglableValue('disabled', value);

        // flagging as disabled adds extra flags
        if (value === true || value == 'true' || value == 'on') {
            this.ariaDisabled = true;
            this.tabIndex = -1;
        }
        // re-enabling removes extra flags
        else {
            if (this.ariaDisabled === true)
                this.ariaDisabled = false;
            if (this.tabIndex == -1)
                this.tabIndex = null;
        }
    }

    /** text direction for the content [auto, ltr, rtl] */
    _direction;
    get direction() { return this._direction; }
    set direction(value) {
        this._direction = value;
        this._setStandardValue('direction', value);
    }

    /**
     * element can be dragged (requires JavaScript) [true, false, auto]
     * https://www.w3schools.com/html/html5_draganddrop.asp
     */
    _draggable;
    get draggable() { return this._draggable; }
    set draggable(value) {
        this._draggable = value;
        if (value.toString().trim().toLowerCase() == 'auto')
            this._setStandardValue('draggable', 'auto');
        else
            this._setBooleanValue('draggable', value);
    }

    /** content is editable [boolean] */
    _editable;
    get editable() { return this._editable; }
    set editable(value) {
        this._editable = value;
        this._setBooleanValue('contenteditable', value);
    }

    /** hide element because it is not yet (or no longer) relevant [boolean] */
    _hidden;
    get hidden() { return this._hidden; }
    set hidden(value) {
        this._hidden = value;
        this._setTogglableValue('hidden', value);
    }

    /** unique identifier [alphanumeric, underscore, hyphen] */
    _id;
    get id() { return this._id; }
    set id(value) {
        this._id = value;
        this._setStandardValue('id', value);
    }

    /**
     * language of the element's content [2-character code]
     * https://www.w3schools.com/tags/ref_language_codes.asp
     */
    _language;
    get language() { return this._language; }
    set language(value) {
        this._language = value;
        this._setStandardValue('language', value);
    }

    /** content should be spellchecked [boolean] */
    _spellcheck;
    get spellcheck() { return this._spellcheck; }
    set spellcheck(value) {
        this._spellcheck = value;
        this._setBooleanValue('spellcheck', value);
    }

    /** tabbing order [numeric] */
    _tabIndex;
    get tabIndex() { return this._tabIndex; }
    set tabIndex(value) {
        this._tabIndex = value;
        this._setStandardValue('tabindex', value);
    }

    /** extra information about an element [text] */
    _title;
    get title() { return this._title; }
    set title(value) {
        this._title = value;
        this._setStandardValue('title', value);
    }


    /***********************************
     ***** Properties: Form Events *****
     **********************************/

    /**
     * form events – applies to almost all HTML elements, but is most used in form elements
     * https://www.w3schools.com/tags/ref_eventattributes.asp
     */

    /** loses focus */
    _onBlur;
    get onBlur() { return this._onBlur; }
    set onBlur(value) {
        this._onBlur = value;
        this._setStandardValue('onblur', value);
    }

    /** value of the element is changed */
    _onChange;
    get onChange() { return this._onChange; }
    set onChange(value) {
        this._onChange = value;
        this._setStandardValue('onchange', value);
    }

    /** context menu is triggered */
    _onContextMenu;
    get onContextMenu() { return this._onContextMenu; }
    set onContextMenu(value) {
        this._onContextMenu = value;
        this._setStandardValue('oncontextmenu', value);
    }

    /** gets focus */
    _onFocus;
    get onFocus() { return this._onFocus; }
    set onFocus(value) {
        this._onFocus = value;
        this._setStandardValue('onfocus', value);
    }

    /** gets user input */
    _onInput;
    get onInput() { return this._onInput; }
    set onInput(value) {
        this._onInput = value;
        this._setStandardValue('oninput', value);
    }

    /** element is invalid */
    _onInvalid;
    get onInvalid() { return this._onInvalid; }
    set onInvalid(value) {
        this._onInvalid = value;
        this._setStandardValue('oninvalid', value);
    }

    /** reset button in a form is clicked */
    _onReset;
    get onReset() { return this._onReset; }
    set onReset(value) {
        this._onReset = value;
        this._setStandardValue('onreset', value);
    }

    /** user writes something in a search field (for <input type="search">) */
    _onSearch;
    get onSearch() { return this._onSearch; }
    set onSearch(value) {
        this._onSearch = value;
        this._setStandardValue('onsearch', value);
    }

    /** some text has been selected in an element */
    _onSelect;
    get onSelect() { return this._onSelect; }
    set onSelect(value) {
        this._onSelect = value;
        this._setStandardValue('onselect', value);
    }


    /***************************************
     ***** Properties: Keyboard Events *****
     **************************************/

    // https://www.w3schools.com/tags/ref_eventattributes.asp

    /** user is pressing a key */
    _onKeyDown;
    get onKeyDown() { return this._onKeyDown; }
    set onKeyDown(value) {
        this._onKeyDown = value;
        this._setStandardValue('onkeydown', value);
    }

    /** user presses a key */
    _onKeyPress;
    get onKeyPress() { return this._onKeyPress; }
    set onKeyPress(value) {
        this._onKeyPress = value;
        this._setStandardValue('onkeypress', value);
    }

    /** user releases a key */
    _onKeyUp;
    get onKeyUp() { return this._onKeyUp; }
    set onKeyUp(value) {
        this._onKeyUp = value;
        this._setStandardValue('onkeyup', value);
    }


    /************************************
     ***** Properties: Mouse Events *****
     ***********************************/

    // https://www.w3schools.com/tags/ref_eventattributes.asp

    /** mouse click on the element */
    _onClick;
    get onClick() { return this._onClick; }
    set onClick(value) {
        this._onClick = value;
        this._setStandardValue('onclick', value);
    }

    /** mouse double-click on the element */
    _onDoubleClick;
    get onDoubleClick() { return this._onDoubleClick; }
    set onDoubleClick(value) {
        this._onDoubleClick = value;
        this._setStandardValue('ondblclick', value);
    }

    /** mouse button is pressed down on an element */
    _onMouseDown;
    get onMouseDown() { return this._onMouseDown; }
    set onMouseDown(value) {
        this._onMouseDown = value;
        this._setStandardValue('onmousedown', value);
    }

    /** mouse pointer is moving while it is over an element */
    _onMouseMove;
    get onMouseMove() { return this._onMouseMove; }
    set onMouseMove(value) {
        this._onMouseMove = value;
        this._setStandardValue('onmousemove', value);
    }

    /** mouse pointer moves off of an element */
    _onMouseOut;
    get onMouseOut() { return this._onMouseOut; }
    set onMouseOut(value) {
        this._onMouseOut = value;
        this._setStandardValue('onmouseout', value);
    }

    /** mouse pointer moves over an element */
    _onMouseOver;
    get onMouseOver() { return this._onMouseOver; }
    set onMouseOver(value) {
        this._onMouseOver = value;
        this._setStandardValue('onmouseover', value);
    }

    /** mouse button is released over an element */
    _onMouseUp;
    get onMouseUp() { return this._onMouseUp; }
    set onMouseUp(value) {
        this._onMouseUp = value;
        this._setStandardValue('onmouseup', value);
    }

    /** mouse wheel rolls up or down over an element */
    _onWheel;
    get onWheel() { return this._onWheel; }
    set onWheel(value) {
        this._onWheel = value;
        this._setStandardValue('onwheel', value);
    }


    /***********************************
     ***** Properties: Drag Events *****
     **********************************/

    // https://www.w3schools.com/tags/ref_eventattributes.asp

    /** element is dragged */
    _onDrag;
    get onDrag() { return this._onDrag; }
    set onDrag(value) {
        this._onDrag = value;
        this._setStandardValue('ondrag', value);
    }

    /** end of a drag operation */
    _onDragEnd;
    get onDragEnd() { return this._onDragEnd; }
    set onDragEnd(value) {
        this._onDragEnd = value;
        this._setStandardValue('ondragend', value);
    }

    /** has been dragged to a valid drop target */
    _onDragEnter;
    get onDragEnter() { return this._onDragEnter; }
    set onDragEnter(value) {
        this._onDragEnter = value;
        this._setStandardValue('ondragenter', value);
    }

    /** leaves a valid drop target */
    _onDragLeave;
    get onDragLeave() { return this._onDragLeave; }
    set onDragLeave(value) {
        this._onDragLeave = value;
        this._setStandardValue('ondragleave', value);
    }

    /** being dragged over a valid drop target */
    _onDragOver;
    get onDragOver() { return this._onDragOver; }
    set onDragOver(value) {
        this._onDragOver = value;
        this._setStandardValue('ondragover', value);
    }

    /** start of a drag operation */
    _onDragStart;
    get onDragStart() { return this._onDragStart; }
    set onDragStart(value) {
        this._onDragStart = value;
        this._setStandardValue('ondragstart', value);
    }

    /** dragged element is being dropped */
    _onDrop;
    get onDrop() { return this._onDrop; }
    set onDrop(value) {
        this._onDrop = value;
        this._setStandardValue('ondrop', value);
    }

    /** element's scrollbar is being scrolled */
    _onScroll;
    get onScroll() { return this._onScroll; }
    set onScroll(value) {
        this._onScroll = value;
        this._setStandardValue('onscroll', value);
    }


    /****************************************
     ***** Properties: Clipboard Events *****
     ***************************************/

    // https://www.w3schools.com/tags/ref_eventattributes.asp

    /** user copies the content of an element */
    _onCopy;
    get onCopy() { return this._onCopy; }
    set onCopy(value) {
        this._onCopy = value;
        this._setStandardValue('oncopy', value);
    }

    /** user cuts the content of an element */
    _onCut;
    get onCut() { return this._onCut; }
    set onCut(value) {
        this._onCut = value;
        this._setStandardValue('oncut', value);
    }

    /** user pastes some content in an element */
    _onPaste;
    get onPaste() { return this._onPaste; }
    set onPaste(value) {
        this._onPaste = value;
        this._setStandardValue('onpaste', value);
    }


    /**************************
     ***** Public Methods *****
     *************************/

    /**
     * add content
     * @param {any} value value or array of values to go inside the HTML element
     */
    add(value) {
        // is array, merge it in
        if (Array.isArray(value))
            this._contents = this._contents.concat(value);
        // isn't array, append it
        else
            this._contents.push(value);
    }

    /**
     * add a class
     * @param {any} value string or array of strings of CSS classes
     */
    class(value) {
        // normalize input to array
        if (Array.isArray(value))
            value = value.join(' ');
        value = value.trim().replace(/\s+/, ' ').split(' ');

        // only add if missing
        for (let valueIndex = 0; valueIndex < value.length; valueIndex++) {
            if (this.classes.indexOf(value[valueIndex]) == -1)
                this.classes.push(value[valueIndex]);
        }
    }

    /**
     * get/set "data-*" attributes
     * @param {string} key attribute key
     * @param {any} value attribute value (undefined: return current value, null: removes attribute, otherwise: set the value)
     */
    data(key, value = '`RETURN`') {
        // attributes are lowercase
        key = key.toLowerCase();

        // one argument passed, return the current value
        if (value === '`RETURN`')
            return this._attributes[`data-${key}`];
        else
            this._setStandardValue(`data-${key}`, value);
    }

    /** contents of the tag */
    innerHTML() {
        let output = '';

        // self-closing tags don't have inner HTML
        if (!this._selfClosing)
            output += this.contents.join('');

        return output;
    }

    /**
     * remove class(es) from class attribute array
     * @param {any} value string or array of strings of CSS classes
     */
    removeClass(value) {
        // normalize input to array
        if (Array.isArray(value))
            value = value.join(' ');
        value = value.trim().replace(/\s+/, ' ').split(' ');

        // loop through individual values
        for (let valueIndex = 0; valueIndex < value.length; valueIndex++) {
            if (value[valueIndex]) {
                // see if class is set
                let index = this.classes.indexOf(value[valueIndex]);

                // only remove if defined
                if (index != -1)
                    this.classes.splice(index, 1);
            }
        }
    }

    /**
     * remove style(s) from style attribute array
     * @param {any} value string or array of strings of CSS styles
     */
    removeStyle(value) {
        // normalize input to array
        if (Array.isArray(value))
            value = value.join('; ');
        value = value.trim().replace(/\s+/, ' ').split(';');

        // loop through individual values
        for (let valueIndex = 0; valueIndex < value.length; valueIndex++) {
            if (value[valueIndex]) {
                // clean up add trailing semi-colon
                value[valueIndex] = value[valueIndex].trim() + ';';

                // see if style is set
                let index = this.styles.indexOf(value[valueIndex]);

                // only remove if defined
                if (index != -1)
                    this.styles.splice(index, 1);
            }
        }
    }

    /** open the HTML tag */
    start() {
        let output = `<${this.tag}`;

        // process attributes
        for (const [key, value] of Object.entries(this._attributes)) {
            // value isn't an empty array, show attribute
            if (!(Array.isArray(value) && !value.length)) {
                // add key to output
                output += ` ${key}`;

                // add value to output
                if (value != null) {
                    let escaped = value;

                    // convert array values to a space-separated string
                    if (Array.isArray(escaped))
                        escaped = escaped.join(' ');

                    // TODO: determine whether the replacement should be here (already in _set* functions) or in the array escaping lines above
                    output += `="${escaped.replace('"', '&quot;')}"`;
                }
            }
        }

        output += '>'

        // add newline for tags flagged with block-level opening
        if (this._blockOpen)
            output += '\n';

        return output;
    }

    /** close the HTML tag */
    stop() {
        let output = '';

        // self-closing tags don't have a closing tag
        if (!this._selfClosing)
            output += `</${this.tag}>`;

        // add newline for tags flagged with block-level closing
        if (this._blockClose)
            output += '\n';

        return output;
    }

    /**
     * add a style
     * @param {any} value string or array of strings of CSS styles
     */
    style(value) {
        // normalize input to array
        if (Array.isArray(value))
            value = value.join('; ');
        value = value.trim().replace(/\s+/, ' ').split(';');

        // loop through individual values
        for (let valueIndex = 0; valueIndex < value.length; valueIndex++) {
            if (value[valueIndex]) {
                // clean up add trailing semi-colon
                value[valueIndex] = value[valueIndex].trim() + ';';

                // only add if missing
                if (this.styles.indexOf(value[valueIndex]) == -1)
                    this.styles.push(value[valueIndex]);
            }
        }
    }

    /** convert the object to a string */
    toString() { return `${this.start()}${this.innerHTML()}${this.stop()}`; }


    /*****************************
     ***** Protected Methods *****
     ****************************/

    /**
     * set/unset the attribute for a boolean value (i.e., convert true to "true"/"on" and false to "false"/"off")
     * @param {string} key attribute key
     * @param {boolean} value attribute value (null removes attribute)
     * @param {boolean} onOff true: on/off, false (default): true/false
     */
    _setBooleanValue(key, value, onOff) {
        // define static variables
        if (typeof this._setBooleanValue.enabled == 'undefined')
            this._setBooleanValue.enabled = ['true', 'on'];
        if (typeof this._setBooleanValue.disabled == 'undefined')
            this._setBooleanValue.disabled = ['false', 'off'];

        // true
        if (this._setBooleanValue.enabled.indexOf(value.toString().trim().toLowerCase()) != -1)
            this._attributes[key] = onOff ? 'on' : 'true';
        // false
        else if (this._setBooleanValue.disabled.indexOf(value.toString().trim().toLowerCase()) != -1)
            this._attributes[key] = onOff ? 'off' : 'false';
        // remove
        else
            delete this._attributes[key];
    }

    /**
     * set/unset the attribute for a standard value (i.e., attribute="value")
     * @param {string} key attribute key
     * @param {any} value attribute value (null removes attribute)
     */
    _setStandardValue(key, value) {
        // value
        if (value != null)
            this._attributes[key] = value.toString().replace('\'', '&apos;').replace('"', '&quot;');
        // remove
        else
            delete this._attributes[key];
    }

    /**
     * set/unset the attribute for a toggle value (i.e., true = attribute, false = no attribute)
     * @param {any} key attribute key
     * @param {any} value attribute value (true: attribute without a value, null/false: remove attribute)
     */
    _setTogglableValue(key, value) {
        // define static variable
        if (typeof this._setTogglableValue.enabled == 'undefined')
            this._setTogglableValue.enabled = ['true', 'on'];

        // true
        if (this._setTogglableValue.enabled.indexOf(value.toString().trim().toLowerCase()) != -1)
            this._attributes[key] = null;
        // remove
        else
            delete this._attributes[key];
    }


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
    comment(contents, blockClose, inline) { this.add(new Comment(contents, blockClose, inline)); }


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
    abbreviation(contents, title, attributes) { this.add(new Abbreviation(contents, title, attributes)); }

    /**
     * contact information for the author/owner of a document (within <body>) or an article (within <article>)
     * https://www.w3schools.com/tags/tag_address.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    address(contents, attributes) { this.add(new Address(contents, attributes)); }

    /**
     * standalone piece of content that would make sense if syndicated as a news item
     * https://www.w3schools.com/tags/tag_article.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    article(contents, attributes) { this.add(new Article(contents, attributes)); }

    /**
     * block of content that is related to the main content around it, but can be removed without reducing the main content meaning
     * https://www.w3schools.com/tags/tag_aside.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    aside(contents, attributes) { this.add(new Aside(contents, attributes)); }

    /**
     * highlight without emphasis (bold)
     * https://www.w3schools.com/tags/tag_b.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    bold(contents, attributes) { this.add(new Bold(contents, attributes)); }

    /**
     * quote blocks of content from another source
     * TIP: use <q> for inline (short) quotations
     * https://www.w3schools.com/tags/tag_blockquote.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    blockQuote(contents, attributes) { this.add(new BlockQuote(contents, attributes)); }

    /**
     * cited reference (i.e., title of a work)
     * https://www.w3schools.com/tags/tag_cite.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    cite(contents, attributes) { this.add(new Cite(contents, attributes)); }

    /**
     * computer code block (monospaced)
     * https://www.w3schools.com/tags/tag_code.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    code(contents, attributes) { this.add(new Code(contents, attributes)); }

    /**
     * definition list
     * https://www.w3schools.com/tags/tag_dl.asp
     * @param {object} contents key–value pairs to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    definitionList(contents, attributes) { this.add(new DefinitionList(contents, attributes)); }

    /**
     * deleted (strikethrough)
     * https://www.w3schools.com/tags/tag_del.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    deleted(contents, attributes) { this.add(new Deleted(contents, attributes)); }

    /**
     * additional details that the user can view or hide on demand
     * https://www.w3schools.com/tags/tag_details.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    details(contents, attributes) { this.add(new Details(contents, attributes)); }

    /**
     * generic container for grouping content for styling/visual purposes
     * https://www.w3schools.com/tags/tag_div.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    division(contents, attributes) { this.add(new Division(contents, attributes)); }

    /**
     * emphasized text (italics)
     * https://www.w3schools.com/tags/tag_em.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    emphasis(contents, attributes) { this.add(new Emphasis(contents, attributes)); }

    /**
     * self-contained content, like illustrations, diagrams, photos, code listings, etc.
     * TIP: if removed it should not affect the flow of the document
     * https://www.w3schools.com/tags/tag_figure.asp
     * @param {string} url path to the image
     * @param {string} alternateText alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references) – https://webaim.org/techniques/alttext/
     * @param {any} caption value or array of values to go inside the caption element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    figure(url, alternateText, caption, attributes) { this.add(new Figure(url, alternateText, caption, attributes)); }

    /**
     * contains information about its containing element: authorship, copyright, contact, sitemap, links to related content, etc.
     * TIP: contact information inside a <footer> element should go inside an <address> tag
     * https://www.w3schools.com/tags/tag_footer.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    footer(contents, attributes) { this.add(new Footer(contents, attributes)); }

    /**
     * thematic group of introductory or navigational aids, typically with a h#, logo/icon, and/or authorship
     * https://www.w3schools.com/tags/tag_header.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    header(contents, attributes) { this.add(new Header(contents, attributes)); }

    /**
     * heading 1
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading1(contents, attributes) { this.add(new Heading1(contents, attributes)); }

    /**
     * heading 2
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading2(contents, attributes) { this.add(new Heading2(contents, attributes)); }

    /**
     * heading 3
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading3(contents, attributes) { this.add(new Heading3(contents, attributes)); }

    /**
     * heading 4
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading4(contents, attributes) { this.add(new Heading4(contents, attributes)); }

    /**
     * heading 5
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading5(contents, attributes) { this.add(new Heading5(contents, attributes)); }

    /**
     * heading 6
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading6(contents, attributes) { this.add(new Heading6(contents, attributes)); }

    /**
     * marked text (highlight)
     * https://www.w3schools.com/tags/tag_mark.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    highlight(contents, attributes) { this.add(new Highlight(contents, attributes)); }

    /**
     * FontAwesome icon
     * https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
     * @param {any} name FontAwesome class name (e.g., "fas fa-camera")
     * @param {any} ariaLabel accessibility string value that labels the current element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    icon(name, ariaLabel, attributes) { this.add(new Icon(name, ariaLabel, attributes)); }

    /**
     * inline frame for embedding another document
     * https://www.w3schools.com/tags/tag_iframe.asp
     * @param {string} url address of the document to embed
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    inlineFrame(url, attributes) { this.add(new InlineFrame(url, attributes)); }

    /**
     * image
     * https://www.w3schools.com/tags/tag_img.asp
     * @param {string} url URL path of an image file
     * @param {string} alternateText alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references) – https://webaim.org/techniques/alttext/
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    image(url, alternateText, attributes) { this.add(new Image(url, alternateText, attributes)); }

    /**
     * insertion (underlined)
     * https://www.w3schools.com/tags/tag_ins.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    insert(contents, attributes) { this.add(new Insert(contents, attributes)); }

    /**
     * alternate voice or mood, used to indicate a technical term, foreign phrase, thought, name (italics)
     * TIP: usually use <em>, <strong>, <mark>, <cite>, <dfn> (define) instead
     * https://www.w3schools.com/tags/tag_i.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    italics(contents, attributes) { this.add(new Italics(contents, attributes)); }

    /**
     * horizontal ruler for a thematic break (e.g. a shift of topic)
     * https://www.w3schools.com/tags/tag_hr.asp
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    line(attributes) { this.add(new Line(attributes)); }

    /**
     * line break
     * https://www.w3schools.com/tags/tag_br.asp
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    lineBreak(attributes) { this.add(new LineBreak(attributes)); }

    /**
     * hyperlink (anchor)
     * https://www.w3schools.com/tags/tag_a.asp
     * @param {string} url URL of the page the link goes to
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    link(url, contents, attributes) { this.add(new Link(url, contents, attributes)); }

    /**
     * monospaced and preserves whitespace (pre-formatted)
     * https://www.w3schools.com/tags/tag_pre.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    monospace(contents, attributes) { this.add(new Monospace(contents, attributes)); }

    /**
     * major navigation information (i.e., not just a group of links) and other constructs (e.g., search form)
     * https://www.w3schools.com/tags/tag_nav.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    navigation(contents, attributes) { this.add(new Navigation(contents, attributes)); }

    /**
     * list of items
     * https://www.w3schools.com/tags/tag_ol.asp
     * https://www.w3schools.com/tags/tag_ul.asp
     * @param {any} items items to add to the list
     * @param {boolean} ordered list is ordered (i.e., numbered); default is false (i.e., unordered/bulleted)
     * @param {object} attributes key–value pairs of HTML attributes and other properties for the list
     * @param {any} itemAttributes key–value pairs of HTML attributes and other properties for the list items
     */
    list(items, ordered, attributes, itemAttributes) { this.add(new List(items, ordered, attributes, itemAttributes)); }

    /**
     * represents the result of a calculation (like one performed by a script)
     * https://www.w3schools.com/tags/tag_output.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    output(contents, attributes) { this.add(new Output(contents, attributes)); }

    /**
     * paragraph
     * https://www.w3schools.com/tags/tag_p.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    paragraph(contents, attributes) { this.add(new Paragraph(contents, attributes)); }

    /**
     * short quote (inline, with quotation marks)
     * TIP: use BlockQuote for longer quotations
     * https://www.w3schools.com/tags/tag_q.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    quote(contents, attributes) { this.add(new Quote(contents, attributes)); }

    /**
     * strikethrough (no longer accurate)
     * https://www.w3schools.com/tags/tag_s.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    strike(contents, attributes) { this.add(new Strike(contents, attributes)); }

    /**
     * used to either group different articles into different purposes or subjects, or to define the different sections of a single article
     * https://www.w3schools.com/tags/tag_section.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    section(contents, attributes) { this.add(new Section(contents, attributes)); }

    /**
     * smaller text (e.g., fine print)
     * https://www.w3schools.com/tags/tag_small.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    small(contents, attributes) { this.add(new Small(contents, attributes)); }

    /**
     * span for grouping inline elements
     * https://www.w3schools.com/tags/tag_span.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    span(contents, attributes) { this.add(new Span(contents, attributes)); }

    /**
     * important text (bold)
     * https://www.w3schools.com/tags/tag_strong.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    strong(contents, attributes) { this.add(new Strong(contents, attributes)); }

    /**
     * subscript
     * https://www.w3schools.com/tags/tag_sub.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    subscript(contents, attributes) { this.add(new Subscript(contents, attributes)); }

    /**
     * superscript
     * https://www.w3schools.com/tags/tag_sup.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    superscript(contents, attributes) { this.add(new Superscript(contents, attributes)); }

    /**
     * Scalable Vector Graphics (text-based image)
     * https://www.w3schools.com/tags/tag_svg.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {int} width width in pixels
     * @param {int} height height in pixels
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    svg(contents, width, height, attributes) { this.add(new SVG(contents, width, height, attributes)); }

    /**
     * defining instance of a term (i.e., the parent container of this tag must also contain the definition/explanation for this term)
     * TIP: use the ID so it's easily linked to via "#id")
     * https://www.w3schools.com/tags/tag_dfn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    term(contents, attributes) { this.add(new Term(contents, attributes)); }

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
    table(contents, caption, attributes, captionAttributes, headerAttributes, bodyAttributes, footerAttributes) { this.add(new Table(contents, caption, attributes, captionAttributes, headerAttributes, bodyAttributes, footerAttributes)); }

    /**
     * human-readable date/time, optionally with a SQL-like timestamp
     * https://www.w3schools.com/tags/tag_time.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    time(contents, attributes) { this.add(new Time(contents, attributes)); }

    /**
     * underline
     * https://www.w3schools.com/tags/tag_u.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    underline(contents, attributes) { this.add(new Underline(contents, attributes)); }


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
    button(contents, attributes) { this.add(new Button(contents, attributes)); }

    /**
     * checkbox (on/off, yes/no, etc.)
     * https://www.w3schools.com/tags/tag_input.asp
     * @param {string} value field value to submit when checked
     * @param {string} name field name to submit when checked
     * @param {boolean} checked element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    checkbox(value, name, checked, attributes) { this.add(new Checkbox(value, name, checked, attributes)); }

    /**
     * dropdown container of options
     * https://www.w3schools.com/tags/tag_select.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} name field name to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    dropdown(contents, name, attributes) { this.add(new Dropdown(contents, name, attributes)); }

    /**
     * form element container
     * https://www.w3schools.com/tags/tag_asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    form(contents, attributes) { this.add(new Form(contents, attributes)); }

    /**
     * input/textarea combined
     * https://www.w3schools.com/tags/tag_input.asp
     * https://www.w3schools.com/tags/tag_textarea.asp
     * @param {string} value field value to submit
     * @param {string} name field name to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    input(value, name, attributes) { this.add(new Input(value, name, attributes)); }

    /**
     * label for a form element
     * https://www.w3schools.com/tags/tag_label.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {any} forID ID for the form element the label is for
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    label(contents, forID, attributes) { this.add(new Label(contents, forID, attributes)); }

    /**
     * radio button (selecting one in the set de-selects the others)
     * https://www.w3schools.com/tags/tag_input.asp
     * @param {string} value field value to submit
     * @param {string} name field name to submit
     * @param {boolean} checked element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    radioButton(value, name, checked, attributes) { this.add(new RadioButton(value, name, checked, attributes)); }


    /***************************************
     ***** Bootstrap Component Methods *****
     **************************************/

    /**
     * provides contextual feedback messages for typical user actions
     * https://getbootstrap.com/docs/4.5/components/alerts/
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    alert(contents, attributes) { this.add(new Alert(contents, attributes)); }
}

/**
 * cross-site linked resources (abstract)
 * https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
 */
class CrossOriginTag extends BootstrapTag {
    /**********************
     ***** Properties *****
     *********************/

    /** how the element handles cross-origin requests; valid values: anonymous, use-credentials */
    _crossOrigin;
    get crossOrigin() { return this._crossOrigin; }
    set crossOrigin(value) { this._crossOriginIntegrity(value, this._integrity); }

    /** base64-encoded cryptographic hash of the resource, used to verify that the fetched resource has been delivered free of unexpected manipulation */
    _integrity;
    get integrity() { return this._integrity; }
    set integrity(value) { this._crossOriginIntegrity(this._crossOrigin, value); }


    /*****************************
     ***** Protected Methods *****
     ****************************/

    /**
     * set crossOrigin and integrity (interrelated)
     * @param {any} crossOrigin
     * @param {any} integrity
     */
    _crossOriginIntegrity(crossOrigin, integrity) {
        // update properties
        this._crossOrigin = !crossOrigin && integrity ? 'anonymous' : crossOrigin;  // integrity requires cross-origin
        this._setStandardValue('crossorigin', this._crossOrigin);
        this._integrity = integrity;
        this._setStandardValue('integrity', this._integrity);
    }
}

/** theme support (abstract) */
class ThemeableTag extends BootstrapTag {
    /**********************
     ***** Properties *****
     *********************/

    /**
     * Bootstrap text theme
     * valid values: black-50, body, danger, dark, info, light, muted, primary, secondary, success, warning, white, white-50
     */
    _textTheme;
    get textTheme() {
        return this._textTheme;
    }
    set textTheme(value) {
        // remove dynamic Bootstrap classes
        if (this._textTheme)
            this.removeClass('text-' + this._textTheme);

        // update properties
        this._textTheme = value;

        // add dynamic Bootstrap classes
        if (this._textTheme)
            this.class('text-' + this._textTheme);
    }

    /**
     * Bootstrap background theme
     * valid values: danger, dark, info, light, primary, secondary, success, transparent, warning
     */
    _theme;
    get theme() {
        return this._theme;
    }
    set theme(value) {
        this._setOutlineTheme(this._outline, value);
    }

    /**
     * Bootstrap outline theme
     * outline with theme color (via borders) instead of background color (boolean)
     */
    _outline;
    get outline() {
        return this._outline;
    }
    set outline(value) {
        this._setOutlineTheme(value, this._theme);
    }


    /*****************************
     ***** Protected Methods *****
     ****************************/

    /**
     * background/outline theme are mutually exclusive
     * @param {boolean} outline border theme (true) or background (false)
     * @param {string} theme theme color
     */
    _setOutlineTheme(outline, theme) {
        // remove dynamic Bootstrap classes
        if (this._theme) {
            if (this._outline) {
                this.removeClass('border');
                this.removeClass('border-' + this.theme);
            }
            else
                this.removeClass('bg-' + this.theme);
        }

        // update properties
        this._outline = outline ? true : false;
        this._theme = theme;

        // add dynamic Bootstrap classes
        if (this._theme) {
            if (this._outline) {
                this.class('border');
                this.class('border-' + this._theme);
            }
            else
                this.class('bg-' + this._theme);
        }
    }
}

/**
 * contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc.
 * https://www.w3schools.com/tags/tag_body.asp
 */
class Body extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // create baseline object
        super('body', contents, attributes);

        // initialize elements
        this.scripts = null;

        // initialize attributes
        this.attributes = attributes;
    }


    /********************
     ***** Elements *****
     *******************/

    /** script tags to show before closing the tag */
    _scripts;
    get scripts() { this._scripts; }
    set scripts(value) {
        // create blank array
        this._scripts = [];

        // isn't empty, add script(s)
        if (value)
            this.script(value);
    }


    /**********************
     ***** Properties *****
     *********************/

    /** outline theme is not supported */
    set outline(value) { this._outline = false; }


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
    script(contents, url, attributes) {
        if (contents || typeof attributes == 'object') {
            // convert to an array
            if (!Array.isArray(contents))
                contents = [contents];

            // loop through contents
            for (let contentIndex = 0; contentIndex < contents.length; contentIndex++) {
                // is already a script tag, just add it
                if (contents[contentIndex] instanceof Script)
                    this._scripts.push(contents[contentIndex]);
                // is something else, convert to script tag
                else
                    this._scripts.push(new Script(contents[contentIndex], null, attributes));
            }
        }
        else if (url) {
            // convert to an array
            if (!Array.isArray(url))
                url = [url];

            // loop through urls
            for (let urlIndex = 0; urlIndex < url.length; urlIndex++) {
                this._scripts.push(new Script(null, url[urlIndex], attributes));
            }
        }
    }

    /** close the HTML tag */
    stop() {
        let output = '';

        // add JavaScript tags
        if (this._scripts.length)
            output += this._scripts.join('');

        // close the HTML tag
        output += super.stop();

        return output;
    }
}
exports.Body = Body;

/**
 * insert comments in the source code and are not displayed
 * https://www.w3schools.com/tags/tag_comment.asp
 */
class Comment {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the comment
     * @param {boolean} blockClose insert new line after comment close
     * @param {boolean} inline all on one line
     */
    constructor(contents, blockClose, inline) {
        // set defaults
        if (inline == null)
            inline = true;
        if (blockClose == null)
            blockClose = true;

        // convert parameters to attributes
        this.contents = contents;
        this.blockClose = blockClose;
        this.inline = inline;
    }


    /**********************
     ***** Properties *****
     *********************/

    /** all on one line [boolean] */
    _inline;
    get inline() { return this._inline; }
    set inline(value) { this._inline = value ? true : false; }

    /** insert new line after comment close [boolean] */
    _blockClose;
    get blockClose() { return this._blockClose; }
    set blockClose(value) { this._blockClose = value ? true : false; }

    /** contents [array] */
    _contents;
    get contents() { return this._contents; }
    set contents(value) {
        // is empty, create blank array
        if (value !== 0 && !value)
            this._contents = [];
        // is single item, create array of one
        else if (!Array.isArray(value))
            this._contents = [value];
        // is array, use as-is
        else
            this._contents = value;
    }


    /*******************
     ***** Methods *****
     ******************/

    /**
     * add content
     * @param {any} value value or array of values to go inside the HTML comment element
     */
    add(value) {
        // is array, merge it in
        if (Array.isArray(value))
            this._contents = this._contents.concat(value);
        // isn't array, append it
        else
            this._contents.push(value);
    }

    /** open the HTML comment */
    start() { return '<!--' + (this.inline ? ' ' : '\n'); }

    /** close the HTML comment */
    stop() { return (this.inline ? ' ' : '\n') + '-->' + (this.blockClose ? '\n' : ''); }

    /** convert the object to a string */
    toString() { return this.start() + this.contents.join('') + this.stop(); }
}
exports.Comment = Comment;

/** container for all the head elements, including the title for the document, scripts, styles, meta information, and more */
class Head extends BootstrapTag {
    /**
     * container for all the head elements, including the title for the document, scripts, styles, meta information, and more
     * https://www.w3schools.com/tags/tag_head.asp
     *
     * @param {any} titleContents contents for the title element
     * @param {any} contents contents for the head element
     * @param {object} attributes attributes for the head element
     */
    constructor(titleContents, contents, attributes) {
        // set defaults
        if (!attributes || typeof attributes != 'object')
            attributes = {};
        if (!attributes.charset)
            attributes.charset = 'UTF-8';

        // create baseline object
        super('head', contents, attributes);

        // initialize elements
        this.metadatas = null;
        this.resourceLinks = null;
        this.styles = null;
        this.title = titleContents;

        // initialize attributes
        this.attributes = attributes;
    }


    /********************
     ***** Elements *****
     *******************/

    /** metadata tags [array] */
    _metadatas;
    get metadatas() { return this._metadatas; }
    set metadatas(value) {
        // create blank array
        this._metadatas = [];

        // isn't empty, add script(s)
        if (value)
            this.metadata(value);
    }

    /** linked resource documents [array] */
    _resourceLinks;
    get resourceLinks() { return this._resourceLinks; }
    set resourceLinks(value) {
        // create blank array
        this._resourceLinks = [];

        // isn't empty, add resource link(s)
        if (value)
            this.resourceLink(value);
    }

    /** style tags [array] */
    _styles;
    get styles() { return this._styles; }
    set styles(value) {
        // create blank array
        this._styles = [];

        // isn't empty, add script(s)
        if (value)
            this.style(value);
    }

    /** page title [object] */
    _title;
    get title() { return this._title; }
    set title(value) {
        // already a title object
        if (value instanceof Title)
            this._title = value;
        // something else, embed in title tag
        else
            this._title = new Title(value);
    }


    /**********************
     ***** Properties *****
     *********************/

    /**
     * character set
     * https://www.w3schools.com/tags/att_meta_charset.asp
     */
    charset;


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
    metadata(name, content, attributes) {
        // is already a meta object, just add it
        if (name && typeof name == 'object' && name instanceof Metadata)
            this._metadatas.push(name);
        // convert to meta object and add it
        else
            this._metadatas.push(new Metadata(name, content, attributes));
    }

    /**
     * link between a document and an external resource
     * https://www.w3schools.com/tags/tag_link.asp
     * @param {string} url path to the linked file
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    resourceLink(url, attributes) {
        // is already a resourceLink object, just add it
        if (url instanceof ResourceLink)
            this._resourceLinks.push(url);
        // convert to resourceLink object and add it
        else
            this._resourceLinks.push(new ResourceLink(url, attributes));
    }

    /** open the HTML tag */
    start() {
        let output = '';

        // start HTML head
        output += super.start();

        // process output
        if (this.title.contents.length)
            output += this.title;
        if (this.charset) {
            let meta = new Metadata();
            meta.charset = this.charset;
            output += meta;
        }
        output += this.metadatas.join('');
        output += this.resourceLinks.join('');
        output += this.styles.join('');
        return output;
    }

    /**
     * contains embedded styling information
     * https://www.w3schools.com/tags/tag_style.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    style(content, attributes) {
        // is already a style object, just add it
        if (content instanceof Style)
            this._styles.push(content);
        // convert to meta object and add it
        else
            this._styles.push(new Style(content, attributes));
    }
}
exports.Head = Head;

/**
 * link between a document and an external resource
 * https://www.w3schools.com/tags/tag_link.asp
 */
class ResourceLink extends CrossOriginTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url, attributes) {
        // create baseline object
        super('link', null, attributes);

        // initialize attributes
        this.attributes = attributes;

        // convert parameters to attributes
        if (!this.url && url)
            this.url = url;

        // set defaults
        if (!this.rel)
            this.rel = 'stylesheet';
    }


    /**********************
     ***** Attributes *****
     *********************/

    /**
     * language code of the text in the linked document
     * https://www.w3schools.com/tags/ref_language_codes.asp
     */
    set language(value) {
        this._language = value;
        this._setStandardValue('hreflang', value);
    }

    /**
     * media query that specifies on what device the linked document will be displayed
     * https://www.w3schools.com/tags/att_link_media.asp
     */
    _media;
    get media() { return this._media; }
    set media(value) {
        this._media = value;
        this._setStandardValue('media', value);
    }

    /**
     * relationship between the current document and the linked document
     * valid values: alternate, author, dns-prefetch, help, icon, license, next, pingback, preconnect, prefetch, preload, prerender, prev, search, stylesheet
     */
    _rel;
    get rel() { return this._rel; }
    set rel(value) {
        this._rel = value;
        this._setStandardValue('rel', value);
    }

    /**
     * size of the linked resource (for rel="icon" only)
     * valid values: «height»x«width», any
     */
    _sizes;
    get sizes() { return this._sizes; }
    set sizes(value) {
        this._sizes = value;
        this._setStandardValue('sizes', value);
    }

    /**
     * media type of the linked document
     * http://www.iana.org/assignments/media-types/
     */
    _type;
    get type() { return this._type; }
    set type(value) {
        this._type = value;
        this._setStandardValue('type', value);
    }

    /** location of the linked document */
    _url;
    get url() { return this._url; }
    set url(value) {
        this._url = value;
        this._setStandardValue('href', value);
    }
}
exports.ResourceLink = ResourceLink;

/**
 * document type and the container for all other HTML elements
 * https://www.w3schools.com/tags/tag_html.asp
 */
class HTML extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} titleContents contents for the title element
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(titleContents, contents, attributes) {
        // create baseline object
        super('html', contents, attributes);

        // initialize elements
        this.head = new Head(titleContents);
        this.body = new Body();

        // initialize attributes
        this.attributes = attributes;
    }


    /********************
     ***** Elements *****
     *******************/

    /** HTML body tag */
    body;

    /** HTML head tag */
    head;

    /** meta tags [array] */
    get metadatas() { return this.head.metadatas; }
    set metadatas(value) { this.head.metadatas = value; }

    /** linked resource documents [array] */
    get resourceLinks() { return this.head.resourceLinks; }
    set resourceLinks(value) { this.head.resourceLinks = value; }

    /** script tags to show before closing the tag */
    get scripts() { return this.body.scripts; }
    set scripts(value) { this.body.scripts = value; }

    /** page title [object] */
    get title() { return this.head.title; }
    set title(value) { this.head.title = value; }


    /**********************
     ***** Properties *****
     *********************/

    /**
     * character set
     * https://www.w3schools.com/tags/att_meta_charset.asp
     */
    get charset() { return this.head.charset; }
    set charset(value) { this.head.charset = value; }


    /**************************
     ***** Public Methods *****
     *************************/

    /**
     * add content
     * @param {any} value value or array of values to go inside the body element
     */
    add(value) { this.body.add(value); }

    /**
     * link between a document and an external resource
     * https://www.w3schools.com/tags/tag_link.asp
     * @param {string} url path to the linked file
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    resourceLink(url, attributes) { this.head.resourceLink(url, attributes); }

    /** contents of the tag */
    innerHTML() {
        let output = '';

        if (this.body.contents.length)
            output += this.body.innerHTML();
        output += super.innerHTML();

        return output;
    }

    /**
     * provides metadata about the HTML document
     * https://www.w3schools.com/tags/tag_meta.asp
     * @param {any} name name for the metadata element
     * @param {any} content value for the metadata element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    metadata(name, content, attributes) { this.head.metadata(name, content, attributes); }

    /**
     * contains JavaScript statements or points to an external script file
     * https://www.w3schools.com/tags/tag_script.asp
     * @param {any} contents value or array of values to go inside the script element
     * @param {string} url URL path of a script file
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    script(contents, url, attributes) { this.body.script(contents, url, attributes); }

    /** open the HTML tag */
    start() {
        let output = '<!DOCTYPE html>\n';

        output += super.start();
        if (this.head.contents)
            output += this.head;
        if (this.body.contents)
            output += this.body.start();

        return output;
    }

    /** close the HTML tag */
    stop() {
        let output = '';

        // add body
        if (this.body.contents)
            output += this.body.stop();

        // close the HTML tag
        output += super.stop();

        return output;
    }

    /**
     * contains embedded styling information
     * https://www.w3schools.com/tags/tag_style.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    style(contents, attributes) { this.head.style(contents, attributes); }
}
exports.HTML = HTML;

/**
 * provides metadata about the HTML document
 * https://www.w3schools.com/tags/tag_meta.asp
 */
class Metadata extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} name name for the metadata element
     * @param {any} content value for the metadata element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(name, content, attributes) {
        // create baseline object
        super('meta', null, attributes);

        // initialize attributes
        this.attributes = attributes;

        // convert parameters to attributes
        if (!this.name && name)
            this.name = name;
        if (!this.content && content)
            this.content = content;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /**
     * character encoding for the HTML document
     * https://www.w3schools.com/tags/att_meta_charset.asp
     */
    _charset;
    get charset() { return this._charset; }
    set charset(value) {
        this._charset = value;
        this._setStandardValue('charset', value);
    }

    /** metadata value */
    _content;
    get content() { return this._content; }
    set content(value) {
        this._content = value;
        this._setStandardValue('content', value);
    }

    /**
     * metadata name
     * valid values: application-name, author, description, generator, keywords, viewport
     */
    _name;
    get name() { return this._name; }
    set name(value) {
        this._name = value;
        this._setStandardValue('name', value);
    }

    /**
     * provides an HTTP header for the information/value of the content attribute and can be used to simulate an HTTP response header
     * https://www.w3schools.com/tags/att_meta_http_equiv.asp
     */
    _headerEquivalent;
    get headerEquivalent() { return this._headerEquivalent; }
    set headerEquivalent(value) {
        this._headerEquivalent = value;
        this._setStandardValue('http-equiv', value);
    }


    /**********************
     ***** Properties *****
     *********************/

    /** character encoding for the document */
    _contentType;
    get contentType() { return this._contentType; }
    set contentType(value) {
        this.headerEquivalent = 'content-type';
        this.content = value;
    }

    /**
     * the preferred style sheet to use (must match the value of the title attribute on a link element in the same document, or it
     * must match the value of the title attribute on a style element in the same document)
     */
    _defaultStyle;
    get defaultStyle() { return this._defaultStyle; }
    set defaultStyle(value) {
        this.headerEquivalent = 'default-style';
        this.content = value;
    }

    /** time interval (in seconds) for the document to refresh itself, optionally append the time with "; url=http://www.example.com/" to relocate */
    _refresh;
    get refresh() { return this._refresh; }
    set refresh(value) {
        this.headerEquivalent = 'refresh';
        this.content = value;
    }
}
exports.Metadata = Metadata;

/**
 * contains JavaScript statements or points to an external script file
 * https://www.w3schools.com/tags/tag_script.asp
 */
class Script extends CrossOriginTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} url URL path of a script file
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, url, attributes) {
        // create baseline object
        super('script', contents, attributes);

        // initialize attributes
        this.attributes = attributes;

        // convert parameters to attributes
        if (!this.url && url)
            this.url = url;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** specifies that the script is executed asynchronously (only for external scripts) [boolean] */
    _async;
    get async() { return this._async; }
    set async(value) {
        this._async = value;
        this._setTogglableValue('async', value);
    }

    /**
     * character encoding used in an external script file
     * https://www.w3schools.com/charsets/default.asp
     */
    _charset;
    get charset() { return this._charset; }
    set charset(value) {
        this._charset = value;
        this._setStandardValue('charset', value);
    }

    /** specifies that the script is executed when the page has finished parsing (only for external scripts) [boolean] */
    _defer;
    get defer() { return this._defer; }
    set defer(value) {
        this._defer = value;
        this._setTogglableValue('defer', value);
    }

    /**
     * media type
     * http://www.iana.org/assignments/media-types/media-types.xhtml
     */
    _type;
    get type() { return this._type; }
    set type(value) {
        this._type = value;
        this._setStandardValue('type', value);
    }

    /** location of the external script file (not needed when code is embedded) */
    _url;
    get url() { return this._url; }
    set url(value) {
        this._url = value;
        this._setStandardValue('src', value);
    }
}
exports.Script = Script;

/**
 * contains embedded styling information
 * https://www.w3schools.com/tags/tag_style.asp
 */
class Style extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // create baseline object
        super('style', contents, attributes);

        // initialize attributes
        this.attributes = attributes;
    }

    /**********************
     ***** Attributes *****
     *********************/

    /**
     * specifies what media/device the media resource is optimized for
     * https://www.w3schools.com/tags/att_style_media.asp
     */
    _media;
    get media() { return this._media; }
    set media(value) {
        this._media = value;
        this._setStandardValue('media', value);
    }
}
exports.Style = Style;

/**
 * defines the title of the document, shows in browser toolbar, favorites, and search engine results
 * https://www.w3schools.com/tags/tag_title.asp
 */
class Title extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('title', contents, attributes); }
}
exports.Title = Title;


/*************************************************************************************************************
 ************************************************** Content **************************************************
 ************************************************************************************************************/

/**
 * abbreviation or acronym
 * https://www.w3schools.com/tags/tag_abbr.asp
 */
class Abbreviation extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} title expands the abbreviation
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, title, attributes) {
        // create baseline object
        super('abbr', contents, attributes);

        // convert parameters to attributes
        this.title = title;
    }
}
exports.Abbreviation = Abbreviation;

/**
 * contact information for the author/owner of a document (within <body>) or an article (within <article>)
 * https://www.w3schools.com/tags/tag_address.asp
 */
class Address extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('address', contents, attributes); }
}
exports.Address = Address;

/**
 * standalone piece of content that would make sense if syndicated as a news item
 * https://www.w3schools.com/tags/tag_article.asp
 */
class Article extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('article', contents, attributes); }
}
exports.Article = Article;

/**
 * block of content that is related to the main content around it, but can be removed without reducing the main content meaning
 * https://www.w3schools.com/tags/tag_aside.asp
 */
class Aside extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('aside', contents, attributes); }
}
exports.Aside = Aside;

/**
 * highlight without emphasis (bold)
 * https://www.w3schools.com/tags/tag_b.asp
 */
class Bold extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('b', contents, attributes); }
}
exports.Bold = Bold;

/**
 * quote blocks of content from another source
 * TIP: use <q> for inline (short) quotations
 * https://www.w3schools.com/tags/tag_blockquote.asp
 */
class BlockQuote extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // create baseline object
        super('blockquote', contents, attributes);

        // initialize attributes
        this.attributes = attributes;
    }

    /**********************
     ***** Attributes *****
     *********************/

    /** URL source of the quotation */
    _cite;
    get cite() { return this._cite; }
    set cite(value) {
        this._cite = value;
        this._setStandardValue('cite', value);
    }
}
exports.BlockQuote = BlockQuote;

/**
 * cited reference (i.e., title of a work)
 * https://www.w3schools.com/tags/tag_cite.asp
 */
class Cite extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('cite', contents, attributes); }
}
exports.Cite = Cite;

/**
 * computer code block (monospaced)
 * https://www.w3schools.com/tags/tag_code.asp
 */
class Code extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('code', contents, attributes); }
}
exports.Code = Code;

/**
 * deleted content (strikethrough)
 * https://www.w3schools.com/tags/tag_del.asp
 */
class Deleted extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('del', contents, attributes); }
}
exports.Deleted = Deleted;

/**
 * definition description
 * https://www.w3schools.com/tags/tag_dd.asp
 */
class DefinitionDescription extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('dd', contents, attributes); }
}
exports.DefinitionDescription = DefinitionDescription;

/**
 * definition list
 * https://www.w3schools.com/tags/tag_dl.asp
 */
class DefinitionList extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {object} contents key–value pairs to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // create baseline object
        super('dl', null, attributes);

        // add contents
        if (contents) {
            if (typeof contents == 'object') {
                for (const [key, value] of Object.entries(contents))
                    this.add(key, value);
            }
        }
    }

    /**
     * add a new term/description pair
     * @param {any} term either a definitionTerm or content for a new one
     * @param {any} description either a definitionDescription or content for a new one
     * @param {any} termAttributes attributes for when creating a new DefinitionTerm
     * @param {any} descriptionAttributes attributes for when creating a new DefinitionDescription
     */
    add(term, description, termAttributes, descriptionAttributes) {
        // convert term to a definitionTerm object
        if (!(term instanceof DefinitionTerm))
            term = new DefinitionTerm(term, termAttributes);

        // convert description to a new DefinitionDescription object
        if (!(description instanceof DefinitionDescription))
            description = new DefinitionDescription(description, descriptionAttributes);

        // add components
        super.add(term);
        super.add(description);
    }
}
exports.DefinitionList = DefinitionList;

/**
 * definition term/name
 * https://www.w3schools.com/tags/tag_dt.asp
 */
class DefinitionTerm extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('dt', contents, attributes); }
}
exports.DefinitionTerm = DefinitionTerm;

/**
 * additional details that the user can view or hide on demand
 * https://www.w3schools.com/tags/tag_details.asp
 */
class Details extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // create baseline object
        super('details', contents, attributes);

        // initialize elements
        this.summary = null;

        // initialize attributes
        this.attributes = attributes;
    }

    /**********************
     ***** Attributes *****
     *********************/

    /** specifies whether the details should be visible to the user [boolean] */
    _open;
    get open() { return this._open; }
    set open(value) {
        this._open = value;
        this._setTogglableValue('open', value);
    }

    /** fires when the user opens or closes the element */
    _onToggle;
    get onToggle() { return this._onToggle; }
    set onToggle(value) {
        this._onToggle = value;
        this._setStandardValue('ontoggle', value);
    }


    /********************
     ***** Elements *****
     *******************/

    _summary;
    get summary() { return this._summary; }
    set summary(value) {
        // already a summary object
        if (value instanceof Summary)
            this._summary = value;
        // something else, embed in title tag
        else
            this._summary = new Summary(value);
    }


    /*******************
     ***** Methods *****
     ******************/

    /** open the HTML tag */
    start() {
        let output = '';

        // start HTML head
        output += super.start();

        // process output
        if (this.summary.contents.length)
            output += this.summary;

        return output;
    }
}
exports.Details = Details;

/**
 * generic container for grouping content for styling/visual purposes
 * https://www.w3schools.com/tags/tag_div.asp
 */
class Division extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('div', contents, attributes); }
}
exports.Division = Division;

/**
 * emphasized text (italics)
 * https://www.w3schools.com/tags/tag_em.asp
 */
class Emphasis extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('em', contents, attributes); }
}
exports.Emphasis = Emphasis;

/**
 * self-contained content, like illustrations, diagrams, photos, code listings, etc.
 * TIP: if removed it should not affect the flow of the document
 * https://www.w3schools.com/tags/tag_figure.asp
 */
class Figure extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {string} url path to the image
     * @param {string} alternateText alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references) – https://webaim.org/techniques/alttext/
     * @param {any} contents value or array of values to go inside the caption element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url, alternateText, caption, attributes) {
        // create baseline object
        super('figure', null, attributes);

        // initialize elements
        this._image = new Image(url, alternateText);
        this.caption = caption;

        // initialize attributes
        this.attributes = attributes;
    }


    /********************
     ***** Elements *****
     *******************/

    /**
     * caption for a <figure> element
     * https://www.w3schools.com/tags/tag_figcaption.asp
     */
    _caption;
    get caption() { return this._caption; }
    set caption(value) {
        // already a summary object
        if (value instanceof FigureCaption)
            this._caption = value;
        // something else, embed in caption tag
        else
            this._caption = new FigureCaption(value);
    }

    /**
     * image
     * https://www.w3schools.com/tags/tag_img.asp
     */
    _image;
    get image() { return this._image; }
    set image(value) { this._image = new Image(value); }


    /**********************
     ***** Properties *****
     *********************/

    /** put the caption element above the figure (default: false) [boolean] */
    _captionOnTop;
    get captionOnTop() { return this._captionOnTop; }
    set captionOnTop(value) { this._captionOnTop = value ? true : false; }


    /*******************
     ***** Methods *****
     ******************/

    /** open the HTML tag */
    start() {
        let output = '';

        // process output
        output += super.start();
        if (this.captionOnTop && this.caption.contents.length)
            output += this.caption;
        if (this.image.url)
            output += this.image;

        return output;
    }

    /** close the HTML tag */
    stop() {
        let output = '';

        // process output
        if (!this.captionOnTop && this.caption.contents.length)
            output += this.caption;

        // close the HTML tag
        output += super.stop();

        return output;
    }
}
exports.Figure = Figure;

/**
 * caption for a <figure> element
 * https://www.w3schools.com/tags/tag_figcaption.asp
 */
class FigureCaption extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('figcaption', contents, attributes); }
}
exports.FigureCaption = FigureCaption;

/**
 * contains information about its containing element: authorship, copyright, contact, sitemap, links to related content, etc.
 * TIP: contact information inside a <footer> element should go inside an <address> tag
 * https://www.w3schools.com/tags/tag_footer.asp
 */
class Footer extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('footer', contents, attributes); }
}
exports.Footer = Footer;

/**
 * thematic group of introductory or navigational aids, typically with a h#, logo/icon, and/or authorship
 * https://www.w3schools.com/tags/tag_header.asp
 */
class Header extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('header', contents, attributes); }
}
exports.Header = Header;

/**
 * headings
 * https://www.w3schools.com/tags/tag_hn.asp
 */
class Heading1 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('h1', contents, attributes); }
}
exports.Heading1 = Heading1;
class Heading2 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('h2', contents, attributes); }
}
exports.Heading2 = Heading2;
class Heading3 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('h3', contents, attributes); }
}
exports.Heading3 = Heading3;
class Heading4 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('h4', contents, attributes); }
}
exports.Heading4 = Heading4;
class Heading5 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('h5', contents, attributes); }
}
exports.Heading5 = Heading5;
class Heading6 extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('h6', contents, attributes); }
}
exports.Heading6 = Heading6;

/**
 * marked text (highlighted)
 * https://www.w3schools.com/tags/tag_mark.asp
 */
class Highlight extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('mark', contents, attributes); }
}
exports.Highlight = Highlight;

/**
 * alternate voice or mood, used to indicate a technical term, foreign phrase, thought, name (italics)
 * TIP: usually use <em>, <strong>, <mark>, <cite>, <dfn> (define) instead
 * https://www.w3schools.com/tags/tag_i.asp
 */
class Italics extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('i', contents, attributes); }
}
exports.Italics = Italics;

/**
 * FontAwesome icon
 * https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
 */
class Icon extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} name FontAwesome class name (e.g., "fas fa-camera")
     * @param {any} ariaLabel accessibility string value that labels the current element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(name, ariaLabel, attributes) {
        if (typeof name != 'string')
            throw 'Bootstrap icon must be provided a FontAwesome class name as the first parameter';

        // create baseline object
        super('i', null, attributes);

        // add icon classes
        this.class(name);

        // get accessibility label from icon name
        if (!ariaLabel && ariaLabel !== 0)
            ariaLabel = name.replace('-alt', '').replace(/^(fa[a-z]? )?fa-/, '').replace('-', ' ');

        // add accessibility label te'xt
        if (!this.ariaLabel && this.ariaLabel !== 0)
            this.ariaLabel = ariaLabel;
    }
}
exports.Icon = Icon;

/**
 * inline frame for embedding another document
 * https://www.w3schools.com/tags/tag_iframe.asp
 */
class InlineFrame extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {string} url address of the document to embed
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url, attributes) {
        // create baseline object
        super('iframe', null, attributes);

        // initialize attributes
        this.attributes = attributes;

        // convert parameters to attributes
        if (!this.url && url)
            this.url = url;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** allow iframe to go into fullscreen mode (i.e., videos) [boolean] */
    _allowFullScreen;
    get allowFullScreen() { return this._allowFullScreen; }
    set allowFullScreen(value) {
        this._allowFullScreen = value;
        this._setTogglableValue('allowfullscreen', value);
    }

    /** height in pixels */
    _height;
    get height() { return this._height; }
    set height(value) {
        this._height = value;
        this._setStandardValue('height', value);
    }

    /** name of the iframe (can be used to reference the element in a JavaScript, or as the value of the target attribute of an <a> or <form> element, or the formtarget attribute of an <input> or <button> element) */
    _name;
    get name() { return this._name; }
    set name(value) {
        this._name = value;
        this._setStandardValue('name', value);
    }

    /** enables an extra set of restrictions for the content in the iframe (whitelist); valid values: true (fully restrict) allow-forms, allow-pointer-lock, allow-popups, allow-same-origin, allow-scripts, allow-top-navigation */
    _sandbox;
    get sandbox() { return this._sandbox; }
    set sandbox(value) {
        this._sandbox = value;
        this._setTogglableValue('sandbox', value);
    }

    /** address of the document to embed */
    _url;
    get url() { return this._url; }
    set url(value) {
        this._url = value;
        this._setStandardValue('src', value);
    }

    /**  width in pixels */
    _width;
    get width() { return this._width; }
    set width(value) {
        this._width = value;
        this._setStandardValue('width', value);
    }
}
exports.InlineFrame = InlineFrame;

/**
 * image
 * https://www.w3schools.com/tags/tag_img.asp
 */
class Image extends CrossOriginTag {
    /**
     * create a new instance of the object
     * @param {string} url URL path of an image file
     * @param {string} alternateText alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references) – https://webaim.org/techniques/alttext/
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url, alternateText, attributes) {
        // create baseline object
        super('img', null, attributes);

        // initialize attributes
        this.attributes = attributes;

        // convert parameters to attributes
        if (!this.url && url)
            this.url = url;
        if (!this.alternateText && alternateText)
            this.alternateText = alternateText;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /**
     * alternate text (for accessibility (read out loud by screen readers) and displayed for broken image references)
     * https://webaim.org/techniques/alttext/
     */
    _alternateText;
    get alternateText() { return this._alternateText; }
    set alternateText(value) {
        this._alternateText = value;
        this._setStandardValue('alt', value);
    }

    /** height in pixels */
    _height;
    get height() { return this._height; }
    set height(value) {
        this._height = value;
        this._setStandardValue('height', value);
    }

    /** specifies that the image is part of a server-side image-map (an image-map is an image with clickable areas) [boolean] */
    _isMap;
    get isMap() { return this._isMap; }
    set isMap(value) {
        this._isMap = value;
        this._setTogglableValue('ismap', value);
    }

    /** URL to a detailed description of an image */
    _longDescription;
    get longDescription() { return this._longDescription; }
    set longDescription(value) {
        this._longDescription = value;
        this._setStandardValue('longdesc', value);
    }

    /** URL path of an image file */
    _url;
    get url() { return this._url; }
    set url(value) {
        this._url = value;
        this._setStandardValue('src', value);
    }

    /** specifies an image as a client-side image-map (an image-map is an image with clickable areas); valid value: hash character ("#") plus the name of the <map> element to use */
    _useMap;
    get useMap() { return this._useMap; }
    set useMap(value) {
        // prepend with hash tag
        if (value && value.toString().substr(0, 1) != '#')
            value = '#' + value.toString();

        this._useMap = value;
        this._setStandardValue('usemap', value);
    }

    /** width in pixels */
    _width;
    get width() { return this._width; }
    set width(value) {
        this._width = value;
        this._setStandardValue('width', value);
    }
}
exports.Image = Image;

/**
 * underline (insertion)
 * https://www.w3schools.com/tags/tag_ins.asp
 */
class Insert extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('ins', contents, attributes); }
}
exports.Insert = Insert;

/**
 * horizontal ruler for a thematic break (e.g. a shift of topic)
 * https://www.w3schools.com/tags/tag_hr.asp
 */
class Line extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(attributes) { super('hr', null, attributes); }
}
exports.Line = Line;

/**
 * line break
 * https://www.w3schools.com/tags/tag_br.asp
 */
class LineBreak extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(attributes) { super('br', null, attributes); }
}
exports.LineBreak = LineBreak;

/**
 * hyperlink (anchor)
 * https://www.w3schools.com/tags/tag_a.asp
 */
class Link extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {string} url URL of the page the link goes to
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(url, contents, attributes) {
        // create baseline object
        super('a', contents, attributes);

        // initialize attributes
        this.attributes = attributes;

        // convert parameters to attributes
        if (!this.url && url)
            this.url = url;
    }

    /**********************
     ***** Attributes *****
     *********************/

    /**
     * specifies that the target will be downloaded when a user clicks on the hyperlink
     * valid values: true, URL
     */
    _download;
    get download() { return this._download; }
    set download(value) {
        this._download = value;
        this._setTogglableValue('download', value);
    }

    /**
     * language code of the text in the linked document
     * https://www.w3schools.com/tags/ref_language_codes.asp
     */
    _linkLanguage;
    get linkLanguage() { return this._linkLanguage; }
    set linkLanguage(value) {
        this._linkLanguage = value;
        this._setStandardValue('hreflang', value);
    }

    /**
     * media query that specifies on what device the linked document will be displayed
     * https://www.w3schools.com/tags/att_link_media.asp
     */
    _media;
    get media() { return this._media; }
    set media(value) {
        this._media = value;
        this._setStandardValue('media', value);
    }

    /** specifies a list of URLs (separated by spaces) to be notified if the user follows the hyperlink, sending a short HTTP POST request to the specified URL(s) */
    _ping;
    get ping() { return this._ping; }
    set ping(value) {
        this._ping = value;
        this._setStandardValue('ping', value);
    }

    /**
     * relationship between the current document and the linked document
     * valid values: alternate, author, bookmark, external, help, license, next, nofollow, noreferrer, noopener, prev, search, tag
     */
    _rel;
    get rel() { return this._rel; }
    set rel(value) {
        this._rel = value;
        this._setStandardValue('rel', value);
    }

    /**
     * specifies which referrer to send
     * valid values: no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, unsafe-url
     */
    _referrerPolicy;
    get referrerPolicy() { return this._referrerPolicy; }
    set referrerPolicy(value) {
        this._referrerPolicy = value;
        this._setStandardValue('referrerpolicy', value);
    }

    /**
     * specifies where to open the linked document
     * valid values: _blank, _parent, _self, _top, «frame»
     */
    _target;
    get target() { return this._target; }
    set target(value) {
        this._target = value;
        this._setStandardValue('target', value);
    }

    /**
     * media type of the linked document
     * http://www.iana.org/assignments/media-types/
     */
    _type;
    get type() { return this._type; }
    set type(value) {
        this._type = value;
        this._setStandardValue('type', value);
    }

    /** URL of the page the link goes to */
    _url;
    get url() { return this._url; }
    set url(value) {
        this._url = value;
        this._setStandardValue('href', value);
    }
}
exports.Link = Link;

/**
 * list of items
 * https://www.w3schools.com/tags/tag_ol.asp
 * https://www.w3schools.com/tags/tag_ul.asp
 */
class List extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} items items to add to the list
     * @param {boolean} ordered list is ordered (i.e., numbered); default is false (i.e., unordered/bulleted)
     * @param {object} attributes key–value pairs of HTML attributes and other properties for the list
     * @param {any} itemAttributes key–value pairs of HTML attributes and other properties for the list items
     */
    constructor(items, ordered, attributes, itemAttributes) {
        // create baaseline object
        super(ordered ? 'ol' : 'ul', null, attributes);

        // initialize attributes
        this.attributes = attributes;

        // add items
        if (items) {
            // convert items to an array
            if (!Array.isArray(items))
                items = [items];

            // add items
            for (let itemIndex = 0; itemIndex < items.length; itemIndex++)
                this.add(items[itemIndex], itemAttributes);
        }
    }

    /**********************
     ***** Attributes *****
     *********************/

    /** ordered list should be descending (9, 8, 7, …) [boolean] */
    _reversed;
    get reversed() { return this._reversed; }
    set reversed(value) {
        this._reversed = value;
        this._setTogglableValue('reversed', value);
    }

    /** starting value for ordered lists [number] */
    _startingValue;
    get startingValue() { return this.startingValue; }
    set startingValue(value) {
        this._startingValue = value;
        this._setStandardValue('start', value);
    }

    /**
     * markers to use for ordered lists
     * valid values: 1, A, a, I, i
     */
    _type;
    get type() { return this._type; }
    set type(value) {
        this._type = value;
        this._setStandardValue('type', value);
    }


    /*******************
     ***** Methods *****
     ******************/

    /**
     * add an item to the list
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    add(contents, attributes) {
        if (!(contents instanceof ListItem))
            contents = new ListItem(contents, attributes);

        super.add(contents);
    }
}
exports.List = List;

/**
 * list item for ordered/unordered lists
 * https://www.w3schools.com/tags/tag_li.asp
 */
class ListItem extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // create baseline object
        super('li', contents, attributes);

        // initialize attributes
        this.attributes = attributes;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** value of a list item [number], where the following list items will increment from that number (only for ordered lists) */
    _value;
    get value() { return this._value; }
    set value(value) {
        this._value = value;
        this._setStandardValue('value', value);
    }
}
exports.ListItem = ListItem;

/**
 * monospaced and preserves whitespace (pre-formatted)
 * https://www.w3schools.com/tags/tag_pre.asp
 */
class Monospace extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('pre', contents, attributes); }
}
exports.Monospace = Monospace;

/**
 * major navigation information (i.e., not just a group of links) and other constructs (e.g., search form)
 * https://www.w3schools.com/tags/tag_nav.asp
 */
class Navigation extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('nav', contents, attributes); }
}
exports.Navigation = Navigation;

/**
 * represents the result of a calculation (like one performed by a script)
 * https://www.w3schools.com/tags/tag_output.asp
 */
class Output extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // create baseline object
        super('output', contents, attributes);

        // initialize attributes
        this.attributes = attributes;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** specifies the relationship between the result of the calculation, and the elements used in the calculation; valid value: element ID(s) (space-separated) */
    _for;
    get for() { return this._for; }
    set for(value) {
        this._for = value;
        this._setStandardValue('for', value);
    }

    /** one or more forms the output belongs to; valid value: form ID(s) (space-separated) */
    _form;
    get form() { return this._form; }
    set form(value) {
        this._form = value;
        this._setStandardValue('form', value);
    }

    /** element name (for use by calculation trigger code) */
    _name;
    get name() { return this._name; }
    set name(value) {
        this._name = value;
        this._setStandardValue('name', value);
    }
}
exports.Output = Output;

/**
 * paragraph
 * https://www.w3schools.com/tags/tag_p.asp
 */
class Paragraph extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('p', contents, attributes); }
}
exports.Paragraph = Paragraph;

/**
 * short quote (inline, with quotation marks)
 * TIP: use BlockQuote for longer quotations
 * https://www.w3schools.com/tags/tag_q.asp
 */
class Quote extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('q', contents, attributes); }
}
exports.Quote = Quote;

/**
 * strikethrough (no longer accurate)
 * https://www.w3schools.com/tags/tag_s.asp
 */
class Strike extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('s', contents, attributes); }
}
exports.Strike = Strike;

/**
 * used to either group different articles into different purposes or subjects, or to define the different sections of a single article
 * https://www.w3schools.com/tags/tag_section.asp
 */
class Section extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('section', contents, attributes); }
}
exports.Section = Section;

/**
 * smaller text (e.g., fine print)
 * https://www.w3schools.com/tags/tag_small.asp
 */
class Small extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('small', contents, attributes); }
}
exports.Small = Small;

/**
 * span for grouping inline elements
 * https://www.w3schools.com/tags/tag_span.asp
 */
class Span extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('span', contents, attributes); }
}
exports.Span = Span;

/**
 * important text (bold)
 * https://www.w3schools.com/tags/tag_strong.asp
 */
class Strong extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('strong', contents, attributes); }
}
exports.Strong = Strong;

/**
 * subscript
 * https://www.w3schools.com/tags/tag_sub.asp
 */
class Subscript extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('sub', contents, attributes); }
}
exports.Subscript = Subscript;

/**
 * superscript
 * https://www.w3schools.com/tags/tag_sup.asp
 */
class Superscript extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('sup', contents, attributes); }
}
exports.Superscript = Superscript;

/**
 * visible heading for the <details> element, which can be clicked to view/hide the details
 * https://www.w3schools.com/tags/tag_summary.asp
 */
class Summary extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('summary', contents, attributes); }
}
exports.Summary = Summary;

/**
 * Scalable Vector Graphics (text-based image)
 * https://www.w3schools.com/tags/tag_svg.asp
 * TODO: test themeable
 * TODO: add various methods for SVG elements: https://www.w3schools.com/graphics/svg_intro.asp
 */
class SVG extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {int} width width in pixels
     * @param {int} height height in pixels
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, width, height, attributes) {
        // create baseline object
        super('svg', contents, attributes);

        // initialize attributes
        this.attributes = attributes;

        // convert parameters to attributes
        if (!this.width && width)
            this.width = width;
        if (!this.height && height)
            this.height = height;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** height in pixels */
    _height;
    get height() { return this._height; }
    set height(value) {
        this._height = value;
        this._setStandardValue('height', value);
    }

    /** width in pixels */
    _width;
    get width() { return this._width; }
    set width(value) {
        this._width = value;
        this._setStandardValue('width', value);
    }
}
exports.SVG = SVG;

/**
 * defining instance of a term (i.e., the parent container of this tag must also contain the definition/explanation for this term)
 * TIP: use the ID so it's easily linked to via "#id")
 * https://www.w3schools.com/tags/tag_dfn.asp
 */
class Term extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('dfn', contents, attributes); }
}
exports.Term = Term;

/**
 * human-readable date/time, optionally with a SQL-like timestamp
 * https://www.w3schools.com/tags/tag_time.asp
 */
class Time extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // create baseline object
        super('time', contents, attributes);

        // initialize attributes
        this.attributes = attributes;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** SQL-like timestamp so that browsers can offer to add date reminders through the user's calendar, and search engines can produce smarter search results, etc. */
    _timestamp;
    get timestamp() { return this._timestamp; }
    set timestamp(value) {
        this._timestamp = value;
        this._setStandardValue('datetime', value);
    }
}
exports.Time = Time;

/**
 * underline
 * https://www.w3schools.com/tags/tag_u.asp
 */
class Underline extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('u', contents, attributes); }
}
exports.Underline = Underline;


/*****************
 ***** Table *****
 ****************/

/** shared features of table cells (abstract) */
class TableCellTag extends ThemeableTag {
    /**********************
     ***** Attributes *****
     *********************/

    /** number of columns a cell should span */
    _colSpan;

    /** specifies one or more header cells a cell is related to; valid value(s): <th> ID(s) */
    _headers;

    /** number of rows a header cell should span */
    _rowSpan;
}

/** shared features of table sections (abstract) */
class TableSectionTag extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag, contents, attributes) {
        // create baseline object
        super(tag, null, attributes);

        // add contents
        if (contents != null)
            this.add(contents);
    }


    /*******************
     ***** Methods *****
     ******************/

    /**
     * add content
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    add(contents, attributes) {
        // normalize contents to an array
        if (!Array.isArray(contents))
            contents = [contents];

        // add each item
        contents.forEach(content => {
            // already a row, add it
            if (content instanceof TableRow)
                this.contents.push(content);
            // not a row, wrap in a row and add it
            else {
                let row;

                // content is an object, add keys
                if (typeof content == 'object') {
                    // create a table row
                    row = new TableRow(null, attributes);

                    // loop through object entries and create heading/data cells
                    for (const [key, value] of Object.entries(content)) {
                        let cell;

                        // table header
                        if (this.tag == 'thead') {
                            cell = new TableHeading(key);
                            cell.scope = 'col';
                        }
                        // table data cell
                        // TODO: format value before adding (e.g., date)
                        else
                            cell = new TableCell(value);

                        // add cell to the row
                        row.add(cell);
                    }
                }
                // content isn't an object, add it to a new row's contents
                else
                    row = new TableRow(content, attributes);

                // add the table row
                super.add(row);
            }
        });
    }
}

/**
 * tabular data (rows and columns)
 * https://www.w3schools.com/tags/tag_table.asp
 */
class Table extends ThemeableTag {
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
    constructor(contents, caption, attributes, captionAttributes, headerAttributes, bodyAttributes, footerAttributes) {
        // create baseline object
        super('table', null, attributes);

        // initialize attributes
        this.attributes = attributes;

        // initialize elements
        this.caption = new TableCaption(caption, captionAttributes);
        this.header = new TableHeader(null, headerAttributes);
        this.body = new TableBody(null, bodyAttributes);
        this.footer = new TableFooter(null, footerAttributes);

        // add contents
        if (contents != null) {
            // if contents are an array of objects, add headings from the first element's keys
            if (Array.isArray(contents) && typeof contents[0] == 'object')
                this.header.add(contents[0]);

            // add rows
            this.body.add(contents);
        }
    }


    /********************
     ***** Elements *****
     *******************/

    /** table body */
    body;

    /** table caption */
    caption;

    /** table footer */
    footer;

    /** table header */
    header;


    /*******************
     ***** Methods *****
     ******************/

    /** contents of the tag */
    innerHTML() {
        let output = '';

        // display table parts
        if (this.body.contents.length)
            output += this.body;
        output += super.innerHTML();

        return output;
    }

    /** open the HTML tag */
    start() {
        let output = '';

        // start table
        output += super.start();

        // display table parts
        if (this.caption.contents.length)
            output += this.caption;
        if (this.header.contents.length)
            output += this.header;

        return output;
    }

    /** open the HTML tag */
    stop() {
        let output = '';

        // display table parts
        if (this.footer.contents.length)
            output += this.footer;

        // close the HTML tag
        output += super.stop();

        return output;
    }
}
exports.Table = Table;

/**
 * table body
 * https://www.w3schools.com/tags/tag_tbody.asp
 */
class TableBody extends TableSectionTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('tbody', contents, attributes); }
}
exports.TableBody = TableBody;

/**
 * table caption
 * https://www.w3schools.com/tags/tag_caption.asp
 */
class TableCaption extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('caption', contents, attributes); }
}
exports.TableCaption = TableCaption;

/**
 * table data cell
 * https://www.w3schools.com/tags/tag_td.asp
 */
class TableCell extends TableCellTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // create baseline object
        super('td', contents, attributes);

        // initialize attributes
        this.attributes = attributes;
    }
}
exports.TableCell = TableCell;

/**
 * table footer
 * https://www.w3schools.com/tags/tag_tfoot.asp
 */
class TableFooter extends TableSectionTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('tfoot', contents, attributes); }
}
exports.TableFooter = TableFooter;

/**
 * table header
 * https://www.w3schools.com/tags/tag_thead.asp
 */
class TableHeader extends TableSectionTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('thead', contents, attributes); }
}
exports.TableHeader = TableHeader;

/**
 * table heading for a column or row
 * https://www.w3schools.com/tags/tag_th.asp
 */
class TableHeading extends TableCellTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // create baseline object
        super('th', contents, attributes);

        // initialize attributes
        this.attributes = attributes;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** abbreviated version of the content in a header cell; it has no visual effect in ordinary web browsers, but can be used by screen readers */
    _abbreviation;
    get abbreviation() { return this._abbreviation; }
    set abbreviation(value) {
        this._abbreviation = value;
        this._setStandardValue('abbr', value);
    }

    /**
     * specifies what the header cell is a header for
     * valid values: col, colgroup, row, rowgroup
     */
    _scope;
    get scope() { return this._scope; }
    set scope(value) {
        this._scope = value;
        this._setStandardValue('scope', value);
    }
}
exports.TableHeading = TableHeading;

/**
 * table row
 * https://www.w3schools.com/tags/tag_tr.asp
 */
class TableRow extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) { super('tr', contents, attributes); }
}
exports.TableCaption = TableCaption;


/**********************************************************************************************************
 ************************************************** Form **************************************************
 *********************************************************************************************************/

/** form input element (abstract) */
class FormTag extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {string} tag HTML element name
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} name field name to submit
     * @param {string} value field value to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(tag, contents, name, value, attributes) {
        // convert parameters to attributes
        if (!attributes || typeof attributes != 'object')
            attributes = {};
        if (name != null && !attributes.name)
            attributes.name = name;
        if (value != null && !attributes.value)
            attributes.value = value;

        // create baseline object
        super(tag, contents, attributes);

        // initialize attributes
        this.attributes = attributes;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** element should automatically get focus when the page loads [boolean] */
    _autoFocus;
    get autoFocus() { return this._autoFocus; }
    set autoFocus(value) {
        this._autoFocus = value;
        this._setTogglableValue('autofocus', value);
    }

    /** defines one or more form (space-separated) that the element belongs to */
    _form;
    get form() { return this._form; }
    set form(value) {
        this._form = value;
        this._setStandardValue('form', value);
    }

    /** element name */
    _name;
    get name() { return this._name; }
    set name(value) {
        this._name = value;
        this._setStandardValue('name', value);
    }

    /** required to set/select a value before submitting the form [boolean] */
    _required;
    get required() { return this._required; }
    set required(value) {
        this._required = value;
        this._setTogglableValue('required', value);
    }
}

/** form submit element (abstract) */
class FormSubmitTag extends FormTag {
    /**********************
     ***** Attributes *****
     *********************/

    /** form has a file upload element [boolean] */
    _fileUpload;
    get fileUpload() { return this._fileUpload; }
    set fileUpload(value) {
        this._fileUpload = value;
        this._setStandardValue('formenctype', value ? 'multipart/form-data' : null);
    }

    /**
     * HTTP method to use when sending form data
     * valid values: get, post
     */
    _method;
    get method() { return this._method; }
    set method(value) {
        this._method = value;
        this._setStandardValue('formmethod', value);
    }

    /** form should not be validated when submitted [boolean] */
    _noValidate;
    get noValidate() { return this._noValidate; }
    set noValidate(value) {
        this._noValidate = value;
        this._setTogglableValue('formnovalidate', value);
    }

    /**
     * specifies where to display the response that is received after submitting the form
     * valid values: _blank, _parent, _self, _top, «frame»
     */
    _target;
    get target() { return this._target; }
    set target(value) {
        this._target = value;
        this._setStandardValue('formtarget', value);
    }

    /** URL where to send data when the form is submitted */
    _url;
    get url() { return this._url; }
    set url(value) {
        this._url = value;
        this._setStandardValue('formaction', value);
    }
}

/**
 * clickable button
 * https://www.w3schools.com/tags/tag_button.asp
 * https://getbootstrap.com/docs/4.5/components/buttons/
 */
class Button extends FormSubmitTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // set defaults
        if (!attributes || typeof attributes != 'object')
            attributes = {};
        if (!attributes.type)
            attributes.type = 'button';

        // create baseline object
        super('button', contents, null, null, attributes);

        // initialize attributes
        this.attributes = attributes;

        // not flagged as plain
        if (!attributes.plain) {
            // add Bootstrap classes
            this.class('btn');

            // set default theme
            if (!this.theme)
                this.theme = 'primary';
        }
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** active state [boolean] */
    _active;
    get active() { return this._active; }
    set active(value) {
        this._active = value;
        this._setTogglableValue('active', value);
    }

    /** block-level (full-width) [boolean] */
    _block;
    get block() { return this._block; }
    set block(value) {
		// remove dynamic Bootstrap classes
        if (this._block)
            this.removeClass('btn-block');

        // update properties
        this._block = value;

        // add dynamic Bootstrap classes
        if (this._block)
            this.class('btn-block');
    }

    /**
     * button size
     * valid values: null (default), sm (small), lg (large)
     */
    _scale;
    get scale() { return this._scale; }
    set scale(value) {
		// remove dynamic Bootstrap classes
        if (this._scale)
            this.removeClass('btn-' + this._scale);

        // update properties
        this._scale = value;

        // add dynamic Bootstrap classes
        if (this._scale)
            this.class('btn-' + this._scale);
    }

    /**
     * type of button
     * valid values: button, reset, submit
     */
    _type;
    get type() { return this._type; }
    set type(value) {
        this._type = value;
        this._setStandardValue('type', value);
    }


    /*******************
     ***** Methods *****
     ******************/

    /**
     * set/unset contents as icon
     * @param {any} name FontAwesome class name (e.g., "fas fa-camera")
     * @param {any} ariaLabel accessibility string value that labels the current element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    setIcon(name, ariaLabel, attributes) {
        if (name != null)
            this.contents = new Icon(name, ariaLabel, attributes);
        else
            this.contents = null;
    }


    /*****************************
     ***** Protected Methods *****
     ****************************/

    /**
     * background/outline theme are mutually exclusive
     * @param {boolean} outline border theme (true) or background (false)
     * @param {string} theme theme color
     */
    _setOutlineTheme(outline, theme) {
        // remove dynamic Bootstrap classes
        if (this._theme)
            this.removeClass('btn-' + (this._outline && this._theme != 'link' ? 'outline-' : '') + this._theme);

        // update properties
        this._outline = outline ? true : false;
        this._theme = theme;

        // add dynamic Bootstrap classes
        if (this._theme)
            this.class('btn-' + (this._outline && this._theme != 'link' ? 'outline-' : '') + this._theme);
    }
}
exports.Button = Button;

/**
 * form element container
 * https://www.w3schools.com/tags/tag_form.asp
 */
class Form extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // set defaults
        if (!attributes || typeof attributes != 'object')
            attributes = {};
        if (!attributes.method)
            attributes.method = 'post';

        // create baseline object
        super('form', contents, attributes);

        // initialize attributes
        this.attributes = attributes;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** allow auto-complete [boolean] */
    _autoComplete;
    get autoComplete() { return this._autoComplete; }
    set autoComplete(value) {
        this._autoComplete = value;
        this._setBooleanValue('autocomplete', value);
    }

    /**
     * character encoding for the form submission (default is the document's encoding)
     * https://www.w3schools.com/tags/att_meta_charset.asp
     */
    _charset;
    get charset() { return this._charset; }
    set charset(value) {
        this._charset = value;
        this._setStandardValue('accept-charset', value);
    }

    /** form has a file upload element [boolean] */
    _fileUpload;
    get fileUpload() { return this._fileUpload; }
    set fileUpload(value) {
        this._fileUpload = value;
        this._setStandardValue('enctype', value ? 'multipart/form-data' : null);
    }

    /**
     * HTTP method to use when sending form data
     * valid values: get, post
     */
    _method;
    get method() { return this._method; }
    set method(value) {
        this._method = value;
        this._setStandardValue('method', value);
    }

    /** name for the form; used to reference elements in a JavaScript, or to reference form data after a form is submitted (for $_POST array) */
    _name;
    get name() { return this._name; }
    set name(value) {
        this._name = value;
        this._setStandardValue('name', value);
    }

    /** form should not be validated when submitted [boolean] */
    _noValidate;
    get noValidate() { return this._noValidate; }
    set noValidate(value) {
        this._noValidate = value;
        this._setTogglableValue('novalidate', value);
    }

    /**
     * specifies where to display the response that is received after submitting the form
     * valid values: _blank, _parent, _self, _top, «frame»
     */
    _target;
    get target() { return this._target; }
    set target(value) {
        this._target = value;
        this._setStandardValue('target', value);
    }

    /** URL where to send data when the form is submitted */
    _url;
    get url() { return this._url; }
    set url(value) {
        this._url = value;
        this._setStandardValue('action', value);
    }

    /** fires when a form is submitted */
    _onSubmit;
    get onSubmit() { return this._onSubmit; }
    set onSubmit(value) {
        this._onSubmit = value;
        this._setStandardValue('onsubmit', value);
    }
}
exports.Form = Form;

/**
 * label for a form element
 * https://www.w3schools.com/tags/tag_label.asp
 */
class Label extends ThemeableTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} forID ID of the form element the label is for
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, forID, attributes) {
        // set defaults
        if (!attributes || typeof attributes != 'object')
            attributes = {};
        if (!attributes.for)
            attributes.for = forID;

        // create baseline object
        super('label', contents, attributes);

        // initialize attributes
        this.attributes = attributes;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** specifies the form element a label is bound to; valid value: element ID */
    _for;
    get for() { return this._for; }
    set for(value) {
        this._for = value;
        this._setStandardValue('for', value);
    }

    /** one or more forms the label belongs to; valid value: form ID(s) (space-separated) */
    _form;
    get form() { return this._form; }
    set form(value) {
        this._form = value;
        this._setStandardValue('form', value);
    }
}
exports.Label = Label;


/********************
 ***** Dropdown *****
 *******************/

/** container for dropdown options (abstract) */
class OptionContainerTag extends FormTag {
    /*******************
     ***** Methods *****
     ******************/

    /**
     * add an option to the dropdown
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} value field value to submit when selected
     * @param {boolean} selected element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    add(contents, value, selected, attributes) {
        // is an array, add each item
        if (Array.isArray(contents)) {
            for (let contentIndex = 0; contentIndex < contents.length; contentIndex++) {
                // already an option/group, just add it
                if (contents[contentIndex] instanceof Option || contents[contentIndex] instanceof OptionGroup)
                    this._contents.push(contents[contentIndex])
                // wrap in an option object and add it
                else
                    this._contents.push(new Option(contents[contentIndex], null, null, attributes));
            }
        }
        // is a single item, add it
        else {
            // already an option/group, just add it
            if (contents instanceof Option || contents instanceof OptionGroup)
                this._contents.push(contents)
            // is a generic object, add key–value pairs
            else if (typeof contents == 'object') {
                for (const [key, display] of Object.entries(contents))
                    this._contents.push(new Option(display, key, null, attributes));
            }
            // wrap in an option object and add it
            else
                this._contents.push(new Option(contents, value, selected, attributes));
        }
    }

    /**
     * search the dropdown contents for the specified value, select it, and de-select other options
     * @param {any} value
     */
    select(value) {
        // loop through contents
        for (let contentIndex = 0; contentIndex < this._contents.length; contentIndex++) {
            // single option
            if (this._contents[contentIndex] instanceof Option) {
                if (
                    // value matches
                    this._contents[contentIndex].value == value

                    // value not set, but contents match
                    || (this._contents[contentIndex].value == null && this._contents[contentIndex].contents == value)
                )
                    this._contents[contentIndex].selected = true;
                else
                    this._contents[contentIndex].selected = false;
            }
            // option group
            else if (this._contents[contentIndex] instanceof OptionGroup)
                this._contents[contentIndex].select(value);
        }
    }
}

/**
 * dropdown container of options
 * https://www.w3schools.com/tags/tag_select.asp
 */
class Dropdown extends OptionContainerTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} name field name to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, name, attributes) {
        // convert parameters to attributes
        if (!attributes || typeof attributes != 'object')
            attributes = {};

        // create baseline object
        super('select', null, name, null, attributes);

        // initialize attributes
        this.attributes = attributes;

        // add contents
        if (contents != null)
            this.add(contents);
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** specifies that multiple options can be selected at once [boolean] */
    _multiple;
    get multiple() { return this._multiple; }
    set multiple(value) {
        this._multiple = value;
        this._setTogglableValue('multiple', value);
    }

    /** number of visible options in a drop-down list [number] */
    _size;
    get size() { return this._size; }
    set size(value) {
        this._size = value;
        this._setStandardValue('size', value);
    }
}
exports.Dropdown = Dropdown;

/**
 * dropdown item
 * https://www.w3schools.com/tags/tag_option.asp
 */
class Option extends BootstrapTag {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {string} value field value to submit when selected
     * @param {boolean} selected element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, value, selected, attributes) {
        // normalize attributes
        if (!attributes || typeof attributes != 'object')
            attributes = {};
        if (value != null)
            attributes.value = value;
        if (selected != null)
            attributes.selected = selected;

        // create baseline object
        super('option', contents, attributes);

        // initialize attributes
        this.attributes = attributes;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** shorter label to display */
    _label;
    get label() { return this._label; }
    set label(value) {
        this._label = value;
        this._setStandardValue('label', value);
    }

    /** pre-select item when the page loads [boolean] */
    _selected;
    set selected(value) {
        this._selected = value;
        this._setTogglableValue('selected', value);
    }

    /** field value to submit when selected */
    _value;
    get value() { return this._value; }
    set value(value) {
        this._value = value;
        this._setStandardValue('value', value);
    }
}
exports.Option = Option;

/**
 * collection of sub-options within a dropdown
 * https://www.w3schools.com/tags/tag_optgroup.asp
 */
class OptionGroup extends OptionContainerTag {
    constructor(contents, label, attributes) {
        // normalize attributes
        if (!attributes || typeof attributes != 'object')
            attributes = {};
        if (label != null)
            attributes.label = label;

        // create baseline object
        super('optgroup', null, null, null, attributes);

        // initialize attributes
        this.attributes = attributes;

        // add contents
        if (contents != null)
            this.add(contents);
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** label to display */
    _label;
    get label() { return this._label; }
    set label(value) {
        this._label = value;
        this._setStandardValue('label', value);
    }
}
exports.OptionGroup = OptionGroup;


/*****************
 ***** Input *****
 ****************/

/**
 * input/textarea combined
 * https://www.w3schools.com/tags/tag_input.asp
 * https://www.w3schools.com/tags/tag_textarea.asp
 */
class Input extends FormSubmitTag {
    /**
     * create a new instance of the object
     * @param {string} value field value to submit
     * @param {string} name field name to submit
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(value, name, attributes) {
        // normalize attributes
        if (!attributes || typeof attributes != 'object')
            attributes = {};

        // text area requested
        if (attributes.type == 'textarea') {
            // remove type
            delete attributes.type;

            // create baseline object
            super('textarea', value, name, null, attributes);
        }
        // input box requested
        else {
            // set defaults
            if (!attributes.type)
                attributes.type = 'text'

            // create baseline object
            super('input', null, name, value, attributes);
        }

        // initialize attributes
        this.attributes = attributes;
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** allow auto-complete [boolean] */
    _autoComplete;
    get autoComplete() { return this._autoComplete; }
    set autoComplete(value) {
        this._autoComplete = value;
        this._setBooleanValue('autocomplete', value, true);
    }

    /** <datalist> element containing pre-defined options */
    _list;
    get list() { return this._list; }
    set list(value) {
        this._list = value;
        this._setStandardValue('list', value);
    }

    /** maximum value (number/date) */
    _max;
    get max() { return this._max; }
    set max(value) {
        this._max = value;
        this._setStandardValue('max', value);
    }

    /** maximum number of characters */
    _maxLength;
    get maxLength() { return this._maxLength; }
    set maxLength(value) {
        this._maxLength = value;
        this._setStandardValue('maxlength', value);
    }

    /** minimum value (number/date) */
    _min;
    get min() { return this._min; }
    set min(value) {
        this._min = value;
        this._setStandardValue('min', value);
    }

    /** user can enter more than one value for file (Ctrl/Shift + Select) or email (comma-separated) [boolean] */
    _multiple;
    get multiple() { return this._multiple; }
    set multiple(value) {
        this._multiple = value;
        this._setTogglableValue('multiple', value);
    }

    /** regular expression for validation */
    _pattern;
    get pattern() { return this._pattern; }
    set pattern(value) {
        this._pattern = value;
        this._setStandardValue('pattern', value);
    }

    /** short hint that describes the expected value */
    _placeholder;
    get placeholder() { return this._placeholder; }
    set placeholder(value) {
        this._placeholder = value;
        this._setStandardValue('placeholder', value);
    }

    /** input field is read-only (boolean) */
    _readOnly;
    get readOnly() { return this._readOnly; }
    set readOnly(value) {
        this._readOnly = value;
        this._setTogglableValue('readonly', value);
    }

    /** width in characters */
    _size;
    get size() { return this._size; }
    set size(value) {
        this._size = value;
        this._setStandardValue('size', value);
    }

    /** interval between legal numbers */
    _step;
    get step() { return this._step; }
    set step(value) {
        this._step = value;
        this._setStandardValue('step', value);
    }

    /** valid values: button, checkbox, color, date, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week */
    _type;
    get type() { return this._type; }
    set type(value) {
        this._type = value;
        this._setStandardValue('type', value);
    }

    /** field value to submit */
    _value;
    get value() { return this._value; }
    set value(value) {
        this._value = value;
        this._setStandardValue('value', value);
    }


    /********************************
     ***** Attributes: TextArea *****
     *******************************/

    /** visible width */
    _columns;
    get columns() { return this._columns; }
    set columns(value) {
        this._columns = value;
        this._setStandardValue('cols', value);
    }

    /** visible number of lines */
    _rows;
    get rows() { return this._rows; }
    set rows(value) {
        this._rows = value;
        this._setStandardValue('rows', value);
    }

    /**
     * how the text in a text area is to be wrapped when submitted in a form
     * valid values: hard (adds newlines, must have cols defined), soft (not wrapped, default)
     */
    _wrap;
    get wrap() { return this._wrap; }
    set wrap(value) {
        this._wrap = value;
        this._setStandardValue('wrap', value);
    }


    /**************************************
     ***** Attributes: Checkbox/Radio *****
     *************************************/

    /**
     * for "checkbox"/"radio" types; element should be pre-selected when the page loads [boolean]
     */
    _checked;
    get checked() { return this._checked; }
    set checked(value) {
        this._checked = value;
        this._setTogglableValue('checked', value);
    }


    /****************************
     ***** Attributes: File *****
     ***************************/

    /**
     * for "file" type
     * valid values: «extension», audio/*, video/*, image/*, «media_type» – http://www.iana.org/assignments/media-types/
     */
    _accept;
    get accept() { return this._accept; }
    set accept(value) {
        this._accept = value;
        this._setStandardValue('accept', value);
    }


    /*****************************
     ***** Attributes: Image *****
     ****************************/

    /**
     * for "image" type; alternate text (for accessibility and broken links)
     * https://webaim.org/techniques/alttext/
     */
    _alternateText;
    get alternateText() { return this._alternateText; }
    set alternateText(value) {
        this._alternateText = value;
        this._setStandardValue('alt', value);
    }

    /** for "image" type; height in pixels */
    _height;
    get height() { return this._height; }
    set height(value) {
        this._height = value;
        this._setStandardValue('height', value);
    }

    /** for "image" type; URL of an image */
    _url;
    get url() { return this._url; }
    set url(value) {
        this._url = value;
        this._setStandardValue('src', value);
    }

    /** for "image" type; width in pixels */
    _width;
    get width() { return this._width; }
    set width(value) {
        this._width = value;
        this._setStandardValue('width', value);
    }
}
exports.Input = Input;

/**
 * checkbox (on/off, yes/no, etc.)
 * https://www.w3schools.com/tags/tag_input.asp
 */
class Checkbox extends Input {
    /**
     * create a new instance of the object
     * @param {string} value field value to submit when checked
     * @param {string} name field name to submit when checked
     * @param {boolean} checked element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(value, name, checked, attributes) {
        // normalize attributes
        if (!attributes || typeof attributes != 'object')
            attributes = {};
        attributes.type = 'checkbox';
        if (checked != null)
            attributes.checked = checked;

        // create baseline object
        super(value, name, attributes);
    }
}
exports.Checkbox = Checkbox;

/**
 * radio button (selecting one in the set de-selects the others)
 * https://www.w3schools.com/tags/tag_input.asp
 */
class RadioButton extends Input {
    /**
     * create a new instance of the object
     * @param {string} value field value to submit when checked
     * @param {string} name field name to submit when checked
     * @param {boolean} checked element should be pre-selected when the page loads
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(value, name, checked, attributes) {
        // normalize attributes
        if (!attributes || typeof attributes != 'object')
            attributes = {};
        attributes.type = 'radio';
        if (checked != null)
            attributes.checked = checked;

        // create baseline object
        super(value, name, attributes);
    }
}
exports.RadioButton = RadioButton;


/****************************************************************************************************************
 ************************************************** Components **************************************************
 ***************************************************************************************************************/

/**
 * provides contextual feedback messages for typical user actions
 * https://getbootstrap.com/docs/4.5/components/alerts/
 */
class Alert extends Division {
    /**
     * create a new instance of the object
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    constructor(contents, attributes) {
        // set defaults
        if (!attributes || typeof attributes != 'object')
            attributes = {};
        if (!attributes.theme)
            attributes.theme = 'info';

        // create baseline object
        super(contents);

        // initialize attributes
        this.attributes = attributes;

        // add Bootstrap classes
        this.class('alert');
        this.role = 'alert';

        // create dismiss button
        this.dismissButton = new Button(new Icon('fas fa-times', 'close', { ariaHidden: true }), { plain: true });
        this.dismissButton.class('close');
        this.dismissButton.data('dismiss', 'alert');
        this.dismissButton.ariaLabel = 'close';
    }


    /**********************
     ***** Attributes *****
     *********************/

    /** alert can be closed out (boolean) */
    _dismissible;
    get dismissible() { return this._dismissible; }
    set dismissible(value) {
        // remove dynamic Bootstrap classes
        if (this._dismissible) {
            this.removeClass('alert-dismissible');
            this.removeClass('fade');
            this.removeClass('show');
        }

        // update properties
        this._dismissible = value;

        // add dynamic Bootstrap classes
        if (this._dismissible) {
            this.class('alert-dismissible');
            this.class('fade');
            this.class('show');
        }
    }

    // outline theme is not supported
    set outline(value) { this._outline = false; }

    // alerts have custom theme classes
    set theme(value) {
        // remove dynamic Bootstrap classes
        if (this._theme)
            this.removeClass('alert-' + this._theme);

        // update properties
        this._theme = value;

        // add dynamic Bootstrap classes
        if (this._theme)
            this.class('alert-' + this._theme);
    }


    /********************
     ***** Elements *****
     *******************/

    /** button to dismiss alert */
    dismissButton;


    /*******************
     ***** Methods *****
     ******************/

    /**
     * heading 1
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading1(contents, attributes) {
        // create baseline object
        let heading = new Heading1(contents, attributes);

        // format and add the object to the contents
        this.add(Alert.formatHeading(heading));
    }

    /**
     * heading 2
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading2(contents, attributes) {
        // create baseline object
        let heading = new Heading2(contents, attributes);

        // format and add the object to the contents
        this.add(Alert.formatHeading(heading));
    }

    /**
     * heading 3
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading3(contents, attributes) {
        // create baseline object
        let heading = new Heading3(contents, attributes);

        // format and add the object to the contents
        this.add(Alert.formatHeading(heading));
    }

    /**
     * heading 4
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading4(contents, attributes) {
        // create baseline object
        let heading = new Heading4(contents, attributes);

        // format and add the object to the contents
        this.add(Alert.formatHeading(heading));
    }

    /**
     * heading 5
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading5(contents, attributes) {
        // create baseline object
        let heading = new Heading5(contents, attributes);

        // format and add the object to the contents
        this.add(Alert.formatHeading(heading));
    }

    /**
     * heading 6
     * https://www.w3schools.com/tags/tag_hn.asp
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    heading6(contents, attributes) {
        // create baseline object
        let heading = new Heading6(contents, attributes);

        // format and add the object to the contents
        this.add(Alert.formatHeading(heading));
    }

    /**
     * hyperlink (anchor)
     * https://www.w3schools.com/tags/tag_a.asp
     * @param {string} url URL of the page the link goes to
     * @param {any} contents value or array of values to go inside the HTML element
     * @param {object} attributes key–value pairs of HTML attributes and other properties
     */
    link(url, contents, attributes) {
        // create baseline object
        let link = new Link(url, contents, attributes);

        // format and add the object to the contents
        this.add(Alert.formatLink(link));
    }

    /** close the Bootstrap component */
    stop() {
        let output = '';

        // add dismiss button
        if (this.dismissible)
            output += this.dismissButton;

        // close the HTML tag
        output += super.stop();

        return output;
    }


    /**************************
     ***** Static Methods *****
     *************************/

	// add Bootstrap classes for headings
    static formatHeading(heading) {
        // add Bootstrap classes
        heading.class('alert-heading');

        return heading;
    }

	// add Bootstrap classes for links
    static formatLink(link) {
        // add Bootstrap classes
        link.class('alert-link');

        return link;
    }
}
exports.Alert = Alert;


/**********************************************************************************************************
 ************************************************** Demo **************************************************
 *********************************************************************************************************/

/**
 * demonstrate all supported Bootstrap features
 * NOTE: this simply returns a string, which should probably be put into an HTML body that includes the required components (Bootstrap CSS/JS, jQuery, etc.)
 */
function demo() {
    // TODO: make this use the classes instead of just being text
    let output =
        `<!--nav -->
<nav aria-label="nav" class="mt-3">
<ul class="nav nav-tabs">
<li class="nav-item"><a href="#alert" class="nav-link">Alert</a></li>
<li class="nav-item"><a href="#badge" class="nav-link">Badge</a></li>
<li class="nav-item"><a href="#breadcrumb" class="nav-link">Breadcrumb</a></li>
<li class="nav-item"><a href="#button" class="nav-link">Button</a></li>
<li class="nav-item"><a href="#button-group" class="nav-link">Button Group</a></li>
<li class="nav-item"><a href="#card" class="nav-link">Card</a></li>
<li class="nav-item"><a href="#carousel" class="nav-link">Carousel</a></li>
<li class="nav-item"><a href="#collapse" class="nav-link">Collapse</a></li>
<li class="nav-item"><a href="#description-list" class="nav-link">Description List</a></li>
<li class="nav-item"><a href="#figure" class="nav-link">Figure</a></li>
<li class="nav-item"><a href="#form" class="nav-link">Form</a></li>
<li class="nav-item"><a href="#grid-layout" class="nav-link">Grid Layout</a></li>
<li class="nav-item"><a href="#help-icon" class="nav-link">Help Icon</a></li>
<li class="nav-item"><a href="#image" class="nav-link">Image</a></li>
<li class="nav-item"><a href="#jumbotron" class="nav-link">Jumbotron</a></li>
<li class="nav-item"><a href="#list" class="nav-link">List</a></li>
<li class="nav-item"><a href="#list-group" class="nav-link">List Group</a></li>
<li class="nav-item"><a href="#modal" class="nav-link">Modal</a></li>
<li class="nav-item"><a href="#nav" class="nav-link">Nav</a></li>
<li class="nav-item"><a href="#navbar" class="nav-link">Navbar</a></li>
<li class="nav-item"><a href="#pagination" class="nav-link">Pagination</a></li>
<li class="nav-item"><a href="#popover" class="nav-link">Popover</a></li>
<li class="nav-item"><a href="#progress" class="nav-link">Progress</a></li>
<li class="nav-item"><a href="#spinner" class="nav-link">Spinner</a></li>
<li class="nav-item"><a href="#table" class="nav-link">Table</a></li>
<li class="nav-item"><a href="#tooltip" class="nav-link">Tooltip</a></li>
<li class="nav-item"><a href="#typography" class="nav-link">Typography</a></li>
</ul>
</nav>
<div class="container">
<h2 id="alert" class="display-2 mt-5 mb-3">Alert</h2>
<p>Provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages. Alerts are available for any length of text, as well as an optional dismiss button. Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/alerts/" target="_blank">Bootstrap Alerts</a>.</p>
<div role="alert" class="alert alert-info alert-dismissible fade show"><h3 class="alert-heading">Default</h3>
<p>Hey look! A <a href="#" class="alert-link">link to nowhere</a></p>
<button type="button" data-dismiss="alert" aria-label="close" class="close"><i aria-label="close" aria-hidden="true" class="fas fa-times"></i></button></div>
<div role="alert" class="alert alert-dismissible fade show alert-danger"><h3 class="alert-heading">Danger</h3>
<p>Hey look! A <a href="#" class="alert-link">link to nowhere</a></p>
<button type="button" data-dismiss="alert" aria-label="close" class="close"><i aria-label="close" aria-hidden="true" class="fas fa-times"></i></button></div>
<div role="alert" class="alert alert-dismissible fade show alert-dark"><h3 class="alert-heading">Dark</h3>
<p>Hey look! A <a href="#" class="alert-link">link to nowhere</a></p>
<button type="button" data-dismiss="alert" aria-label="close" class="close"><i aria-label="close" aria-hidden="true" class="fas fa-times"></i></button></div>
<div role="alert" class="alert alert-dismissible fade show alert-info"><h3 class="alert-heading">Info</h3>
<p>Hey look! A <a href="#" class="alert-link">link to nowhere</a></p>
<button type="button" data-dismiss="alert" aria-label="close" class="close"><i aria-label="close" aria-hidden="true" class="fas fa-times"></i></button></div>
<div role="alert" class="alert alert-dismissible fade show alert-light"><h3 class="alert-heading">Light</h3>
<p>Hey look! A <a href="#" class="alert-link">link to nowhere</a></p>
<button type="button" data-dismiss="alert" aria-label="close" class="close"><i aria-label="close" aria-hidden="true" class="fas fa-times"></i></button></div>
<div role="alert" class="alert alert-dismissible fade show alert-primary"><h3 class="alert-heading">Primary</h3>
<p>Hey look! A <a href="#" class="alert-link">link to nowhere</a></p>
<button type="button" data-dismiss="alert" aria-label="close" class="close"><i aria-label="close" aria-hidden="true" class="fas fa-times"></i></button></div>
<div role="alert" class="alert alert-dismissible fade show alert-secondary"><h3 class="alert-heading">Secondary</h3>
<p>Hey look! A <a href="#" class="alert-link">link to nowhere</a></p>
<button type="button" data-dismiss="alert" aria-label="close" class="close"><i aria-label="close" aria-hidden="true" class="fas fa-times"></i></button></div>
<div role="alert" class="alert alert-dismissible fade show alert-success"><h3 class="alert-heading">Success</h3>
<p>Hey look! A <a href="#" class="alert-link">link to nowhere</a></p>
<button type="button" data-dismiss="alert" aria-label="close" class="close"><i aria-label="close" aria-hidden="true" class="fas fa-times"></i></button></div>
<div role="alert" class="alert alert-dismissible fade show alert-warning"><h3 class="alert-heading">Warning</h3>
<p>Hey look! A <a href="#" class="alert-link">link to nowhere</a></p>
<button type="button" data-dismiss="alert" aria-label="close" class="close"><i aria-label="close" aria-hidden="true" class="fas fa-times"></i></button></div>

<h2 id="badge" class="display-2 mt-5 mb-3">Badge</h2>
<p>A small count and labeling component. Badges scale to match the size of the immediate parent element.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/badge/" target="_blank">Bootstrap Badges</a>.</p>
<h3><span class="badge badge-primary badge-pill">Default</span></h3>
<h3><span class="badge badge-pill badge-danger">Danger</span></h3>
<h3><span class="badge badge-pill badge-dark">Dark</span></h3>
<h3><span class="badge badge-pill badge-info">Info</span></h3>
<h3><span class="badge badge-pill badge-light">Light</span></h3>
<h3><span class="badge badge-pill badge-primary">Primary</span></h3>
<h3><span class="badge badge-pill badge-secondary">Secondary</span></h3>
<h3><span class="badge badge-pill badge-success">Success</span></h3>
<h3><span class="badge badge-pill badge-warning">Warning</span></h3>

<h2 id="breadcrumb" class="display-2 mt-5 mb-3">Breadcrumb</h2>
<p>Indicate the current page’s location within a navigational hierarchy.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/breadcrumb/" target="_blank">Bootstrap Breadcrumbs</a>.</p>
<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Default</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb bg-danger">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Danger</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb bg-dark">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Dark</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb bg-info">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Info</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb bg-light">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Light</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb bg-primary">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Primary</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb bg-secondary">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Secondary</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb bg-success">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Success</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb bg-warning">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li aria-current="page" class="breadcrumb-item active">Warning</li>
</ol>
</nav>

<h2 id="button" class="display-2 mt-5 mb-3">Button</h2>
<p>Use to provide actions in forms, dialogs, and more. Any action besides submitting a form is usually handled via JavaScript events either defined on the button directly or assigned when the page loads.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/buttons/" target="_blank">Bootstrap Buttons</a>.</p>
<div><button type="button" class="btn btn-primary mr-3 mb-3">Default</button><button type="button" class="btn btn-primary mr-3 mb-3"><i aria-label="camera" class="fas fa-camera"></i></button><button type="button" class="btn btn-primary mr-3 mb-3"><i aria-label="camera" class="fas fa-camera pr-2"></i>Default</button><button type="button" class="btn btn-primary mr-3 mb-3">Default<i aria-label="camera" class="fas fa-camera pl-2"></i></button></div>
<div><button type="button" class="btn mr-3 mb-3 btn-danger">Danger</button><button type="button" class="btn mr-3 mb-3 btn-danger"><i aria-label="camera" class="fas fa-camera"></i></button><button type="button" class="btn mr-3 mb-3 btn-danger"><i aria-label="camera" class="fas fa-camera pr-2"></i>Danger</button><button type="button" class="btn mr-3 mb-3 btn-danger">Danger<i aria-label="camera" class="fas fa-camera pl-2"></i></button></div>
<div><button type="button" class="btn mr-3 mb-3 btn-dark">Dark</button><button type="button" class="btn mr-3 mb-3 btn-dark"><i aria-label="camera" class="fas fa-camera"></i></button><button type="button" class="btn mr-3 mb-3 btn-dark"><i aria-label="camera" class="fas fa-camera pr-2"></i>Dark</button><button type="button" class="btn mr-3 mb-3 btn-dark">Dark<i aria-label="camera" class="fas fa-camera pl-2"></i></button></div>
<div><button type="button" class="btn mr-3 mb-3 btn-info">Info</button><button type="button" class="btn mr-3 mb-3 btn-info"><i aria-label="camera" class="fas fa-camera"></i></button><button type="button" class="btn mr-3 mb-3 btn-info"><i aria-label="camera" class="fas fa-camera pr-2"></i>Info</button><button type="button" class="btn mr-3 mb-3 btn-info">Info<i aria-label="camera" class="fas fa-camera pl-2"></i></button></div>
<div><button type="button" class="btn mr-3 mb-3 btn-light">Light</button><button type="button" class="btn mr-3 mb-3 btn-light"><i aria-label="camera" class="fas fa-camera"></i></button><button type="button" class="btn mr-3 mb-3 btn-light"><i aria-label="camera" class="fas fa-camera pr-2"></i>Light</button><button type="button" class="btn mr-3 mb-3 btn-light">Light<i aria-label="camera" class="fas fa-camera pl-2"></i></button></div>
<div><button type="button" class="btn mr-3 mb-3 btn-primary">Primary</button><button type="button" class="btn mr-3 mb-3 btn-primary"><i aria-label="camera" class="fas fa-camera"></i></button><button type="button" class="btn mr-3 mb-3 btn-primary"><i aria-label="camera" class="fas fa-camera pr-2"></i>Primary</button><button type="button" class="btn mr-3 mb-3 btn-primary">Primary<i aria-label="camera" class="fas fa-camera pl-2"></i></button></div>
<div><button type="button" class="btn mr-3 mb-3 btn-secondary">Secondary</button><button type="button" class="btn mr-3 mb-3 btn-secondary"><i aria-label="camera" class="fas fa-camera"></i></button><button type="button" class="btn mr-3 mb-3 btn-secondary"><i aria-label="camera" class="fas fa-camera pr-2"></i>Secondary</button><button type="button" class="btn mr-3 mb-3 btn-secondary">Secondary<i aria-label="camera" class="fas fa-camera pl-2"></i></button></div>
<div><button type="button" class="btn mr-3 mb-3 btn-success">Success</button><button type="button" class="btn mr-3 mb-3 btn-success"><i aria-label="camera" class="fas fa-camera"></i></button><button type="button" class="btn mr-3 mb-3 btn-success"><i aria-label="camera" class="fas fa-camera pr-2"></i>Success</button><button type="button" class="btn mr-3 mb-3 btn-success">Success<i aria-label="camera" class="fas fa-camera pl-2"></i></button></div>
<div><button type="button" class="btn mr-3 mb-3 btn-warning">Warning</button><button type="button" class="btn mr-3 mb-3 btn-warning"><i aria-label="camera" class="fas fa-camera"></i></button><button type="button" class="btn mr-3 mb-3 btn-warning"><i aria-label="camera" class="fas fa-camera pr-2"></i>Warning</button><button type="button" class="btn mr-3 mb-3 btn-warning">Warning<i aria-label="camera" class="fas fa-camera pl-2"></i></button></div>
<div><button type="button" class="btn mr-3 mb-3 btn-link">Link</button><button type="button" class="btn mr-3 mb-3 btn-link"><i aria-label="camera" class="fas fa-camera"></i></button><button type="button" class="btn mr-3 mb-3 btn-link"><i aria-label="camera" class="fas fa-camera pr-2"></i>Link</button><button type="button" class="btn mr-3 mb-3 btn-link">Link<i aria-label="camera" class="fas fa-camera pl-2"></i></button></div>

<h2 id="button-group" class="display-2 mt-5 mb-3">Button Group</h2>
<p>Group a series of buttons together on a single line or stacked vertically. These are often used as toolbars. Any action by these is usually handled via JavaScript events either defined on the button directly or assigned when the page loads.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/button-group/" target="_blank">Bootstrap Button Groups</a>.</p>
<div role="group" class="mb-3 btn-group-lg btn-group-vertical"><button type="button" class="btn btn-secondary">Button 1</button><button type="button" class="btn btn-secondary">Button 2</button><button type="button" class="btn btn-secondary">Button 3</button></div>
<nav role="toolbar" aria-label="Cool Toolbar" class="btn-toolbar justify-content-between">
<div role="group" aria-label="Group of buttons" class="btn-group mr-2"><button type="button" class="btn btn-primary">Button 1</button><button type="button" class="btn btn-primary">Button 2</button><button type="button" class="btn btn-primary">Button 3</button></div>
<div role="group" aria-label="Group of buttons" class="btn-group mr-2"><button type="button" class="btn btn-primary">Button 4</button><button type="button" class="btn btn-primary">Button 5</button></div>
<div class="input-group"><div class="input-group-prepend"><span class="input-group-text">$</span></div>
<input placeholder="all your monies" type="text" name="monies" id="bs_input_0" class="form-control"></input><div class="input-group-append"><span class="input-group-text">.00</span></div>
</div>
</nav>

<h2 id="card" class="display-2 mt-5 mb-3">Card</h2>
<p>Provides a flexible and extensible content container, divided into several optional sections as follows: header, top image, body (includes title and subtitle), bottom image, and footer.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/card/" target="_blank">Bootstrap Cards</a>.</p>
<section class="row">
<div class="col-12 col-sm-6 col-md-4"><div class="card mb-3"><header class="card-header"><h4>Default</h4>
</header>
<img src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg" alt="Tim, the goat man" class="img-fluid card-img-top"><div class="card-body"><h5 class="card-title">Card Title</h5>
<h6 class="card-subtitle mb2">Card Subtitle</h6>
<p>Paragraph in body</p>
</div>
<footer class="card-footer"><h6>Card Footer</h6>
</footer>
</div>
</div>
<div class="col-12 col-sm-6 col-md-4"><div class="card mb-3 bg-danger"><header class="card-header"><h4>Danger</h4>
</header>
<img src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg" alt="Tim, the goat man" class="img-fluid card-img-top"><div class="card-body"><h5 class="card-title">Card Title</h5>
<h6 class="card-subtitle mb2">Card Subtitle</h6>
<p>Paragraph between Start() and Stop()</p>
</div>
<footer class="card-footer"><h6>Card Footer</h6>
</footer>
</div>
</div>
<div class="col-12 col-sm-6 col-md-4"><div class="card mb-3 bg-dark"><header class="card-header"><h4>Dark</h4>
</header>
<img src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg" alt="Tim, the goat man" class="img-fluid card-img-top"><div class="card-body"><h5 class="card-title">Card Title</h5>
<h6 class="card-subtitle mb2">Card Subtitle</h6>
<p>Paragraph between Start() and Stop()</p>
</div>
<footer class="card-footer"><h6>Card Footer</h6>
</footer>
</div>
</div>
<div class="col-12 col-sm-6 col-md-4"><div class="card mb-3 bg-info"><header class="card-header"><h4>Info</h4>
</header>
<img src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg" alt="Tim, the goat man" class="img-fluid card-img-top"><div class="card-body"><h5 class="card-title">Card Title</h5>
<h6 class="card-subtitle mb2">Card Subtitle</h6>
<p>Paragraph between Start() and Stop()</p>
</div>
<footer class="card-footer"><h6>Card Footer</h6>
</footer>
</div>
</div>
<div class="col-12 col-sm-6 col-md-4"><div class="card mb-3 bg-light"><header class="card-header"><h4>Light</h4>
</header>
<img src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg" alt="Tim, the goat man" class="img-fluid card-img-top"><div class="card-body"><h5 class="card-title">Card Title</h5>
<h6 class="card-subtitle mb2">Card Subtitle</h6>
<p>Paragraph between Start() and Stop()</p>
</div>
<footer class="card-footer"><h6>Card Footer</h6>
</footer>
</div>
</div>
<div class="col-12 col-sm-6 col-md-4"><div class="card mb-3 bg-primary"><header class="card-header"><h4>Primary</h4>
</header>
<img src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg" alt="Tim, the goat man" class="img-fluid card-img-top"><div class="card-body"><h5 class="card-title">Card Title</h5>
<h6 class="card-subtitle mb2">Card Subtitle</h6>
<p>Paragraph between Start() and Stop()</p>
</div>
<footer class="card-footer"><h6>Card Footer</h6>
</footer>
</div>
</div>
<div class="col-12 col-sm-6 col-md-4"><div class="card mb-3 bg-secondary"><header class="card-header"><h4>Secondary</h4>
</header>
<img src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg" alt="Tim, the goat man" class="img-fluid card-img-top"><div class="card-body"><h5 class="card-title">Card Title</h5>
<h6 class="card-subtitle mb2">Card Subtitle</h6>
<p>Paragraph between Start() and Stop()</p>
</div>
<footer class="card-footer"><h6>Card Footer</h6>
</footer>
</div>
</div>
<div class="col-12 col-sm-6 col-md-4"><div class="card mb-3 bg-success"><header class="card-header"><h4>Success</h4>
</header>
<img src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg" alt="Tim, the goat man" class="img-fluid card-img-top"><div class="card-body"><h5 class="card-title">Card Title</h5>
<h6 class="card-subtitle mb2">Card Subtitle</h6>
<p>Paragraph between Start() and Stop()</p>
</div>
<footer class="card-footer"><h6>Card Footer</h6>
</footer>
</div>
</div>
<div class="col-12 col-sm-6 col-md-4"><div class="card mb-3 bg-warning"><header class="card-header"><h4>Warning</h4>
</header>
<img src="https://m.media-amazon.com/images/M/MV5BODYzZWU2MmItMDYzNS00OGJjLWE4NTAtYjMyZjBiNTY5OTcxXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SY1000_CR0,0,1493,1000_AL_.jpg" alt="Tim, the goat man" class="img-fluid card-img-top"><div class="card-body"><h5 class="card-title">Card Title</h5>
<h6 class="card-subtitle mb2">Card Subtitle</h6>
<p>Paragraph between Start() and Stop()</p>
</div>
<footer class="card-footer"><h6>Card Footer</h6>
</footer>
</div>
</div>
</section>

<h2 id="carousel" class="display-2 mt-5 mb-3">Carousel</h2>
<p>A slideshow for cycling through a series of content. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/carousel/" target="_blank">Bootstrap Carousel</a>.</p>
<section id="bs_carousel_0" data-ride="carousel" class="carousel slide">
<div class="carousel-inner"><ol class="carousel-indicators">
<li data-target="#bs_carousel_0" data-slide-to="0" class="active"></li>
<li data-target="#bs_carousel_0" data-slide-to="1"></li>
<li data-target="#bs_carousel_0" data-slide-to="2"></li>
</ol>
<div class="carousel-item active"><img src="https://m.media-amazon.com/images/M/MV5BMjY0NmNmMTEtYjQwZS00N2Y0LWJhOTAtMjUwNmQwMmVlMjNiXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg" alt="Knights that Say “Nee”" class="img-fluid d-block w-100"><div class="carousel-caption d-none d-sm-block">“Cut down this entire forest … with a herring.”</div>
</div>
<div class="carousel-item"><img src="https://m.media-amazon.com/images/M/MV5BNDZhYThkNjUtYmM0YS00ZGIzLTk4NmYtZDViMTNhNzBkNDYyXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg" alt="French Knight" class="img-fluid d-block w-100"><div class="carousel-caption d-none d-sm-block">“Go away or I will taunt you again a second time!”</div>
</div>
<div class="carousel-item"><img src="https://m.media-amazon.com/images/M/MV5BMzQ2NjViMjUtOWEwNi00M2ExLTg3MTUtMDUxMzJjZmIzNmMwXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg" alt="Black Knight" class="img-fluid d-block w-100"><div class="carousel-caption d-none d-sm-block">“It’s only a flesh wound.”</div>
</div>
</div>
<a href="#bs_carousel_0" role="button" data-slide="prev" class="carousel-control-prev"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a href="#bs_carousel_0" role="button" data-slide="next" class="carousel-control-next"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></section>

<h2 id="collapse" class="display-2 mt-5 mb-3">Collapse</h2>
<p>Toggle the visibility of content, optionally in an accordion style.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/collapse/" target="_blank">Bootstrap Collapse</a>.</p>
<button type="button" data-toggle="collapse" data-target="#bs_demo_collapse" aria-controls="bs_demo_collapse" aria-expanded="false" class="btn btn-primary">Show/Hide Content</button><div id="bs_demo_collapse" class="collapse"><div>Now you see me …</div>
</div>

<h2 id="description-list" class="display-2 mt-5 mb-3">Description List</h2>
<p>Align terms and descriptions horizontally. For longer terms, you can optionally add a <code>text-truncate</code> class to truncate the text with an ellipsis.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/content/typography/#description-list-alignment" target="_blank">Bootstrap Description Lists</a>.</p>
<dl class="row"><dt class="col-sm-3">Ray</dt><dd class="col-sm-9">Husband</dd><dt class="col-sm-3">Krystal</dt><dd class="col-sm-9">Wife</dd><dt class="col-sm-3">Abigail</dt><dd class="col-sm-9">Pug</dd><dt class="col-sm-3">Garfield</dt><dd class="col-sm-9">Cat</dd></dl>

<h2 id="figure" class="display-2 mt-5 mb-3">Figure</h2>
<p>An image with an optional caption.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/content/figures/" target="_blank">Bootstrap Figures</a>.</p>
<figure class="figure d-block text-center"><img src="https://m.media-amazon.com/images/M/MV5BZTQzMGRlY2EtOTY5Yy00M2E1LTgzMzYtZDM1MjQ1YjdhNzkwXkEyXkFqcGdeQXVyNzExMzc0MDg@._V1_.jpg" alt="nameless knight and Arthur" class="img-fluid figure-img"><figcaption class="figure-caption">some “Red Shirt” standing with King Arthur</figcaption></figure>

<h2 id="form" class="display-2 mt-5 mb-3">Form</h2>
<p>Form control styles, layout options, and custom components for creating a wide variety of forms. Besides spiffied up standard input elements (including optionally turning a checkbox into a toggle switch), there are also input groups (prefix/suffix an input element with text and/or icons), form rows (format the form into rows/columns), and form groups (add labels to inputs).</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/forms/" target="_blank">Bootstrap Forms</a>.</p>
<h4>Input</h4>
<form method="post" class="my-3"><input value="remove" type="hidden" name="action" id="bs_input_1" class="form-control"></input><input value="plain text input" type="text" name="changeme" id="bs_input_2" class="form-control-plaintext form-control-lg"></input><input value="read-only input" type="text" name="readme" id="bs_input_3" readonly class="form-control"></input><input type="text" name="amount" id="bs_input_4" min="0" max="9001" maxlength="5" placeholder="amount of things, stuff, and what have you" aria-disabled="true" class="form-control form-control-lg"></input><div class="custom-control custom-checkbox"><input value="true" type="checkbox" name="agree" id="bs_checkbox_0" class="custom-control-input"></input><label for="bs_checkbox_0" class="custom-control-label">Agree to terms?</label></div>
<div class="custom-control custom-switch"><input value="on" type="checkbox" name="beastmode" id="bs_checkbox_1" class="custom-control-input"></input><label for="bs_checkbox_1" class="custom-control-label">beastmode</label></div>
<div class="custom-control custom-radio"><input value="true" type="radio" name="agree" id="bs_radio_0" class="custom-control-input"></input><label for="bs_radio_0" class="custom-control-label">agree</label></div>
<div class="custom-control custom-radio"><input value="false" type="radio" name="agree" id="bs_radio_1" class="custom-control-input"></input><label for="bs_radio_1" class="custom-control-label">disagree</label></div>
<select name="options" id="bs_select_0" class="custom-select custom-select-lg"><option>select something named</option><optgroup label="Humans"><option value="Ray">Husband</option><option value="Krystal">Wife</option></optgroup><optgroup label="Pets"><option value="Abigail">Pug</option><option value="Garfield">Cat</option></optgroup><option value="Decoration">Cornelius</option></select><button type="submit" class="btn btn-primary mt-2">Submit</button></form><h4>Input group</h4>
<form method="post" class="my-3"><div class="input-group"><div class="input-group-prepend"><span class="input-group-text">$</span></div>
<input placeholder="all your monies" type="text" name="monies" id="bs_input_5" class="form-control"></input><div class="input-group-append"><span class="input-group-text">.00</span></div>
</div>
<div class="input-group my-2 input-group-lg"><div class="input-group-prepend"><span class="input-group-text"><i aria-label="camera" class="fas fa-camera"></i></span></div>
<input type="text" name="email" id="bs_input_6" placeholder="Default" class="form-control"></input></div>
<div class="input-group my-2 input-group-lg"><div class="input-group-prepend"><span class="input-group-text bg-danger"><i aria-label="camera" class="fas fa-camera"></i></span></div>
<input type="text" name="email" id="bs_input_7" placeholder="Danger" class="form-control"></input></div>
<div class="input-group my-2 input-group-lg"><div class="input-group-prepend"><span class="input-group-text bg-dark"><i aria-label="camera" class="fas fa-camera"></i></span></div>
<input type="text" name="email" id="bs_input_8" placeholder="Dark" class="form-control"></input></div>
<div class="input-group my-2 input-group-lg"><div class="input-group-prepend"><span class="input-group-text bg-info"><i aria-label="camera" class="fas fa-camera"></i></span></div>
<input type="text" name="email" id="bs_input_9" placeholder="Info" class="form-control"></input></div>
<div class="input-group my-2 input-group-lg"><div class="input-group-prepend"><span class="input-group-text bg-light"><i aria-label="camera" class="fas fa-camera"></i></span></div>
<input type="text" name="email" id="bs_input_10" placeholder="Light" class="form-control"></input></div>
<div class="input-group my-2 input-group-lg"><div class="input-group-prepend"><span class="input-group-text bg-primary"><i aria-label="camera" class="fas fa-camera"></i></span></div>
<input type="text" name="email" id="bs_input_11" placeholder="Primary" class="form-control"></input></div>
<div class="input-group my-2 input-group-lg"><div class="input-group-prepend"><span class="input-group-text bg-secondary"><i aria-label="camera" class="fas fa-camera"></i></span></div>
<input type="text" name="email" id="bs_input_12" placeholder="Secondary" class="form-control"></input></div>
<div class="input-group my-2 input-group-lg"><div class="input-group-prepend"><span class="input-group-text bg-success"><i aria-label="camera" class="fas fa-camera"></i></span></div>
<input type="text" name="email" id="bs_input_13" placeholder="Success" class="form-control"></input></div>
<div class="input-group my-2 input-group-lg"><div class="input-group-prepend"><span class="input-group-text bg-warning"><i aria-label="camera" class="fas fa-camera"></i></span></div>
<input type="text" name="email" id="bs_input_14" placeholder="Warning" class="form-control"></input></div>
</form><h4>Form row</h4>
<form method="post" class="my-3"><div class="form-row"><div class="col-5"><input placeholder="first name" type="text" name="first name" id="bs_input_15" class="form-control"></input></div>
<div class="col"><input placeholder="last name" type="text" name="last name" id="bs_input_16" class="form-control"></input></div>
</div>
</form><h4>Form group</h4>
<form method="post" class="my-3"><div class="form-group"><label for="bs_input_17">City</label><input type="text" name="city" id="bs_input_17" class="form-control"></input></div>
</form>

<h2 id="grid-layout" class="display-2 mt-5 mb-3">Grid Layout</h2>
<p>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/layout/grid/" target="_blank">Bootstrap Grid System</a>.</p>
<div class="container"><section class="row">
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C1</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C2</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C3</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C4</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C5</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C6</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C7</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C8</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C9</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C10</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C11</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R1C12</div>
</section>
<section class="row">
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C1</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C2</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C3</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C4</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C5</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C6</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C7</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C8</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C9</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C10</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C11</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R2C12</div>
</section>
<section class="row">
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C1</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C2</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C3</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C4</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C5</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C6</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C7</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C8</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C9</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C10</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C11</div>
<div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xl-1">R3C12</div>
</section>
</div>

<h2 id="help-icon" class="display-2 mt-5 mb-3">Help Icon</h2>
<p>Help icons are basically just a popover-enabled <code>icon</code>, where the icon looks helpful and is themed as <code>information</code>. They are useful for providing short instructions and quick tips. Help icons can contain any elements supported by <a href="#popover">popovers</a> (e.g., paragraphs, links, etc., but not blockquotes, description lists, etc.).</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/popovers/" target="_blank">Bootstrap Popovers</a>.</p>
<p>Hey! Want to know more about help icons?!?<i aria-label="help" tabindex="0" data-container="body" data-toggle="popover" data-trigger="focus" data-html="true" onclick="return false;" title="Help Icon Title" data-content="<p>Help Icon body can be pretty fancy, containing <a href=&quot;#&quot;>links</a> and any other elements supported in popovers!</p>
" class="far fa-question-circle text-info ml-1 cursor-help"></i></p>

<h2 id="image" class="display-2 mt-5 mb-3">Image</h2>
<p>Responsive (mobile-friendly) images and thumbnails.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/content/images/" target="_blank">Bootstrap Images</a>.</p>
<h3>Fluid image</h3>
<img src="https://m.media-amazon.com/images/M/MV5BN2I5NGEyMTYtYTNjMC00YTBhLWE1NjYtYWNhM2I2ODMyZTEzXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_SY1000_CR0,0,1671,1000_AL_.jpg" alt="cartoon scribe" class="img-fluid">
<h3>Thumbnail</h3>
<img src="https://m.media-amazon.com/images/M/MV5BMmFlYWI1MTUtYjBhZC00ZjlkLWE1MDQtZDIzNzNlNTdiZjE5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,660,1000_AL_.jpg" alt="“Monty Python and the Holy Grail” movie poster" class="img-thumbnail d-block mx-auto">

<h2 id="jumbotron" class="display-2 mt-5 mb-3">Jumbotron</h2>
<p>Showcase/hero content, often containing headings and/or images.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/jumbotron/" target="_blank">Bootstrap Jumbotron</a>.</p>
</div>
<section class="jumbotron jumbotron-fluid">
<div class="container"><h1>Full-width</h1>
</div>
</section>
<section class="jumbotron jumbotron-fluid">
<div class="container-fluid"><h1>Full-width and Fluid</h1>
</div>
</section>
<div class="container">
<section class="jumbotron">
<h1>Default</h1>
<hr>
<p class="lead">Things, stuff, content!</p>
</section>
<section class="jumbotron bg-danger">
<h1>Danger</h1>
<hr>
<p class="lead">Things, stuff, content!</p>
</section>
<section class="jumbotron bg-dark">
<h1>Dark</h1>
<hr>
<p class="lead">Things, stuff, content!</p>
</section>
<section class="jumbotron bg-info">
<h1>Info</h1>
<hr>
<p class="lead">Things, stuff, content!</p>
</section>
<section class="jumbotron bg-light">
<h1>Light</h1>
<hr>
<p class="lead">Things, stuff, content!</p>
</section>
<section class="jumbotron bg-primary">
<h1>Primary</h1>
<hr>
<p class="lead">Things, stuff, content!</p>
</section>
<section class="jumbotron bg-secondary">
<h1>Secondary</h1>
<hr>
<p class="lead">Things, stuff, content!</p>
</section>
<section class="jumbotron bg-success">
<h1>Success</h1>
<hr>
<p class="lead">Things, stuff, content!</p>
</section>
<section class="jumbotron bg-warning">
<h1>Warning</h1>
<hr>
<p class="lead">Things, stuff, content!</p>
</section>

<h2 id="list" class="display-2 mt-5 mb-3">List</h2>
<p>Ordered/numbered lists (<code>ol</code>) and unordered/bulleted lists (<code>ul</code>). You can optionally set the <code>type</code> to <code>unstyled</code> to remove numbers/bullets or to <code>inline</code> to stack items horizontally instead of vertically.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/content/typography/#lists" target="_blank">Bootstrap Lists</a>.</p>
<h4>Ordered (bs_ol)</h4>
<ol>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ol>
<h4>Unordered (bs_ul)</h4>
<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ul>
<h4>Unstyled</h4>
<ul class="list-unstyled">
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ul>
<h4>Inline</h4>
<ol class="list-inline">
<li class="list-inline-item">item 1</li>
<li class="list-inline-item">item 2</li>
<li class="list-inline-item">item 3</li>
</ol>

<h2 id="list-group" class="display-2 mt-5 mb-3">List Group</h2>
<p>List groups are a flexible and powerful component for displaying a series of content.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/list-group/" target="_blank">Bootstrap List Groups</a>.</p>
<h4>List Group Items</h4>
<div class="list-group mb-3"><div class="list-group-item active">active text</div>
<a href="#" class="list-group-item list-group-item-action">link</a>
<button type="button" class="list-group-item list-group-item-action">button</button>
<div class="list-group-item d-flex p-0"><a href="#" class="list-group-item list-group-item-action rounded-0 flex-grow-1 border-0" style="margin-bottom: 1px">flex item link with icon links</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-info rounded-0 w-auto border-top-0 border-right-0 border-bottom-0"><i aria-label="bootstrap" class="fab fa-bootstrap"></i></a>
<a href="#" class="list-group-item list-group-item-action list-group-item-danger rounded-0 w-auto border-top-0 border-right-0 border-bottom-0"><i aria-label="heart" class="fas fa-heart"></i></a>
</div>
</div>
<h4>List Group List</h4>
<ul class="list-group mb-3">
<li class="list-group-item active">active text</li>
<li class="list-group-item"><a href="#">link</a></li>
<li class="list-group-item">text</li>
</ul>

<h2 id="modal" class="display-2 mt-5 mb-3">Modal</h2>
<p>Adds dialogs for lightboxes, user notifications, or completely custom content. Basic modals just show/hide static content. The custom “smart modals” are designed for “one modal to rule them all,” where multiple modal togglers change a single modal’s content before displaying it.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/modal/" target="_blank">Bootstrap Modals</a>.</p>
<button type="button" data-toggle="modal" data-target="#bs_modal_demo" class="btn btn-primary cursor-help">Show Basic Modal</button><div id="bs_modal_demo" role="dialog" aria-labelledby="bs_modal_demo-title" aria-hidden="true" class="modal fade"><div role="document" class="modal-dialog modal-dialog-centered"><section class="modal-content">
<header class="modal-header"><h5 id="bs_modal_demo-title" class="modal-title">Modal Title</h5>
<button type="button" data-dismiss="modal" class="close"><i aria-label="close" class="fas fa-times"></i></button></header>
<div class="modal-body">Modal Body</div>
<footer class="modal-footer">Modal Footer<button type="button" data-dismiss="modal" class="btn btn-primary ml-1">Close</button></footer>
</section>
</div>
</div>
<div id="bs_modal" role="dialog" aria-labelledby="bs_modal-title" aria-hidden="true" class="modal fade"><div role="document" class="modal-dialog modal-dialog-centered"><section class="modal-content">
<header class="modal-header"><h5 id="bs_modal-title" class="modal-title"></h5>
<button type="button" data-dismiss="modal" class="close"><i aria-label="close" class="fas fa-times"></i></button></header>
<div class="modal-body"></div>
<footer class="modal-footer"><button type="button" data-dismiss="modal" class="btn btn-primary ml-1">Close</button></footer>
</section>
</div>
</div>
<div role="group" class="btn-group"><button type="button" data-toggle="modal" data-target="#bs_modal" data-title="It’s Modal Time" data-body="<p>Modal stuff goes here, hombre!</p>
<div class=&quot;form-group&quot;><label for=&quot;demo_modal_data&quot;>Data</label><input placeholder=&quot;things, stuff, data!&quot; type=&quot;text&quot; name=&quot;data&quot; id=&quot;demo_modal_data&quot; class=&quot;form-control&quot;></input></div>
<button type=&quot;button&quot; onclick=&quot;alert(&amp;quot;Value: &amp;quot; + $(&amp;quot;#demo_modal_data&amp;quot;).val());&quot; class=&quot;btn btn-secondary&quot;>Test</button>" data-footer="<button type=&quot;button&quot; data-dismiss=&quot;modal&quot; class=&quot;btn btn-primary ml-1&quot;>Close</button>" class="btn btn-primary cursor-help">Smart Modal (Form)</button><button type="button" data-toggle="modal" data-target="#bs_modal" data-title="It’s Baaack!!!" data-footer="Oh, this is new! <button type=&quot;button&quot; data-dismiss=&quot;modal&quot; class=&quot;btn btn-primary ml-1&quot;>Close</button>" class="btn btn-primary cursor-help">Smart Modal (Text)</button></div>

<h2 id="nav" class="display-2 mt-5 mb-3">Nav</h2>
<p>Generic navigation that’s not quite as fancy as a <code>navbar</code>.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/navs/" target="_blank">Bootstrap Navs</a>.</p>
<!-- nav -->
<nav aria-label="nav" class="mb-2">
<ul class="nav nav-null">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Home</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
<li class="nav-item"><div class="nav-link">Text</div>
</li>
</ul>
</nav>
<!-- nav -->
<nav aria-label="nav" class="mb-2">
<ul class="nav nav-tabs">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Tabs</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
<li class="nav-item"><div class="nav-link">Text</div>
</li>
</ul>
</nav>
<!-- nav -->
<nav aria-label="nav" class="mb-2">
<ul class="nav nav-pills">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Pills</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
<li class="nav-item"><div class="nav-link">Text</div>
</li>
</ul>
</nav>
<!-- nav -->
<nav aria-label="nav" class="mb-2">
<ul class="nav bg-danger">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Danger</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
<li class="nav-item"><div class="nav-link">Text</div>
</li>
</ul>
</nav>
<!-- nav -->
<nav aria-label="nav" class="mb-2">
<ul class="nav bg-dark">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Dark</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
<li class="nav-item"><div class="nav-link">Text</div>
</li>
</ul>
</nav>
<!-- nav -->
<nav aria-label="nav" class="mb-2">
<ul class="nav bg-info">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Info</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
<li class="nav-item"><div class="nav-link">Text</div>
</li>
</ul>
</nav>
<!-- nav -->
<nav aria-label="nav" class="mb-2">
<ul class="nav bg-light">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Light</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
<li class="nav-item"><div class="nav-link">Text</div>
</li>
</ul>
</nav>
<!-- nav -->
<nav aria-label="nav" class="mb-2">
<ul class="nav bg-primary">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Primary</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
<li class="nav-item"><div class="nav-link">Text</div>
</li>
</ul>
</nav>
<!-- nav -->
<nav aria-label="nav" class="mb-2">
<ul class="nav bg-secondary">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Secondary</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
<li class="nav-item"><div class="nav-link">Text</div>
</li>
</ul>
</nav>
<!-- nav -->
<nav aria-label="nav" class="mb-2">
<ul class="nav bg-success">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Success</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
<li class="nav-item"><div class="nav-link">Text</div>
</li>
</ul>
</nav>
<!-- nav -->
<nav aria-label="nav" class="mb-2">
<ul class="nav bg-warning">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Warning</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
<li class="nav-item"><div class="nav-link">Text</div>
</li>
</ul>
</nav>

<h2 id="navbar" class="display-2 mt-5 mb-3">Navbar</h2>
<p>A responsive navigation header, which includes support for branding (i.e., usually containing the company/product/project name and/or logo), navigation, collapsing, and more.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/navbar/" target="_blank">Bootstrap Navbars</a>.</p>
<nav role="toolbar" aria-label="navigation bar" class="navbar navbar-expand-sm mb-2">
<a href="#" class="navbar-brand">Brand Name</a><button type="button" data-toggle="collapse" data-target="#bs_navbar_items_0" aria-controls="bs_navbar_items_0" aria-expanded="false" aria-label="toggle navigation" class="navbar-toggler"><i aria-label="menu bars" class="fas fa-bars"></i></button><div id="bs_navbar_items_0" class="collapse navbar-collapse">
<ul class="navbar-nav">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
</ul>
</div>
</nav>
<nav role="toolbar" aria-label="navigation bar" class="navbar navbar-dark bg-danger navbar-expand-sm mb-2">
<a href="#" class="navbar-brand">Danger</a><button type="button" data-toggle="collapse" data-target="#bs_navbar_items_1" aria-controls="bs_navbar_items_1" aria-expanded="false" aria-label="toggle navigation" class="navbar-toggler"><i aria-label="menu bars" class="fas fa-bars"></i></button><div id="bs_navbar_items_1" class="collapse navbar-collapse">
<ul class="navbar-nav">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
</ul>
</div>
</nav>
<nav role="toolbar" aria-label="navigation bar" class="navbar navbar-dark bg-dark navbar-expand-sm mb-2">
<a href="#" class="navbar-brand">Dark</a><button type="button" data-toggle="collapse" data-target="#bs_navbar_items_2" aria-controls="bs_navbar_items_2" aria-expanded="false" aria-label="toggle navigation" class="navbar-toggler"><i aria-label="menu bars" class="fas fa-bars"></i></button><div id="bs_navbar_items_2" class="collapse navbar-collapse">
<ul class="navbar-nav">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
</ul>
</div>
</nav>
<nav role="toolbar" aria-label="navigation bar" class="navbar navbar-dark bg-info navbar-expand-sm mb-2">
<a href="#" class="navbar-brand">Info</a><button type="button" data-toggle="collapse" data-target="#bs_navbar_items_3" aria-controls="bs_navbar_items_3" aria-expanded="false" aria-label="toggle navigation" class="navbar-toggler"><i aria-label="menu bars" class="fas fa-bars"></i></button><div id="bs_navbar_items_3" class="collapse navbar-collapse">
<ul class="navbar-nav">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
</ul>
</div>
</nav>
<nav role="toolbar" aria-label="navigation bar" class="navbar navbar-light bg-light navbar-expand-sm mb-2">
<a href="#" class="navbar-brand">Light</a><button type="button" data-toggle="collapse" data-target="#bs_navbar_items_4" aria-controls="bs_navbar_items_4" aria-expanded="false" aria-label="toggle navigation" class="navbar-toggler"><i aria-label="menu bars" class="fas fa-bars"></i></button><div id="bs_navbar_items_4" class="collapse navbar-collapse">
<ul class="navbar-nav">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
</ul>
</div>
</nav>
<nav role="toolbar" aria-label="navigation bar" class="navbar navbar-dark bg-primary navbar-expand-sm mb-2">
<a href="#" class="navbar-brand">Primary</a><button type="button" data-toggle="collapse" data-target="#bs_navbar_items_5" aria-controls="bs_navbar_items_5" aria-expanded="false" aria-label="toggle navigation" class="navbar-toggler"><i aria-label="menu bars" class="fas fa-bars"></i></button><div id="bs_navbar_items_5" class="collapse navbar-collapse">
<ul class="navbar-nav">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
</ul>
</div>
</nav>
<nav role="toolbar" aria-label="navigation bar" class="navbar navbar-dark bg-secondary navbar-expand-sm mb-2">
<a href="#" class="navbar-brand">Secondary</a><button type="button" data-toggle="collapse" data-target="#bs_navbar_items_6" aria-controls="bs_navbar_items_6" aria-expanded="false" aria-label="toggle navigation" class="navbar-toggler"><i aria-label="menu bars" class="fas fa-bars"></i></button><div id="bs_navbar_items_6" class="collapse navbar-collapse">
<ul class="navbar-nav">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
</ul>
</div>
</nav>
<nav role="toolbar" aria-label="navigation bar" class="navbar navbar-dark bg-success navbar-expand-sm mb-2">
<a href="#" class="navbar-brand">Success</a><button type="button" data-toggle="collapse" data-target="#bs_navbar_items_7" aria-controls="bs_navbar_items_7" aria-expanded="false" aria-label="toggle navigation" class="navbar-toggler"><i aria-label="menu bars" class="fas fa-bars"></i></button><div id="bs_navbar_items_7" class="collapse navbar-collapse">
<ul class="navbar-nav">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
</ul>
</div>
</nav>
<nav role="toolbar" aria-label="navigation bar" class="navbar navbar-light bg-warning navbar-expand-sm mb-2">
<a href="#" class="navbar-brand">Warning</a><button type="button" data-toggle="collapse" data-target="#bs_navbar_items_8" aria-controls="bs_navbar_items_8" aria-expanded="false" aria-label="toggle navigation" class="navbar-toggler"><i aria-label="menu bars" class="fas fa-bars"></i></button><div id="bs_navbar_items_8" class="collapse navbar-collapse">
<ul class="navbar-nav">
<li class="nav-item"><a href="#" aria-current="page" class="nav-link active">Page 1</a></li>
<li class="nav-item"><a href="#" class="nav-link">Page 2</a></li>
<li class="nav-item"><a href="#" disabled aria-disabled="true" tabindex="-1" class="nav-link disabled">Page 3</a></li>
</ul>
</div>
</nav>

<h2 id="pagination" class="display-2 mt-5 mb-3">Pagination</h2>
<p>Indicates a series of related content exists across multiple pages.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/pagination/" target="_blank">Bootstrap Pagination</a>.</p>
<nav aria-label="sample pagination">
<ul class="pagination">
<li class="page-item disabled"><span class="page-link"><i aria-label="previous" class="fas fa-angle-double-left"></i></span></li>
<li class="page-item"><a href="#" class="page-link">1</a></li>
<li aria-current="page" class="page-item active"><span class="page-link">2 <span class="sr-only">(current)</span></span></li>
<li class="page-item"><a href="#" class="page-link">3</a></li>
<li class="page-item disabled"><span class="page-link">Text</span></li>
<li class="page-item"><a href="#" class="page-link"><i aria-label="next" class="fas fa-angle-double-right"></i></a></li>
</ul>
</nav>

<h2 id="popover" class="display-2 mt-5 mb-3">Popover</h2>
<p>A message which appears when a user clicks on a control button or within a defined area. These are considered more mobile-friendly than the <code>tooltip</code> since not all devices support a “hover” feature.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/popovers/" target="_blank">Bootstrap Popovers</a>.</p>
<a href="#" tabindex="0" data-container="body" data-toggle="popover" data-trigger="focus" data-html="true" onclick="return false;" title="Popover title" data-content="And here’s some <strong>amazing</strong> content. It’s very engaging. Right?" class="cursor-help">Click to toggle popover</a>

<h2 id="progress" class="display-2 mt-5 mb-3">Progress</h2>
<p>Progress bars featuring support for stacked bars, animated backgrounds, and text labels. They can either be static (e.g., form progress across multiple pages) or made dynamic with JavaScript.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/progress/" target="_blank">Bootstrap Progress</a>.</p>
<div class="progress" style="height: 1px"><div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" class="progress-bar" style="width: 40%"></div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" class="progress-bar" style="width: 71%">71%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-striped" style="width: 71%">71%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-danger" style="width: 65%">65%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-danger progress-bar-striped" style="width: 65%">65%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-dark" style="width: 42%">42%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-dark progress-bar-striped" style="width: 42%">42%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-info" style="width: 53%">53%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-info progress-bar-striped" style="width: 53%">53%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-light" style="width: 90%">90%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-light progress-bar-striped" style="width: 90%">90%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-primary" style="width: 55%">55%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-primary progress-bar-striped" style="width: 55%">55%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="51" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-secondary" style="width: 51%">51%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="51" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-secondary progress-bar-striped" style="width: 51%">51%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-success" style="width: 100%">100%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-success progress-bar-striped" style="width: 100%">100%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-warning" style="width: 55%">55%</div>
</div>
<div class="progress mt-2"><div role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" class="progress-bar bg-warning progress-bar-striped" style="width: 55%">55%</div>
</div>

<h2 id="spinner" class="display-2 mt-5 mb-3">Spinner</h2>
<p>Indicate the loading state of a component or page.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/spinners/" target="_blank">Bootstrap Spinners</a>.</p>
<h3>Default: <div role="status" class="spinner-border"><span class="sr-only">Loading …</span></div>
<div role="status" class="spinner-grow"><span class="sr-only">Loading …</span></div>
<button type="button" class="btn btn-primary"><div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button><button type="button" class="btn btn-primary ml-2">Loading … <div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button></h3>
<h3>Danger: <div role="status" class="spinner-border text-danger"><span class="sr-only">Loading …</span></div>
<div role="status" class="spinner-grow text-danger"><span class="sr-only">Loading …</span></div>
<button type="button" class="btn btn-danger"><div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button><button type="button" class="btn ml-2 btn-danger">Loading … <div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button></h3>
<h3>Dark: <div role="status" class="spinner-border text-dark"><span class="sr-only">Loading …</span></div>
<div role="status" class="spinner-grow text-dark"><span class="sr-only">Loading …</span></div>
<button type="button" class="btn btn-dark"><div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button><button type="button" class="btn ml-2 btn-dark">Loading … <div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button></h3>
<h3>Info: <div role="status" class="spinner-border text-info"><span class="sr-only">Loading …</span></div>
<div role="status" class="spinner-grow text-info"><span class="sr-only">Loading …</span></div>
<button type="button" class="btn btn-info"><div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button><button type="button" class="btn ml-2 btn-info">Loading … <div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button></h3>
<h3>Light: <div role="status" class="spinner-border text-light"><span class="sr-only">Loading …</span></div>
<div role="status" class="spinner-grow text-light"><span class="sr-only">Loading …</span></div>
<button type="button" class="btn btn-light"><div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button><button type="button" class="btn ml-2 btn-light">Loading … <div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button></h3>
<h3>Primary: <div role="status" class="spinner-border text-primary"><span class="sr-only">Loading …</span></div>
<div role="status" class="spinner-grow text-primary"><span class="sr-only">Loading …</span></div>
<button type="button" class="btn btn-primary"><div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button><button type="button" class="btn ml-2 btn-primary">Loading … <div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button></h3>
<h3>Secondary: <div role="status" class="spinner-border text-secondary"><span class="sr-only">Loading …</span></div>
<div role="status" class="spinner-grow text-secondary"><span class="sr-only">Loading …</span></div>
<button type="button" class="btn btn-secondary"><div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button><button type="button" class="btn ml-2 btn-secondary">Loading … <div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button></h3>
<h3>Success: <div role="status" class="spinner-border text-success"><span class="sr-only">Loading …</span></div>
<div role="status" class="spinner-grow text-success"><span class="sr-only">Loading …</span></div>
<button type="button" class="btn btn-success"><div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button><button type="button" class="btn ml-2 btn-success">Loading … <div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button></h3>
<h3>Warning: <div role="status" class="spinner-border text-warning"><span class="sr-only">Loading …</span></div>
<div role="status" class="spinner-grow text-warning"><span class="sr-only">Loading …</span></div>
<button type="button" class="btn btn-warning"><div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button><button type="button" class="btn ml-2 btn-warning">Loading … <div role="status" class="spinner-border spinner-border-sm"><span class="sr-only">Loading …</span></div>
</button></h3>

<h2 id="table" class="display-2 mt-5 mb-3">Table</h2>
<p>Tabular data with table header, data rows/columns, table footer, and table caption.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/content/tables/" target="_blank">Bootstrap Tables</a>.</p>
<section class="table-responsive">
<table class="table table-bordered table-striped table-hover">
<caption style="caption-side: top"><h3>Default</h3>
</caption>
<thead>
<tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Value</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Data 1</td><td>66</td></tr>
<tr><td>2</td><td>Data 2</td><td>57</td></tr>
<tr><td>3</td><td>Data 3</td><td>72</td></tr>
<tr><td>4</td><td>Data 4</td><td>4</td></tr>
<tr><td>5</td><td>Data 5</td><td>100</td></tr>
</tbody>
<tfoot><tr><td colspan="3">Well that’s a fancy footer!</td></tr>
</tfoot></table>
</section>
<section class="table-responsive">
<table class="table table-bordered table-striped table-hover">
<caption class="bg-danger px-2" style="caption-side: top"><h3>Danger</h3>
</caption>
<thead>
<tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Value</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Data 1</td><td>16</td></tr>
<tr><td>2</td><td>Data 2</td><td>39</td></tr>
<tr><td>3</td><td>Data 3</td><td>56</td></tr>
<tr><td>4</td><td>Data 4</td><td>62</td></tr>
<tr><td>5</td><td>Data 5</td><td>66</td></tr>
</tbody>
<tfoot class="bg-danger"><tr><td colspan="3">Well that’s a fancy footer!</td></tr>
</tfoot></table>
</section>
<section class="table-responsive">
<table class="table table-bordered table-striped table-hover">
<caption class="bg-dark px-2" style="caption-side: top"><h3>Dark</h3>
</caption>
<thead>
<tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Value</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Data 1</td><td>100</td></tr>
<tr><td>2</td><td>Data 2</td><td>61</td></tr>
<tr><td>3</td><td>Data 3</td><td>62</td></tr>
<tr><td>4</td><td>Data 4</td><td>17</td></tr>
<tr><td>5</td><td>Data 5</td><td>66</td></tr>
</tbody>
<tfoot class="bg-dark"><tr><td colspan="3">Well that’s a fancy footer!</td></tr>
</tfoot></table>
</section>
<section class="table-responsive">
<table class="table table-bordered table-striped table-hover">
<caption class="bg-info px-2" style="caption-side: top"><h3>Info</h3>
</caption>
<thead>
<tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Value</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Data 1</td><td>42</td></tr>
<tr><td>2</td><td>Data 2</td><td>78</td></tr>
<tr><td>3</td><td>Data 3</td><td>92</td></tr>
<tr><td>4</td><td>Data 4</td><td>19</td></tr>
<tr><td>5</td><td>Data 5</td><td>75</td></tr>
</tbody>
<tfoot class="bg-info"><tr><td colspan="3">Well that’s a fancy footer!</td></tr>
</tfoot></table>
</section>
<section class="table-responsive">
<table class="table table-bordered table-striped table-hover">
<caption class="bg-light px-2" style="caption-side: top"><h3>Light</h3>
</caption>
<thead>
<tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Value</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Data 1</td><td>43</td></tr>
<tr><td>2</td><td>Data 2</td><td>38</td></tr>
<tr><td>3</td><td>Data 3</td><td>77</td></tr>
<tr><td>4</td><td>Data 4</td><td>89</td></tr>
<tr><td>5</td><td>Data 5</td><td>66</td></tr>
</tbody>
<tfoot class="bg-light"><tr><td colspan="3">Well that’s a fancy footer!</td></tr>
</tfoot></table>
</section>
<section class="table-responsive">
<table class="table table-bordered table-striped table-hover">
<caption class="bg-primary px-2" style="caption-side: top"><h3>Primary</h3>
</caption>
<thead>
<tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Value</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Data 1</td><td>92</td></tr>
<tr><td>2</td><td>Data 2</td><td>45</td></tr>
<tr><td>3</td><td>Data 3</td><td>57</td></tr>
<tr><td>4</td><td>Data 4</td><td>42</td></tr>
<tr><td>5</td><td>Data 5</td><td>20</td></tr>
</tbody>
<tfoot class="bg-primary"><tr><td colspan="3">Well that’s a fancy footer!</td></tr>
</tfoot></table>
</section>
<section class="table-responsive">
<table class="table table-bordered table-striped table-hover">
<caption class="bg-secondary px-2" style="caption-side: top"><h3>Secondary</h3>
</caption>
<thead>
<tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Value</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Data 1</td><td>37</td></tr>
<tr><td>2</td><td>Data 2</td><td>69</td></tr>
<tr><td>3</td><td>Data 3</td><td>79</td></tr>
<tr><td>4</td><td>Data 4</td><td>30</td></tr>
<tr><td>5</td><td>Data 5</td><td>28</td></tr>
</tbody>
<tfoot class="bg-secondary"><tr><td colspan="3">Well that’s a fancy footer!</td></tr>
</tfoot></table>
</section>
<section class="table-responsive">
<table class="table table-bordered table-striped table-hover">
<caption class="bg-success px-2" style="caption-side: top"><h3>Success</h3>
</caption>
<thead>
<tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Value</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Data 1</td><td>50</td></tr>
<tr><td>2</td><td>Data 2</td><td>19</td></tr>
<tr><td>3</td><td>Data 3</td><td>57</td></tr>
<tr><td>4</td><td>Data 4</td><td>3</td></tr>
<tr><td>5</td><td>Data 5</td><td>7</td></tr>
</tbody>
<tfoot class="bg-success"><tr><td colspan="3">Well that’s a fancy footer!</td></tr>
</tfoot></table>
</section>
<section class="table-responsive">
<table class="table table-bordered table-striped table-hover">
<caption class="bg-warning px-2" style="caption-side: top"><h3>Warning</h3>
</caption>
<thead>
<tr><th scope="col">ID</th><th scope="col">Name</th><th scope="col">Value</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Data 1</td><td>63</td></tr>
<tr><td>2</td><td>Data 2</td><td>13</td></tr>
<tr><td>3</td><td>Data 3</td><td>89</td></tr>
<tr><td>4</td><td>Data 4</td><td>4</td></tr>
<tr><td>5</td><td>Data 5</td><td>93</td></tr>
</tbody>
<tfoot class="bg-warning"><tr><td colspan="3">Well that’s a fancy footer!</td></tr>
</tfoot></table>
</section>

<h2 id="tooltip" class="display-2 mt-5 mb-3">Tooltip</h2>
<p>A message which appears when a cursor is positioned over an icon, image, hyperlink, or other element. These are considered less mobile-friendly than the <code>popover</code> since not all devices support a “hover” feature.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/components/tooltips/" target="_blank">Bootstrap Tooltips</a>.</p>
<p>This <a title="how cool is that?" href="#" data-container="body" data-toggle="tooltip" data-html="true">link</a> has a tooltip!</p>
<p><a href="#" data-container="body" data-toggle="tooltip" data-html="true" title="tooltip on the right" data-placement="right">Tooltip link</a></p>
<button type="button" data-container="body" data-toggle="tooltip" data-html="true" title="from below" data-placement="bottom" class="btn btn-primary">Button with tooltip</button>

<h2 id="typography" class="display-2 mt-5 mb-3">Typography</h2>
<p>Headings, body text, block quotes, links, and more.</p>
<p>For more information, see <a href="https://getbootstrap.com/docs/4.5/content/typography/" target="_blank">Bootstrap Typography</a>.</p>
<h1 class="display-1">Display 1</h1>
<h2 class="display-2">Display 2</h2>
<h3 class="display-3">Display 3</h3>
<h4 class="display-4">Display 4</h4>
<h1>H1 Heading</h1>
<h2>H2 Heading</h2>
<h3>H3 Heading</h3>
<h4>H4 Heading</h4>
<h5>H5 Heading</h5>
<h6>H6 Heading</h6>
<p class="lead">Leading paragraph</p>
<h4>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</h4>
<h4>“The <a href="#">quick brown fox</a> jumps over the ‘lazy’ dog …” 0123456789 Il1 bdpq rnm cld</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</p>
<p>“The <a href="#">quick brown fox</a> jumps over the ‘lazy’ dog …” 0123456789 Il1 bdpq rnm cld</p>
<blockquote class="blockquote"><p>Success, meaningful success, begins when we take ownership and actively take responsibility for our part in the shortcomings of our life.</p>
<footer class="blockquote-footer">Dr Eric Thomas, <cite>Greatness Is Upon You: Laying the Foundation</cite></footer>
</blockquote>
<blockquote class="blockquote text-center"><p>Success, meaningful success, begins when we take ownership and actively take responsibility for our part in the shortcomings of our life.</p>
<footer class="blockquote-footer">Dr Eric Thomas, <cite>Greatness Is Upon You: Laying the Foundation</cite></footer>
</blockquote>
<blockquote class="blockquote text-right"><p>Success, meaningful success, begins when we take ownership and actively take responsibility for our part in the shortcomings of our life.</p>
<footer class="blockquote-footer">Dr Eric Thomas, <cite>Greatness Is Upon You: Laying the Foundation</cite></footer>
</blockquote>
</div>
</div>`;

    return output;
}
exports.demo = demo;