---
title: Contact
layout: layouts/base.njk
templateEngineOverride: njk,md
eleventyNavigation:
  key: Contact
  order: 4
---
to contact Justin, simply fill out this form. All fields marked with an asterisk are required.

{% formcontainer "contact-form", "contact", "post", "https://formspree.io/f/mnqleljw" %}

{% textInput "submitter-name", "submitter-name", "Name", "Please enter your name.", "name", "" %}

{% textInput "email-address", "_replyto", "Email Address", "Please enter a valid email address.", "email", "email" %}

{% textInput "subject", "_subject", "Subject", "Please enter a subject for your message.", "", "" %}

{% textarea "message", "message", "Your message to Justin","Please enter a message." %}

{% button "submit", "submit-btn", "Submit" %}

{% endformcontainer %}