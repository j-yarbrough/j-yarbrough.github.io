---
title: Contact
H1: Contact Justin
layout: layouts/base.njk
templateEngineOverride: njk,md
eleventyNavigation:
  key: Contact
  order: 7
---
to contact Justin, simply fill out this form. All fields marked with an asterisk are required.

{% formcontainer "contact-form", "contact", "post", "https://formspree.io/f/mnqleljw" %}

{% formgroup "2","Your information","submitter-info"%}

{% textInput "name", "name", "Name", "Please enter your name.", "", "name", "" %}

{% textInput "email-address", "email", "Email Address", "Please enter a valid email address.", "Justin will only use your email address to respond to your message.", "email", "email" %}

{% endformgroup %}

{% formgroup "2","Your Message","message-info" %}

{% textInput "subject", "subject", "Subject", "Please enter a subject for your message.", "", "", "" %}


{% textarea "msg", "msg", "Your message to Justin","Please enter a message." %}

{% endformgroup %}

{% button "Submit", "submit-form", "submit", "You may be prompted to complete a CAPTCHA if your submission is flagged as possible spam." %}

{% endformcontainer %}