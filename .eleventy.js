const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItAnchor = require("markdown-it-anchor");
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}
const markdownLib = markdownIt({ html: true }).use(markdownItAnchor).use(markdownItAttrs);
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginTOC = require('eleventy-plugin-toc');
const embedEverything = require("eleventy-plugin-embed-everything");
module.exports = (function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(embedEverything);
    eleventyConfig.addPlugin(pluginTOC, {
        wrapper: 'div',
        ul: true
      })
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
    eleventyConfig.addPairedShortcode("accordion", function(content, level, label) {
        var accordionId = convertToId(label);
        if ((level == '2' || level =='3' || level == '4' || level == '5' || level == '6') == false) {
            value = '2';
        }
        return `<div id="${accordionId}-acc-wrapper">
        <h${level} class="accordion-header" id="${accordionId}" tabindex="-1"><button class="accordion-button" aria-expanded="false" id="${accordionId}-button"><span class="accordion-indicator" aria-hidden="true">&plus;</span>
        <span id="${accordionId}-label">${label}</span>
        </button></h${level}>
<div class="accordion-panel" id="${accordionId}-panel">
${content}
</div></div>`
    });
    eleventyConfig.addPairedShortcode("formcontainer", function(content, id, name, method, action) {
        return `<form id="${id}" name="${name}" method="${method}" action="${action}">${content}</form>`
            });    
            eleventyConfig.addPairedShortcode("ebox", function(content, passAttributes, passClass) {
                if (passClass != '') {passclass = ' ' + passClass;};
                if (passAttributes != '') {passAttributes = ' ' + passAttributes;};
                    return `<div class="ebox-border-left">${content}</div>`
                        });    
            
            eleventyConfig.addShortcode("button", function(type, id, label, helperText) {
                var ariaDescribedby;
                if (helperText != '') {
                    helperText = '<p id="' + id + '-helper-text">' + helperText + '</p>';
                    ariaDescribedby = ' aria-describedby="' + id + '-helper-text"';
                } else {
                    ariaDescribedby = '';
                }
                switch (type) {
                    case 'submit': type = ' type="submit"';
                    break;
                    case "reset": type = ' type="reset"';
                    break;
                    default: type = ' type="button"';
                }; //sets type to button if not specified as submit or reset.
                return `<div id="${id}-button-container">
                <button class="sc-button" id="${id}"${type}${ariaDescribedby}>${label}</button>${helperText}</div>`
                    });            
                    eleventyConfig.addShortcode("textarea", function(id, name, label, error) {
                        var labelStar = formLabelStar(error);
                        var ariaRequired = isAriaRequired(error);
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
                        if (helperText.length != 0) {
                            helperText = '<p id="' + id + '-helper-text">' + helperText + '</p>';
                            ariaDescribedby = ' aria-describedby="' + id + '-helper-text"';
                        } else {
                            ariaDescribedby = '';
                        }
                        error = fullErrorMessage(error, id);
                        if (autocomplete != '') {
                            autocomplete = ' autocomplete="' + autocomplete + '"';
                        }; //leaves off autocomplete attribute if value is empty
                        if (inputmode != '') {
                            inputmode = ' inputmode="' + inputmode + '"';
                        }; //leaves off inputmode attribute if value is empty.
                        if (name == '') {
                            name = id;
                        }; //makes name attribute same as id if name value is left empty.
                        return `<div id="${id}-input-container">
                        <label for="${id}"><span id="${id}-label">${label}</span>${labelStar}</label>
                        <input type="text" name="${name}" id="${id}"${autocomplete}${inputmode}${ariaRequired}${ariaDescribedby}>
                        ${error}${helperText}</div>`
                            });                    
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
        return '<p class="form-error" id="' + idValue + '-error"><strong>Error:</strong>&nbsp;<span id="' + idValue + '-error-text">' + errorString + '</span></p>';
    }
}
function convertToId(labelText) {
    labelText = labelText.toLowerCase();
    labelText = labelText.replaceAll(' ','-');
    return labelText;
}