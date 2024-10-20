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
module.exports = async function (eleventyConfig) {
	const { EleventyRenderPlugin } = await import("@11ty/eleventy");

	eleventyConfig.addPlugin(EleventyRenderPlugin);
};
module.exports = (function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(embedEverything);
    eleventyConfig.addPlugin(pluginWebc);
    eleventyConfig.setLibrary('md', markdownLib);
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("resources");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addWatchTarget('css');
    eleventyConfig.addWatchTarget('resources');
    eleventyConfig.addWatchTarget('images');
                            eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    return {        
            dir: {
            input: "src"
        }
    }
});
