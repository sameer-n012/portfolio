const education = [
    {
        _id: 0,
        degree: "High School",
        school: "Academy for Information Technology",
        type: "secondary",
        majors: [],
        time: new Date("2017-09-01"),
        formattedTime: "Sep 2017 - Jun 2021",
        coursework: [
            "AP Computer Science A",
            "Advanced Software Development",
            "Database Design",
        ],
        tests: {
            ACT: 36,
        },
        gpa: {
            actual: 96,
            total: 100,
        },
        activities: [
            "National Honor Society",
            "FIRST Robotics Team 1257",
            "Science Olympiad",
        ],
        featured: false,
    },
    {
        _id: 1,
        degree: "Bachelor's of Science",
        school: "University of Wisconsin-Madison",
        type: "tertiary",
        majors: ["Computer Science", "Mathematics"],
        time: new Date("2021-09-01"),
        formattedTime: "Sep 2021 - May 2025",
        coursework: [
            // "Data Structures & Algorithms",
            "Machine Learning",
            "Numerical Methods",
            "Parallel Programming",
            "Operating Systems",
            "Database Systems",
            "Computer Networks",
            "Programming Langauges & Compilers",
            // "Game Theory",
            "Linear Algebra",
        ],
        tests: {
            GRE: 339,
        },
        gpa: {
            actual: 3.96,
            total: 4,
        },
        activities: ["Phi Beta Kappa Honor Society"],
        awards: ["Dean's List", "2022 Cheesehacks Winner"],
        featured: true,
    },
    {
        _id: 2,
        degree: "Master's in Computer Science",
        school: "University of Illinois-Urbana Champaign",
        type: "tertiary",
        majors: ["Machine Learning", "ML Systems"],
        time: new Date("2025-08-22"),
        formattedTime: "Aug 2025 - Present",
        coursework: [
            "Natural Langauge Processing",
            "Machine Learning & Compilers",
            "Distributed Systems",
        ],
        tests: {},
        gpa: {},
        activities: [],
        awards: [],
        featured: true,
    },
];

function getAllEducation() {
    return education;
}

export { getAllEducation };
