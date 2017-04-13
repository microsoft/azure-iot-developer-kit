---
layout: default
title: {{ site.name }}
---

<div id="home">
  <section>
  <p>Microsoft Azure IoT Developer Kit (a.k.a DevKit) is used to develop and prototype Internet of Things (IoT) solutions leveraging on Microsoft Azure services. It includes an Arduino compatible board with rich peripherals and sensors, an open-source board package and a fast growing mini solution catalog.</p>
  
  <p>With DevKit, you can use Visual Studio Code with Arduino Extension to quickly (say in 5 minutes) build a full-fledged IoT application that integrates multiple services like Azure IoT Hub, Logic App and Cognitive Services.</p>
  
  <p>The DevKit board features ARM Cortex-M processors. At its core, it comes with a SoC module combines the power of the ST Microelectronics STM32F412 processor and and Cypress BCM43362 for WiFi. For on-board peripherals, it has an OLED screen, a headphone and speaker output, an stereo microphone and abundant of sensors such as humidity &amp; temperature, pressure, accelerometer &amp; gyroscope and magnetometer sensors.</p>
  </section>
  
  <h1>Updates</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>