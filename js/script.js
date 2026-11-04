/* =========================================================
   PORTFOLIO SCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    // =====================================================
    // ELEMENTS
    // =====================================================

    const html =
        document.documentElement;

    const themeToggle =
        document.getElementById("theme-toggle");

    const mobileToggle =
        document.getElementById("mobile-toggle");

    const mainNav =
        document.getElementById("main-nav");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const projectGrid =
        document.getElementById("projects-grid");

    const filterTabs =
        document.getElementById("filter-tabs");

    const projectSearch =
        document.getElementById("project-search");

    const emptyState =
        document.getElementById("empty-state");

    const skillsGrid =
        document.getElementById("skills-grid");

    const experienceTimeline =
        document.getElementById("experience-timeline");

    const educationTimeline =
        document.getElementById("education-timeline");

    const heroStats =
        document.getElementById("hero-stats");

    const contactForm =
        document.getElementById("contact-form");

    const modal =
        document.getElementById("project-modal");

    const modalClose =
        document.getElementById("modal-close");

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toast-message");


    // =====================================================
    // THEME
    // =====================================================

    function loadTheme() {

        const savedTheme =
            localStorage.getItem("portfolio-theme");

        if (savedTheme) {

            html.setAttribute(
                "data-theme",
                savedTheme
            );

        }

        updateThemeIcon();
    }


    function updateThemeIcon() {

        if (!themeToggle) {
            return;
        }

        const currentTheme =
            html.getAttribute("data-theme");

        const icon =
            themeToggle.querySelector("i");

        if (!icon) {
            return;
        }

        if (currentTheme === "light") {

            icon.className =
                "fas fa-moon";

        } else {

            icon.className =
                "fas fa-sun";

        }
    }


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                const currentTheme =
                    html.getAttribute("data-theme");

                const newTheme =
                    currentTheme === "dark"
                        ? "light"
                        : "dark";

                html.setAttribute(
                    "data-theme",
                    newTheme
                );

                localStorage.setItem(
                    "portfolio-theme",
                    newTheme
                );

                updateThemeIcon();

            }
        );

    }


    loadTheme();


    // =====================================================
    // MOBILE MENU
    // =====================================================

    if (mobileToggle) {

        mobileToggle.addEventListener(
            "click",
            () => {

                mainNav.classList.toggle(
                    "open"
                );

                const icon =
                    mobileToggle.querySelector("i");

                if (
                    mainNav.classList.contains(
                        "open"
                    )
                ) {

                    icon.className =
                        "fas fa-times";

                } else {

                    icon.className =
                        "fas fa-bars";

                }

            }
        );

    }


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "open"
                );

                if (mobileToggle) {

                    mobileToggle
                        .querySelector("i")
                        .className =
                        "fas fa-bars";

                }

            }
        );

    });


    // =====================================================
    // PERSONAL INFORMATION
    // =====================================================

    function loadPersonalData() {

        const person =
            PORTFOLIO_DATA.personal;


        const heroStatus =
            document.getElementById(
                "hero-status"
            );

        if (heroStatus) {

            heroStatus.textContent =
                person.status;

        }


        const heroSubtitle =
            document.getElementById(
                "hero-subtitle"
            );

        if (heroSubtitle) {

            heroSubtitle.textContent =
                person.subtitle;

        }


        const heroImage =
            document.getElementById(
                "hero-image"
            );

        if (
            heroImage &&
            person.heroImage
        ) {

            heroImage.src =
                person.heroImage;

            heroImage.alt =
                person.name;

        }


        const resumeBtns =
            document.querySelectorAll(
                ".resume-btn"
            );

        if (
            resumeBtns.length > 0 &&
            person.resumeUrl
        ) {

            resumeBtns.forEach(btn => {

                btn.href = person.resumeUrl;

            });

        }


        const location =
            document.getElementById(
                "contact-location"
            );

        if (location) {

            location.textContent =
                person.location;

        }


        const email =
            document.getElementById(
                "contact-email"
            );

        if (email) {

            if (person.email) {

                email.textContent =
                    person.email;

                email.style.cursor =
                    "pointer";

                email.addEventListener(
                    "click",
                    () => {

                        window.location.href =
                            `mailto:${person.email}`;

                    }
                );

            } else {

                email.textContent =
                    "Available on request";

            }

        }

    }


    loadPersonalData();


    // =====================================================
    // HERO STATS
    // =====================================================

    function renderStats() {

        if (!heroStats) {
            return;
        }

        heroStats.innerHTML = "";

        PORTFOLIO_DATA.personal.stats
            .forEach(stat => {

                const statElement =
                    document.createElement(
                        "div"
                    );

                statElement.className =
                    "hero-stat";

                statElement.innerHTML = `

                    <div class="hero-stat-value">
                        ${stat.value}${stat.suffix}
                    </div>

                    <span class="hero-stat-label">
                        ${stat.label}
                    </span>

                `;

                heroStats.appendChild(
                    statElement
                );

            });

    }


    renderStats();


    // =====================================================
    // PROJECT FILTERS
    // =====================================================

    let activeCategory = "all";


    function renderFilters() {

        if (!filterTabs) {
            return;
        }

        filterTabs.innerHTML = "";

        PORTFOLIO_DATA.categories
            .forEach(category => {

                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "filter-btn";

                if (
                    category.id ===
                    activeCategory
                ) {

                    button.classList.add(
                        "active"
                    );

                }

                button.textContent =
                    category.label;

                button.dataset.category =
                    category.id;

                button.addEventListener(
                    "click",
                    () => {

                        activeCategory =
                            category.id;

                        renderFilters();

                        renderProjects();

                    }
                );

                filterTabs.appendChild(
                    button
                );

            });

    }


    renderFilters();


    // =====================================================
    // PROJECTS
    // =====================================================

    function getFilteredProjects() {

        const searchTerm =
            projectSearch
                ? projectSearch.value
                    .trim()
                    .toLowerCase()
                : "";


        return PORTFOLIO_DATA.projects
            .filter(project => {

                const categoryMatch =
                    activeCategory === "all" ||
                    project.category ===
                        activeCategory;


                const searchableText = [

                    project.title,

                    project.tagline,

                    project.shortDesc,

                    project.fullDesc,

                    project.category,

                    ...project.tech

                ]
                    .join(" ")
                    .toLowerCase();


                const searchMatch =
                    !searchTerm ||
                    searchableText.includes(
                        searchTerm
                    );


                return (
                    categoryMatch &&
                    searchMatch
                );

            });

    }


    function renderProjects() {

        if (!projectGrid) {
            return;
        }

        const projects =
            getFilteredProjects();


        projectGrid.innerHTML = "";


        if (
            projects.length === 0
        ) {

            if (emptyState) {

                emptyState.style.display =
                    "block";

            }

            return;

        }


        if (emptyState) {

            emptyState.style.display =
                "none";

        }


        projects.forEach(project => {

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "project-card";


            card.innerHTML = `

                <div class="project-card-top">

                    <div class="project-icon">

                        <i class="${project.icon}"></i>

                    </div>

                    <span class="project-badge${project.clientProject ? " badge-amber" : ""}">
                        ${project.badge}
                    </span>

                </div>


                <h3>
                    ${project.title}
                </h3>


                <p class="project-tagline">
                    ${project.tagline}
                </p>


                <p class="project-description">
                    ${project.shortDesc}
                </p>


                <div class="project-tech">

                    ${project.tech
                        .map(
                            tech => `
                                <span class="tech-tag">
                                    ${tech}
                                </span>
                            `
                        )
                        .join("")}

                </div>


                <div class="project-footer">

                    <button
                        class="view-project"
                        data-project="${project.id}"
                    >

                        View Details

                        <i class="fas fa-arrow-right"></i>

                    </button>


                    ${
                        project.demoUrl
                            ? `
                                <a
                                    href="${project.demoUrl}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="project-link"
                                >

                                    Live Demo

                                    <i class="fas fa-external-link-alt"></i>

                                </a>
                            `
                            : ""
                    }

                </div>

            `;


            projectGrid.appendChild(
                card
            );

        });


        document
            .querySelectorAll(
                ".view-project"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        openProjectModal(
                            button.dataset.project
                        );

                    }
                );

            });

    }


    renderProjects();


    // =====================================================
    // PROJECT SEARCH
    // =====================================================

    if (projectSearch) {

        projectSearch.addEventListener(
            "input",
            () => {

                renderProjects();

            }
        );

    }


    // =====================================================
    // PROJECT MODAL
    // =====================================================

    function openProjectModal(
        projectId
    ) {

        const project =
            PORTFOLIO_DATA.projects
                .find(
                    item =>
                        item.id ===
                        projectId
                );


        if (!project || !modal) {
            return;
        }


        const modalIcon =
            document.getElementById(
                "modal-icon"
            );

        const modalBadge =
            document.getElementById(
                "modal-badge"
            );

        const modalTitle =
            document.getElementById(
                "modal-title"
            );

        const modalTagline =
            document.getElementById(
                "modal-tagline"
            );

        const modalTech =
            document.getElementById(
                "modal-tech"
            );

        const modalDescription =
            document.getElementById(
                "modal-description"
            );

        const modalFeatures =
            document.getElementById(
                "modal-features"
            );

        const modalMetrics =
            document.getElementById(
                "modal-metrics"
            );

        const modalDemo =
            document.getElementById(
                "modal-demo"
            );

        const modalGithub =
            document.getElementById(
                "modal-github"
            );


        modalIcon.innerHTML =
            `<i class="${project.icon}"></i>`;

        modalBadge.textContent =
            project.badge;

        if (project.clientProject) {

            modalBadge.classList.add(
                "badge-amber"
            );

        } else {

            modalBadge.classList.remove(
                "badge-amber"
            );

        }

        modalTitle.textContent =
            project.title;

        modalTagline.textContent =
            project.tagline;

        modalTech.innerHTML =
            project.tech
                .map(
                    tech =>
                        `
                        <span class="tech-tag">
                            ${tech}
                        </span>
                        `
                )
                .join("");

        modalDescription.textContent =
            project.fullDesc;


        modalFeatures.innerHTML =
            project.features
                .map(
                    feature =>
                        `<li>${feature}</li>`
                )
                .join("");


        modalMetrics.innerHTML =
            project.metrics
                .map(
                    metric =>
                        `

                        <div class="modal-metric">

                            <span class="modal-metric-value">
                                ${metric.value}
                            </span>

                            <span class="modal-metric-label">
                                ${metric.label}
                            </span>

                        </div>

                        `
                )
                .join("");


        if (project.demoUrl) {

            modalDemo.href =
                project.demoUrl;

            modalDemo.style.display =
                "inline-flex";

        } else {

            modalDemo.style.display =
                "none";

        }


        if (project.githubUrl) {

            modalGithub.href =
                project.githubUrl;

            modalGithub.style.display =
                "inline-flex";

        } else {

            modalGithub.style.display =
                "none";

        }


        modal.classList.add(
            "active"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeProjectModal() {

        if (!modal) {
            return;
        }

        modal.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProjectModal
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    modal
                ) {

                    closeProjectModal();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                closeProjectModal();

            }

        }
    );


    // =====================================================
    // SKILLS
    // =====================================================

    function renderSkills() {

        if (!skillsGrid) {
            return;
        }

        skillsGrid.innerHTML = "";


        PORTFOLIO_DATA.skills
            .forEach(category => {

                const card =
                    document.createElement(
                        "div"
                    );

                card.className =
                    "skill-card";


                card.innerHTML = `

                    <div class="skill-card-header">

                        <div class="skill-category-icon">

                            <i class="${category.icon}"></i>

                        </div>

                        <h3>
                            ${category.category}
                        </h3>

                    </div>


                    <div class="skill-items">

                        ${category.items
                            .map(
                                skill =>
                                    `

                                    <div class="skill-item">

                                        <div class="skill-name-row">

                                            <span class="skill-name">

                                                <i
                                                    class="${skill.icon}"
                                                    style="margin-right: 6px;"
                                                ></i>

                                                ${skill.name}

                                            </span>

                                            <span class="skill-level">
                                                ${skill.level}%
                                            </span>

                                        </div>


                                        <div class="skill-bar">

                                            <div
                                                class="skill-progress"
                                                data-level="${skill.level}"
                                            ></div>

                                        </div>

                                    </div>

                                    `
                            )
                            .join("")}

                    </div>

                `;


                skillsGrid.appendChild(
                    card
                );

            });


        animateSkillBars();

    }


    function animateSkillBars() {

        const bars =
            document.querySelectorAll(
                ".skill-progress"
            );


        bars.forEach(bar => {

            const level =
                bar.dataset.level;

            setTimeout(
                () => {

                    bar.style.width =
                        `${level}%`;

                },
                150
            );

        });

    }


    renderSkills();


    // =====================================================
    // EXPERIENCE
    // =====================================================

    function renderExperience() {

        if (!experienceTimeline) {
            return;
        }

        experienceTimeline.innerHTML =
            "";


        PORTFOLIO_DATA.experience
            .forEach(item => {

                const element =
                    document.createElement(
                        "div"
                    );

                element.className =
                    "timeline-item";


                element.innerHTML = `

                    <div class="timeline-dot"></div>


                    <div class="timeline-period">

                        ${item.period}

                    </div>


                    <h3>
                        ${item.role}
                    </h3>


                    <div class="timeline-company">

                        ${item.company}

                    </div>


                    <div class="timeline-location">

                        <i class="fas fa-location-dot"></i>

                        ${item.location}

                    </div>


                    <p class="timeline-description">

                        ${item.description}

                    </p>


                    <ul class="timeline-highlights">

                        ${item.highlights
                            .map(
                                highlight =>
                                    `<li>${highlight}</li>`
                            )
                            .join("")}

                    </ul>

                `;


                experienceTimeline.appendChild(
                    element
                );

            });

    }


    renderExperience();


    // =====================================================
    // EDUCATION
    // =====================================================

    function renderEducation() {

        if (!educationTimeline) {
            return;
        }

        educationTimeline.innerHTML =
            "";


        PORTFOLIO_DATA.education
            .forEach(item => {

                const element =
                    document.createElement(
                        "div"
                    );

                element.className =
                    "timeline-item";


                element.innerHTML = `

                    <div class="timeline-dot"></div>


                    ${
                        item.period
                            ? `
                                <div class="timeline-period">
                                    ${item.period}
                                </div>
                              `
                            : ""
                    }


                    <h3>
                        ${item.degree}
                    </h3>


                    <div class="timeline-company">

                        ${item.institution || item.University || item.company || ""}

                    </div>


                    <p class="timeline-description">

                        ${item.details}

                    </p>

                `;


                educationTimeline.appendChild(
                    element
                );

            });

    }


    renderEducation();


    // =====================================================
    // CONTACT FORM
    // =====================================================

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const message =
                    document.getElementById(
                        "message"
                    ).value.trim();


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    showToast(
                        "Please fill in all fields."
                    );

                    return;

                }


                /*
                 * This form currently does not send
                 * email to a server.
                 *
                 * It prepares a mailto link if
                 * your real email is added to data.js.
                 */


                if (
                    PORTFOLIO_DATA.personal.email
                ) {

                    const subject =
                        encodeURIComponent(
                            `Portfolio message from ${name}`
                        );


                    const body =
                        encodeURIComponent(
                            `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
                        );


                    window.location.href =
                        `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;


                    showToast(
                        "Opening your email application..."
                    );

                } else {

                    showToast(
                        "Please add your email address in data.js first."
                    );

                }

            }
        );

    }


    // =====================================================
    // TOAST
    // =====================================================

    let toastTimer;


    function showToast(message) {

        if (
            !toast ||
            !toastMessage
        ) {

            return;

        }


        toastMessage.textContent =
            message;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            toastTimer
        );


        toastTimer =
            setTimeout(
                () => {

                    toast.classList.remove(
                        "show"
                    );

                },
                3500
            );

    }


    // =====================================================
    // ACTIVE NAVIGATION
    // =====================================================

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    function updateActiveNav() {

        const scrollPosition =
            window.scrollY + 180;


        sections.forEach(section => {

            const top =
                section.offsetTop;

            const height =
                section.offsetHeight;

            const id =
                section.getAttribute(
                    "id"
                );


            if (
                scrollPosition >= top &&
                scrollPosition <
                    top + height
            ) {

                navLinks.forEach(link => {

                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) === `#${id}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();


    // =====================================================
    // CURRENT YEAR
    // =====================================================

    const currentYear =
        document.getElementById(
            "current-year"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    // =====================================================
    // BACKGROUND CANVAS
    // =====================================================

    const canvas =
        document.getElementById(
            "bg-canvas"
        );


    if (canvas) {

        const ctx =
            canvas.getContext("2d");


        let particles = [];


        function resizeCanvas() {

            canvas.width =
                window.innerWidth;

            canvas.height =
                window.innerHeight;

        }


        function createParticles() {

            particles = [];


            const count =
                Math.min(
                    55,
                    Math.floor(
                        window.innerWidth / 25
                    )
                );


            for (
                let i = 0;
                i < count;
                i++
            ) {

                particles.push({

                    x:
                        Math.random() *
                        canvas.width,

                    y:
                        Math.random() *
                        canvas.height,

                    radius:
                        Math.random() *
                        1.5 +
                        0.5,

                    speedX:
                        (Math.random() - 0.5) *
                        0.25,

                    speedY:
                        (Math.random() - 0.5) *
                        0.25

                });

            }

        }


        function drawParticles() {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );


            particles.forEach(
                particle => {

                    particle.x +=
                        particle.speedX;

                    particle.y +=
                        particle.speedY;


                    if (
                        particle.x <
                        0
                    ) {

                        particle.x =
                            canvas.width;

                    }


                    if (
                        particle.x >
                        canvas.width
                    ) {

                        particle.x = 0;

                    }


                    if (
                        particle.y <
                        0
                    ) {

                        particle.y =
                            canvas.height;

                    }


                    if (
                        particle.y >
                        canvas.height
                    ) {

                        particle.y = 0;

                    }


                    ctx.beginPath();

                    ctx.arc(
                        particle.x,
                        particle.y,
                        particle.radius,
                        0,
                        Math.PI * 2
                    );


                    ctx.fillStyle =
                        "rgba(139, 92, 246, 0.35)";


                    ctx.fill();

                }
            );


            requestAnimationFrame(
                drawParticles
            );

        }


        resizeCanvas();

        createParticles();

        drawParticles();


        window.addEventListener(
            "resize",
            () => {

                resizeCanvas();

                createParticles();

            }
        );

    }

});