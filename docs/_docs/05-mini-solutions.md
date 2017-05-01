---
layout: archive
title: "Mini Solutions Catalog"
permalink: /docs/mini-solutions/
author_profile: false
---

<div class="grid__wrapper">
  {% for post in site.solutions %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>