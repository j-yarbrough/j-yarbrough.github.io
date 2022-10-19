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
        if ((level == '2' || level =='3' || level == '4' || level == '5' || level == '6') == false) {
            value = '2';
        } //sets level to 2 if not set with an appropriate value
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
                switch (type) {
                    case 'submit': type = ' type="submit"';
                    break;
                    case "reset": type = ' type="reset"';
                    break;
                    default: type = ' type="button"';
                }; //sets type to button if not specified as submit or reset.
                return `<button  id="${id}"${type}>${label}</button>`
                    });            
                    eleventyConfig.addShortcode("textarea", function(id, name, label) {
                        if (name == '') {
                            name = id;
                        }; //sets name to same value as id if left blank.
                        return `<div id="${id}-textarea-container">
                        <label for="${id}">${label}</label>
                        <textarea name="${name}" id="${id}"></textarea>
                        </div>`
                            });            
                    eleventyConfig.addShortcode("textInput", function(id, name, label, error, autocomplete, inputmode) {
                        var ariarequired = '';
                        var labelstar = '';
                        if (autocomplete != '') {
                            autocomplete = ' autocomplete="' + autocomplete + '"';
                        }; //leaves off autocomplete attribute if value is empty
                        if (inputmode != '') {
                            inputmode = ' inputmode="' + inputmode + '"';
                        }; //leaves off inputmode attribute if value is empty.
                        if (error != '') {
                            ariarequired = ' aria-required="true"';
                            labelstar = '<span aria-hidden="true">*</span>';
                            error = '<p class="form-error" id="' + id + '-error"><strong>Error:</strong> ' + error + '</p>';
                        }; //handles making field required if error value is not empty.
                        if (name == '') {
                            name = id;
                        }; //makes name attribute same as id if name value is left empty.
                        return `<div id="${id}-input-container">
                        <label for="${id}">${label}${labelstar}</label>
                        <input type="text" name="${name}" id="${id}"${autocomplete}${inputmode}${ariarequired}>
                        ${error}
                        </div>`
                            });                    
    return {        
            dir: {
            input: "src"
        }
    }
});