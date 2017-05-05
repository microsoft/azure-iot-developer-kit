---
layout: splash
permalink: /
title: "MXChip IoT Developer Kit"
title_sup: "Preview"
header:
  overlay_color: "#0c3f76"
  overlay_gradient: "120deg, #0c3f76, #159957"
  call_to_action:
    - label: "Get Started"
      url: "/docs/getting-started/"
    - label: "Get a Kit"
      url: "https://blogs.msdn.microsoft.com/iotdev/devkit-contact/"
  align: center
excerpt: 'Rapidly develop an IoT app using Microsoft Azure'
intro:
  - image_path: /assets/images/devkit-board-vector@2x.png
    image_width: 50%
    alt: "DevKit Board"
    title: "Build a Cloud Powered IoT App in Minutes"
    excerpt: 'The MXChip IoT Developer Kit (a.k.a DevKit) can be used to develop and prototype Internet of Things (IoT) solutions leveraging Microsoft Azure services. It includes an Arduino compatible board with rich peripherals and sensors, an open-source board package and a growing projects catalog.'
    url: "/docs/getting-started"
    btn_label: "Get Started"
    btn_class: "btn--inverse"
feature_row:
  - title: "Seamless Development Experience"
    excerpt: "Use [Visual Studio Code](https://code.visualstudio.com/) with [Arduino Extension](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino) to quickly build a full-fledged IoT application that integrates multiple services like Azure IoT Hub, Logic App and Cognitive Services. Our projects catalog has innovative samples to help you get started and build your own project."
    url: "/docs/projects"
    btn_label: "View Projects"
    btn_class: "btn--inverse"
  - title: "Powerful ARM Cortex-M Board with Rich Peripherals"
    excerpt: "SoC module combines the power of the ST Microelectronics [STM32F412](http://www.st.com/content/ccc/resource/technical/document/reference_manual/group0/4f/7b/2b/bd/04/b3/49/25/DM00180369/files/DM00180369.pdf/jcr:content/translations/en.DM00180369.pdf) at its core and Cypress [BCM43362](http://www.cypress.com/file/297991/download) for WiFi. The on-board peripherals include an OLED screen, headphone output, stereo microphone and abundant sensors like humidity & temperature, pressure, motion (accelerometer & gyroscope) and magnetometer."
    url: "http://www.mxchip.com/az3166"
    btn_label: "Hardware Specs"
    btn_class: "btn--inverse"
  - title: "Fully Compatible Arduino Board"
    excerpt: "All the cool things you can do with an Arduino can be done with the DevKit. It is targeted for developers to create and prototype IoT projects, using a low-power device, quickly and easily. There are 25 external GPIO pins on the edge connector of the board, allowing you to connect to external sensors and actuators."
    url: "#"
    btn_label: "Pin Breakouts"
    btn_class: "btn--inverse"
---

{% include feature_row id="intro" type="left" %}

{% include feature_row %}
