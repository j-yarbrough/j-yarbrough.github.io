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

<jy-acc webc:for="(key, value) in pages.portfolio.othermedia" @level="2" :@label="value.primarysec">
<p webc:if="value.slug" @text="value.slug"></p>
<script webc:type="js">
  var output = ``
  for (subsec of value.subsec) {
    output += `<h3>${subsec.publisher}</h3>`;
    output += `<ul>`;
    for (item of subsec.items) {
      output += `<li><strong><a href="${item.address}">${item.title}</a></strong><br>${item.desc}</li>`;
    }
    output += `</ul>`;
  }
  output
  </script>
</jy-acc>

Please note that Justin has no control over the accessibility of any links to third-party sites