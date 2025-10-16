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
    {
        _id: 2,
        position: "Undergraduate Research Assistant",
        company: "University of Wisconsin-Madison",
        time: new Date("2024-01-22"),
        formattedTime: "Jan 2024 - Aug 2025",
        description: [
            "Explored whether Wisdom of the Crowds phenomenon applies to LLMs",
            "Created custom 'guesstimation' dataset of Fermi-type questions",
            "Ran dozens of open-source LLMs using PyTorch and a High Throughput Compute Cluster",
            "Built data pipeline including checkpointing and caching systems",
            "Evaluated LLMs using guesstimation methods including Greedy Decoding and Self-Consistency",
            "Published 'Probing LLM World Models: Enhancing Guesstimation with Wisdom of Crowds Decoding' to NeurIPS Behavioral ML 2024, EMNLP 2025",
        ],
        skills: ["Python", "LLMs", "Data Analysis", "PyTorch"],
        featured: true,
    },
];

function getAllExperiences() {
    return experiences;
}

export { getAllExperiences };
