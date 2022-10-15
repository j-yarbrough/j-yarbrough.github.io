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
    eleventyConfig.addPairedNunjucksShortcode("accordion", function(content, level, label) {
        return `<h${level}  class="accordion-header"><button class="accordion-button" aria-expanded="false"><span class="accordion-indicator" aria-hidden="true">&plus;&nbsp;</span>
        ${label}
        </button></h${level}>
<section aria-label="${label}" class="accordion-panel">
${content}
</section>`
    });
    return {

        dir: {
            input: "src",
        }
    }
});