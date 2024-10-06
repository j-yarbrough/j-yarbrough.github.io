# Readme

## Purpose

This repo is for a personal website/portfolio and is built using [eleventy.](https://www.11ty.dev/)

## Typical workflow

- Issues are logged for to-do items
- Changes are created in their own branches and then merged via pull request. If a PR closes an issue, this will be noted in comments of the PR with "closes #123" where 123 would be the number for the issue. This will automatically close the issue when the PR is merged.
- When PR is merged to main, GitHub actions will perform a build and push those changes to the "gh-pages" branch, which serves the site on GitHub Pages.

## Redirects

To set up a redirect:

1. Create a new .md file
2. in the front matter, set the following:
    - title: The URL you wish to redirect to
    - layout: layouts/redirect.njk

## Template variations

There are template variations that can be automatically used based on front matter set in the documents. The front value variables are as follows:

- H1: Allows for the H1 of the page to be separate from the title of the page.
    - If H1 is in front matter, it will be used as the H1 text.
    - If no H1, then the title value will be used.
- includeBreadcrumbs: false will exclude breadcrumbs from the page.

## Components and Short Codes

This site is currently being transitioned from using short codes for all componentized items to .webc components.

## .webc components

All .webc components can be found in the _components folder at the root of the project.

### Accordion

Two versions of this currently exist:

- <jy-accordion-p> creates an accordion with no heading level for the button
- <jy-accordion-2> will treat the button as an h2

**Important:** Each variation requires a @label attribute to designate the visual label and accessible name for the accordion button. Example: <jy-acc-2 @label="Accordion Label"></jy-accordion-2>

### Ebox

Serves as an emphasis box to highlight content. Only one variation:

- <jy-ebox>

### Table of Contents

Will insert a table of contents, displaying a list of all h2's on a page with in-page links Only one variation:

- <jy-toc>

**Note:** TOC list is not built as part of the 11ty build but is built using client-side JS.

## Short codes

These will be phased out when Justin gets to them, but the ones listed are still used.

#### Form Container

Serves as form tags.

paired short code is "formcontainer"

**Arguments:**

- content: Form contents, basically the form.
- id: ID value for the form container
- name: container's name attribute.
- method: form container's method attribute value.
- action: form container's action attribute value.

#### formgroup

Paired short code to create a group label for a form

Paired short code is "formgroup"

**Arguments:**

- content: The content of the group
- hlevel: Heading level for the label, enter number between 1 and 6.
- Label: The text of the label.
- id: Id attribute to be used.

#### Text Input

Standard single-line text input, can be customized with required, an error message, autocomplete, and inputmode attributes.

Standard short code is "textInput"

**Arguments:**

- id: input's id attribute.
    - If required, same value will be used, with "-error" appended, for error message
    - Input container will be same value with "-field-container" appended.
- name: input's name attribute value.
    - if empty, will inherit id attribute value.
- label: Input's semantic and visual label.
- error: Text of error message if not valid.
    - If left empty, field will not be required.
- autocomplete: autocomplete attribute value, attribute will be left off if empty.
- Helper Text: Helper text that will appear below field and be programmatically associated with aria-describedby. Will be left off if this is blank.
- inputmode: Input's inputmode attribute value, attribute will be left off if empty.

#### Button

Standard button, type can be set.

Regular short code is "button"

**Arguments:**

- type: Button's type attribute.
    - If not set to submit or reset will default to button.
- id: button stack's id attribute value.
- label: Button's inner HTML.
- Helper Text: Any helper text with the button. Left out if this argument is empty. Will display helper text below button and programmatically associate it to the button with aria-describedby.

### Textarea

Multi-line text input. Can be customized with name attribute and required.

Standard shortcode is "textarea"

**Arguments:**

- id: textarea's id attribute.
    - Container div will have same id with "-textarea-container" appended.
- name: textarea's name attribute.
    - If empty, inherits id value.
- label: Programmatic and visual label.
- error: Error message to be displayed if input is empty.
    - if value is empty, field is not required.
    - Will add aesterisk, aria-required attribute if there is a non-empty value.