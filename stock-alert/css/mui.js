exports.mui = `
<style type="text/css">
/**
 * MUI Colors module
 */
/**
 * MUI Globals
 */
/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
line-height: 1.15;
/* 1 */
-webkit-text-size-adjust: 100%;
/* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
margin: 0;
}

/**
 * Correct the font size and margin on -h1- elements within -section- and
 * -article- contexts in Chrome, Firefox, and Safari.
 */
h1 {
font-size: 2em;
margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
-webkit-box-sizing: content-box;
box-sizing: content-box;
/* 1 */
height: 0;
/* 1 */
overflow: visible;
/* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd -em- font sizing in all browsers.
 */
pre {
font-family: monospace, monospace;
/* 1 */
font-size: 1em;
/* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
border-bottom: none;
/* 1 */
text-decoration: underline;
/* 2 */
-webkit-text-decoration: underline dotted;
text-decoration: underline dotted;
/* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd -em- font sizing in all browsers.
 */
code,
kbd,
samp {
font-family: monospace, monospace;
/* 1 */
font-size: 1em;
/* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
font-size: 80%;
}

/**
 * Prevent -sub- and -sup- elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
}

sub {
bottom: -0.25em;
}

sup {
top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
border-style: none;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
font-family: inherit;
/* 1 */
font-size: 100%;
/* 1 */
line-height: 1.15;
/* 1 */
margin: 0;
/* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
/* 1 */
overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
/* 1 */
text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type="button"],
[type="reset"],
[type="submit"] {
-webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
border-style: none;
padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from -fieldset- elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    -fieldset- elements in all browsers.
 */
legend {
-webkit-box-sizing: border-box;
box-sizing: border-box;
/* 1 */
color: inherit;
/* 2 */
display: table;
/* 1 */
max-width: 100%;
/* 1 */
padding: 0;
/* 3 */
white-space: normal;
/* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type="checkbox"],
[type="radio"] {
-webkit-box-sizing: border-box;
box-sizing: border-box;
/* 1 */
padding: 0;
/* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
-webkit-appearance: textfield;
/* 1 */
outline-offset: -2px;
/* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-decoration {
-webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to -inherit- in Safari.
 */
::-webkit-file-upload-button {
-webkit-appearance: button;
/* 1 */
font: inherit;
/* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
display: list-item;
}

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
display: none;
}

html {
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
font-family: Arial, Verdana, Tahoma;
font-size: 14px;
font-weight: 400;
line-height: 1.429;
color: rgba(0, 0, 0, 0.87);
background-color: #FFF;
}

a {
color: #2196F3;
text-decoration: none;
}

a:hover, a:focus {
text-decoration: underline;
}

a:focus {
outline: thin dotted;
outline: 5px auto -webkit-focus-ring-color;
outline-offset: -2px;
}

p {
margin: 0 0 10px;
}

ul,
ol {
margin-top: 0;
margin-bottom: 10px;
}

hr {
margin-top: 20px;
margin-bottom: 20px;
border: 0;
height: 1px;
background-color: rgba(0, 0, 0, 0.12);
}

strong {
font-weight: 700;
}

abbr[title] {
cursor: help;
-webkit-text-decoration-color: #2196F3;
text-decoration-color: #2196F3;
}

h1, h2, h3 {
margin-top: 20px;
margin-bottom: 10px;
}

h4, h5, h6 {
margin-top: 10px;
margin-bottom: 10px;
}

/**
 * MUI Appbar
 */
.mui--appbar-height {
height: 56px;
}

.mui--appbar-min-height, .mui-appbar {
min-height: 56px;
}

.mui--appbar-line-height {
line-height: 56px;
}

.mui--appbar-top {
top: 56px;
}

@media (orientation: landscape) and (max-height: 480px) {
.mui--appbar-height {
height: 48px;
}
.mui--appbar-min-height, .mui-appbar {
min-height: 48px;
}
.mui--appbar-line-height {
line-height: 48px;
}
.mui--appbar-top {
top: 48px;
}
}

@media (min-width: 480px) {
.mui--appbar-height {
height: 64px;
}
.mui--appbar-min-height, .mui-appbar {
min-height: 64px;
}
.mui--appbar-line-height {
line-height: 64px;
}
.mui--appbar-top {
top: 64px;
}
}

.mui-appbar {
background-color: #2196F3;
color: #FFF;
}

/**
 * MUI Buttons
 */
.mui-btn {
font-weight: 500;
font-size: 14px;
line-height: 18px;
text-transform: uppercase;
color: rgba(0, 0, 0, 0.87);
background-color: #FFF;
-webkit-transition: all 0.2s ease-in-out;
transition: all 0.2s ease-in-out;
display: inline-block;
height: 36px;
padding: 0 26px;
margin: 6px 0;
border: none;
border-radius: 2px;
cursor: pointer;
-ms-touch-action: manipulation;
touch-action: manipulation;
background-image: none;
text-align: center;
line-height: 36px;
vertical-align: middle;
white-space: nowrap;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
font-size: 14px;
font-family: inherit;
letter-spacing: 0.03em;
position: relative;
overflow: hidden;
}

.mui-btn:hover, .mui-btn:focus, .mui-btn:active {
color: rgba(0, 0, 0, 0.87);
background-color: white;
}

.mui-btn[disabled]:hover, .mui-btn[disabled]:focus, .mui-btn[disabled]:active {
color: rgba(0, 0, 0, 0.87);
background-color: #FFF;
}

.mui-btn.mui-btn--flat {
color: rgba(0, 0, 0, 0.87);
background-color: transparent;
}

.mui-btn.mui-btn--flat:hover, .mui-btn.mui-btn--flat:focus, .mui-btn.mui-btn--flat:active {
color: rgba(0, 0, 0, 0.87);
background-color: #f2f2f2;
}

.mui-btn.mui-btn--flat[disabled]:hover, .mui-btn.mui-btn--flat[disabled]:focus, .mui-btn.mui-btn--flat[disabled]:active {
color: rgba(0, 0, 0, 0.87);
background-color: transparent;
}

.mui-btn:hover, .mui-btn:focus, .mui-btn:active {
outline: 0;
text-decoration: none;
color: rgba(0, 0, 0, 0.87);
}

.mui-btn:hover, .mui-btn:focus {
-webkit-box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
.mui-btn:hover, .mui-btn:focus {
-webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
}
}

@supports (-ms-ime-align: auto) {
.mui-btn:hover, .mui-btn:focus {
-webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
}
}

.mui-btn:active:hover {
-webkit-box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
.mui-btn:active:hover {
-webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
}
}

@supports (-ms-ime-align: auto) {
.mui-btn:active:hover {
-webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
}
}

.mui-btn:disabled, .mui-btn.mui--is-disabled {
cursor: not-allowed;
pointer-events: none;
opacity: 0.60;
-webkit-box-shadow: none;
box-shadow: none;
}

.mui-btn + .mui-btn {
margin-left: 8px;
}

.mui-btn--flat {
background-color: transparent;
}

.mui-btn--flat:hover, .mui-btn--flat:focus, .mui-btn--flat:active, .mui-btn--flat:active:hover {
-webkit-box-shadow: none;
box-shadow: none;
background-color: #f2f2f2;
}

.mui-btn--raised, .mui-btn--fab {
-webkit-box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
.mui-btn--raised, .mui-btn--fab {
-webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
}
}

@supports (-ms-ime-align: auto) {
.mui-btn--raised, .mui-btn--fab {
-webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
}
}

.mui-btn--raised:active, .mui-btn--fab:active {
-webkit-box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
.mui-btn--raised:active, .mui-btn--fab:active {
-webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
}
}

@supports (-ms-ime-align: auto) {
.mui-btn--raised:active, .mui-btn--fab:active {
-webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
}
}

.mui-btn--fab {
position: relative;
padding: 0;
width: 55px;
height: 55px;
line-height: 55px;
border-radius: 50%;
z-index: 1;
}

.mui-btn--primary {
color: #FFF;
background-color: #2196F3;
}

.mui-btn--primary:hover, .mui-btn--primary:focus, .mui-btn--primary:active {
color: #FFF;
background-color: #39a1f4;
}

.mui-btn--primary[disabled]:hover, .mui-btn--primary[disabled]:focus, .mui-btn--primary[disabled]:active {
color: #FFF;
background-color: #2196F3;
}

.mui-btn--primary.mui-btn--flat {
color: #2196F3;
background-color: transparent;
}

.mui-btn--primary.mui-btn--flat:hover, .mui-btn--primary.mui-btn--flat:focus, .mui-btn--primary.mui-btn--flat:active {
color: #2196F3;
background-color: #f2f2f2;
}

.mui-btn--primary.mui-btn--flat[disabled]:hover, .mui-btn--primary.mui-btn--flat[disabled]:focus, .mui-btn--primary.mui-btn--flat[disabled]:active {
color: #2196F3;
background-color: transparent;
}

.mui-btn--dark {
color: #FFF;
background-color: #424242;
}

.mui-btn--dark:hover, .mui-btn--dark:focus, .mui-btn--dark:active {
color: #FFF;
background-color: #4f4f4f;
}

.mui-btn--dark[disabled]:hover, .mui-btn--dark[disabled]:focus, .mui-btn--dark[disabled]:active {
color: #FFF;
background-color: #424242;
}

.mui-btn--dark.mui-btn--flat {
color: #424242;
background-color: transparent;
}

.mui-btn--dark.mui-btn--flat:hover, .mui-btn--dark.mui-btn--flat:focus, .mui-btn--dark.mui-btn--flat:active {
color: #424242;
background-color: #f2f2f2;
}

.mui-btn--dark.mui-btn--flat[disabled]:hover, .mui-btn--dark.mui-btn--flat[disabled]:focus, .mui-btn--dark.mui-btn--flat[disabled]:active {
color: #424242;
background-color: transparent;
}

.mui-btn--danger {
color: #FFF;
background-color: #F44336;
}

.mui-btn--danger:hover, .mui-btn--danger:focus, .mui-btn--danger:active {
color: #FFF;
background-color: #f55a4e;
}

.mui-btn--danger[disabled]:hover, .mui-btn--danger[disabled]:focus, .mui-btn--danger[disabled]:active {
color: #FFF;
background-color: #F44336;
}

.mui-btn--danger.mui-btn--flat {
color: #F44336;
background-color: transparent;
}

.mui-btn--danger.mui-btn--flat:hover, .mui-btn--danger.mui-btn--flat:focus, .mui-btn--danger.mui-btn--flat:active {
color: #F44336;
background-color: #f2f2f2;
}

.mui-btn--danger.mui-btn--flat[disabled]:hover, .mui-btn--danger.mui-btn--flat[disabled]:focus, .mui-btn--danger.mui-btn--flat[disabled]:active {
color: #F44336;
background-color: transparent;
}

.mui-btn--accent {
color: #FFF;
background-color: #FF4081;
}

.mui-btn--accent:hover, .mui-btn--accent:focus, .mui-btn--accent:active {
color: #FFF;
background-color: #ff5a92;
}

.mui-btn--accent[disabled]:hover, .mui-btn--accent[disabled]:focus, .mui-btn--accent[disabled]:active {
color: #FFF;
background-color: #FF4081;
}

.mui-btn--accent.mui-btn--flat {
color: #FF4081;
background-color: transparent;
}

.mui-btn--accent.mui-btn--flat:hover, .mui-btn--accent.mui-btn--flat:focus, .mui-btn--accent.mui-btn--flat:active {
color: #FF4081;
background-color: #f2f2f2;
}

.mui-btn--accent.mui-btn--flat[disabled]:hover, .mui-btn--accent.mui-btn--flat[disabled]:focus, .mui-btn--accent.mui-btn--flat[disabled]:active {
color: #FF4081;
background-color: transparent;
}

.mui-btn--small {
height: 30.6px;
line-height: 30.6px;
padding: 0 16px;
font-size: 13px;
}

.mui-btn--large {
height: 54px;
line-height: 54px;
padding: 0 26px;
font-size: 14px;
}

.mui-btn--fab.mui-btn--small {
width: 44px;
height: 44px;
line-height: 44px;
}

.mui-btn--fab.mui-btn--large {
width: 75px;
height: 75px;
line-height: 75px;
}

/**
 * MUI Checkboxe and Radio Components
 */
.mui-radio,
.mui-checkbox {
position: relative;
display: block;
margin-top: 10px;
margin-bottom: 10px;
}

.mui-radio > label,
.mui-checkbox > label {
min-height: 20px;
padding-left: 20px;
margin-bottom: 0;
font-weight: normal;
cursor: pointer;
}

.mui-radio input:disabled,
.mui-checkbox input:disabled {
cursor: not-allowed;
}

.mui-radio input:focus,
.mui-checkbox input:focus {
outline: thin dotted;
outline: 5px auto -webkit-focus-ring-color;
outline-offset: -2px;
}

.mui-radio > label > input[type="radio"],
.mui-radio--inline > label > input[type="radio"],
.mui-checkbox > label > input[type="checkbox"],
.mui-checkbox--inline > label > input[type="checkbox"] {
position: absolute;
margin-left: -20px;
margin-top: 4px;
}

.mui-radio + .mui-radio,
.mui-checkbox + .mui-checkbox {
margin-top: -5px;
}

.mui-radio--inline,
.mui-checkbox--inline {
display: inline-block;
padding-left: 20px;
margin-bottom: 0;
vertical-align: middle;
font-weight: normal;
cursor: pointer;
}

.mui-radio--inline > input[type="radio"],
.mui-radio--inline > input[type="checkbox"],
.mui-radio--inline > label > input[type="radio"],
.mui-radio--inline > label > input[type="checkbox"],
.mui-checkbox--inline > input[type="radio"],
.mui-checkbox--inline > input[type="checkbox"],
.mui-checkbox--inline > label > input[type="radio"],
.mui-checkbox--inline > label > input[type="checkbox"] {
margin: 4px 0 0;
line-height: normal;
}

.mui-radio--inline + .mui-radio--inline,
.mui-checkbox--inline + .mui-checkbox--inline {
margin-top: 0;
margin-left: 10px;
}

/**
 * MUI Container module
 */
.mui-container {
-webkit-box-sizing: border-box;
box-sizing: border-box;
margin-right: auto;
margin-left: auto;
padding-left: 15px;
padding-right: 15px;
}

.mui-container:before, .mui-container:after {
content: " ";
display: table;
}

.mui-container:after {
clear: both;
}

@media (min-width: 544px) {
.mui-container {
max-width: 570px;
}
}

@media (min-width: 768px) {
.mui-container {
max-width: 740px;
}
}

@media (min-width: 992px) {
.mui-container {
max-width: 960px;
}
}

@media (min-width: 1200px) {
.mui-container {
max-width: 1170px;
}
}

.mui-container-fluid {
-webkit-box-sizing: border-box;
box-sizing: border-box;
margin-right: auto;
margin-left: auto;
padding-left: 15px;
padding-right: 15px;
}

.mui-container-fluid:before, .mui-container-fluid:after {
content: " ";
display: table;
}

.mui-container-fluid:after {
clear: both;
}

/**
 * MUI Divider Component and CSS Helpers
 */
.mui-divider {
display: block;
height: 1px;
background-color: rgba(0, 0, 0, 0.12);
}

.mui--divider-top {
border-top: 1px solid rgba(0, 0, 0, 0.12);
}

.mui--divider-bottom {
border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.mui--divider-left {
border-left: 1px solid rgba(0, 0, 0, 0.12);
}

.mui--divider-right {
border-right: 1px solid rgba(0, 0, 0, 0.12);
}

/**
 * MUI Dropdown module
 */
.mui-dropdown {
display: inline-block;
position: relative;
}

[data-mui-toggle="dropdown"] {
outline: 0;
}

.mui-dropdown__menu {
position: absolute;
top: 100%;
left: 0;
display: none;
min-width: 160px;
padding: 5px 0;
margin: 2px 0 0;
list-style: none;
font-size: 14px;
text-align: left;
background-color: #FFF;
border-radius: 2px;
z-index: 1;
background-clip: padding-box;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
.mui-dropdown__menu {
border-top: 1px solid rgba(0, 0, 0, 0.12);
border-left: 1px solid rgba(0, 0, 0, 0.12);
}
}

@supports (-ms-ime-align: auto) {
.mui-dropdown__menu {
border-top: 1px solid rgba(0, 0, 0, 0.12);
border-left: 1px solid rgba(0, 0, 0, 0.12);
}
}

.mui-dropdown__menu.mui--is-open {
display: block;
}

.mui-dropdown__menu > li > a {
display: block;
padding: 3px 20px;
clear: both;
font-weight: normal;
line-height: 1.429;
color: rgba(0, 0, 0, 0.87);
text-decoration: none;
white-space: nowrap;
}

.mui-dropdown__menu > li > a:hover, .mui-dropdown__menu > li > a:focus {
text-decoration: none;
color: rgba(0, 0, 0, 0.87);
background-color: #EEEEEE;
}

.mui-dropdown__menu > .mui--is-disabled > a, .mui-dropdown__menu > .mui--is-disabled > a:hover, .mui-dropdown__menu > .mui--is-disabled > a:focus {
color: #EEEEEE;
}

.mui-dropdown__menu > .mui--is-disabled > a:hover, .mui-dropdown__menu > .mui--is-disabled > a:focus {
text-decoration: none;
background-color: transparent;
background-image: none;
cursor: not-allowed;
}

.mui-dropdown__menu--right {
left: auto;
right: 0;
}

/**
 * MUI Form Component
 */
.mui-form legend {
display: block;
width: 100%;
padding: 0;
margin-bottom: 10px;
font-size: 21px;
color: rgba(0, 0, 0, 0.87);
line-height: inherit;
border: 0;
}

.mui-form fieldset {
border: 0;
padding: 0;
margin: 0 0 20px 0;
}

@media (min-width: 544px) {
.mui-form--inline .mui-textfield {
display: inline-block;
vertical-align: bottom;
margin-bottom: 0;
}
.mui-form--inline .mui-radio,
.mui-form--inline .mui-checkbox {
display: inline-block;
margin-top: 0;
margin-bottom: 0;
vertical-align: middle;
}
.mui-form--inline .mui-radio > label,
.mui-form--inline .mui-checkbox > label {
padding-left: 0;
}
.mui-form--inline .mui-radio > label > input[type="radio"],
.mui-form--inline .mui-checkbox > label > input[type="checkbox"] {
position: relative;
margin-left: 0;
}
.mui-form--inline .mui-select {
display: inline-block;
vertical-align: bottom;
margin-bottom: 0;
}
.mui-form--inline .mui-btn {
margin-bottom: 0;
margin-top: 0;
vertical-align: bottom;
}
}

/**
 * MUI Grid module
 */
.mui-row {
margin-left: -15px;
margin-right: -15px;
}

.mui-row:before, .mui-row:after {
content: " ";
display: table;
}

.mui-row:after {
clear: both;
}

.mui-col-xs-1, .mui-col-sm-1, .mui-col-md-1, .mui-col-lg-1, .mui-col-xs-2, .mui-col-sm-2, .mui-col-md-2, .mui-col-lg-2, .mui-col-xs-3, .mui-col-sm-3, .mui-col-md-3, .mui-col-lg-3, .mui-col-xs-4, .mui-col-sm-4, .mui-col-md-4, .mui-col-lg-4, .mui-col-xs-5, .mui-col-sm-5, .mui-col-md-5, .mui-col-lg-5, .mui-col-xs-6, .mui-col-sm-6, .mui-col-md-6, .mui-col-lg-6, .mui-col-xs-7, .mui-col-sm-7, .mui-col-md-7, .mui-col-lg-7, .mui-col-xs-8, .mui-col-sm-8, .mui-col-md-8, .mui-col-lg-8, .mui-col-xs-9, .mui-col-sm-9, .mui-col-md-9, .mui-col-lg-9, .mui-col-xs-10, .mui-col-sm-10, .mui-col-md-10, .mui-col-lg-10, .mui-col-xs-11, .mui-col-sm-11, .mui-col-md-11, .mui-col-lg-11, .mui-col-xs-12, .mui-col-sm-12, .mui-col-md-12, .mui-col-lg-12 {
-webkit-box-sizing: border-box;
box-sizing: border-box;
min-height: 1px;
padding-left: 15px;
padding-right: 15px;
}

.mui-col-xs-1, .mui-col-xs-2, .mui-col-xs-3, .mui-col-xs-4, .mui-col-xs-5, .mui-col-xs-6, .mui-col-xs-7, .mui-col-xs-8, .mui-col-xs-9, .mui-col-xs-10, .mui-col-xs-11, .mui-col-xs-12 {
float: left;
}

.mui-col-xs-1 {
width: 8.33333%;
}

.mui-col-xs-2 {
width: 16.66667%;
}

.mui-col-xs-3 {
width: 25%;
}

.mui-col-xs-4 {
width: 33.33333%;
}

.mui-col-xs-5 {
width: 41.66667%;
}

.mui-col-xs-6 {
width: 50%;
}

.mui-col-xs-7 {
width: 58.33333%;
}

.mui-col-xs-8 {
width: 66.66667%;
}

.mui-col-xs-9 {
width: 75%;
}

.mui-col-xs-10 {
width: 83.33333%;
}

.mui-col-xs-11 {
width: 91.66667%;
}

.mui-col-xs-12 {
width: 100%;
}

.mui-col-xs-offset-0 {
margin-left: 0%;
}

.mui-col-xs-offset-1 {
margin-left: 8.33333%;
}

.mui-col-xs-offset-2 {
margin-left: 16.66667%;
}

.mui-col-xs-offset-3 {
margin-left: 25%;
}

.mui-col-xs-offset-4 {
margin-left: 33.33333%;
}

.mui-col-xs-offset-5 {
margin-left: 41.66667%;
}

.mui-col-xs-offset-6 {
margin-left: 50%;
}

.mui-col-xs-offset-7 {
margin-left: 58.33333%;
}

.mui-col-xs-offset-8 {
margin-left: 66.66667%;
}

.mui-col-xs-offset-9 {
margin-left: 75%;
}

.mui-col-xs-offset-10 {
margin-left: 83.33333%;
}

.mui-col-xs-offset-11 {
margin-left: 91.66667%;
}

.mui-col-xs-offset-12 {
margin-left: 100%;
}

@media (min-width: 544px) {
.mui-col-sm-1, .mui-col-sm-2, .mui-col-sm-3, .mui-col-sm-4, .mui-col-sm-5, .mui-col-sm-6, .mui-col-sm-7, .mui-col-sm-8, .mui-col-sm-9, .mui-col-sm-10, .mui-col-sm-11, .mui-col-sm-12 {
float: left;
}
.mui-col-sm-1 {
width: 8.33333%;
}
.mui-col-sm-2 {
width: 16.66667%;
}
.mui-col-sm-3 {
width: 25%;
}
.mui-col-sm-4 {
width: 33.33333%;
}
.mui-col-sm-5 {
width: 41.66667%;
}
.mui-col-sm-6 {
width: 50%;
}
.mui-col-sm-7 {
width: 58.33333%;
}
.mui-col-sm-8 {
width: 66.66667%;
}
.mui-col-sm-9 {
width: 75%;
}
.mui-col-sm-10 {
width: 83.33333%;
}
.mui-col-sm-11 {
width: 91.66667%;
}
.mui-col-sm-12 {
width: 100%;
}
.mui-col-sm-offset-0 {
margin-left: 0%;
}
.mui-col-sm-offset-1 {
margin-left: 8.33333%;
}
.mui-col-sm-offset-2 {
margin-left: 16.66667%;
}
.mui-col-sm-offset-3 {
margin-left: 25%;
}
.mui-col-sm-offset-4 {
margin-left: 33.33333%;
}
.mui-col-sm-offset-5 {
margin-left: 41.66667%;
}
.mui-col-sm-offset-6 {
margin-left: 50%;
}
.mui-col-sm-offset-7 {
margin-left: 58.33333%;
}
.mui-col-sm-offset-8 {
margin-left: 66.66667%;
}
.mui-col-sm-offset-9 {
margin-left: 75%;
}
.mui-col-sm-offset-10 {
margin-left: 83.33333%;
}
.mui-col-sm-offset-11 {
margin-left: 91.66667%;
}
.mui-col-sm-offset-12 {
margin-left: 100%;
}
}

@media (min-width: 768px) {
.mui-col-md-1, .mui-col-md-2, .mui-col-md-3, .mui-col-md-4, .mui-col-md-5, .mui-col-md-6, .mui-col-md-7, .mui-col-md-8, .mui-col-md-9, .mui-col-md-10, .mui-col-md-11, .mui-col-md-12 {
float: left;
}
.mui-col-md-1 {
width: 8.33333%;
}
.mui-col-md-2 {
width: 16.66667%;
}
.mui-col-md-3 {
width: 25%;
}
.mui-col-md-4 {
width: 33.33333%;
}
.mui-col-md-5 {
width: 41.66667%;
}
.mui-col-md-6 {
width: 50%;
}
.mui-col-md-7 {
width: 58.33333%;
}
.mui-col-md-8 {
width: 66.66667%;
}
.mui-col-md-9 {
width: 75%;
}
.mui-col-md-10 {
width: 83.33333%;
}
.mui-col-md-11 {
width: 91.66667%;
}
.mui-col-md-12 {
width: 100%;
}
.mui-col-md-offset-0 {
margin-left: 0%;
}
.mui-col-md-offset-1 {
margin-left: 8.33333%;
}
.mui-col-md-offset-2 {
margin-left: 16.66667%;
}
.mui-col-md-offset-3 {
margin-left: 25%;
}
.mui-col-md-offset-4 {
margin-left: 33.33333%;
}
.mui-col-md-offset-5 {
margin-left: 41.66667%;
}
.mui-col-md-offset-6 {
margin-left: 50%;
}
.mui-col-md-offset-7 {
margin-left: 58.33333%;
}
.mui-col-md-offset-8 {
margin-left: 66.66667%;
}
.mui-col-md-offset-9 {
margin-left: 75%;
}
.mui-col-md-offset-10 {
margin-left: 83.33333%;
}
.mui-col-md-offset-11 {
margin-left: 91.66667%;
}
.mui-col-md-offset-12 {
margin-left: 100%;
}
}

@media (min-width: 992px) {
.mui-col-lg-1, .mui-col-lg-2, .mui-col-lg-3, .mui-col-lg-4, .mui-col-lg-5, .mui-col-lg-6, .mui-col-lg-7, .mui-col-lg-8, .mui-col-lg-9, .mui-col-lg-10, .mui-col-lg-11, .mui-col-lg-12 {
float: left;
}
.mui-col-lg-1 {
width: 8.33333%;
}
.mui-col-lg-2 {
width: 16.66667%;
}
.mui-col-lg-3 {
width: 25%;
}
.mui-col-lg-4 {
width: 33.33333%;
}
.mui-col-lg-5 {
width: 41.66667%;
}
.mui-col-lg-6 {
width: 50%;
}
.mui-col-lg-7 {
width: 58.33333%;
}
.mui-col-lg-8 {
width: 66.66667%;
}
.mui-col-lg-9 {
width: 75%;
}
.mui-col-lg-10 {
width: 83.33333%;
}
.mui-col-lg-11 {
width: 91.66667%;
}
.mui-col-lg-12 {
width: 100%;
}
.mui-col-lg-offset-0 {
margin-left: 0%;
}
.mui-col-lg-offset-1 {
margin-left: 8.33333%;
}
.mui-col-lg-offset-2 {
margin-left: 16.66667%;
}
.mui-col-lg-offset-3 {
margin-left: 25%;
}
.mui-col-lg-offset-4 {
margin-left: 33.33333%;
}
.mui-col-lg-offset-5 {
margin-left: 41.66667%;
}
.mui-col-lg-offset-6 {
margin-left: 50%;
}
.mui-col-lg-offset-7 {
margin-left: 58.33333%;
}
.mui-col-lg-offset-8 {
margin-left: 66.66667%;
}
.mui-col-lg-offset-9 {
margin-left: 75%;
}
.mui-col-lg-offset-10 {
margin-left: 83.33333%;
}
.mui-col-lg-offset-11 {
margin-left: 91.66667%;
}
.mui-col-lg-offset-12 {
margin-left: 100%;
}
}

@media (min-width: 1200px) {
.mui-col-xl-1, .mui-col-xl-2, .mui-col-xl-3, .mui-col-xl-4, .mui-col-xl-5, .mui-col-xl-6, .mui-col-xl-7, .mui-col-xl-8, .mui-col-xl-9, .mui-col-xl-10, .mui-col-xl-11, .mui-col-xl-12 {
float: left;
}
.mui-col-xl-1 {
width: 8.33333%;
}
.mui-col-xl-2 {
width: 16.66667%;
}
.mui-col-xl-3 {
width: 25%;
}
.mui-col-xl-4 {
width: 33.33333%;
}
.mui-col-xl-5 {
width: 41.66667%;
}
.mui-col-xl-6 {
width: 50%;
}
.mui-col-xl-7 {
width: 58.33333%;
}
.mui-col-xl-8 {
width: 66.66667%;
}
.mui-col-xl-9 {
width: 75%;
}
.mui-col-xl-10 {
width: 83.33333%;
}
.mui-col-xl-11 {
width: 91.66667%;
}
.mui-col-xl-12 {
width: 100%;
}
.mui-col-xl-offset-0 {
margin-left: 0%;
}
.mui-col-xl-offset-1 {
margin-left: 8.33333%;
}
.mui-col-xl-offset-2 {
margin-left: 16.66667%;
}
.mui-col-xl-offset-3 {
margin-left: 25%;
}
.mui-col-xl-offset-4 {
margin-left: 33.33333%;
}
.mui-col-xl-offset-5 {
margin-left: 41.66667%;
}
.mui-col-xl-offset-6 {
margin-left: 50%;
}
.mui-col-xl-offset-7 {
margin-left: 58.33333%;
}
.mui-col-xl-offset-8 {
margin-left: 66.66667%;
}
.mui-col-xl-offset-9 {
margin-left: 75%;
}
.mui-col-xl-offset-10 {
margin-left: 83.33333%;
}
.mui-col-xl-offset-11 {
margin-left: 91.66667%;
}
.mui-col-xl-offset-12 {
margin-left: 100%;
}
}

/**
 * MUI Panel module
 */
.mui-panel {
padding: 15px;
margin-bottom: 20px;
border-radius: 0;
background-color: #FFF;
-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
}

.mui-panel:before, .mui-panel:after {
content: " ";
display: table;
}

.mui-panel:after {
clear: both;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
.mui-panel {
-webkit-box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.12), -1px 0px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.12), -1px 0px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
}
}

@supports (-ms-ime-align: auto) {
.mui-panel {
-webkit-box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.12), -1px 0px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.12), -1px 0px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
}
}

/**
 * MUI Select Component
 */
.mui-select {
display: block;
padding-top: 15px;
margin-bottom: 20px;
position: relative;
}

.mui-select:focus {
outline: 0;
}

.mui-select:focus > select {
height: calc(32px + 1px);
margin-bottom: -1px;
border-color: #2196F3;
border-width: 2px;
}

.mui-select > select {
display: block;
height: 32px;
width: 100%;
appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
outline: none;
border: none;
border-bottom: 1px solid rgba(0, 0, 0, 0.26);
border-radius: 0px;
-webkit-box-shadow: none;
box-shadow: none;
background-color: transparent;
background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNiIgd2lkdGg9IjEwIj48cG9seWdvbiBwb2ludHM9IjAsMCAxMCwwIDUsNiIgc3R5bGU9ImZpbGw6cmdiYSgwLDAsMCwuMjQpOyIvPjwvc3ZnPg==");
background-repeat: no-repeat;
background-position: right center;
cursor: pointer;
color: rgba(0, 0, 0, 0.87);
font-size: 16px;
font-family: inherit;
line-height: inherit;
padding: 0 25px 0 0;
}

.mui-select > select::-ms-expand {
display: none;
}

.mui-select > select:focus {
outline: 0;
height: calc(32px + 1px);
margin-bottom: -1px;
border-color: #2196F3;
border-width: 2px;
}

.mui-select > select:disabled {
color: rgba(0, 0, 0, 0.38);
cursor: not-allowed;
background-color: transparent;
opacity: 1;
}

.mui-select > select:-moz-focusring {
color: transparent;
text-shadow: 0 0 0 #000;
}

.mui-select > select:focus::-ms-value {
background: none;
color: rgba(0, 0, 0, 0.87);
}

.mui-select > select.mui--text-placeholder {
color: rgba(0, 0, 0, 0.26);
}

.mui-select > label {
position: absolute;
top: 0;
display: block;
width: 100%;
color: rgba(0, 0, 0, 0.54);
font-size: 12px;
font-weight: 400;
line-height: 15px;
overflow-x: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}

.mui-select:focus > label,
.mui-select > select:focus ~ label {
color: #2196F3;
}

.mui-select__menu {
position: absolute;
z-index: 2;
min-width: 100%;
overflow-y: auto;
padding: 8px 0;
-webkit-box-sizing: border-box;
box-sizing: border-box;
background-color: #FFF;
font-size: 16px;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
.mui-select__menu {
border-left: 1px solid rgba(0, 0, 0, 0.12);
border-top: 1px solid rgba(0, 0, 0, 0.12);
}
}

@supports (-ms-ime-align: auto) {
.mui-select__menu {
border-left: 1px solid rgba(0, 0, 0, 0.12);
border-top: 1px solid rgba(0, 0, 0, 0.12);
}
}

.mui-select__menu > div {
padding: 0 22px;
height: 42px;
line-height: 42px;
cursor: pointer;
white-space: nowrap;
}

.mui-select__menu > div.mui--is-selected {
background-color: #EEEEEE;
}

.mui-select__menu > div.mui--is-disabled {
color: rgba(0, 0, 0, 0.38);
cursor: not-allowed;
}

.mui-select__menu > div:not(.mui-optgroup__label):not(.mui--is-disabled):hover {
background-color: #E0E0E0;
}

.mui-optgroup__option {
text-indent: 1em;
}

.mui-optgroup__label {
color: rgba(0, 0, 0, 0.54);
font-size: 0.9em;
}

/**
 * MUI Table Component
 */
.mui-table {
width: 100%;
max-width: 100%;
margin-bottom: 20px;
}

.mui-table > thead > tr > th,
.mui-table > tbody > tr > th,
.mui-table > tfoot > tr > th {
text-align: left;
}

.mui-table > thead > tr > th,
.mui-table > thead > tr > td,
.mui-table > tbody > tr > th,
.mui-table > tbody > tr > td,
.mui-table > tfoot > tr > th,
.mui-table > tfoot > tr > td {
padding: 10px;
line-height: 1.429;
}

.mui-table > thead > tr > th {
border-bottom: 2px solid rgba(0, 0, 0, 0.12);
font-weight: 700;
}

.mui-table > tbody + tbody {
border-top: 2px solid rgba(0, 0, 0, 0.12);
}

.mui-table.mui-table--bordered > tbody > tr > td {
border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

/**
 * MUI Tabs module
 */
.mui-tabs__bar {
list-style: none;
padding-left: 0;
margin-bottom: 0;
background-color: transparent;
white-space: nowrap;
overflow-x: auto;
}

.mui-tabs__bar > li {
display: inline-block;
}

.mui-tabs__bar > li > a {
display: block;
white-space: nowrap;
text-transform: uppercase;
font-weight: 500;
font-size: 14px;
color: rgba(0, 0, 0, 0.87);
cursor: default;
height: 48px;
line-height: 48px;
padding-left: 24px;
padding-right: 24px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.mui-tabs__bar > li > a:hover {
text-decoration: none;
}

.mui-tabs__bar > li.mui--is-active {
border-bottom: 2px solid #2196F3;
}

.mui-tabs__bar > li.mui--is-active > a {
color: #2196F3;
}

.mui-tabs__bar.mui-tabs__bar--justified {
display: table;
width: 100%;
table-layout: fixed;
}

.mui-tabs__bar.mui-tabs__bar--justified > li {
display: table-cell;
}

.mui-tabs__bar.mui-tabs__bar--justified > li > a {
text-align: center;
padding-left: 0px;
padding-right: 0px;
}

.mui-tabs__pane {
display: none;
}

.mui-tabs__pane.mui--is-active {
display: block;
}

/**
 * MUI Textfield Component
 */
.mui-textfield {
display: block;
padding-top: 15px;
margin-bottom: 20px;
position: relative;
}

.mui-textfield > label {
position: absolute;
top: 0;
display: block;
width: 100%;
color: rgba(0, 0, 0, 0.54);
font-size: 12px;
font-weight: 400;
line-height: 15px;
overflow-x: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}

.mui-textfield > textarea {
padding-top: 5px;
}

.mui-textfield > input:focus ~ label,
.mui-textfield > textarea:focus ~ label {
color: #2196F3;
}

.mui-textfield--float-label > label {
position: absolute;
-webkit-transform: translate(0px, 15px);
transform: translate(0px, 15px);
font-size: 16px;
line-height: 32px;
color: rgba(0, 0, 0, 0.26);
text-overflow: clip;
cursor: text;
pointer-events: none;
}

.mui-textfield--float-label > input:-webkit-autofill ~ label,
.mui-textfield--float-label > textarea:-webkit-autofill ~ label {
-webkit-transform: translate(0px, 0px);
transform: translate(0px, 0px);
font-size: 12px;
line-height: 15px;
text-overflow: ellipsis;
}

.mui-textfield--float-label > input:focus ~ label,
.mui-textfield--float-label > textarea:focus ~ label {
-webkit-transform: translate(0px, 0px);
transform: translate(0px, 0px);
font-size: 12px;
line-height: 15px;
text-overflow: ellipsis;
}

.mui-textfield--float-label > input:not(:focus).mui--is-not-empty ~ label, .mui-textfield--float-label > input:not(:focus)[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty) ~ label, .mui-textfield--float-label > input:not(:focus):not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) ~ label,
.mui-textfield--float-label > textarea:not(:focus).mui--is-not-empty ~ label,
.mui-textfield--float-label > textarea:not(:focus)[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty) ~ label,
.mui-textfield--float-label > textarea:not(:focus):not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) ~ label {
color: rgba(0, 0, 0, 0.54);
font-size: 12px;
line-height: 15px;
-webkit-transform: translate(0px, 0px);
transform: translate(0px, 0px);
text-overflow: ellipsis;
}

.mui-textfield--wrap-label {
display: table;
width: 100%;
padding-top: 0px;
}

.mui-textfield--wrap-label:not(.mui-textfield--float-label) > label {
display: table-header-group;
position: static;
white-space: normal;
overflow-x: visible;
}

.mui-textfield > input,
.mui-textfield > textarea {
-webkit-box-sizing: border-box;
box-sizing: border-box;
display: block;
background-color: transparent;
color: rgba(0, 0, 0, 0.87);
border: none;
border-bottom: 1px solid rgba(0, 0, 0, 0.26);
outline: none;
width: 100%;
padding: 0;
-webkit-box-shadow: none;
box-shadow: none;
border-radius: 0px;
font-size: 16px;
font-family: inherit;
line-height: inherit;
background-image: none;
}

.mui-textfield > input:focus,
.mui-textfield > textarea:focus {
border-color: #2196F3;
border-width: 2px;
}

.mui-textfield > input:disabled, .mui-textfield > input:-moz-read-only,
.mui-textfield > textarea:disabled,
.mui-textfield > textarea:-moz-read-only {
cursor: not-allowed;
background-color: transparent;
opacity: 1;
}

.mui-textfield > input:disabled, .mui-textfield > input:read-only,
.mui-textfield > textarea:disabled,
.mui-textfield > textarea:read-only {
cursor: not-allowed;
background-color: transparent;
opacity: 1;
}

.mui-textfield > input::-webkit-input-placeholder,
.mui-textfield > textarea::-webkit-input-placeholder {
color: rgba(0, 0, 0, 0.26);
opacity: 1;
}

.mui-textfield > input:-ms-input-placeholder,
.mui-textfield > textarea:-ms-input-placeholder {
color: rgba(0, 0, 0, 0.26);
opacity: 1;
}

.mui-textfield > input::-ms-input-placeholder,
.mui-textfield > textarea::-ms-input-placeholder {
color: rgba(0, 0, 0, 0.26);
opacity: 1;
}

.mui-textfield > input::placeholder,
.mui-textfield > textarea::placeholder {
color: rgba(0, 0, 0, 0.26);
opacity: 1;
}

.mui-textfield > input {
height: 32px;
}

.mui-textfield > input:focus {
height: calc(32px + 1px);
margin-bottom: -1px;
}

.mui-textfield > textarea {
min-height: 64px;
}

.mui-textfield > textarea[rows]:not([rows="2"]):focus {
margin-bottom: -1px;
}

.mui-textfield > input:focus {
height: calc(32px + 1px);
margin-bottom: -1px;
}

.mui-textfield > input:invalid:not(:focus):not(:required), .mui-textfield > input:invalid:not(:focus):required.mui--is-not-empty, .mui-textfield > input:invalid:not(:focus):required.mui--is-empty.mui--is-touched, .mui-textfield > input:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield > input:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty),
.mui-textfield > textarea:invalid:not(:focus):not(:required),
.mui-textfield > textarea:invalid:not(:focus):required.mui--is-not-empty,
.mui-textfield > textarea:invalid:not(:focus):required.mui--is-empty.mui--is-touched,
.mui-textfield > textarea:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty),
.mui-textfield > textarea:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty),
.mui-textfield > input:not(:focus).mui--is-invalid:not(:required),
.mui-textfield > input:not(:focus).mui--is-invalid:required.mui--is-not-empty,
.mui-textfield > input:not(:focus).mui--is-invalid:required.mui--is-empty.mui--is-touched,
.mui-textfield > input:not(:focus).mui--is-invalid:required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty),
.mui-textfield > input:not(:focus).mui--is-invalid:required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty),
.mui-textfield > textarea:not(:focus).mui--is-invalid:not(:required),
.mui-textfield > textarea:not(:focus).mui--is-invalid:required.mui--is-not-empty,
.mui-textfield > textarea:not(:focus).mui--is-invalid:required.mui--is-empty.mui--is-touched,
.mui-textfield > textarea:not(:focus).mui--is-invalid:required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty),
.mui-textfield > textarea:not(:focus).mui--is-invalid:required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) {
border-color: #F44336;
border-width: 2px;
}

.mui-textfield > input:invalid:not(:focus):not(:required), .mui-textfield > input:invalid:not(:focus):required.mui--is-not-empty, .mui-textfield > input:invalid:not(:focus):required.mui--is-empty.mui--is-touched, .mui-textfield > input:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty), .mui-textfield > input:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty),
.mui-textfield > input:not(:focus).mui--is-invalid:not(:required),
.mui-textfield > input:not(:focus).mui--is-invalid:required.mui--is-not-empty,
.mui-textfield > input:not(:focus).mui--is-invalid:required.mui--is-empty.mui--is-touched,
.mui-textfield > input:not(:focus).mui--is-invalid:required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty),
.mui-textfield > input:not(:focus).mui--is-invalid:required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) {
height: calc(32px + 1px);
margin-bottom: -1px;
}

.mui-textfield.mui-textfield--float-label > input:invalid:not(:focus):not(:required) ~ label, .mui-textfield.mui-textfield--float-label > input:invalid:not(:focus):required.mui--is-not-empty ~ label, .mui-textfield.mui-textfield--float-label > input:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty) ~ label, .mui-textfield.mui-textfield--float-label > input:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) ~ label,
.mui-textfield.mui-textfield--float-label > textarea:invalid:not(:focus):not(:required) ~ label,
.mui-textfield.mui-textfield--float-label > textarea:invalid:not(:focus):required.mui--is-not-empty ~ label,
.mui-textfield.mui-textfield--float-label > textarea:invalid:not(:focus):required[value]:not([value=""]):not(.mui--is-empty):not(.mui--is-not-empty) ~ label,
.mui-textfield.mui-textfield--float-label > textarea:invalid:not(:focus):required:not(:empty):not(.mui--is-empty):not(.mui--is-not-empty) ~ label {
color: #F44336;
}

.mui-textfield:not(.mui-textfield--float-label) > input:invalid:not(:focus):not(:required) ~ label, .mui-textfield:not(.mui-textfield--float-label) > input:invalid:not(:focus):required.mui--is-empty.mui--is-touched ~ label, .mui-textfield:not(.mui-textfield--float-label) > input:invalid:not(:focus):required.mui--is-not-empty ~ label,
.mui-textfield:not(.mui-textfield--float-label) > textarea:invalid:not(:focus):not(:required) ~ label,
.mui-textfield:not(.mui-textfield--float-label) > textarea:invalid:not(:focus):required.mui--is-empty.mui--is-touched ~ label,
.mui-textfield:not(.mui-textfield--float-label) > textarea:invalid:not(:focus):required.mui--is-not-empty ~ label {
color: #F44336;
}

.mui-textfield.mui-textfield--float-label > .mui--is-invalid.mui--is-not-empty:not(:focus) ~ label {
color: #F44336;
}

.mui-textfield:not(.mui-textfield--float-label) > .mui--is-invalid:not(:focus) ~ label {
color: #F44336;
}

/**
 * MUI Helpers module
 */
.mui--no-transition {
-webkit-transition: none !important;
transition: none !important;
}

.mui--no-user-select {
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.mui-caret {
display: inline-block;
width: 0;
height: 0;
margin-left: 2px;
vertical-align: middle;
border-top: 4px solid;
border-right: 4px solid transparent;
border-left: 4px solid transparent;
}

.mui--text-left {
text-align: left !important;
}

.mui--text-right {
text-align: right !important;
}

.mui--text-center {
text-align: center !important;
}

.mui--text-justify {
text-align: justify !important;
}

.mui--text-nowrap {
white-space: nowrap !important;
}

.mui--align-baseline {
vertical-align: baseline !important;
}

.mui--align-top {
vertical-align: top !important;
}

.mui--align-middle {
vertical-align: middle !important;
}

.mui--align-bottom {
vertical-align: bottom !important;
}

.mui--text-dark {
color: rgba(0, 0, 0, 0.87);
}

.mui--text-dark-secondary {
color: rgba(0, 0, 0, 0.54);
}

.mui--text-dark-hint {
color: rgba(0, 0, 0, 0.38);
}

.mui--text-light {
color: #FFF;
}

.mui--text-light-secondary {
color: rgba(255, 255, 255, 0.7);
}

.mui--text-light-hint {
color: rgba(255, 255, 255, 0.3);
}

.mui--text-accent {
color: rgba(255, 64, 129, 0.87);
}

.mui--text-accent-secondary {
color: rgba(255, 64, 129, 0.54);
}

.mui--text-accent-hint {
color: rgba(255, 64, 129, 0.38);
}

.mui--text-black {
color: #000;
}

.mui--text-white {
color: #FFF;
}

.mui--text-danger {
color: #F44336;
}

.mui--text-placeholder {
color: rgba(0, 0, 0, 0.26);
}

.mui--bg-primary {
background-color: #2196F3;
}

.mui--bg-primary-dark {
background-color: #1976D2;
}

.mui--bg-primary-light {
background-color: #BBDEFB;
}

.mui--bg-accent {
background-color: #FF4081;
}

.mui--bg-accent-dark {
background-color: #F50057;
}

.mui--bg-accent-light {
background-color: #FF80AB;
}

.mui--bg-danger {
background-color: #F44336;
}

.mui-list--unstyled {
padding-left: 0;
list-style: none;
}

.mui-list--inline {
padding-left: 0;
list-style: none;
margin-left: -5px;
}

.mui-list--inline > li {
display: inline-block;
padding-left: 5px;
padding-right: 5px;
}

.mui--z1, .mui-dropdown__menu, .mui-select__menu {
-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.mui--z2 {
-webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.mui--z3 {
-webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.mui--z4 {
-webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.mui--z5 {
-webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.mui--clearfix:before, .mui--clearfix:after {
content: " ";
display: table;
}

.mui--clearfix:after {
clear: both;
}

.mui--pull-right {
float: right !important;
}

.mui--pull-left {
float: left !important;
}

.mui--hide {
display: none !important;
}

.mui--show {
display: block !important;
}

.mui--invisible {
visibility: hidden;
}

.mui--overflow-hidden {
overflow: hidden !important;
}

.mui--overflow-hidden-x {
overflow-x: hidden !important;
}

.mui--overflow-hidden-y {
overflow-y: hidden !important;
}

.mui--visible-xs-block,
.mui--visible-xs-inline,
.mui--visible-xs-inline-block,
.mui--visible-sm-block,
.mui--visible-sm-inline,
.mui--visible-sm-inline-block,
.mui--visible-md-block,
.mui--visible-md-inline,
.mui--visible-md-inline-block,
.mui--visible-lg-block,
.mui--visible-lg-inline,
.mui--visible-lg-inline-block,
.mui--visible-xl-block,
.mui--visible-xl-inline,
.mui--visible-xl-inline-block {
display: none !important;
}

@media (max-width: 543px) {
.mui-visible-xs {
display: block !important;
}
table.mui-visible-xs {
display: table;
}
tr.mui-visible-xs {
display: table-row !important;
}
th.mui-visible-xs,
td.mui-visible-xs {
display: table-cell !important;
}
.mui--visible-xs-block {
display: block !important;
}
.mui--visible-xs-inline {
display: inline !important;
}
.mui--visible-xs-inline-block {
display: inline-block !important;
}
}

@media (min-width: 544px) and (max-width: 767px) {
.mui-visible-sm {
display: block !important;
}
table.mui-visible-sm {
display: table;
}
tr.mui-visible-sm {
display: table-row !important;
}
th.mui-visible-sm,
td.mui-visible-sm {
display: table-cell !important;
}
.mui--visible-sm-block {
display: block !important;
}
.mui--visible-sm-inline {
display: inline !important;
}
.mui--visible-sm-inline-block {
display: inline-block !important;
}
}

@media (min-width: 768px) and (max-width: 991px) {
.mui-visible-md {
display: block !important;
}
table.mui-visible-md {
display: table;
}
tr.mui-visible-md {
display: table-row !important;
}
th.mui-visible-md,
td.mui-visible-md {
display: table-cell !important;
}
.mui--visible-md-block {
display: block !important;
}
.mui--visible-md-inline {
display: inline !important;
}
.mui--visible-md-inline-block {
display: inline-block !important;
}
}

@media (min-width: 992px) and (max-width: 1199px) {
.mui-visible-lg {
display: block !important;
}
table.mui-visible-lg {
display: table;
}
tr.mui-visible-lg {
display: table-row !important;
}
th.mui-visible-lg,
td.mui-visible-lg {
display: table-cell !important;
}
.mui--visible-lg-block {
display: block !important;
}
.mui--visible-lg-inline {
display: inline !important;
}
.mui--visible-lg-inline-block {
display: inline-block !important;
}
}

@media (min-width: 1200px) {
.mui-visible-xl {
display: block !important;
}
table.mui-visible-xl {
display: table;
}
tr.mui-visible-xl {
display: table-row !important;
}
th.mui-visible-xl,
td.mui-visible-xl {
display: table-cell !important;
}
.mui--visible-xl-block {
display: block !important;
}
.mui--visible-xl-inline {
display: inline !important;
}
.mui--visible-xl-inline-block {
display: inline-block !important;
}
}

@media (max-width: 543px) {
.mui--hidden-xs {
display: none !important;
}
}

@media (min-width: 544px) and (max-width: 767px) {
.mui--hidden-sm {
display: none !important;
}
}

@media (min-width: 768px) and (max-width: 991px) {
.mui--hidden-md {
display: none !important;
}
}

@media (min-width: 992px) and (max-width: 1199px) {
.mui--hidden-lg {
display: none !important;
}
}

@media (min-width: 1200px) {
.mui--hidden-xl {
display: none !important;
}
}

.mui-scrlock--showbar-y {
overflow-y: scroll !important;
}

.mui-scrlock--showbar-x {
overflow-x: scroll !important;
}

/**
 * MUI Overlay module
 */
#mui-overlay {
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 99999999;
background-color: rgba(0, 0, 0, 0.2);
overflow: auto;
}

/**
 * MUI Ripple module
 */
.mui-btn__ripple-container {
position: absolute;
top: 0;
left: 0;
display: block;
height: 100%;
width: 100%;
overflow: hidden;
z-index: 0;
pointer-events: none;
}

.mui-ripple {
position: absolute;
top: 0;
left: 0;
border-radius: 50%;
opacity: 0;
pointer-events: none;
-webkit-transform: scale(0.0001, 0.0001);
transform: scale(0.0001, 0.0001);
}

.mui-ripple.mui--is-animating {
-webkit-transform: none;
transform: none;
-webkit-transition: width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.3s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.2, 1);
transition: width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.3s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.2, 1);
transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1), width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1), width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.3s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.mui-ripple.mui--is-visible {
opacity: 0.3;
}

.mui-btn .mui-ripple {
background-color: #a6a6a6;
}

.mui-btn--primary .mui-ripple {
background-color: #FFF;
}

.mui-btn--dark .mui-ripple {
background-color: #FFF;
}

.mui-btn--danger .mui-ripple {
background-color: #FFF;
}

.mui-btn--accent .mui-ripple {
background-color: #FFF;
}

.mui-btn--flat .mui-ripple {
background-color: #a6a6a6;
}

/**
 * MUI Typography module
 */
.mui--text-display4 {
font-weight: 300;
font-size: 112px;
line-height: 112px;
}

.mui--text-display3 {
font-weight: 400;
font-size: 56px;
line-height: 56px;
}

.mui--text-display2 {
font-weight: 400;
font-size: 45px;
line-height: 48px;
}

.mui--text-display1, h1 {
font-weight: 400;
font-size: 34px;
line-height: 40px;
}

.mui--text-headline, h2 {
font-weight: 400;
font-size: 24px;
line-height: 32px;
}

.mui--text-title, h3 {
font-weight: 400;
font-size: 20px;
line-height: 28px;
}

.mui--text-subhead, h4 {
font-weight: 400;
font-size: 16px;
line-height: 24px;
}

.mui--text-body2, h5 {
font-weight: 500;
font-size: 14px;
line-height: 24px;
}

.mui--text-body1 {
font-weight: 400;
font-size: 14px;
line-height: 20px;
}

.mui--text-caption {
font-weight: 400;
font-size: 12px;
line-height: 16px;
}

.mui--text-menu {
font-weight: 500;
font-size: 13px;
line-height: 17px;
}

.mui--text-button {
font-weight: 500;
font-size: 14px;
line-height: 18px;
text-transform: uppercase;
}
</style>
`;