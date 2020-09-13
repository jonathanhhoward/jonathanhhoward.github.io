import randomQuoteMachine from './images/random-quote-machine.png';
import drumMachine from './images/drum-machine.png';
import markdownPreviewer from './images/markdown-previewer.png';
import javascriptCalculator from './images/javascript-calculator.png';
import pomodoroClock from './images/pomodoro-clock.png';

const projectList = [
  {
    href: '/random-quote-machine',
    img: {
      src: randomQuoteMachine,
      alt: 'icon for random-quote-machine',
    },
    caption: 'Random Quote Machine',
  },
  {
    href: '/markdown-previewer',
    img: {
      src: markdownPreviewer,
      alt: 'icon for markdown-previewer',
    },
    caption: 'Markdown Previewer',
  },
  {
    href: '/drum-machine',
    img: {
      src: drumMachine,
      alt: 'icon for drum-machine',
    },
    caption: 'Drum Machine',
  },
  {
    href: '/javascript-calculator',
    img: {
      src: javascriptCalculator,
      alt: 'icon for javascript-calculator',
    },
    caption: 'JavaScript Calculator',
  },
  {
    href: '/pomodoro-clock',
    img: {
      src: pomodoroClock,
      alt: 'icon for pomodoro-clock',
    },
    caption: 'Pomodoro Clock',
  },
];

export default projectList;
