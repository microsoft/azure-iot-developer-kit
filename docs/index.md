---
layout: default
title: {{ site.name }}
---

<div id="home">
  <section>
  <p>Microsoft Azure IoT Developer Kit (a.k.a DevKit) is used to develop and prototype Internet of Things (IoT) solutions leveraging on Microsoft Azure services. It includes an Arduino compatible board with rich peripherals and sensors, an open-source board package and a fast growing mini solution catalog.</p>
  
  <p>With DevKit, you can use <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> with <a href="https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino" target="_blank">Arduino Extension</a> to quickly build a full-fledged IoT application that integrates multiple services like Azure IoT Hub, Logic App and Cognitive Services.</p>
  
  <p>The DevKit board features ARM Cortex-M processors. At its core, it comes with a SoC module combines the power of the ST Microelectronics <a href="http://www.st.com/content/ccc/resource/technical/document/reference_manual/group0/4f/7b/2b/bd/04/b3/49/25/DM00180369/files/DM00180369.pdf/jcr:content/translations/en.DM00180369.pdf" target="_blank">STM32F412</a> processor and and Cypress <a href="http://www.cypress.com/file/297991/download" target="_blank">BCM43362</a> for WiFi. For on-board peripherals, it has an OLED screen, a headphone and speaker output, an stereo microphone and abundant of sensors such as humidity &amp; temperature, pressure, accelerometer &amp; gyroscope and magnetometer sensors.</p>
  </section>
  
  <h1>Updates</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>