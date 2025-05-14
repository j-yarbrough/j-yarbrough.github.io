import markdownIt from "markdown-it";
import markdownItAttrs  from "markdown-it-attrs";
import pluginWebc from "@11ty/eleventy-plugin-webc";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import { IdAttributePlugin } from "@11ty/eleventy";
export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("_src");
	eleventyConfig.addPlugin(pluginWebc);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(IdAttributePlugin, {
        selector: "h2,h3,h4,h5,h6"
    });
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
    eleventyConfig.addWatchTarget('resources');
    eleventyConfig.addWatchTarget('images');
};