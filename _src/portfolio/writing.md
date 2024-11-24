---
title: Writing
layout: layouts/base.njk
templateEngineOverride: webc,md
eleventyNavigation:
  key: Writing
  parent: Portfolio
  order: 1
---
Below you will find a listing of articles Justin has written. To see other work Justin has done, check out the other sections of his [portfolio page](/portfolio/).
If you would like to have Justin write something for you, you can [contact him](/contact).

<jy-acc webc:for="(key, value) in pages.portfolio.writing" @level="2" :@label="value.publisher">
<script webc:type="js">
  `<link-list :@data="value.items"></link-list>`
</script>
</jy-acc>

Please note that Justin has no control over the accessibility of any links to third-party sites