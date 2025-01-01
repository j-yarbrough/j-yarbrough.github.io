# Readme

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

- H1: Allows for the H1 of the page to be separate from the title of the page.
    - If H1 is in front matter, it will be used as the H1 text.
    - If no H1, then the title value will be used.
- noBreadcrumbs: true will exclude breadcrumbs from the page. Note breadcrumbs are not currently available in the base template, but this variable still exists in front matter since it may be brought back.

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

### Text input

Used for text inputs. Field will only be marked as required if error prop is used

- ``<text-input>``

Required:

- @label: Label for the input
- @name: name for the input, will also serve as ID

Optional props

- @error: Error message if field is required, input will be optional if this is not used.
- @helper: helper text for input.
- autocomplete
- inputmode

### Textarea

Textarea input, similar to text input

- <text-area>

Required items are same as text input. Error has same behavior as text input.

### Form Group

Sets up a group label

``<form-group>``

Attribute:

- @label: label for group

### Button

Serves as a button

``<form-button>``

Required Attributes:

- @type: Sets button type, submit, button, etc.
- @label: Text label for button

Additional optional ones:

- @aria-label: Aria label for button
- @aria-describedby: Allows to designate an aria-describedby. Value should be an ID

### Aria live region

Creates aria live region and includes handler script

``<aria-live>``

No attributes

### Figure caption

Creates a floating (except on mobile) figure caption for an image. Slot is used for caption.

``<figgy-cap>``

Required attributes:

- @src: source for image
- @alt: alt text for image

### Link list

Creates a ``<dl>`` for a list of links with descriptions

``<link-list>``

Required attributes:

- @data: Reference to data where these can be found. For syntax, check out some of the ffiles in ``/_src/_data/`` for examples. I highly recommend leaning on that to create the list.