---
layout: archive
title: "Projects Catalog"
permalink: /docs/projects/
author_profile: false
---

<div class="grid__wrapper">

  {% assign projects = site.emptyArray %}
  
  {% for project in site.projects %}
    
    {% comment %} Collect all the multi-part projects based on the presence of the part attribute of the file {% endcomment %}
    {% if project.part != nil and project.part == 1 %}
      {% assign projects = projects | push: project %}
      
    {% comment %} Collect all the single page projects {% endcomment %}
    {% elsif project.part == nil %}
      {% assign projects = projects | push: project %}

    {% endif %}

  {% endfor %}
  

  {% for post in projects %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
  
</div>