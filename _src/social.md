---
title: Social Media Links
layout: layouts/base.webc
templateEngineOverride: webc,md
noBreadcrumbs: true
---
Justin can be found on the following social media platforms:
<ul>
<li class="more-line-height" webc:for="(key, value) in social">
<a :href="value.url" :rel="value.rel" @text="value.text"></a>
</li>
</ul>