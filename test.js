'use strict';

// import main module
const bs = require('./app');

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

console.log('********************');
console.log('***** Elements *****');
console.log('********************');
console.log();

// body
test = new bs.body();
test.paragraph(stringValue);
test.script(jsValue); // add text
test.script(new bs.script(jsValue));  // add object
test.script(null, urlJS);  // add URL
console.log(test.toString());

test = new bs.body(stringValue, { scripts: jsValue });
console.log(test.toString());

// comment
console.log(new bs.comment().toString());
console.log(new bs.comment(stringValue).toString());
console.log(new bs.comment(arrayValue).toString());
test = new bs.comment(stringValue);
test.add(stringValue);
test.add(arrayValue);
test.inline = false;
test.blockClose = true;
console.log(test.toString());

// division
console.log(new bs.division().toString());
console.log(new bs.division(stringValue).toString());
console.log(new bs.division(arrayValue).toString());

// head
test = new bs.head(stringValue, null, { charset: 'ISO-8859-1' });
test.link(urlCSS);
test.link(new bs.resourceLink(urlCSS));
test.metadata('author', 'Legendary Media TV');
console.log(test.toString());

// head link
test = new bs.resourceLink();
test.language = 'en';
test.media = 'print';
test.sizes = 'any';
test.type = 'text/css';
test.url = urlCSS;
console.log(test.toString());
console.log(new bs.resourceLink(urlCSS, { language: 'en' }).toString());

// html
console.log(new bs.html(stringValue).toString());
console.log();

// script
console.log(new bs.script(jsValue).toString());
test = new bs.script(
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

// span
console.log(new bs.span(stringValue).toString());
console.log();

// element kitchen sink
console.log();
console.log('************************');
console.log('***** Kitchen Sink *****');
console.log('************************');
console.log();
test = new bs.division();
test.class('m-5');
test.class('p-3 fake');
test.removeClass('fake');
test.add(stringValue);
test.add(arrayValue);
test.style(cssValue);
test.removeStyle(' color:  green ');
test.data('target', `#${id}`);
console.log(new bs.comment(`data-target: ${test.data('target')}`).toString());
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
console.log(test.toString());

// themeable element
console.log();
console.log('*********************');
console.log('***** Themeable *****');
console.log('*********************');
console.log();
test = new bs.division(stringValue);
test.textTheme = 'primary';
test.theme = 'primary';
console.log(test.toString());
test.outline = true;
console.log(test.toString());

// html kitchen sink
console.log();
console.log('****************');
console.log('***** HTML *****');
console.log('****************');
console.log();
test = new bs.html();
test.title = stringValue;
test.abbreviation('HW', stringValue);
test.add('\n');
test.address(stringValue);
test.add('\n');
test.article(stringValue);
test.aside(stringValue);
test.bold(stringValue);
test.add('\n');
test.blockquote(stringValue, { cite: url });
test.lineBreak();
test.add('\n');
test.button(stringValue);
test.add('\n');
test.cite(stringValue);
test.add('\n');
test.checkbox('on', 'test', true);
test.add('\n');
test.code(stringValue);
test.add('\n');
test.comment(stringValue);
test.definitionList({ 'term 1': 'definition 1', 'term 2': 'definition 2', 'term 3': 'definition 3' });
test.deleted(stringValue);
test.add('\n');
test.details(stringValue, { open: true, onToggle: jsValue, summary: stringValue });
test.add('\n');
test.division(stringValue);
test.dropdown(objectValue);
test.add('\n');
test.emphasis(stringValue);
test.add('\n');
test.figure(urlImage, stringValue, stringValue, { captionOnTop: true });
test.add('\n');
test.footer(stringValue);
test.form(stringValue);
test.add('\n');
test.header(stringValue);
test.heading1(stringValue);
test.heading2(stringValue);
test.heading3(stringValue);
test.heading4(stringValue);
test.heading5(stringValue);
test.heading6(stringValue);
test.resourceLink(urlCSS);
test.highlight(stringValue);
test.add('\n');
test.italics(stringValue);
test.add('\n');
test.icon('fas fa-camera');
test.add('\n');
test.iframe(url);
test.add('\n');
test.image(urlImage, stringValue);
test.add('\n');
test.input(stringValue, 'test', { method: 'post' });
test.add('\n');
test.input(stringValue, 'test', { type: "textarea" });
test.add('\n');
test.insert(stringValue);
test.add('\n');
test.label(stringValue, 'test');
test.add('\n');
test.line();
test.link(url, stringValue, { target: '_blank' });
test.add('\n');
test.list(['an item', 'another item', 'yet another item']);
test.list(['item 1', 'item 2', 'item 3'], true);
test.metadata('author', 'Legendary Media TV');
test.monospace(stringValue);
test.navigation(stringValue);
test.output(stringValue, { for: 'test' });
test.add('\n');
test.paragraph(stringValue);
test.quote(stringValue);
test.add('\n');
test.radioButton('rabbit', 'test', true);
test.add('\n');
test.strike(stringValue);
test.add('\n');
test.script(jsValue);
test.section(stringValue);
test.small(stringValue);
test.add('\n');
test.span(stringValue);
test.add('\n');
test.strong(stringValue);
test.add('\n');
test.style([`.test { ${cssValue} }`, 'p.test { color: blue; }'], { media: 'print' });
test.subscript(stringValue);
test.add('\n');
test.superscript(stringValue);
test.add('\n');
test.svg(`<rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />`, 400, 180);
test.add('\n');
test.paragraph([new bs.term('HTML', { title: 'HyperText Markup Language', id: 'html-definition' }), ' is the standard markup language for creating web pages.']);
test.time('11/22 @ 2:56 PM', { timestamp: '2020-11-22 14:56' });
test.add('\n');
test.underline(stringValue);
test.add('\n');
test.add(new bs.alert(stringValue));
test.add(new bs.alert(stringValue, { theme: 'primary' }));
console.log(test.toString());

test = new bs.dropdown(objectValue);
test.add('more content', 'content', true);
test.select('key1');
console.log(test.toString());

// demonstrate all supported Bootstrap features
console.log();
console.log('****************');
console.log('***** Demo *****');
console.log('****************');
console.log();
console.log(bs.demo());