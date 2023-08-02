export declare type project = {
  name: string;
  highlight?: boolean;
  dateString: string;
  summary: string;
  gitHubUrl?: string;
  demoUrl?: string;
  //markdown
  moreInfo?: string;
};

const projects: project[] = [
  {
    name: "Travels",
    highlight: true,
    dateString: "2023",
    summary: "A gallery of the photos I took while traveling!",
    gitHubUrl: "https://github.com/ahern55/travels",
    demoUrl: "https://travels.jasonahern.com",
  },
  {
    name: "jasonahern.com",
    highlight: true,
    dateString: "2023",
    summary: "This website!",
    gitHubUrl: "https://github.com/ahern55/portfolio",
  },
  {
    name: "next-firebase-typescript",
    highlight: true,
    dateString: "2022",
    summary:
      "A template for a Next.js app using Firebase's auth and Firestore database",
    gitHubUrl: "https://github.com/ahern55/next-firebase-typescript",
    demoUrl: "https://next-firebase-ts.vercel.app/",
  },
  {
    name: "Your Recipes",
    dateString: "2021",
    summary: "a simple recipe management mobile app on iOS and Android",
    gitHubUrl: "https://github.com/ahern55/recipes",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.companyname.recipes",
  },
  {
    name: "FEH Robot Store Website",
    dateString: "2022",
    summary:
      "An Ohio State-proprietary web application for instructors and students of FEH",
  },
  {
    name: "RPS: Robot Positioning System",
    dateString: "2022",
    summary:
      "An Ohio State-proprietary system for detecting and communicating with students' robots on the course ",
  },
  {
    name: "My old portfolio website",
    dateString: "2021",
    summary:
      "My first portfolio website, which I wrote before I knew React existed...",
    gitHubUrl: "https://github.com/ahern55/ahern55.github.io",
    demoUrl: "https://ahern55.github.io",
  },
  {
    name: "Jack Benak Fund",
    dateString: "2020",
    summary: "A tribute and memorial website for my best friend.",
    gitHubUrl: "https://github.com/ahern55/jackbenakfund",
    demoUrl: "https://jackbenakfund.org/",
  },
];

export default projects;
