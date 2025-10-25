# Readme

Last updated October 25, 2025

## Purpose

This repo is for a personal website/portfolio and is built using [eleventy.](https://www.11ty.dev/)

## Typical workflow

- Issues are logged for to-do items
- Changes are created in their own branches and then merged via pull request. If a PR closes an issue, this will be noted in comments of the PR with "closes #123" where 123 would be the number for the issue. This will automatically close the issue when the PR is merged.
- When PR is merged to main, GitHub actions will perform a build and push those changes to the "gh-pages" branch, which serves the site on GitHub Pages.
- A build will also be triggered at midnight US Central time (GMT -6) to update the copyright year on all pages.

## Redirects

To set up a redirect:

1. Create a new .md file
2. in the front matter, set the following:
    - redirectURL: The URL you wish to redirect to
    - layout: layouts/redirect.njk

## Template variations

There are template variations that can be automatically used based on front matter set in the documents. The front value variables are as follows:

- ``H1``: Allows for the H1 of the page to be separate from the title of the page.
    - If H1 is in front matter, it will be used as the H1 text.
    - If no H1, then the title value will be used.
- ``noBreadcrumbs`` true will exclude breadcrumbs from the page. Note breadcrumbs are not currently available in the base template, but this variable still exists in front matter since it may be brought back.
- ``hasVideo`` required if audio/video embeds will be on the page for AblePlayer to work.
- ``hasAriaLive`` must be set to true for the aria-live component to be included on the page

## .webc components

All .webc components can be found in the _components folder at the root of the project. Components take advantage of CSS/JS bundling where applicable.

Attributes/properties marked as required will throw build errors if missing.

### Accordion

Should be self-explanitory...

- ``<jy-acc>``

Required prop:

- @label: Provides a label for the accordion 

Optional prop:

- @level: Sets a heading level. Will render as a div if value is not set as 2-6.provided or value is invalid.

### Modal dialog

Serves as a modal dialog, leaning heavily on the ``<dialog>`` element's native behaviors.

- ``<modal-dialog>``

Required prop:

` @label: Serves as label for trigger button and h1 for modal. Will throw error if not included.

### Ebox

Serves as an emphasis box to highlight content. 

- ``<e-box>``

Ebox has an optional heading at the top of the container. If no heading is desired, props can be left out. Note that props must be used together, will throw an error if only one is included.

- @label: heading for ebox
- @level:heading level, must be set as 2-6. Will throw error if invalid value.

### Table of Contents

Will insert a table of contents, displaying a list of all h2's on a page with in-page links Only one variation:

- ``<auto-toc>``

**Note:** TOC list is not built as part of the 11ty build but is built using client-side JS.

### Form wrapper

Wrapper for contact form

- ``<form-wrapper>``

Attributes, all for form tag:

- @id: id for wrapper
- @name: name for wrapper
- @method: set method
@action: set action

### Form inputs

This covers all form input variants.

Note that the field label must be included as the inner text for the component.
\

- ``<text-input>`` for standard inputs
- ``<email-input>`` for emails. Forces inputmode="email" on the field and extra validation logic on submit when used in conjunction with the form wrapper.
- ``<text-area>`` for multi-line inputs

Required:

- @name: name for the input.

Optional props

- @required: any value for attribute can be used, will mark field as required and include it in on submit validation if used as child of ``<form-wrapper>``
- @helper: helper text for input.
- @autocomplete allows you to set an autocomplete token for text and email variants

### Form Group

Sets up a group label

``<form-group>``

Attribute:

- @label: label for group

### Aria live region

Creates aria live region and includes handler script

``<aria-live>``

No attributesm but ``hasarialive`` must be set to true on the page's front matter for this to work.

### Figure caption

Creates a floating (except on mobile) figure caption for an image. Slot is used for caption.

``<figgy-cap>``

Required attributes:

- @src: source for image
- @alt: alt text for image

### Link list

Creates an unordered list of links with descriptions and optional YouTube embeds

``<link-list>``

Required attributes:

- @data: Reference to data where these can be found. For syntax, check out some of the ffiles in ``/_src/_data/`` for examples. I highly recommend leaning on that to create the list.

### YouTube embeds with Able Player

Sets up all the HTML needed to create a YouTube embed overlaid with Able Player

``hasVideo`` must be set to true in the page's front matter for this to work

``<yt-embed>``

Required attribute:

- @yt: URL for the YouTube video you're looking to embed.