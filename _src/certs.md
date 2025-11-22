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
var output= '';
for (cert of value.cert){
  output += `<h3><a href="${cert.url}">${cert.name}</a></h3>`;
  var itemCount = 0;
  if (cert.issued) {itemCount++};
  if (cert.renewed) {itemCount++};
  if (cert.expires) {itemCount++};
  if (itemCount != 0) {
    output += `<ul class="cert-details cert-item-count-${itemCount}">`;
  if  (cert.issued) {
    output += `<li>Issued ${cert.issued}</li>`
  } if (cert.renewed) {
    output += `<li>Renewed ${cert.renewed}</li>`;
  } if (cert.expires) {
    output += `<li>Expires ${cert.expires}</li>`;
  }
  output += '</ul>';
  }
}
output
    </script>
</jy-acc>