const experiences = [
    {
        _id: 0,
        position: "Data Science Engineering Intern",
        company: "Teradata",
        time: new Date("2022-05-22"),
        formattedTime: "May 2022 - August 2022",
        description: [
            "Built hyperparameter tuning framework for Teradata machine learning functions",
            "Researched hyperparameter tuning methods including Grid Search, Random Search, & Bayesian Search",
            "Created external stored procedure for tuning on large amounts of data",
            "Created method to score stored data by dynamically loading Dataiku JARs",
            "Worked with Dataiku software to build test models",
        ],
        skills: ["Python", "Scikit-Learn", "Java", "TeradataSQL"],
        featured: true,
    },
    {
        _id: 1,
        position: "Analytic Software Engineering Intern",
        company: "Teradata",
        time: new Date("2023-05-22"),
        formattedTime: "May 2023 - August 2023",
        description: [
            "Designed enterprise feature store service architecture",
            "Designed methods for storing feature metadata and retrieving customer data",
            "Developed python SDK for programmatic access to the feature store",
            "Developed methods for managing feature metadata and retrieving historical data",
            "Prototyped RESTful API for accessing the feature store service",
        ],
        skills: ["Python", "SQLAlchemy", "Flask", "TeradataSQL"],
        featured: true,
    },
];

function getAllExperiences() {
    return experiences;
}

export { getAllExperiences };
