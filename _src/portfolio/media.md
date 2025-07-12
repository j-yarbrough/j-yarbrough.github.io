---
title: Other Media
layout: layouts/base.webc
templateEngineOverride: webc,md
hasVideo: true
eleventyNavigation:
  key: Other Media
  parent: Portfolio
  order: 4
---
Below you will find a listing of videos and other media in which Justin has appeared. To see other work Justin has done, check out the other sections of his <a href="/portfolio">portfolio page</a>.

<div webc:nokeep webc:for="(key, value) in pages.portfolio.media" >
<jy-acc @level="2" :@label="value.mainsection">
<p webc:if="value.slug" @text="value.slug"></p>
<sub-sec :@data="value.subsec"></sub-sec>
</jy-acc>
</div>

Please note that Justin has no control over the accessibility of any links to third-party sites