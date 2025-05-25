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
<ul>
<script webc:type="js">
var output= '';
for (cert of value.cert){
  output += `<li><a href="${cert.url}">${cert.name}</a>`;
  if ((cert.issued) || (cert.expires) || (cert.renewed)) {
    output += '<ul>';
  if  (cert.issued) {
    output += `<li>Issued ${cert.issued}</li>`
  } if (cert.renewed) {
    output += `<li>Renewed ${cert.renewed}</li>`;
  } if (cert.expires) {
    output += `<li>Expires ${cert.expires}</li>`;
  }
  output += '</ul>';
  }
  output += '</li>';
}
output
    </script>
  </ul>
</jy-acc>