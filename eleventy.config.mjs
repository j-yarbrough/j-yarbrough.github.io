import markdownIt from "markdown-it";
import markdownItAttrs  from "markdown-it-attrs";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { EleventyRenderPlugin } from "@11ty/eleventy";
export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("_src");
	eleventyConfig.addPlugin(pluginWebc);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    let options = {
		html: true,
		breaks: true,
		linkify: true,
	};
    eleventyConfig.setLibrary("md", markdownIt(options));
    eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAttrs));
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPassthroughCopy("resources");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("build");
    eleventyConfig.addPassthroughCopy("button-icon");
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addPassthroughCopy("translations");
    eleventyConfig.addPassthroughCopy("license");
    eleventyConfig.addWatchTarget('images');
};