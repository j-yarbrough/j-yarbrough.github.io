---
title: Podcasts
layout: layouts/base.njk
templateEngineOverride: webc,md
eleventyNavigation:
  key: Podcasts
  parent: Portfolio
  order: 3
---
Below you will find a listing of podcasts in which Justin has appeared. To see other work Justin has done, check out the other sections of his [portfolio page](/portfolio/).

If you would like Justin to appear on your podcast you can [contact him](/contact).

<jy-acc webc:for="(key, value) in pages.portfolio.podcasts" @level="2" :@label="value.publisher">
  <link-list :@data="value.items"></link-list>
</jy-acc>

Please note that Justin has no control over the accessibility of any links to third-party sites