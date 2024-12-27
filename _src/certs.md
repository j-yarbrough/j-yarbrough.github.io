---
title: Certifications
layout: layouts/base.webc
templateEngineOverride: webc,md
eleventyNavigation:
  key: Certifications
  order: 2
---
Justin holds accessibility-related certifications from multiple organizations. You can find a list of these below.

<jy-acc webc:for="(key, value) in pages.certs" :@label="value.issuer" @level="2">
<dl>
<script webc:type="js">
var output= '';
for (cert of value.cert){
  output += `<dt><a href="${cert.url}">${cert.name}</a><dt>`;
  if  (cert.issued) {
    output += `<dd>Issued ${cert.issued}</dd>`
  } if (cert.renewed) {
    output += `<dd>Renewed ${cert.renewed}</dd>`;
  } if (cert.expires) {
    output += `<dd>Expires ${cert.expires}</dd>`;
  }
}
output
    </script>
  </dl>
</jy-acc>