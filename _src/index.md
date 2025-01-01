---
title: Home
H1: About Justin
layout: layouts/base.webc
templateEngineOverride: webc,md
noBreadcrumbs: true
eleventyNavigation:
  key: Home
  order: 0
---
<figgy-cap @src="/images/justin-mug.jpg" @alt="Mug shot of Justin Yarbrough, a white man with a shaved head and goatee wearing sunglasses.">Justin Yarbrough</figgy-cap>

Justin Yarbrough, CPWA, is a blind digital accessibility specialist, writer, and speaker living in the Austin, Texas area.

## Work

Justin has worked in digital accessibility since 2017 in higher education, consulting, and currently works in finance at a large bank. Throughout his time working in the field, Justin has leveraged his experience as a blind screen reader user to help others understand the importance of digital accessibility in the impact it has on people with disabilities. He primarily works with teams to help ensure digital properties are build with accessibility in mind from the start. [Read more...](/work/){aria-label="Read more about justin's work in accessibility"}
## Certifications

Justin holds certifications from the International Association of Accessibility Professionals, Freedom Scientific, and NVAccess.  [Read more...](/certs/){aria-label="Read more about Justin's certifications"}

## Portfolio

Justin has written articles on accessibility-related topics for multiple publications, including Nature and Runway Girl Network. He has also appeared as a guest on podcasts to discuss these topics and spoken about them at conferences such as Axe-Con and AccessU. [Read more...](/portfolio/){aria-label="Read more about Justin's portfolio"}

## Personal Life

In his spare time, Justin enjoys audiobooks, sports, and traveling. He lives with his wife Jennifer, dog Quinn, and cats Sam, Dean, and Misha.

## Contact Justin

To contact Justin, fill out the [contact form](/contact).

## Connect on Social Media

You can connect with Justin on the following social media networks:

<ul>
<!---Loop to build list for all social media--->
<li class="more-line-height" webc:for="(key, value) in social">
<a :href="value.url" :rel="value.rel" @text="value.text"></a>
</li>
</ul>