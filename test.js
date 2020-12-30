'use strict';

// import Bootstrap module
const bs = require('./app');

// enable web server functionality
const http = require('http');

// define test values
let test;  // reused test value
const id = 'test';
const stringValue = 'Hello World!';
const arrayValue = ['ABC', 'DEF'];
const cssValue = 'color: green; background-color: blue;';
const intValue = 42;
const jsValue = 'return false;';
const url = '/sample';
const urlCSS = '/dist/main.css';
const urlImage = '/images/sample.jpg';
const urlJS = '/dist/main.js';
const objectValue = { key1: 'value 1', key2: 123 };

// create a basic web server that listens on port 1337
http.createServer((req, res) => {
    // start HTML
    const html = new bs.HTML();
    html.title = stringValue;
    html.metadata('author', 'Legendary Media TV');
    html.bootstrap();  // add Bootstrap and its dependencies
    html.resourceLink(urlCSS);
    html.style([`.test { ${cssValue} }`, 'p.test { color: blue; }'], { media: 'print' });
    html.script(jsValue);
    html.body.margins = 5;

    html.comment('Content');
    html.displayHeading1('Content');

    html.abbreviation('HW', stringValue);
    html.add('\n');
    html.address(stringValue);
    html.add('\n');
    html.article(stringValue);
    html.aside(stringValue);
    html.bold(stringValue);
    html.add('\n');
    html.blockQuote(stringValue, { cite: url });
    html.cite(stringValue);
    html.add('\n');
    html.code(stringValue);
    html.add('\n');
    html.definitionList({ 'term 1': 'definition 1', 'term 2': 'definition 2', 'term 3': 'definition 3' });
    html.deleted(stringValue);
    html.add('\n');
    html.details(stringValue, `${stringValue} ${stringValue} ${stringValue}`, { open: true, onToggle: jsValue });
    html.add('\n');
    html.division(stringValue);
    html.displayHeading1(stringValue);
    html.displayHeading2(stringValue);
    html.displayHeading3(stringValue);
    html.displayHeading4(stringValue);
    html.leadingParagraph(stringValue);
    html.emphasis(stringValue);
    html.add('\n');
    html.figure(urlImage, stringValue, stringValue, { captionOnTop: true });
    html.add('\n');
    html.footer(stringValue);
    html.header(stringValue);
    html.heading1(stringValue);
    html.heading2(stringValue);
    html.heading3(stringValue);
    html.heading4(stringValue);
    html.heading5(stringValue);
    html.heading6(stringValue);
    html.highlight(stringValue);
    html.add('\n');
    html.italics(stringValue);
    html.add('\n');
    html.icon('fas fa-camera');
    html.add('\n');
    html.inlineFrame(url);
    html.add('\n');
    html.image(urlImage, stringValue, { thumbnail: true, responsive: true });
    html.add('\n');
    html.insert(stringValue);
    html.add('\n');
    html.line();
    html.lineBreak();
    html.add('\n');
    html.link(url, stringValue, { target: '_blank' });
    html.add('\n');
    html.list(['an item', 'another item', 'yet another item']);
    html.list(['item 1', 'item 2', 'item 3'], true);
    html.monospace(stringValue);
    html.navigation(stringValue);
    html.output(stringValue, { for: 'test' });
    html.add('\n');
    html.paragraph(stringValue);
    html.quote(stringValue);
    html.add('\n');
    html.strike(stringValue);
    html.add('\n');
    html.section(stringValue);
    html.small(stringValue);
    html.add('\n');
    html.spinner(stringValue, { theme: 'danger' });
    html.span(stringValue);
    html.add('\n');
    html.strong(stringValue);
    html.add('\n');
    html.subscript(stringValue);
    html.add('\n');
    html.superscript(stringValue);
    html.add('\n');
    html.svg(`<rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />`, 400, 180);
    html.add('\n');
    html.paragraph([new bs.Term('HTML', { title: 'HyperText Markup Language', id: 'html-definition' }), ' is the standard markup language for creating web pages.']);
    html.table([objectValue, objectValue], stringValue);
    html.time('11/22 @ 2:56 PM', { timestamp: '2020-11-22 14:56' });
    html.add('\n');
    html.underline(stringValue);
    html.add('\n');

    html.comment('Form');
    html.displayHeading1('Form');

    const form = new bs.Form();
    form.checkbox('plain checkbox', 'on', 'demo-checkbox-plain', null, { plain: true });
    form.checkbox('unchecked checkbox', 'on', 'demo-checkbox-unchecked');
    form.checkbox('checked checkbox', 'yes', 'demo-checkbox-checked', true);
    form.dropdown(objectValue, 'demo-dropdown');
    form.fileUpload = true;
    form.fileUploader(null, 'demo-file-upload');
    form.inputGroup(
        'Prepend',
        new bs.Textbox('', 'demo-textbox-inputGroup'),
        'Append'
    );
    form.radio('plain radio button', 'plain', 'demo-radio', null, { plain: true });
    form.radio('unselected radio', 'unselected', 'demo-radio');
    form.radio('selected radio', 'selected', 'demo-radio', true);
    form.textbox('plain-text textbox', 'demo-textbox-plaintext', { plainText: true });
    form.textbox('single-line textbox', 'demo-textbox-single');
    form.textbox('multi-line textbox', 'demo-textbox-multiple', { multiline: true });
    form.formGroup(
        'Form Group Textbox',
        new bs.Textbox(null, 'demo-formgroup-textbox', { id: 'form-group-textbox' })
    );
    const formRow = new bs.FormRow();
    for (let columnIndex = 1; columnIndex <= 4; columnIndex++) {
        formRow.column(
            new bs.FormGroup(
                `Form Row Textbox ${columnIndex}`,
                new bs.Textbox(null, `demo-formrow-textbox${columnIndex}`, { id: `form-group-textbox${columnIndex}` })
            ),
            null, 6, true
        );
    }
    form.add(formRow);
    form.button('Submit');
    html.add(form);
    html.add('\n');

    html.comment('Components');
    html.displayHeading1('Components');

    // default alert
    html.alert(stringValue);

    // customized alert
    const alert = new bs.Alert(null, { theme: 'warning' });
    alert.dismissible = true;
    alert.heading1(stringValue);
    alert.heading2(stringValue);
    alert.heading3(stringValue);
    alert.heading4(stringValue);
    alert.heading5(stringValue);
    alert.heading6(stringValue);
    alert.link(url, stringValue);
    alert.add('\n');
    alert.paragraph('Link: ' + bs.Alert.formatLink(new bs.Link(url, stringValue)));
    html.add(alert);

    html.comment('Grid System');
    html.displayHeading1('Grid System');

    let row;

    html.heading2('Standard Grid');
    row = new bs.Row();
    for (var columnIndex = 1; columnIndex <= 4; columnIndex++)
        row.column(`${stringValue} ${columnIndex}`, null, 6, true);
    html.container(row);

    html.heading2('Reordered');
    row = new bs.Row();
    for (var columnIndex = 1; columnIndex <= 4; columnIndex++)
        row.column(`${stringValue} ${columnIndex}`, null, 6, true, null, null, { gridOrder: Math.abs(columnIndex - 5) });
    html.container(row);

    html.heading2('Offset');
    row = new bs.Row();
    for (var columnIndex = 1; columnIndex <= 4; columnIndex++)
        row.column(`${stringValue} ${columnIndex}`, null, 4, null, null, null, { gridOffsetSmall: 2 });
    html.container(row);

    html.heading2('No Gutters');
    row = new bs.Row();
    row.gridRowNoGutters = true;
    for (var columnIndex = 1; columnIndex <= 4; columnIndex++)
        row.column(`${stringValue} ${columnIndex}`, null, 6, true);
    html.container(row);

    // demonstrate all supported Bootstrap features
    //html.add(bs.demo());

    // send the response to the client
    res.write(html.toString());
    res.end();
}).listen(1337);

