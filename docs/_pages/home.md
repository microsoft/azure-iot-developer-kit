---
layout: new-home
permalink: /
title: "An all-in-one IoT kit built for the cloud"
benefits_content:
  - title: "Record-breaking Performance"
    url: https://aka.ms/iot-devkit-purchase
    icon: "icon puzzle"
    content: "Wifi, OLED display, headphone, microphone, sensors like temperature, humidity, motion, pressure, you will love how much time and money you save to build your best IoT project."
    more_content: "Learn more about IoT DevKit hardware spec"
  - title: "Simplify Development"
    url: /docs/get-started/
    icon: "icon vscode"
    content: "Visual Studio Code is lightweight and your goto editor of choice. It is your all-in-one tool from coding the first line to deploying to the cloud."
    more_content: "Learn more about the one-click installation"
  - title: "Cloud Empowers Your IoT Solutions"
    url: /docs/projects/
    icon: "icon cloud"
    content: "Visual Studio Code is lightweight and your goto editor of choice. It is your all-in-one tool from coding the first line to deploying to the cloud."
    more_content: "Learn more about projects using Azure services"
comments_content:
  - words: "This eliminates the need to have electronics knowledge and the need to do any wiring or soldering in order to get started prototyping IoT solutions."
    photo: assets/images/testimony-chris-pietschmann.jpg
    name: Chris Pietschmann
    title: BuildAzure.com
  - words: "The sample code included scripts taking advantage of Visual Studio Code’s built-in terminal, so I didn’t have to leave my IDE to use the Azure Portal."
    photo: assets/images/testimony-simon-bisson.jpg
    name: Simon Bisson
    title: InfoWorld
  - words: "Getting excited about this awesome new product from @MicrosoftIoT build a #Cloud powered #IoT app in mins!"
    photo: assets/images/testimony-sciencescope.jpg
    name: ScienceScope
---
<div id="nav">
  <span class="title">IoT DevKit</span>
  <input type="checkbox" id="menu-switch">
  <label class="menu-switch" for="menu-switch"></label>
  <span class="menu">
    <label class="menu-switch" for="menu-switch"></label>
    <a href="https://aka.ms/devkit/tutorial/start" class="item">Get Started</a>
    <a href="{{ site.baseurl }}/docs/projects/" class="item">Docs</a>
    <a href="{{ site.baseurl }}/docs/projects/" class="item">Projects</a>
    <span class="item dropdown">
      <input type="checkbox" />
      <span class="inner-text">Tools</span>
      <ul class="dropdown-list">
        <li class="dropdown-item"><a href="https://aka.ms/azure-iot-tools">Azure IoT Tools</a></li>
        <li class="dropdown-item"><a href="https://aka.ms/iot-workbench">Azure IoT Device Workbench</a></li>
        <li class="dropdown-item"><a href="https://aka.ms/iot-devkit-simulator">MXChip IoT DevKit Simulator</a></li>
      </ul>
    </span>
    <a href="https://devblogs.microsoft.com/iotdev/" class="item">Blog</a>
    <a href="{{ site.baseurl }}/versions/" class="version">V1.6.2</a>
  </span>
</div>

<div class="header">
  <div class="inner">
    <div class="content">
      <h1>A<span id="typing">n all-in-one</span> IoT kit</h1>
      <h1>built for the cloud</h1>
      <div class="description">All the seneors and parts you love, no soldering needed. Welcome to cloud IoT
        development.</div>
      <div class="button-group">
      <a href="https://aka.ms/iot-devkit-purchase">
        <button class="btn primary"><span>Get a Kit</span></button>
      </a>
      <a href="{{ site.baseurl }}/docs/projects/">
        <button class="btn outline"><span>Project Catalog</span></button>
      </a>
      </div>
      <div class="devkit">
        <input type="checkbox">
        <div class="back"></div>
        <div class="front"></div>
      </div>
      <a class="certified"
        href="https://catalog.azureiotsolutions.com/details?title=MXChip-IoT-DevKit&source=home-page"
        target="_blank"></a>
    </div>
  </div>
</div>

<div class="notification">
  <div class="inner">
    <span class="badge orange" data-text="What's New"></span>
    8/23: Learn connect the DevKit to Azure IoT Central application within minutes via IoT Plug and Play &emsp; <a href="https://docs.microsoft.com/en-us/azure/iot-central/howto-connect-devkit-pnp">IoT Plug and Play</a>
  </div>
</div>

