---
title: Work Experience
layout: layouts/base.webc
templateEngineOverride: webc,md
eleventyNavigation:
  key: Work Experience
  order: 1
---
Since Justin began working in digital accessibility in 2017, he has leveraged his experience as a blind screen reader user to drive home the importance of building accessible experiences from the start in finance, higher education, and consulting settings. More information on Justin’s work history can be found on [Justin’s LinkedIn profile](https://www.linkedin.com/in/justin-yarbrough/) or you can [contact him](/contact) with any questions.

<jy-acc webc:for="(key, value) in pages.work" :@label="value.employer" @level="2">
<script webc:type="js">
var content = '';
for (job of value.jobs) {
  content += `<h3>${job.jobTitle}</h3>`;
  content += `<p>${job.started} to ${job.ended}`;
  if (job.duties) {
    content += `<ul>`;
    for (duty of job.duties) {
      content += `<li>${duty}</li>`;
    }
    content +=`</ul>`;
  }
}
content
  </script>
</jy-acc>