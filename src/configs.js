import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Tomas Gonzalez',
  subTitle: 'Dev portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Tomas Gonzalez portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* My name is Mandy and I am a student majoring in art and technology. I have a passion for photography, film, and music.",
        '* I‘m glad to be able to click on my webpage, but in fact, it can be seen that this is not my own effort.',
        '* I enjoy traveling, making new friends, and remembering many funny things. Sometimes they can be a bit nonsensical, but perhaps you‘ll see my abstraction later on.',
        '* But I hope you can get to know me.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://docs.google.com/document/d/1wKGkXHhd7q5v3AOGPMK6Gtehpp_Tkp90BvUufUqQIRc/edit?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Projects',
      footer: '(And also this web-app)',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/nft-place-logo.png',
            websiteURL: 'https://nft-place.xyz/',
          },
          {
            url: 'websites-preview/snow-hero.png',
            websiteURL: 'https://powtom48.itch.io/snow-the-hero',
          },
          {
            url: 'websites-preview/minecraft-in-js.png',
            websiteURL:
              'https://www.youtube.com/watch?v=yOUQquusyiY&t=123s&ab_channel=tomugon',
          },
          {
            url: 'websites-preview/fish-chopter.png',
            websiteURL: 'https://powtom48.itch.io/fishcopter',
          },
          {
            url: 'websites-preview/odd-clowns.png',
            websiteURL: 'https://oddclowns.com/',
          },
          {
            url: 'websites-preview/island-ai.png',
            websiteURL: 'https://www.instagram.com/island.ai/',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/kiter_js',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/tomas-gonzalez-perez-8784a2133/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/TomasGonzalez',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:tomasgp14@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
