---
title: Contact
H1: Contact Justin
hasAriaLive: true
layout: layouts/base.njk
templateEngineOverride: webc,md
eleventyNavigation:
  key: Contact
  order: 4
---
To contact Justin, all you need to do is fill out this form. All fields are required and all responses will be sent to the email address provided unless you specify another preferred contact method in your message.

<form-wrapper>

<text-input @name="name" @autocomplete="name" @label="Name" @error="Please enter a name"></text-input>

<text-input @@name="email" @autocomplete="email" @label="Email Address" @inputmode="email" @error="Please enter a valid email address such as &quot;name@example.com&quot;"></text-input>

<text-input @name="subject" @label="Subject" @error="Please enter a subject for your message"></text-input>

<text-area @name="msg" @label="Your message to Justin" @error="Please enter a message for Justin"></text-area>

</form-wrapper>