// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Siddharth Yadav",
    message: "I'm a Information Technology student and an aspiring software engineer.",
    basedLocation: "Prayagraj, UP, INDIA",
    resumeLink: "https://drive.google.com/file/d/1OHU8XjzqCDLaTNszKDn3WyFLgpx6c4xQ/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/logo.png", // use relative path from  parent directory -> ex: images/image.ext
        custom:true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpeg'
}

const socialMediaLinks = {
    github: "https://github.com/suju1811",
    linkedin: "https://www.linkedin.com/in/siddharth-yadav-472a62201/",
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Siddharth Yadav and I'm a Information Technology(IT) student at Motilal Nehru National Institute of Technology, Allahabad. I'm Responsible, organized, and problem solver. Work well in a team and a quick learner.",
        "I am deeply passionate about programming and development. Whether it's building robust applications, optimizing algorithms, or delving into new frameworks, my enthusiasm for development fuels my commitment to staying at the forefront of this dynamic field. I am excited about the prospect of contributing my skills and dedication to meaningful projects that push the boundaries of what technology can achieve."
    ], // Separated items are paragraphs
    techStack: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Python",
        "MongoDB",
        "MySQL",
    ],
    // photo1Link: "images/portrait1.jpeg",
    // photo2Link: "images/portrait2.jpeg",
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "SDE Intern",
        company: {
            name: "BNY MELLON",
            link: "https://drive.google.com/file/d/1RKUNDTlDLMcRRV221659CFMsIf6iu79b/view?usp=sharing"
        },
        duration: "MAY 2023 - AUG 2023",
        bulletPoints: [
            "Worked with CCAR(Comprehensive Capital Analysis and Review) tech team which handles the company capital adequacy and risk management practices.",
            "Designed and developed an automated dashboard that automates the manual process of STOG report generation which saves a lot of man hours and also eliminates the possibility of human errors."
        ],
        hashtags: [
            "Pyhton",
            "Matplotlib",
            "MySQL",
            "Pyhton-pptx",
            "Ipy-Widgets"
        ],
    },
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "MusixON",
        yearCompleted: "2022",
        description: "An online music player app where user can listen songs of their choice which have • Functionalities like google login/signup with full authentication, media player contains shuffle , repeat current song , user can like songs , make playlist apart from this there is search bar where user can directly search songs, singer, albums etc.",
        techStack: " React.js,Css, Node.js, Express.js, MongoDB, Mongoose, Rapid-API.",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/suju1811/MusixON"
            },
        ],
        imageLink: "images/musixon.png",
        alignLeft: false
    },
    {
        projectName: "Dateify",
        yearCompleted: "2021",
        description: "An online dating platform where user can connect to various people and find their best match having Functionalities like Login/Signup with google , user can upload their images and can also add their preferences, Feeds where users get suggestions according to their preferences are implemented.",
        techStack: " React.js, Css, Node.js, Mongoose, Express.js , MongoDB.",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/suju1811/DATEIFY"
            }
        ],
        imageLink: "images/dateify.png",
        alignLeft: true
    },
]

const archiveLink = "https://github.com/suju1811?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking internships in software domain area for winter 2024."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "", // email takes precedance
            other: "https://forms.gle/ShMeLMYXsF8nCYBb6"
        },
        responseTimeMessage: "...and I'll resopnd ASAP"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}