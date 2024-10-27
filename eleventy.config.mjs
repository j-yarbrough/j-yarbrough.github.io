import markdownIt from "markdown-it";
import markdownItAttrs  from "markdown-it-attrs";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import embedEverything from "eleventy-plugin-embed-everything";
export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("src");
	eleventyConfig.addPlugin(pluginWebc);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(embedEverything);
    let options = {
		html: true,
		breaks: true,
		linkify: true,
	};
    eleventyConfig.setLibrary("md", markdownIt(options));
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAttrs));
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("resources");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addWatchTarget('css');
    eleventyConfig.addWatchTarget('resources');
    eleventyConfig.addWatchTarget('images');
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
};