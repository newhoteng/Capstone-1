const speakers = [
  {
    name: 'Ing Sophia Tigray',
    position: 'Vice President (GhIE)',
    image: 'images/sophia.jpg',
    interest: 'Passionate about using engineering to improve lives.',
  },
  {
    name: 'Ing Dr Patrick Bekoe',
    position: 'President (GhIE)',
    image: 'images/patrick.jpg',
    interest: 'Passionate about using engineering to improve lives.',
  },
  {
    name: 'Ing Joseph Oddei',
    position: 'CEO of Buildright',
    image: 'images/joseph.jpg',
    interest: 'Improve member benefits; monitor achievements within the council year and suggest other business friendly ways to Council to improve our collaboration with the public',
  },
  {
    name: 'Harriet Oteng',
    position: 'Lead Engineer of Quartz Dam Construction',
    image: 'images/harriet.jpeg',
    interest: 'Passionate about using engineering to improve lives.',
  },
  {
    name: 'Benedicta Opokua',
    position: 'CEO of Compass Associates',
    image: 'images/benedicta.jpg',
    interest: 'Passionate about using engineering to improve lives.',
  },
  {
    name: 'Prince Okae',
    position: 'Contracts Manager at Aecom',
    image: 'images/prince.jpeg',
    interest: 'Passionate about using engineering to improve lives.',
  },
];

// Create speaker section dynamically
const speakerSection = document.getElementById('speakers');

// Add heading and hr and flex container for desktop
const header = document.createElement('h2');
header.innerHTML = 'Featured Speakers';
const flexContainerDesktop = document.createElement('div');//
flexContainerDesktop.classList.add('speaker-flex');//
speakerSection.append(header, document.createElement('hr'), flexContainerDesktop);//

// Loop through array and create speaker tiles
speakers.forEach((speaker) => {
  const speakerContainer = document.createElement('div');
  speakerContainer.classList.add('speaker-container');

  flexContainerDesktop.append(speakerContainer);//

  const checkeredDesign = document.createElement('div');
  checkeredDesign.classList.add('checkered-design');
  // checkeredDesign.src = 'images/black-white.png';

  checkeredDesign.innerHTML = `
  <div class="black-first"></div>
  <div class="trans-first"></div>
  <div class="black-first"></div>
  <div class="trans-first"></div>
  <div class="black-first"></div>
  <div class="trans-first"></div>
  <div class="black-first"></div>
  <div class="trans-first"></div>
  <div class="black-first"></div>
  <div class="trans-first"></div>
  <div class="black-first"></div>
  `;

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('speaker-image-container');

  const speakerImage = document.createElement('img');
  speakerImage.src = `${speaker.image}`;

  imageContainer.append(speakerImage, checkeredDesign);

  const speakerText = document.createElement('div');
  speakerText.classList.add('speaker-text');

  const speakerName = document.createElement('h3');
  speakerName.innerHTML = `${speaker.name}`;
  const position = document.createElement('p');
  position.classList.add('position');
  const italicPosition = document.createElement('i');
  italicPosition.innerHTML = `${speaker.position}`;
  position.append(italicPosition);
  const line = document.createElement('hr');
  line.classList.add('gray');
  const interest = document.createElement('p');
  interest.classList.add('interest');
  interest.innerHTML = `${speaker.interest}`;

  speakerText.append(speakerName, position, line, interest);

  speakerContainer.append(imageContainer, speakerText);
});

// add more button
const moreButton = document.createElement('button');
moreButton.setAttribute('id', 'more');
moreButton.classList.add('more');

moreButton.innerHTML = '<span class="more-text">MORE</span><span class="fa fa-solid fa-chevron-down more-icon"></span>';

speakerSection.append(moreButton);

// Open and close mobile menu
const mobileMenu = document.getElementById('hamburger-icon');

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

mobileMenu.addEventListener('click', () => {
  toggleMobileMenu(mobileMenu);
});

// More or Less Button
const moreSpeakerBtn = document.getElementById('more');
const speakerWrapper = document.querySelectorAll('.speaker-container');

moreSpeakerBtn.addEventListener('click', () => {
  moreSpeakerBtn.classList.toggle('all');

  if (moreSpeakerBtn.classList.contains('all')) {
    moreSpeakerBtn.innerHTML = '<span class="more-text">LESS</span><span class="fa fa-solid fa-chevron-up more-icon"></span>';
    for (let i = 2, len = speakerWrapper.length; i < len; i += 1) {
      speakerWrapper[i].style.display = 'flex';
    }
  } else {
    moreSpeakerBtn.innerHTML = '<span class="more-text">MORE</span><span class="fa fa-solid fa-chevron-down more-icon"></span>';
    for (let i = 2, len = speakerWrapper.length; i < len; i += 1) {
      speakerWrapper[i].style.display = 'none';
    }
  }
});
