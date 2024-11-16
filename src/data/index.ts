import {
  echo,
  ness,
  ox,
  seek,
  unsong,
} from "../../public/images/project";

export const projects = [
  {
    name: "Seekoool",
    link: "https://www.seekoool.com/",
    image: seek,
    text1:
      "An ECommerce web application for purchasing customized glasses and eyewear.",
    text2:
      "Tools: Typescript, Nextjs, Redux, TailwindCss, Jest, Playwright, Laravel, SQL, Git & Github, Vercel",
    list: [
      { name: "Ecommerce" },
      { name: "Web application" },
    ],
  },
  {
    name: "Nessvie",
    link: "https://www.nessvie.co.uk/",
    image: ness,
    text1: "An Healthcare shift scheduler for professionals in the UK.",
    text2:
      "Tools: Typescript, Nextjs, Redux, Jest, Playwright, TailwindCss, Laravel, SQL, Git & Github, Vercel",
    list: [
      { name: "Healthcare" },
      { name: "Web application" },

    ],
  },
  {
    name: "Oxbridge",
    link: "https://www.oxbridgenigeria.com/",
    image: ox,
    text1: "A website for the Oxbridge alumni community of Nigeria",
    text2:
      "Tools: javascript, Nextjs, Redux, Jest, Playwright, TailwindCss, MongoDB, Git & Github, Vercel",
    list: [{ name: "Alumni Network" }, { name: "Website" }],
  },
  {
    name: "Echo",
    link: "https://echo-next-delta.vercel.app/",
    image: echo,
    text1: "A website for a blockchain and web3 software development agency",
    text2:
      "Tools: Typescript, Nextjs, Redux, Jest, Playwright, TailwindCss, MongoDB, Git & Github, Vercel",
      list: [{ name: "Agency portfolio" }, { name: "Website" }],

  },
  {
    name: "Unsong Music",
    link: "https://unsongmusic.com/",
    image: unsong,
    text1:
      "A website for a media and entertainment brand ",
    text2:
    "Tools: Javascript, Nextjs, Redux, Jest, Playwright, TailwindCss, MongoDB, Git & Github, Vercel",
    list: [{ name: "Media & entertainment" }, { name: "Website" }],
  },
];
