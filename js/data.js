const PORTFOLIO_DATA = {

    personal: {

        name: "Raseena V",

        title: "Full Stack Developer & UI/UX Design Learner",

        subtitle:
            "Completed Full Stack Development & currently learning UI/UX Design. I build responsive web applications using modern frontend, backend, and design technologies.",

        location: "Kerala, India",

        status: "Open to opportunities",

        statusAvailable: true,

        email: "rasizuhain123@gmail.com",

        github:
            "https://github.com/Raseena-creator",

        linkedin:
            "https://www.linkedin.com/in/raseena1",


        resumeUrl: "assets/Raseena V.pdf",

        heroImage:
            "assets/raseena.png",

        bio:
            "I am an MA Economics graduate who completed Full Stack Development and is currently expanding my skills in UI/UX Design. I work with HTML, CSS, JavaScript, Bootstrap, jQuery, Python, Django, MySQL, Git, GitHub, and Figma. I enjoy building responsive, user-friendly web applications and intuitive interfaces.",

        stats: [

            {
                label: "Projects",
                value: 2,
                suffix: "+"
            },

            {
                label: "Frontend Technologies",
                value: 5,
                suffix: "+"
            },

            {
                label: "Backend Technologies",
                value: 3,
                suffix: "+"
            },

            {
                label: "Design Tools",
                value: 2,
                suffix: ""
            }

        ]
    },


    categories: [

        {
            id: "all",
            label: "All Projects"
        },

        {
            id: "fullstack",
            label: "Full-Stack"
        },

        {
            id: "frontend",
            label: "Frontend"
        },

        {
            id: "uiux",
            label: "UI/UX"
        }

    ],


    projects: [

        {

            id: "readora",

            title: "ReadOra Book Store",

            tagline:
                "Django-Based Online Book Store",

            category: "fullstack",

            featured: true,

            badge: "Django",

            tech: [
                "Python",
                "Django",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "JavaScript"
            ],

            imageGradient:
                "linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #06b6d4 100%)",

            icon:
                "fas fa-book-open",

            shortDesc:
                "A Django-based online bookstore with book categories, user authentication, wishlist, cart, checkout, orders, and admin management.",

            fullDesc:
                "ReadOra is a full-stack online bookstore developed using Python and Django. The project provides users with a structured way to browse books, explore categories, manage their wishlist and cart, complete checkout, and view orders. The project also includes Django admin functionality for managing bookstore data.",

            features: [

                "Book browsing and category-based filtering.",

                "User authentication and profile functionality.",

                "Wishlist functionality.",

                "Shopping cart functionality.",

                "Checkout and order management.",

                "Django admin interface for managing bookstore data."

            ],

            metrics: [

                {
                    label: "Project Type",
                    value: "Full Stack"
                },

                {
                    label: "Backend",
                    value: "Django"
                },

                {
                    label: "Database",
                    value: "MySQL"
                }

            ],

            demoUrl:
                "https://readora-s9km.onrender.com/",

            githubUrl: "https://github.com/Raseena-creator/readOra"

        },


        {

            id: "eventora",

            title: "Eventora Studio",

            tagline:
                "Responsive Event Management Website",

            category: "frontend",

            featured: true,

            badge: "Web Design",

            tech: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "Bootstrap",
                "jQuery"
            ],

            imageGradient:
                "linear-gradient(135deg, #1f1f1f 0%, #5c4b3e 50%, #e4cfba 100%)",

            icon:
                "fas fa-calendar-check",

            shortDesc:
                "A responsive event management and services website created with HTML, CSS, JavaScript, Bootstrap, and jQuery.",

            fullDesc:
                "Eventora Studio is a responsive event management and services website designed and developed using HTML, CSS, JavaScript, Bootstrap, and jQuery. The project focuses on responsive layouts, modern visual presentation, navigation, and interactive frontend components.",

            features: [

                "Responsive website layout.",

                "Desktop, tablet, and mobile-friendly design.",

                "Event management and service-focused sections.",

                "Interactive navigation and frontend components.",

                "Bootstrap-based responsive design.",

                "Custom CSS styling and typography."

            ],

            metrics: [

                {
                    label: "Project Type",
                    value: "Frontend"
                },

                {
                    label: "Framework",
                    value: "Bootstrap"
                },

                {
                    label: "JavaScript",
                    value: "jQuery"
                }

            ],

            demoUrl:
                "https://raseena-creator.github.io/eventora/",

            githubUrl:
                "https://github.com/Raseena-creator/eventora/"

        }

    ],


    skills: [

        {

            category: "Frontend Development",

            icon:
                "fas fa-code",

            items: [

                {
                    name: "HTML5",
                    level: 85,
                    icon: "fab fa-html5"
                },

                {
                    name: "CSS3",
                    level: 80,
                    icon: "fab fa-css3-alt"
                },

                {
                    name: "JavaScript",
                    level: 75,
                    icon: "fab fa-js"
                },

                {
                    name: "Bootstrap",
                    level: 80,
                    icon: "fab fa-bootstrap"
                },

                {
                    name: "jQuery",
                    level: 70,
                    icon: "fas fa-code"
                }

            ]
        },


        {

            category: "Backend & Database",

            icon:
                "fas fa-server",

            items: [

                {
                    name: "Python",
                    level: 75,
                    icon: "fab fa-python"
                },

                {
                    name: "Django",
                    level: 70,
                    icon: "fas fa-layer-group"
                },

                {
                    name: "MySQL",
                    level: 70,
                    icon: "fas fa-database"
                }

            ]
        },


        {

            category: "Tools & UI/UX",

            icon:
                "fas fa-tools",

            items: [

                {
                    name: "Git",
                    level: 70,
                    icon: "fab fa-git-alt"
                },

                {
                    name: "GitHub",
                    level: 70,
                    icon: "fab fa-github"
                },

                {
                    name: "Figma",
                    level: 65,
                    icon: "fab fa-figma"
                },

                {
                    name: "UI/UX Design",
                    level: 65,
                    icon: "fas fa-pencil-ruler"
                }

            ]
        }

    ],


    experience: [

        {

            role: "Full Stack Development",

            company:
                "Completed Training & Project Development",

            period:
                "Completed",

            location:
                "Kerala, India",

            description:
                "Completed full-stack web development training, building responsive frontend interfaces and robust Django backend applications.",

            highlights: [

                "Mastered HTML5, CSS3, JavaScript, Bootstrap, and jQuery for modern web design.",

                "Built ReadOra, a full-stack Django online bookstore with user auth, cart, wishlist, orders, and database management.",

                "Integrated Python with MySQL database systems for scalable web applications.",

                "Utilized Git and GitHub for version control and source code management."

            ]

        },

        {

            role: "UI/UX Design",

            company:
                "Currently Learning & Prototyping",

            period:
                "2026 - Present",

            location:
                "Kerala, India",

            description:
                "Currently learning user experience principles, visual design systems, wireframing, and interactive UI prototyping.",

            highlights: [

                "Studying UI/UX design concepts, user flow design, and visual hierarchy.",

                "Creating interactive wireframes, component libraries, and prototypes in Figma.",

                "Applying user-centered design practices to modern web applications."

            ]

        }

    ],


    education: [

        {

            degree:
                "Master of Arts in Economics",

            institution:
                "Annamalai University",

            details:
                "Academic background in Economics followed by a transition into Full Stack Development and Web Design."

        }

    ]

};