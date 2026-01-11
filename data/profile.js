const profileData = {
  title: "Lebenslauf",
  name: "Daniel Fechner",
  sub_title: "IT-Koordinator",
  logoURL: "assets/images/favicon/favicon.ico",
  about: {
    intro:
      "IT-Koordinator mit über 8 Jahren Berufserfahrung in der ganzheitlichen Betreuung von IT-Landschaften im mittelständischen Handel. Verantwortlich für IT-Infrastruktur, Warenwirtschaftssysteme und E-Commerce-Plattformen. Erfahrung in der Anforderungsanalyse, Projektleitung sowie in der Koordination externer IT-Partner. Starke analytische Fähigkeiten in der Fehleranalyse und Prozessoptimierung.",
    contact: {
      email: "kontakt@fechner-daniel.de",
      phone: "+4917647131606",
      address: "Pfarrgasse 14, 06268 Obhausen",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://linkedin.com/in/danielfechner",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://df-81.github.io/resume/",
      iconClass: "fa-brands fa-github",
    },
    /*{
      title: "Codepen",
      src: "https://codepen.io/imvpn22",
      iconClass: "fa-brands fa-codepen",
    },*/
  ],
  skills: [
    {
      title: "Languages & Standards",
      value: "HTML, CSS3, PHP, SQL, JavaScript",
    },
    {
      title: "Frameworks/Libraries",
      value:
        "ReactJS, React-Native, Redux, MobX, NodeJS-Express, NextJS, Angular, Next.js, React Query",
    },
    {
      title: "Maps & Visualization",
      value: "Canvas API, Leaflet.js, D3.js, Chart.js, HighCharts",
    },
    {
      title: "Others",
      value:
        "Micro Frontend Architecture, Webpack, Storybook, Git, Jenkins, AWS, WebSockets",
    },
  ],
  experiences: [
    {
      organization: "Holzboden-Direkt.de e.K.",
      title: "IT-Koordinator",
      date: "Juli 2017 - Heute",
      details: [
        `Developed a document management system with storage, in-built editor, digital signing, and mobile WebView integration to streamline employee onboarding and compliance workflows.`,
        `Developed real-time chat, panic alerts, a custom map showing employee locations, and an in-browser document editor and signer to address specific business needs with high interactivity.`,
        `Built scalable features with React and TypeScript, optimized UI/UX, and improved performance using custom component, hooks and utility libraries.`,
        `Designed micro frontend solutions and implemented dynamic data filtering logic to support modular development and efficient data access. Led cross-functional collaboration, promoted clean, maintainable code using ES6+ and TypeScript best practices, and drove continuous improvement.`,
      ],
    },
    {
      organization: "Gameskraft",
      title: "Senior Software Engineer",
      date: "Dec 2022 - June 2024",
      details: [
        `As part of the RummyCulture App team, worked on the development of core features like TDS summary & certificate, game join & re-join flow improvements,
        scorecard, withdrawal flow, user referral flow, and game bubble state optimizations.
        I ensured end-to-end responsibility, focusing on pixel-perfect UI, smooth UX, user testing, A/B experiments, cross-platform compatibility,
        and timely delivery.`,
        `Integrated in-house help center SDK, offering self-help features like guided app core flows and callback scheduling for users, leading to a reduction in customer call volume.`,
        `Addressed live issues such as App crashes, JS crashes, and ANRs using Sentry and Firebase Crashlytics. Mentored juniors through knowledge-sharing and code-review sessions to ensure bug-free code and optimal performance.`,
      ],
    },
    {
      organization: "Flipkart Internet Pvt Ltd",
      title: `UI Engineer 1`,
      date: "Jun 2021 - Nov 2022",
      details: [
        `As part of the Pricing and Promotion Team, worked on the migration of legacy projects from AngularJS to React-Redux, implementing a new design. I developed a React-based UI component library and utilities, now utilized across multiple projects.`,
        `Other responsibilities include implementing new features, as well as patching and resolving bugs in existing features, while also addressing on-call issues promptly.`,
      ],
    },
    {
      organization: "Mobile Premier League",
      title: `Software Development Engineer 1`,
      date: "Apr 2020 - Jun 2021",
      details: [
        `Created feature-specific modules within the internal CRM to enhance team operations. Utilized ReactJS with SCSS and Redux for frontend development, alongside NodeJS-Express with protobuf for backend functionality.`,
        `Developed a tailored Content Management System (CMS) for MPL's website, enabling seamless content and image updates across various pages in real-time.`,
      ],
    },
    {
      organization: "Wipro",
      title: `Project Engineer`,
      desc: `Project Engineer`,
      date: "Aug 2018 - Apr 2020",
      details: [
        `Contributed to the development of a collaborative online
        blueprint editor by translating the design mockups into reusable UI components
        with industry-standard UX patterns using Angular with SCSS,
        NgRx and Angular-Material and adding actions to those by
        creating services to integrate backend REST-APIs.`,
        `Resolved UI/UX issues by refactoring React components and re-structuring CSS/SCSS of an internal project with the codebase of ReactJS-Redux.`,
      ],
    },
    {
      organization: "Venuemonk",
      title: "Full-Stack Developer Intern",
      desc: `Full-Stack Developer intern at  <a target='_blank' rel='noreferrer' href='https://www.venuemonk.com/'>
       Venuemonk </a> (<a target='_blank' rel='noreferrer' href='https://drive.google.com/open?id=1ch_9x9jCp_TJwKY43FG-pCr_zV9H2iun'> https://goo.gl/Uz1gaf</a>)`,
      date: "Jan 2018 - Apr 2018",
      details: [
        `Designed and developed a Venue Onboarding platform to streamline and automate
        the onboarding process of partner venues using React.js-Redux frontend and
        Node.js-Express, MongoDB backend.`,
      ],
    },
    {
      organization: "Hasura",
      title: "Product Development Intern (Remote)",
      desc: `Product development intern at <a target='_blank' rel='noreferrer' href='https://hasura.io/'>
       Hasura </a> (<a target='_blank' rel='noreferrer' href='https://goo.gl/8V3jBy'> https://goo.gl/8V3jBy</a>)`,
      date: "Jun 2017 - Aug 2017",
      details: [
        `Created a web app using Node.js-Express with EJS server-side-templating on
        Hasura's BaaS platform with features of group chat and a
        sketch board for real-time collaboration with peers. The work was more focused
        towards using auth and data APIs offered by the platform, deploying the app,
        testing and reporting the bugs in it.`,
      ],
    },
  ],
  projects: [],
  education: [
    {
      alma: "FET, GKV, Haridwar",
      duration: "2014 - 2018",
      std: "B.Tech. (Computer Science & Engineering)",
      score: "71.00%",
    },
    {
      alma: "Jwala Devi SVMIC, Prayagraj",
      duration: "2011 - 2013",
      std: "Class XI-XII (PCM)",
      score: "89.80%",
    },
    {
      alma: "Jwala Devi SVMIC, Prayagraj",
      duration: "2010 - 2011",
      std: "Class X (PCM)",
      score: "73.30%",
    },
  ],
  certifications: [
    {
      desc: `Mobile Web Specialist Nanodegree by Udacity.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
      date: "May - Nov 2018",
    },
    {
      desc: `Introduction to Modern Application Development, a MOOC by <em> NPTEL (IIT Madras)
      and Hasura</em>. Ranked at top 10 percentile among more than 2500 candidates.
       (<a target='_blank' rel='noreferrer' href='https://nptel.ac.in/noc/E_Certificate/linkedin/noc17-cs06/NPTEL17CS0626270067AN.jpg'>
       https://goo.gl/X3HEdR</a>)`,
      date: "Jan - Mar 2017",
    },
  ],
  events: [],
};
