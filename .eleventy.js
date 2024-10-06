const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}
const markdownLib = markdownIt({ html: true }).use(markdownItAttrs);
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const embedEverything = require("eleventy-plugin-embed-everything");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
module.exports = (function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(embedEverything);
    eleventyConfig.addPlugin(pluginWebc);
    eleventyConfig.setLibrary('md', markdownLib);
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("resources");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addWatchTarget('css');
    eleventyConfig.addWatchTarget('js');
    eleventyConfig.addWatchTarget('resources');
    eleventyConfig.addWatchTarget('images');
    eleventyConfig.addPairedShortcode("formcontainer", function(content, id, name, method, action) {
        return `<form id="${id}" name="${name}" method="${method}" action="${action}">${content}</form>`
            });    
            eleventyConfig.addPairedShortcode("formgroup", function(content, hlevel, label) {
                var id = convertToId(label);
                return `<div id="${id}-group" role="group" aria-labelledby="${id}-group-label">
                <h${hlevel} id="${id}-group-label">${label}</h${hlevel}>
                ${content}
                </div>`
                    });            
            eleventyConfig.addShortcode("button", function(label, id, type, helperText) {
                var ariaDescribedby;
                var buttonString = '';
                if (helperText != '') {
                    helperText = `<p id="${id}-helper-text">${helperText}</p>`;
                    ariaDescribedby = ` aria-describedby="${id}-helper-text"`;
                } else {
                    ariaDescribedby = '';
                }
                if ((type != 'submit') && (type != 'reset') && (type != 'button')){
                    type = 'buttom';
                }
                return `<div id="${id}-button-container">
                <button class="sc-button" id="${id}" type="${type}"${ariaDescribedby}>${label}</button>
                ${helperText}
                </div>`
                    });            
                    eleventyConfig.addShortcode("textarea", function(id, name, label, error) {
                        var labelStar = formLabelStar(error);
                        var ariaRequired = isAriaRequired(error);
                        if (id == '') {
                            id= convertToId(label);
                        }
                        error = fullErrorMessage(error, id);
                        if (name == '') {
                            name = id;
                        }; //sets name to same value as id if left blank.
                        return `<div id="${id}-textarea-container">
                        <label for="${id}"><span id="${id}-label">${label}</span>${labelStar}</label>
                        <textarea name="${name}" id="${id}"${ariaRequired}></textarea>
                        ${error}</div>`
                            });            
                    eleventyConfig.addShortcode("textInput", function(id, name, label, error, helperText, autocomplete, inputmode) {
                        var labelStar = formLabelStar(error);
                        var ariaRequired = isAriaRequired(error);
                        var ariaDescribedby;
                        var dataHelperText;
                        if (id == '') {
                            id= convertToId(label);
                        }
                        if (helperText.length != 0) {
                            helperText = `<p id="${id}-helper-text">${helperText}</p>`;
                            ariaDescribedby = ` aria-describedby="${id}-helper-text"`;
                            dataHelperText = `' data-helper-text="true"`;
                        } else {
                            ariaDescribedby = '';
                            dataHelperText = '';
                        }
                        error = fullErrorMessage(error, id);
                        if (autocomplete != '') {
                            autocomplete = ` autocomplete="${autocomplete}"`;
                        }; //leaves off autocomplete attribute if value is empty
                        if (inputmode != '') {
                            inputmode = ` inputmode="${inputmode}"`;
                        }; //leaves off inputmode attribute if value is empty.
                        if (name == '') {
                            name = id;
                        }; //makes name attribute same as id if name value is left empty.
                        return `<div id="${id}-input-container">
                        <label for="${id}"><span id="${id}-label">${label}</span>${labelStar}</label>
                        <input type="text" name="${name}" id="${id}"${autocomplete}${inputmode}${ariaRequired}${ariaDescribedby}${dataHelperText}>
                        ${error}${helperText}</div>`
                            });                    
                            eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    return {        
            dir: {
            input: "src"
        }
    }
});

function formLabelStar (errorString) {
    if (errorString == '') {
        return '';
    } else {
        return '<span aria-hidden="true">*</span>';
    }
}
function isAriaRequired (errorString) {
    if (errorString == '') {
        return '';''
    } else {
        return ' aria-required="true"';
    }
}
function fullErrorMessage (errorString, idValue) {
    if (errorString == '') {
        return '';
    } else {
        return `<p class="form-error" id="${idValue}-error"><strong>Error:</strong>&nbsp;<span id="${idValue}-error-text">${errorString}</span></p>`;
    }
}
function convertToId(labelText) {
    labelText = labelText.toLowerCase();
    labelText = labelText.replaceAll(' ','-');
    return labelText;
}