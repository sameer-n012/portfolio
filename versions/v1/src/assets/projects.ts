const projects = [
    {
        _id: 0,
        name: "Portfolio Website",
        description: `Built in React and Typescript, this is my personal portfolio website that showcases my skills,
                    experience, and projects. It features a responsive design and smooth navigation, and is hosted
                    on AWS.`,
        githubRepoName: "portfolio",
        images: [
            "portfolio5.png",
            "portfolio0.png",
            "portfolio1.png",
            "portfolio2.png",
            "portfolio3.png",
            "portfolio4.png",
        ],
        tags: ["TypeScript", "React"],
        hidden_tags: [
            "JavaScript",
            "Bootstrap",
            "Web Design",
            "Design",
            "Web Development",
        ],
        featured: true,
    },
    {
        _id: 1,
        name: "Food Review Application",
        description: `A web application that allows users to sign up with an account in order to create and share reviews of menu items at restaurants.
                    Users can search through their own and other users' reviews, upload images of the food, and interact with other users.
                    This project was built using a React/Redux front-end, NodeJS, Express, and MongoDB as the database.`,
        githubRepoName: "food-review",
        images: [
            "foodreview0.jpg",
            "foodreview1.png",
            "foodreview2.png",
            "foodreview3.png",
            "foodreview4.png",
            "foodreview5.png",
            "foodreview6.png",
        ],
        tags: ["React", "Redux", "JavaScript", "MongoDB", "NodeJS"],
        hidden_tags: [
            "Full Stack",
            "Web Design",
            "Design",
            "Web Development",
            "Express.js",
            "Bootstrap",
        ],
        featured: true,
    },
    {
        _id: 2,
        name: "Fish Weight Regression",
        description: `A group project created to perform multilinear regression on the sizes of fish in order to
                    determine the weight of the fish. We used the Python library sk-learn in order to perform linear
                    regression on the data using the ridge regularization technique and graphed our results
                    using the Python library Matplotlib. Overall, we achieved a low mean squared error and accurate
                    predictions.`,
        githubRepoName: "fish-weight-regression",
        images: [
            "fishmarket0.png",
            "fishmarket1.png",
            "fishmarket2.png",
            "fishmarket6.png",
            "fishmarket3.png",
            "fishmarket5.png",
            "fishmarket4.png",
        ],
        tags: ["Python", "Scikit-learn", "Machine Learning"],
        hidden_tags: [
            "Data Science",
            "Data Analysis",
            "Matplotlib",
            "Linear Regression",
            "Numpy",
            "Pandas",
        ],
        featured: false,
    },
    {
        _id: 3,
        name: "ResNet Car Classification",
        description: `A group project where we used a dataset of images of cars and attempted to classify them
                    by model using transfer learning with different pre-established neural network models.
                    After testing different models, we decided to use ResNet152 V2 which appeared to have
                    the highest accuracy and fine-tuned the model parameters to achieve better results on
                    the dataset. Overall, we achieved an accuracy of 77% on the test data.`,
        githubRepoName: "resnet-car-classification",
        images: [
            "resnetcars5.png",
            "resnetcars3.png",
            "resnetcars0.png",
            "resnetcars1.png",
            "resnetcars2.png",
            "resnetcars4.png",
        ],
        tags: ["Python", "Tensorflow", "Transfer Learning", "Machine Learning"],
        hidden_tags: ["Keras", "Numpy"],
        featured: false,
    },
    {
        _id: 4,
        name: "Employee Management Application",
        description: `A Java application that was made with a partner to manage employees in a company. Using this,
                    a company administrator can add and remove employees, add notes and wages, and schedule
                    employees. Employees can sign in to see notes and add logs during their shift,
                    which the administrator can verify.`,
        githubRepoName: "ema-asd",
        images: ["ema0.png", "ema1.png", "ema2.png", "ema3.png", "ema4.png"],
        tags: ["Java", "Java Swing", "SQL"],
        hidden_tags: ["JDBC", "Object-Oriented", "Employee Management"],
        featured: false,
    },
    // Generates computer science interview questions based on user-specified topics with a React frontend
    // • Used ChromaDB to retrieve relevant example questions with RAG and insert them into a Google Gemini prompt
    // • Created a caching system on the server using an in-memory database to store recently generated questions
    {
        _id: 5,
        name: "Computer Science Interview Prep Helper",
        description: `A web application that helps users prepare for computer science interviews by generating
                    interview questions based on user-specified topics. The frontend is built using React, while the
                    backend uses NodeJS and Express. The application utilizes ChromaDB to retrieve relevant example
                    questions with Retrieval-Augmented Generation (RAG) and incorporates them into a Google Gemini prompt.
                    Additionally, a caching system is implemented on the server using an in-memory database to store
                    recently generated questions.`,
        githubRepoName: "interview-prep",
        images: ["interviewprep0.png"],
        tags: [
            "Google Gemini",
            "React",
            "JavaScript",
            "ChromaDB",
            "NodeJS",
            "RAG",
        ],
        hidden_tags: [
            "Full Stack",
            "Web Design",
            "Design",
            "Web Development",
            "Express.js",
            "Bootstrap",
            "LLM",
        ],
        featured: true,
    },
    {
        _id: 6,
        name: "Facial Recognition Attendance System",
        description: `A facial recognition attendance system designed to identify students in a video stream
                    and mark them as present by matching them to their official photos using the Inception-ResNet model and
                    cosine similarity. The backend is built with Flask to manage the database and run the facial recognition
                    model, while the frontend is developed using React to facilitate user sign-ups and allow teachers to
                    view student attendance. This project won 1st place in CheeseHacks 2022, a university-wide hackathon.`,
        githubRepoName: "cheesehacks-2022",
        images: ["faceattendance0.png"],
        tags: [
            "Python",
            "Inception-ResNet",
            "Computer Vision",
            "Flask",
            "React",
            "JavaScript",
        ],
        hidden_tags: [
            "Full Stack",
            "Web Design",
            "Numpy",
            "Design",
            "Web Development",
            "Bootstrap",
            "Machine Learning",
            "CNN",
        ],
        featured: true,
    },
    // {{Undergraduate Researcher}}{}
    //     {Madison Experimental Mathematics Lab}{Sep 2023 - Dec 2023}
    //     \resumeItemListStart
    //       \item Evaluated recent research on aperiodic tilings and Heesch numbers of polyforms
    //       \item Developed software for converting polykite tiling problems into boolean satisfiability problems
    //     \resumeItemListEnd
    // \item Finds the \textbf{Heesch number} (maximum number of rings around a tile made up of the same tile with no gaps or overlaps) of polykites and polyhexes
    //   \item Reduced problem from a computational geometry problem to a \textbf{boolean satisfiability} problem in \textbf{Python}, decreasing computation time
    //   \item Developed 7 types of boolean clauses to model geometric constraints in the problem
    //   \item Created mathematical and caching optimizations to improve program performance by a factor of 100
    //   \item Wrote paper and presentation analyzing the results on a dataset of over 3000 non-tiling polykites
    {
        _id: 7,
        name: "Polykite Heesch Number Research",
        description: `An undergraduate research project conducted at the Madison Experimental Mathematics Lab
                    focused on evaluating recent research on aperiodic tilings and Heesch numbers of polyforms.
                    The project involved developing software to convert polykite tiling problems into boolean
                    satisfiability problems. The research included creating seven types of boolean clauses
                    to model geometric constraints, implementing optimizations to enhance program
                    performance by a factor of 100, and analyzing results on a dataset of over 3000
                    non-tiling polykites.`,
        githubRepoName: "mxm-aperiodic-monotiles",
        images: ["heesch0.png"],
        tags: ["Python", "Computational Geometry", "Numpy"],
        hidden_tags: ["Boolean Satisfiability", "Research", "Mathematics"],
        featured: true,
    },
];

//takes an array of search values and returns an array of projects that have matching tags/names
const getFilteredProjects = (search_vals: Array<string>) => {
    search_vals = search_vals.filter((s) => s && s !== "");
    console.log(search_vals);

    if (search_vals.length === 0) {
        return projects;
    }

    return projects.filter((project) =>
        search_vals.some(
            (s) =>
                project.tags
                    .map((t) => t.toLowerCase())
                    .includes(s.toLowerCase()) ||
                project.name.toLowerCase().includes(s.toLowerCase()),
        ),
    );
};

const getFeaturedProjects = () => {
    return projects
        .filter((project) => project.featured)
        .sort((project) => project._id);
};

//gets all projects in the list
const getAllProjects = () => {
    return projects;
};

const getProjectById = (id: string) => {
    return projects.find((project) => project._id.toString() === id);
};

export {
    getFilteredProjects,
    getFeaturedProjects,
    getAllProjects,
    getProjectById,
};
