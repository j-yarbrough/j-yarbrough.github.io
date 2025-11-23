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
    output += `<div role="list" class="cert-details">`;
  if  (cert.issued) {
    output += `<div class="cert-detail-item" role="listitem"><strong>Issued:</strong> ${cert.issued}</div>`
  } if (cert.renewed) {
    output += `<div class="cert-detail-item" role="listitem"><strong>Renewed:</strong> ${cert.renewed}</div>`;
  } if (cert.expires) {
    output += `<div class="cert-detail-item" role="listitem"><strong>Expires:</strong> ${cert.expires}</div>`;
  }
  output += '</div>';
  }
  if (cert.note) {
    output += `<p class="smaller">${cert.note}</p>`
  }
}
output
    </script>
</jy-acc>