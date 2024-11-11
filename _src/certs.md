---
title: Certifications
layout: layouts/base.njk
templateEngineOverride: webc,md
eleventyNavigation:
  key: Certifications
  order: 2
---
Justin holds accessibility-related certifications from multiple organizations. You can find a list of these below.

<jy-acc @level="2" @label="International Association of Accessibility Professionals">
<ul>
<li webc:for="(key, value) in pages.certs.iaap">
<a :href="value.url" @text="value.name"></a>
<ul>
<li webc:if="value.issued">Issued <span webc:nokeep @text="value.issued"></span></li>
<li webc:if="value.renewed">Last renewed <span webc:nokeep @text="value.renewed"></span></li>
<li webc:if="value.expires">Expires <span webc:nokeep @text="value.expires"></span></li>
</ul>
</li>
</ul>
</jy-acc>

<jy-acc @level="2" @label="NVAccess">
<ul>
<li webc:for="(key, value) in pages.certs.nvaccess">
<a :href="value.url" @text="value.name"></a>
<ul>
<li webc:if="value.issued">Issued <span webc:nokeep @text="value.issued"></span></li>
<li webc:if="value.renewed">Last renewed <span webc:nokeep @text="value.renewed"></span></li>
<li webc:if="value.expires">Expires <span webc:nokeep @text="value.expires"></span></li>
</ul>
</li>
</ul>
</jy-acc>

<jy-acc @level="2" @label="Freedom Scientific">
<ul>
<li webc:for="(key, value) in pages.certs.fs">
<a :href="value.url" @text="value.name"></a>
<ul>
<li webc:if="value.issued">Issued <span webc:nokeep @text="value.issued"></span></li>
<li webc:if="value.renewed">Last renewed <span webc:nokeep @text="value.renewed"></span></li>
<li webc:if="value.expires">Expires <span webc:nokeep @text="value.expires"></span></li>
</ul>
</li>
</ul>
</jy-acc>