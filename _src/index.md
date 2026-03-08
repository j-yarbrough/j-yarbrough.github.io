---
title: Home
H1: About Justin
layout: layouts/base.webc
templateEngineOverride: webc,md
eleventyNavigation:
  key: Home
  order: 0
---
<figgy-cap @src="/images/justin-mug.jpg" @alt="Mug shot of Justin Yarbrough, a white man with a shaved head and goatee wearing sunglasses.">Justin Yarbrough</figgy-cap>

Justin Yarbrough is a blind digital accessibility coach, writer, and speaker living in the Austin, Texas area.

## Experience

Justin has worked in digital accessibility since 2017 in higher education, consulting, and currently works in finance at a large bank. Throughout his time working in the field, Justin has leveraged his strong technical knowledge, deep understanding of accessibility guidelines, and lived experience as a blind screen reader user to help others understand the importance of digital accessibility in the impact it has on people with disabilities. He primarily works with teams to help ensure digital properties are build with accessibility in mind from the start. He also volunteers his time to causes that further accessibility, including [Knowbility](https://knowbility.org/)'s annual [Accessibility Internet Rally](https://knowbility.org/programs/air). [Read more...](/experience){aria-label="Read more about Justin's experience"}

## Certifications

Justin holds certifications from the International Association of Accessibility Professionals, Freedom Scientific, and NVAccess.  [Read more...](/certs/){aria-label="Read more about Justin's certifications}

## Portfolio

Justin has written articles about accessibility-related topics for multiple publications, including [Nature](https://www.nature.com/), [PaxEx.aero](https://paxex.aero), and [Runway Girl](https://runwaygirl.com). He has also appeared as a guest on podcasts to discuss these topics and spoken about them at conferences such as Axe-Con and AccessU. [Read more...](/portfolio/){aria-label="Read more about Justin's portfolio"}

## Personal Life

In his spare time, Justin enjoys audiobooks, sports, and traveling. He lives with his wife, three cats, and two dogs.

## Contact Justin

To contact Justin, fill out the [contact form](/contact).

## Connect on Social Media

You can connect with Justin on the following social media networks:

<ul class="more-line-height">
<!---Loop to build list for all social media--->
<li webc:for="(key, value) in social">
<a :href="value.url" :rel="value.rel" @text="value.text"></a>
</li>
</ul>