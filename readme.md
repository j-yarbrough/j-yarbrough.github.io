# Readme

## Purpose

This repo is for a personal website/portfolio and is built using [eleventy.](https://www.11ty.dev/)

GitHub Actions are used to build the site, which is contained in the "gh-pages" branch.

Issues are created for all changes and a branch is created from the issue. When dev is complete, changes are either merged into main immediately using a pull request or are scheduled using PR Scheduler.

## Redirects

To set up a redirect:

1. Create a new .md file
2. in the front matter, set the following:
    - title: The URL you wish to redirect to
    - layout: layouts/redirect.njk

## Component Short codes

This site is designed to use short codes as much as possible to componentize items. These are described below.

### Accordion

Paired short code is "accordion".

#### Arguments
- content: Section hidden by default. In between opening and closing code.
- level: Heading level for accordion. Simply enter a number.
- Label: Label for the accordion button.

### Form Container

Serves as form tags.

paired short code is "formcontainer"

#### Arguments

- content: Form contents, basically the form.
- id: ID value for the form container
- name: container's name attribute.
- method: form container's method attribute value.
- action: form container's action attribute value.

### Text Input

Standard single-line text input, can be customized with required, an error message, autocomplete, and inputmode attributes.

Standard short code is "textInput"

#### Arguments

- id: input's id attribute.
    - If required, same value will be used, with "-error" appended, for error message
    - Input container will be same value with "-field-container" appended.
- name: input's name attribute value.
    - if empty, will inherit id attribute value.
- label: Input's semantic and visual label.
- error: Text of error message if not valid.
    - If left empty, field will not be required.
- autocomplete: autocomplete attribute value, attribute will be left off if empty.
- inputmode: Input's inputmode attribute value, attribute will be left off if empty.

### Button

Standard button, type can be set.

Regular short code is "button"

#### Arguments

- type: Button's type id attribute value.
- id: button's id attribute value.
- label: Button's inner HTML.

### Textarea

Multi-line text input. Can be customized with name attribute and required.

Standard shortcode is "textarea"

#### Arguments

- id: textarea's id attribute.
    - Container div will have same id with "-textarea-container" appended.
- name: textarea's name attribute.
    - If empty, inherits id value.
- label: Programmatic and visual label.
- error: Error message to be displayed if input is empty.
    - if value is empty, field is not required.
    - Will add aesterisk, aria-required attribute if there is a non-empty value.

    ### Countdown

Short code is "countdown"

This creates a span showing the days, hours, minutes, and seconds until a given event. This is refreshed automatically using JS. Context for setting the time to count down to is explained below.

    #### Arguments

    * Time: Provided in the format "Mar 16, 2023 15:00:00 GMT -5"