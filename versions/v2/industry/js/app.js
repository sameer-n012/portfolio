document.addEventListener("DOMContentLoaded", () => {
    const { profile, experience, projects, education } = portfolioData;

    function populateData() {
        document.getElementById("profile-name").textContent = profile.name;
        document.getElementById("tagline").textContent =
            profile.about && profile.about.length
                ? profile.about[0].split(". ")[0] + "."
                : "";

        const photo = document.getElementById("masthead-photo");
        if (photo && profile.profileImgName) {
            photo.style.backgroundImage = `url(${profile.profileImgName})`;
        } else if (photo) {
            photo.remove();
        }

        // Contact links, plain text
        const contactLinksContainer = document.getElementById("contact-links");
        contactLinksContainer.innerHTML = `
            <a href="mailto:${profile.email}">Email</a>
            <a href="${profile.githubURL}" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="${profile.linkedinURL}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="${profile.resumeURL}" target="_blank" rel="noopener noreferrer">Resume</a>
        `;

        // About
        document.getElementById("about-body").innerHTML = profile.about
            .map((p) => `<p>${p}</p>`)
            .join("");

        // Experience
        const experienceContainer = document.getElementById("experience-list");
        experienceContainer.innerHTML = experience
            .map(
                (job) => `
                    <div class="entry">
                        <div class="entry-header">
                            <span class="entry-title">${job.company}</span>
                            <span class="entry-date">${job.formattedTime}</span>
                        </div>
                        <p class="entry-subtitle">${job.position}</p>
                        <div class="entry-body">
                            <ul>
                                ${job.description.map((item) => `<li>${item}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                `,
            )
            .join("");

        // Projects — featured only, plain stacked entries
        const featuredProjects = projects.filter((p) => p.featured);
        const projectsContainer = document.getElementById("projects-list");
        projectsContainer.innerHTML = featuredProjects
            .map((project) => {
                const hasImage = project.images && project.images.length > 0;
                const imageUrl = hasImage
                    ? `assets/images/${project.images[0]}`
                    : "";
                const githubPrefix =
                    project.githubRepoPrefix || profile.githubURL || "";
                const link =
                    project.githubRepoName && project.githubRepoName !== "N/A"
                        ? `<a class="entry-link" href="${githubPrefix}/${project.githubRepoName}" target="_blank" rel="noopener noreferrer">Source</a>`
                        : "";
                const metric = project.metric
                    ? `<span class="entry-metric">${project.metric}</span>`
                    : "";

                return `
                    <div class="entry">
                        <div class="entry-header">
                            <span class="entry-title">${project.name}</span>
                            ${metric}
                        </div>
                        <div class="entry-body">
                            <p>${project.description}</p>
                            ${
                                hasImage
                                    ? `<div class="entry-image"><img src="${imageUrl}" alt="${project.name}" loading="lazy" /></div>`
                                    : ""
                            }
                            <div class="entry-tags">
                                ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
                            </div>
                            ${link}
                        </div>
                    </div>
                `;
            })
            .join("");

        // Education
        const educationContainer = document.getElementById("education-list");
        educationContainer.innerHTML = education
            .map((edu) => {
                let gpaStr = "";
                if (edu.gpa && edu.gpa.actual) {
                    gpaStr = ` &middot; ${edu.gpa.actual}/${edu.gpa.total} GPA`;
                }
                return `
                    <div class="entry">
                        <div class="entry-header">
                            <span class="entry-title">${edu.school}</span>
                            <span class="entry-date">${edu.formattedTime}</span>
                        </div>
                        <p class="entry-subtitle">${edu.degree}${gpaStr}</p>
                    </div>
                `;
            })
            .join("");

        // Skills
        const skillsContainer = document.getElementById("skills-list");
        if (skillsContainer && profile.skills) {
            const allSkills = [
                ...(profile.skills.languages || []),
                ...(profile.skills.tools || []),
            ];
            skillsContainer.innerHTML = allSkills
                .map((skill) => `<span>${skill}</span>`)
                .join("");
        }
    }

    /**
     * Types the role text into #profile-title one character at a time,
     * once, on load. Falls back to setting it instantly if the user
     * prefers reduced motion.
     */
    function typeRole() {
        const el = document.getElementById("profile-title");
        const text = profile.title || "";
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion || !text) {
            el.textContent = text;
            return;
        }

        el.textContent = "";
        let i = 0;
        const speed = 45; // ms per character
        (function typeNext() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i += 1;
                setTimeout(typeNext, speed);
            }
        })();
    }

    /**
     * Fills the fixed top progress bar according to scroll position,
     * extending the ruler's "signal trace" motif into a persistent cue.
     */
    function setupScrollProgress() {
        const bar = document.querySelector(".scroll-progress span");
        if (!bar) return;

        let ticking = false;
        function update() {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? scrollTop / docHeight : 0;
            bar.style.transform = `scaleX(${Math.min(1, Math.max(0, pct))})`;
            ticking = false;
        }

        window.addEventListener("scroll", () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        });
        update();
    }

    populateData();
    typeRole();
    setupScrollProgress();
});
