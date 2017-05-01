---
layout: splash
permalink: /
header:
  overlay_color: "#0c3f76"
  overlay_gradient: "120deg, #0c3f76, #159957"
  call_to_action:
    - label: "Getting Started"
      url: "/docs/getting-started/"
    - label: "Get a Kit"
      url: "#get-a-kit"
  align: center
excerpt: 'Fast develop IoT app using Microsoft Azure'
intro:
  - image_path: /assets/images/devkit-board-vector@2x.png
    image_width: 50%
    alt: "DevKit Board"
    title: "Build cloud powered IoT app in minutes"
    excerpt: 'Microsoft Azure IoT Developer Kit (a.k.a DevKit) is used to develop and prototype Internet of Things (IoT) solutions leveraging on Microsoft Azure services. It includes an Arduino compatible board with rich peripherals and sensors, an open-source board package and a fast growing mini solution catalog.'
    url: "/docs/mini-solutions"
    btn_label: "View Mini Solutions"
    btn_class: "btn--inverse"
feature_row:
  - title: "Seamless Development Experience"
    excerpt: "Use [Visual Studio Code](https://code.visualstudio.com/) with [Arduino Extension](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.vscode-arduino) to quickly build a full-fledged IoT application that integrates multiple services like Azure IoT Hub, Logic App and Cognitive Services. And the Mini Solutions is an easy to get started sample catalog here to help you learn and build your own project."
  - title: "ARM Cortex-M with Rich Peripherals"
    excerpt: "SoC module combines the power of the ST Microelectronics [STM32F412](http://www.st.com/content/ccc/resource/technical/document/reference_manual/group0/4f/7b/2b/bd/04/b3/49/25/DM00180369/files/DM00180369.pdf/jcr:content/translations/en.DM00180369.pdf) at its core and and Cypress [BCM43362](http://www.cypress.com/file/297991/download) for WiFi. For on-board peripherals, it has an OLED screen, a headphone output, an stereo microphone and abundant of sensors such as humidity & temperature, pressure, accelerometer & gyroscope and magnetometer sensors."
  - title: "A Kit Fully Compatible with Arduino"
    excerpt: "Everything good you can do with Arduino can be done on the DevKit. It is targeted for developers to create and prototype low power IoT projects quickly and easily. There is 25 external pins on the edge connector of the board as GPIO can be used to connect to external sensors and actuators."
---

{% include feature_row id="intro" type="left" %}

{% include feature_row %}
