document.addEventListener("DOMContentLoaded", () => {
    const { profile, experience, projects, education } = portfolioData;

    /**
     * Injects data into the DOM.
     */
    function populateData() {
        document.getElementById("profile-name").textContent = profile.name;
        document.getElementById("profile-title").textContent = profile.title;

        // Contact links (plain text, CV-style)
        const contactLinksContainer = document.getElementById("contact-links");
        contactLinksContainer.innerHTML = `
            <a href="mailto:${profile.email}">${profile.email}</a>
            <a href="${profile.githubURL}" target="_blank" rel="noopener noreferrer">${profile.githubURL.replace("https://", "")}</a>
            <a href="${profile.linkedinURL}" target="_blank" rel="noopener noreferrer">${profile.linkedinURL.replace("https://", "")}</a>
            <a href="${profile.resumeURL}" target="_blank" rel="noopener noreferrer">Curriculum Vitae (PDF)</a>
        `;

        // About
        document.getElementById("about-body").innerHTML = profile.about
            .map((p) => `<p>${p}</p>`)
            .join("");

        // Education — most recent first (data is already ordered), full detail
        const educationContainer = document.getElementById("education-list");
        educationContainer.innerHTML = education
            .map((edu) => {
                let gpaStr = "";
                if (edu.gpa && edu.gpa.actual) {
                    gpaStr = ` &middot; GPA ${edu.gpa.actual}/${edu.gpa.total}`;
                }
                const majors =
                    edu.majors && edu.majors.length
                        ? `<p class="education-majors">${edu.majors.join(", ")}</p>`
                        : "";
                return `
                    <div class="education-item">
                        <p class="education-school">${edu.school}</p>
                        <p class="education-date">${edu.formattedTime}</p>
                        <p class="education-degree">${edu.degree}${gpaStr}</p>
                        ${majors}
                    </div>
                `;
            })
            .join("");

        // Research & Projects — featured entries get full write-ups, split
        // into ones with an associated paper (Publications) and ones
        // without (Other Projects).
        const featuredProjects = projects.filter((p) => p.featured);
        const otherProjects = projects.filter((p) => !p.featured);
        const publications = featuredProjects.filter((p) => p.paper);
        const nonPaperProjects = featuredProjects.filter((p) => !p.paper);

        function renderLinks(project) {
            const githubPrefix =
                project.githubRepoPrefix || profile.githubURL || "";
            const codeLink =
                project.githubRepoName && project.githubRepoName !== "N/A"
                    ? `<a class="research-link" href="${githubPrefix}/${project.githubRepoName}" target="_blank" rel="noopener noreferrer">Code &rarr;</a>`
                    : "";
            const paperLink = project.paper?.link
                ? `<a class="research-link" href="${project.paper.link}" target="_blank" rel="noopener noreferrer">Paper &rarr;</a>`
                : "";
            const links = [paperLink, codeLink].filter(Boolean).join("");
            return links ? `<span class="research-links">${links}</span>` : "";
        }

        function formatPaperDate(dateStr) {
            if (!dateStr) return "";
            const date = new Date(`${dateStr}T00:00:00`);
            if (Number.isNaN(date.getTime())) return dateStr;
            return date.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
            });
        }

        const publicationsGroup = document.getElementById(
            "publications-group",
        );
        const publicationsContainer =
            document.getElementById("publications-list");
        publicationsGroup.hidden = publications.length === 0;
        publicationsContainer.innerHTML = publications
            .map((project) => {
                const citation = `${project.paper.title}${
                    project.paper.date
                        ? ` &middot; ${formatPaperDate(project.paper.date)}`
                        : ""
                }`;
                return `
                    <div class="research-item">
                        <div class="research-item-header">
                            <span class="research-title">${project.name}</span>
                            ${renderLinks(project)}
                        </div>
                        <p class="paper-citation">${citation}</p>
                        <p class="research-description">${project.description}</p>
                        <div class="research-tags">
                            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
                        </div>
                    </div>
                `;
            })
            .join("");

        const otherResearchGroup = document.getElementById(
            "other-research-group",
        );
        const researchContainer = document.getElementById("research-list");
        otherResearchGroup.hidden = nonPaperProjects.length === 0;
        researchContainer.innerHTML = nonPaperProjects
            .map(
                (project) => `
                    <div class="research-item">
                        <div class="research-item-header">
                            <span class="research-title">${project.name}</span>
                            ${renderLinks(project)}
                        </div>
                        <p class="research-description">${project.description}</p>
                        <div class="research-tags">
                            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
                        </div>
                    </div>
                `,
            )
            .join("");

        // Additional projects — compact single-line listing
        const additionalContainer = document.getElementById(
            "additional-projects-list",
        );
        additionalContainer.innerHTML = otherProjects
            .map(
                (project) => `
                    <li>
                        <span class="proj-name">${project.name}</span>
                        <span class="proj-tags">${project.tags.join(", ")}</span>
                    </li>
                `,
            )
            .join("");

        // Experience
        const experienceContainer = document.getElementById("experience-list");
        experienceContainer.innerHTML = experience
            .map(
                (job) => `
                    <div class="experience-item">
                        <p class="experience-item-company">${job.company}</p>
                        <p class="experience-item-date">${job.formattedTime}</p>
                        <p class="experience-item-position">${job.position}</p>
                        <div class="experience-item-description">
                            <ul>
                                ${job.description.map((item) => `<li>${item}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                `,
            )
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
     * Highlights the active section in the table of contents as the
     * reader scrolls, using IntersectionObserver.
     */
    function setupActiveNav() {
        const navLinks = document.querySelectorAll(".toc a[data-nav]");
        const sections = Array.from(navLinks)
            .map((link) => document.getElementById(link.dataset.nav))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const link = document.querySelector(
                        `.toc a[data-nav="${entry.target.id}"]`,
                    );
                    if (!link) return;
                    if (entry.isIntersecting) {
                        navLinks.forEach((l) => l.classList.remove("active"));
                        link.classList.add("active");
                    }
                });
            },
            { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
        );

        sections.forEach((section) => observer.observe(section));
    }

    populateData();
    setupActiveNav();
});
