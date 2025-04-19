---
title: Alt Text and Social Media
layout: layouts/base.webc
templateEngineOverride: webc, md
eleventyNavigation:
  key: Alt Text and Social Media
  parent: Writing
---
Social media has a great ability to connect us. Without it, I would have never found all the wonderful people in the blindness community on Twitter that have had such a positive impact on my life. Heck, you probably found this post on some social media platform.

The problem for blind people is that social media can seem pretty photo-intensive, leaving blind people to feel like they're missing out. In the last few years, though, major social media platforms like Twitter, Facebook, and Instagram have been introducing features allowing people to add alt text to pictures, allowing people sharing content to provide a more inclusive experience.

<auto-toc></auto-toc>

## What is Alt Text?

Simply put, alt text provides a text-based alternative to graphics on the web. Screen readers will read the alt text and identify the item as a graphic when encountered. Additionally, many browsers will display the alt text for a graphic when it's unable to load the graphic. This can happen because of a slow internet connections or being unable to locate the image.

## Writing Alt Text

Writing good alt text can be a challenge. In my day job as an accessibility coach, I describe writing alt text as an art rather than a science. While there are a few guiding principles based off accessibility best practices, there's also a lot of wiggle room. The following tips are based off a combination of best practices and my own personal taste:

- Be concise. Screen readers take time to read things. How long depends on that person's screen reader settings. An experienced screen reader user like myself may have theirs set to talk really fast, whereas a novice user is likely to have theirs set at a more conversational pace.
- Don't describe every detail. Remember back in elementary school when you'd be asked to read something and determine what the main idea of the passage was? Do something similar with your images and describe what you'd like someone to take from it.
- Avoid redundancies. If something's in the body of your post, it probably doesn't need to be in the alt text. Additionally, remember how screen readers work. Since they will identify an item as a graphic when they encounter it, you don't need to say so in the alt text. It's fine to say something like "Picture shows" if you're describing an image in nearby text content, but it's just repetitive when it's in the alt text itself.

Writing good alt text can be a challenge and may seem hard at first. Like anything else, though, it gets easier with practice. Over time you will figure out what works best for you.

## How do I add alt text on social media?

The folks over at [Accessible Social](https://www.accessible-social.com/) have a guide on [how to add alt text on multiple platforms.](https://www.accessible-social.com/images-and-visuals/platform-image-accessibility)

## Examples

Here are a few examples from [We Rate Dogs](https://bsky.app/profile/weratedogs.com) on Bluesky. They do a great job of describing the images, as well as having a little fun with the descriptions and occasionally including an easter egg in their descriptions. To view the alt text for a skeet, just click the button below the embedded skeet and a modal dialog will open with the alt text. You can hit the escape key or click the close button to close the dialog.

<e-box @level="3" @label="Example 1">

https://bsky.app/profile/weratedogs.com/post/3lif5s6znwk2n

<modal-dialog @label="Alt text for first example">

a little brown pup in a gray hoodie stands confidently on a skateboard with red and white wheels. he’s smiling wide, presumably because he just landed a sick kickflip.
</modal-dialog>

</e-box>

<e-box @level="3" @label="Example 2">

https://bsky.app/profile/weratedogs.com/post/3lmfzyh6rms2l

<modal-dialog @label="Alt text for second example">

a gray, curly sheep-like creature stands over us and looks down at us. their ears stick out to either side, and they have a beautiful soft glow about them. it is very possible this sheep is actually a standard poodle.

</modal-dialog>

</e-box>

<e-box @level="3" @label="Example 3">

https://bsky.app/profile/weratedogs.com/post/3lmzrfnypos2w

<modal-dialog @label="Alt text for third example">

a golden retriever pokes his head around a corner in a hallway and looks up at the camera with a stuffed duck toy in his mouth. he has a lump squarely in the middle of the top of his head.

</modal-dialog>

</e-box>

## Conclusion

With the advent of alt text support on major social media platforms, it's easier than ever to be more inclusive on those platforms. With just a little extra effort, it's possible to ensure blind people aren't left wondering what's in a picture.

## More Resources

<link-list :@data="pages.writing.altTextResources"></link-list>