// do further testing to the console

console.log('********************');
console.log('***** Elements *****');
console.log('********************');
console.log();

// body
test = new bs.Body();
test.paragraph(stringValue);
test.script(jsValue); // add text
test.script(new bs.Script(jsValue));  // add object
test.script(null, urlJS);  // add URL
console.log(test.toString());

test = new bs.Body(stringValue, { scripts: jsValue });
console.log(test.toString());

// comment
console.log(new bs.Comment().toString());
console.log(new bs.Comment(stringValue).toString());
console.log(new bs.Comment(arrayValue).toString());
test = new bs.Comment(stringValue);
test.add(stringValue);
test.add(arrayValue);
test.inline = false;
test.blockClose = true;
console.log(test.toString());

// division
console.log(new bs.Division().toString());
console.log(new bs.Division(stringValue).toString());
console.log(new bs.Division(arrayValue).toString());

// head
test = new bs.Head(stringValue, null, { charset: 'ISO-8859-1' });
test.resourceLink(urlCSS);
test.resourceLink(new bs.ResourceLink(urlCSS));
test.metadata('author', 'Legendary Media TV');
console.log(test.toString());

// head link
test = new bs.ResourceLink();
test.language = 'en';
test.media = 'print';
test.sizes = 'any';
test.type = 'text/css';
test.url = urlCSS;
console.log(test.toString());
console.log(new bs.ResourceLink(urlCSS, { language: 'en' }).toString());

