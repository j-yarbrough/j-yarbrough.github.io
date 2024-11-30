---
title: Other Media
layout: layouts/base.njk
templateEngineOverride: webc,md
eleventyNavigation:
  key: Other Media
  parent: Portfolio
  order: 4
---
Below you will find a listing of videos and other media in which Justin has appeared. To see other work Justin has done, check out the other sections of his [portfolio page](/portfolio/).

If you would like Justin to  appear on your media project you can [contact him](/contact).

<div webc:nokeep webc:for="(key, value) in pages.portfolio.othermedia" >
<jy-acc @level="2" :@label="value.primarysec">
<p webc:if="value.slug" @text="value.slug"></p>
<sub-sec :@data="value.subsec"></sub-sec>
</jy-acc>
</div>
Please note that Justin has no control over the accessibility of any links to third-party sites