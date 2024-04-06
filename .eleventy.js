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
module.exports = (function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(embedEverything);
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
    eleventyConfig.addPairedShortcode("accordiongroup", function(content, label, headingLevel) {
        if((headingLevel != "2") && (headingLevel != "3") && (headingLevel != "4") && (headingLevel != "5") && (headingLevel != "6")) {
            headingLevel= "2"
        }
        var idValue = convertToId(label);
        return `<section id="${idValue}-acc-section" aria-labelledby="${idValue}-heading" class="accordion-group-container" data-label="${label}">
        <h${headingLevel} id="${idValue}-heading">Controls for all ${label} accordions</h${headingLevel}>
        <div role="group" aria-labelledby="${idValue}-heading" class="accordion-group-button-container">
        <button class="acc-group-expand-btn" aria-pressed="false" aria-label="Expand all ${label} accordions">Expand All</button>
        <button class="acc-group-collapse-btn" aria-pressed="true" aria-label="Collapse all ${label} accordions">Collapse All</button>
        </div>
        ${content}
        </section>`
    });
    eleventyConfig.addPairedShortcode("accordion", function(content, level, label) {
        var accordionId = convertToId(label);
        if ((level == '2' || level =='3' || level == '4' || level == '5' || level == '6') == false) {value = '2';};;
        return `<div id="${accordionId}-acc-wrapper">
        <h${level} class="accordion-header" id="${accordionId}" tabindex="-1"><button class="accordion-button" aria-expanded="false" id="${accordionId}-button" aria-controls="${accordionId}-panel"><span class="accordion-indicator" aria-hidden="true">&rarr;</span>
        <span id="${accordionId}-label">${label}</span>
        </button></h${level}>
<section aria-labelledby="${accordionId}-label" class="accordion-panel-hide" id="${accordionId}-panel">
${content}
</section></div>`
    });
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
            eleventyConfig.addPairedShortcode("ebox", function(content, passAttributes, passClass) {
                if (passClass != '') {passclass = ` ${passClass}`;};
                if (passAttributes != '') {passAttributes = ` ${passAttributes}`;};
                    return `<div class="ebox-border-left${passClass}"${passAttributes}>${content}</div>`
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
                for (var i = 0; i < label.length; i++) {
if (i == 0) {
    buttonString += `<button class="sc-button" id=${id}-${i}" type="${type[i]}"${ariaDescribedby}>${label[i]}</button>`
} else {
    buttonString += `<button class="sc-button" id=${id}-${i}" type="${type[i]}">${label[i]}</button>`
}
                }
                if ((type != 'button') && (type != 'submit') && (type != 'reset')) {type = 'button';};
                return `<div id="${id}-button-container">${buttonString}${helperText}</div>`
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