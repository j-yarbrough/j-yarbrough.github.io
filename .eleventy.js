const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("resources");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addWatchTarget('css');
    eleventyConfig.addWatchTarget('js');
    eleventyConfig.addWatchTarget('resources');
    eleventyConfig.addPairedShortcode("accordion", function(content, level, label) {
        return `<h${level}  class="accordion-header"><button class="accordion-button" aria-expanded="false"><span class="accordion-indicator" aria-hidden="true">&plus;&nbsp;</span>
        ${label}
        </button></h${level}>
<section aria-label="${label}" class="accordion-panel">
${content}
</section>`
    });
    eleventyConfig.addPairedShortcode("formcontainer", function(content, id, name, method, action) {
        return `<form id="${id}" name="${name}" method="${method}" action="${action}">${content}</form>`
            });    
            eleventyConfig.addShortcode("button", function(type, id, label) {
                return `<button  id="${id}" type="${type}">${label}</button>`
                    });            
                    eleventyConfig.addShortcode("textInputRequired", function(id, name, label, error, autocomplete) {
                        if (autocomplete != '') {
                            autocomplete = ' autocomplete="' + autocomplete + '"';
                        } else {
                            autocomplete = '';
                        }
                        return `<div>
                        <label for="${id}">${label}<span aria-hidden="true">*</span></label>
                        <input type="text" name="${name}" id="${id}" aria-required="true"${autocomplete}>
                        <p class="form-error" id="${id}-error">Error: ${error}</p>
                        </div>`
                            });                    
    return {        
            dir: {
            input: "src"
        }
    }
});