<div class="benefits">
  <div class="inner">
    <h2>Benefits</h2>
    <div class="details">
      {% for item in page.benefits_content %}
        {% if item.url contains 'http' %}
          {% assign domain = '' %}
        {% else %}
          {% assign domain = site.baseurl %}
        {% endif %}
        <div class="item">
          <div class="{{ item.icon }}"></div>
          <h3>{{ item.title }}</h3>
          <div class="content">{{ item.content }}</div>
          <div class="more">
            <a href="{{ domain }}{{ item.url }}">{{ item.more_content }}</a>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div class="feedbacks">
  <div class="inner">
    <!-- <h2>Testimonial</h2> -->
    <div class="slider-outer">
      <input type="radio" id="feedback1" name="feedback-slider">
      <input type="radio" id="feedback2" name="feedback-slider" checked>
      <input type="radio" id="feedback3" name="feedback-slider">
      <div class="slider">
      {% for item in page.comments_content %}
        <div class="talk-box">
          <div class="words">{{ item.words }}</div>
          <div class="author">
            <img src="{{ item.photo }}">
            <div class="info">
              <div class="name">{{ item.name }}</div>
              <div class="org">{{ item.tittle }}</div>
            </div>
          </div>
        </div>
      {% endfor %}
      </div>
      <div class="arrow">
        <label for="feedback1" class="left"></label>
        <label for="feedback1" class="right"></label>
        <label for="feedback2" class="left"></label>
        <label for="feedback2" class="right"></label>
        <label for="feedback3" class="left"></label>
        <label for="feedback3" class="right"></label>
      </div>
    </div>
  </div>
</div>

<div class="environment">
  <div class="inner">
    <h2>Integrated Development Environment</h2>
    <div class="subtitle">
      Makes it easy to code, build, deploy and debug on Visual Studio Code
    </div>
    <div class="extension">
      <img src="assets/images/pack.png" class="icon">
      <div class="info">
        <div class="title"><strong>Azure IoT Tools</strong></div>
        <div class="meta">
          <span class="publisher">Microsoft</span>
          <span class="installs">9,246 installs</span>
          <span class="downloads">14,014 downloads</span>
          <span class="star star5">(1)</span>
          <span class="free">Free</span>
        </div>
        <div class="description">
          The ultimate collection of extensions for working with Azure IoT in VS Code!
        </div>
        <div class="button">
          <button class="btn primary"><span>View more</span></button>
        </div>
      </div>
    </div>
    <h3>Sample projects for development</h3>
    <div class="gallery">
      <div class="item">
        <div class="cover" style="background-image: url(assets/images/projects-devkit-get-started-th.jpg)"></div>
        <div class="title">Get Started</div>
        <div class="description">Send sensor data from DevKit to Azure IoTHub.</div>
        <div class="services"><span class="iothub"></span></div>
      </div>
      <div class="item">
        <div class="cover" style="background-image: url(assets/images/projects-remote-monitoring-th.jpg)"></div>
        <div class="title">Remote Monitoring</div>
        <div class="description">Visualize sensors status on IoT DevKit using Azure IoT Remote Monitoring solution accelerator.</div>
        <div class="services"><span class="suite"></span></div>
      </div>
      <div class="item">
        <div class="cover" style="background-image: url(assets/images/projects-devkit-dictionary.png)"></div>
        <div class="title">IoT Devkit Dictionary</div>
        <div class="description">Learn how to configure DevKit to use Azure Speech Service and Oxford dictionaries API.</div>
        <div class="services"><span class="iothub"></span><span class="cognitive"></span></div>
      </div>
    </div>
  </div>
</div>

<div class="ready">
  <div class="inner">
    <h2>Ready to Get Started?</h2>
    <div class="moto">Build your own IoT application with Azure and Visual Studio Code helped today.</div>
    <div class="button-group">
      <button class="btn primary"><span>Get a Kit</span></button>
      <button class="btn outline"><span>Project Catalog</span></button>
    </div>
    <div class="simulator">or <a href="#">play with simulator first</a></div>
  </div>
</div>

<div class="community">
  <div class="inner">
    <!-- <h2>Community</h2> -->
    <div class="list">
      <div class="item">IoT DevKit:<a href="#">FAQ</a><a href="#" class="github">GITHUB</a><a href="#" class="gitter devkit"></a></div>
      <div class="item">IoT Device Workbench:<a href="#" class="github">GITHUB</a><a href="#" class="gitter workbench"></a></div>
    </div>
  </div>
</div>

<div class="footer">
  <div class="social">
    FOLLOW: <a href="#" class="github">GITHUB</a><a href="#" class="feed">FEED</a>
  </div>
  <div class="copyright">
    Copyright &copy; 2019 Microsoft Corp.
  </div>
</div>
