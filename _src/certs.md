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
<script webc:type="js">
var output = '';
var listItemMarkup = [
  '<li><strong>',
  ':</strong> ',
  '</li>'];
for (cert of value.cert) {
  output += `<h3><a href="${cert.url}">${cert.name}</a></h3>`;
  if (cert.issued) {
    output+= `<ul>`;
    output += `${listItemMarkup[0]}Issued${listItemMarkup[1]}${cert.issued}${listItemMarkup[2]}`;
    if (cert.renewed) {
      output += `${listItemMarkup[0]}Renewed${listItemMarkup[1]}${cert.renewed}${listItemMarkup[2]}`;
    }
    if (cert.expires) {
      output += `${listItemMarkup[0]}Expires${listItemMarkup[1]}${cert.expires}${listItemMarkup[2]}`;
    }
    output += `</ul>`;
  }
}
output
</script>
</jy-acc>