function typing(index, step) {
  const features = [
    ' WiFi',
    'n OLED display',
    ' headphone',
    ' microphone',
    ' temperature',
    ' humidity',
    ' motion',
    ' pressure',
    'n all-in-one'
  ];
  const length = features[index].length
  const content = features[index].substr(0, length - Math.abs(step - length));
  document.getElementById('typing').innerHTML = content.replace(/\s/g, '&nbsp;');
  let timeout = 100;
  if (step === length) {
    timeout = 2000;
  } else if (step > length) {
    timeout = 50;
  }

  // No loop
  if (index === features.length - 1 && step === length) {
    document.getElementById('typing').className = 'no-cursor';
    return;
  }

  step++;
  if(step > length * 2 + 1) {
    step = 0;
    index++;
  }
  // if (index >= features.length) {
  //   index = 0;
  // }
  setTimeout(() => {
    typing(index, step);
  }, timeout);
}

typing(0, 0);

let preScrollY = 0;
function scrollToHideShowNav() {
  if (scrollY > preScrollY) {
    document.getElementById('nav').className = 'hide';
  } else if (scrollY === 0) {
    document.getElementById('nav').className = '';
  } else {
    document.getElementById('nav').className = 'show';
  }
  preScrollY = scrollY;
}

window.onscroll = scrollToHideShowNav;