// html
console.log(new bs.HTML(stringValue).toString());
console.log();

// script
console.log(new bs.Script(jsValue).toString());
test = new bs.Script(
    null,
    null,
    {
        integrity: 'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC',
        async: true,
        charset: 'UTF-8',
        defer: true,
        url: 'https://example.com/example-framework.js'
    }
);
console.log(test.toString());

// dropdown
test = new bs.Dropdown(objectValue, 'test');
test.add('more content', 'content', true);
test.select('key1');
console.log(test.toString());

// element kitchen sink
console.log();
console.log('************************');
console.log('***** Kitchen Sink *****');
console.log('************************');
console.log();
test = new bs.Division();
test.class('fake');
test.removeClass('fake');
test.add(stringValue);
test.add(arrayValue);
test.style(cssValue);
test.removeStyle(' color:  green ');
test.data('target', `#${id}`);
test.ariaControls = id;
test.ariaCurrent = 'page';
test.ariaDescribedBy = id;
test.ariaDetails = id;
test.ariaDisabled = true;
test.ariaExpanded = false;
test.ariaHidden = 'true';
test.ariaLabel = stringValue;
test.ariaLabelledBy = id;
test.ariaValueMax = 100;
test.ariaValueMin = 0;
test.ariaValueNow = intValue;
test.role = 'navigation';
test.accessKey = 's';
test.disabled = 'on';
test.direction = 'ltr';
test.draggable = '  AUTO ';
test.editable = 'false';
test.hidden = true;
test.id = id;
test.language = 'en';
test.spellcheck = false;
//test.tabIndex = intValue;
test.title = stringValue;
test.onBlur = jsValue;
test.onChange = jsValue;
test.onContextMenu = jsValue;
test.onFocus = jsValue;
test.onInput = jsValue;
test.onInvalid = jsValue;
test.onReset = jsValue;
test.onSearch = jsValue;
test.onSelect = jsValue;
test.onKeyDown = jsValue;
test.onKeyPress = jsValue;
test.onKeyUp = jsValue;
test.onClick = jsValue;
test.onDoubleClick = jsValue;
test.onMouseDown = jsValue;
test.onMouseMove = jsValue;
test.onMouseOut = jsValue;
test.onMouseOver = jsValue;
test.onMouseUp = jsValue;
test.onWheel = jsValue;
test.onDrag = jsValue;
test.onDragEnd = jsValue;
test.onDragEnter = jsValue;
test.onDragLeave = jsValue;
test.onDragOver = jsValue;
test.onDragStart = jsValue;
test.onDrop = jsValue;
test.onScroll = jsValue;
test.onCopy = jsValue;
test.onCut = jsValue;
test.onPaste = jsValue;
test.alignment = 'justify';
test.alignmentSmall = 'right';
test.alignmentMedium = 'left';
test.alignmentLarge = 'center';
test.alignmentXL = 'justify';
test.position = 'sticky';
test.borders = true;
test.borderBottom = true;
test.borderLeft = true;
test.borderRight = true;
test.borderTop = true;
test.borderRadius = 'circle';
test.borderTheme = 'primary';
test.gridColumn = 3;
test.gridColumnSmall = 3;
test.gridColumnMedium = 3;
test.gridColumnLarge = 3;
test.gridColumnXL = 3;
test.gridFormRow = true;
test.gridOffset = 1;
test.gridOffsetSmall = 1;
test.gridOffsetMedium = 1;
test.gridOffsetLarge = 1;
test.gridOffsetXL = 1;
test.gridOrder = 2;
test.gridOrderSmall = 2;
test.gridOrderMedium = 2;
test.gridOrderLarge = 2;
test.gridOrderXL = 2;
test.gridRow = true;
test.gridRowNoGutters = true;
test.margins = 4;
test.marginsSmall = 4;
test.marginsMedium = 4;
test.marginsLarge = 4;
test.marginsXL = 4;
test.marginsX = 'auto';
test.marginsXSmall = 'auto';
test.marginsXMedium = 'auto';
test.marginsXLarge = 'auto';
test.marginsXXL = 'auto';
test.marginsY = 'auto';
test.marginsYSmall = 'auto';
test.marginsYMedium = 'auto';
test.marginsYLarge = 'auto';
test.marginsYXL = 'auto';
test.marginBottom = 1;
test.marginBottomSmall = 1;
test.marginBottomMedium = 1;
test.marginBottomLarge = 1;
test.marginBottomXL = 1;
test.marginLeft = 2;
test.marginLeftSmall = 2;
test.marginLeftMedium = 2;
test.marginLeftLarge = 2;
test.marginLeftXL = 2;
test.marginRight = 3;
test.marginRightSmall = 3;
test.marginRightMedium = 3;
test.marginRightLarge = 3;
test.marginRightXL = 3;
test.marginTop = 5;
test.marginTopSmall = 5;
test.marginTopMedium = 5;
test.marginTopLarge = 5;
test.marginTopXL = 5;
test.padding = 4;
test.paddingSmall = 4;
test.paddingMedium = 4;
test.paddingLarge = 4;
test.paddingXL = 4;
test.paddingBottom = 1;
test.paddingBottomSmall = 1;
test.paddingBottomMedium = 1;
test.paddingBottomLarge = 1;
test.paddingBottomXL = 1;
test.paddingLeft = 2;
test.paddingLeftSmall = 2;
test.paddingLeftMedium = 2;
test.paddingLeftLarge = 2;
test.paddingLeftXL = 2;
test.paddingRight = 3;
test.paddingRightSmall = 3;
test.paddingRightMedium = 3;
test.paddingRightLarge = 3;
test.paddingRightXL = 3;
test.paddingTop = 5;
test.paddingTopSmall = 5;
test.paddingTopMedium = 5;
test.paddingTopLarge = 5;
test.paddingTopXL = 5;
test.paddingX = 'auto';
test.paddingXSmall = 'auto';
test.paddingXMedium = 'auto';
test.paddingXLarge = 'auto';
test.paddingXXL = 'auto';
test.paddingY = 'auto';
test.paddingYSmall = 'auto';
test.paddingYMedium = 'auto';
test.paddingYLarge = 'auto';
test.paddingYXL = 'auto';
test.maxHeight = 50;
test.maxWidth = 50;
test.relativeHeight = 25;
test.relativeWidth = 25;
test.viewportHeight = 75;
test.viewportWidth = 75;
test.viewportMinHeight = 50;
test.viewportMinWidth = 50;
test.displayHeading = 1;
test.leading = true;
console.log(test.toString());

// themeable element
console.log();
console.log('*********************');
console.log('***** Themeable *****');
console.log('*********************');
console.log();
test = new bs.Division(stringValue);
test.textTheme = 'primary';
test.theme = 'primary';
console.log(test.toString());
test.outline = true;
console.log(test.toString());