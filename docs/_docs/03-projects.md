---
layout: archive
title: "Project Catalog"
permalink: /docs/projects/
author_profile: false
---

<h3>Official tutorials that guide you build and learn IoT empowered by Azure.</h3>



**Notice:** [Azure IoT Workbench](https://aka.ms/iot-workbench) is the new tool for developing on DevKit. If you are looking for old experience, you can still find it by clicking "**Previous version**".
{: .notice--warning}



<div class="grid__wrapper">

  {% assign projects = '' | split: '' %} {% comment %} Empty array {% endcomment %}

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

<h3>Community contributed tutorials. Kudos to our developers!</h3>

<div class="grid__wrapper">

  {% assign communities = '' | split: '' %} {% comment %} Empty array {% endcomment %}

  {% for community in site.communities %}
      
    {% comment %} Collect all the single page projects {% endcomment %}
    {% assign communities = communities | push: community %}

  {% endfor %}

  {% for post in communities %}
    {% include archive-single.html type="grid" %}
  {% endfor %}

</div>