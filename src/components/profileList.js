import githubLogo from "../images/GitHub_Logo.png";
import githubMark from "../images/GitHub-Mark-64px.png";
import fccLogo from "../images/fcc_secondary_large.png";
import fccMark from "../images/fcc_secondary_small.png";
import liLogo from "../images/LI-Logo_b&w.png";
import liMark from "../images/LI-In-Bug_b&w.png";

const profileList = [
  {
    href: "https://github.com/jonathanhhoward",
    src: {
      wide: githubLogo,
      narrow: githubMark,
    },
    alt: "github profile",
  },
  {
    href: "https://www.freecodecamp.org/jonathanhoward",
    src: {
      wide: fccLogo,
      narrow: fccMark,
    },
    alt: "freecodecamp profile",
  },
  {
    href: "https://linkedin.com/in/jonathanhhoward",
    src: {
      wide: liLogo,
      narrow: liMark,
    },
    alt: "linkedin profile",
  },
];

export default profileList;
