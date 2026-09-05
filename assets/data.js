const portfolioData = {
    profile: {
        name: "Sameer Narendran",
        title: "ML Systems Engineer & Researcher",
        email: "sameer.narendran@gmail.com",
        profileImgName: "assets/images/me.jpg",
        linkedinURL: "https://linkedin.com/in/sameer-narendran",
        githubURL: "https://github.com/sameer-n012",
        resumeURL: "assets/resume.pdf",
        about: [
            "I'm a machine learning systems student researcher with interests in machine learning, compilers, and distributed systems. My work focuses on making large models faster, cheaper, and more controllable through systems-level optimizations and novel algorithms.",
            "I have hands-on experience ranging from low-level CUDA/NPU kernel engineering and compiler development to building large-scale, distributed evaluation harnesses for models up to 200B+ parameters.",
        ],
        skills: {
            languages: [
                "Python",
                "C/C++",
                "Rust",
                "Go",
                "SQL",
                "Java",
                "JavaScript",
            ],
            tools: [
                "PyTorch",
                "CUDA",
                "XLA",
                "JAX",
                "Deep Learning",
                "Kubernetes",
                "AWS/GCP",
                "Linux",
                "LLMs",
                "Agentic AI",
            ],
            hidden: [
                "Node.js",
                "React.js",
                "Git",
                "Docker",
                "Tensorflow",
                "Java",
                "JavaScript",
            ],
        },
    },
    // Ordered most-recent-first by start date. Variants should render
    // this list in array order rather than re-sorting it themselves.
    experience: [
        {
            _id: 3,
            position: "AI Research Scientist Intern",
            company: "Dialpad",
            formattedTime: "May 2026 - Aug 2026",
            description: [
                "Developed Agentic AI bots for improved customer service interaction for use in millions of customer service calls",
                "Worked with GCP BigQuery and built models to mine customer-agent transcripts for agentic skill automation",
                "Ran quantization, training, and evaluation of Qwen3 models for text chunking, NLU preprocessing using vLLM and LlamaFactory",
                "Improved LLM performance by 30% with automatic prompt optimization (GEPA) and fine-tuning",
            ],
            skills: ["Python", "LLMs", "Fine-Tuning", "Agentic AI", "BigQuery"],
            featured: true,
        },
        {
            _id: 2,
            position: "Undergraduate Research Assistant",
            company: "University of Wisconsin-Madison",
            formattedTime: "Jan 2024 - Aug 2025",
            description: [
                "Explored whether the Wisdom of the Crowds phenomenon applies to LLMs, leading to a publication in EMNLP and NeurIPS Behavioral ML.",
                "Engineered a large-scale evaluation pipeline (~80k inferences) on an HPC cluster.",
                "Built data pipeline including checkpointing and caching systems for models up to 70B+ parameters.",
            ],
            skills: ["Python", "LLMs", "Data Analysis", "PyTorch", "HPC"],
            featured: true,
        },
        {
            _id: 1,
            position: "Analytic Software Engineering Intern",
            company: "Teradata",
            formattedTime: "May 2023 – Aug 2023",
            description: [
                "Designed and implemented a production in-database ML feature store from the ground up.",
                "Built a Python SDK (~3k LOC) and a Flask-based REST API for feature management.",
                "Owned the full lifecycle from design document to MVP architecture.",
            ],
            skills: ["Python", "SQLAlchemy", "Flask", "TeradataSQL"],
            featured: true,
        },
        {
            _id: 0,
            position: "Data Science Engineering Intern",
            company: "Teradata",
            formattedTime: "May 2022 – Aug 2022",
            description: [
                "Developed a hyperparameter tuning framework with Grid, Random, and Bayesian search.",
                "Re-implemented the prototype in Java for scalable in-database execution.",
                "Assisted in migrating core algorithms to C for production performance.",
            ],
            skills: ["Python", "Scikit-Learn", "Java", "TeradataSQL"],
            featured: true,
        },
    ],
    education: [
        {
            _id: 2,
            degree: "Master's in Computer Science",
            school: "University of Illinois Urbana-Champaign",
            formattedTime: "Aug 2025 - Present",
            majors: ["Machine Learning", "ML Systems"],
            gpa: {},
            featured: true,
        },
        {
            _id: 1,
            degree: "Bachelor's of Science",
            school: "University of Wisconsin–Madison",
            formattedTime: "Sep 2021 - May 2025",
            majors: ["Computer Science", "Mathematics"],
            gpa: { actual: 3.97, total: 4 },
            featured: true,
        },
    ],
    projects: [
        {
            _id: 10,
            name: "Learned Operator Fusion for TorchInductor",
            description:
                "Replaced heuristic operator fusion scoring in the PyTorch compiler with a learned, hardware-aware cost model using a Graph Attention Network and encoder model. Fine-tuned CodeBERT on 18,000 IR serializations and trained GATv2 on over 600 fusion graphs. This research achieved inference latency improvements on models like DeBERTa without compile-time losses.",
            githubRepoName: "pytorch-learned-fusion",
            images: ["learned_fusion_0.png"],
            tags: ["Python", "PyTorch", "Compilers", "Graph Attention Network"],
            hidden_tags: [
                "TorchInductor",
                "Encoder Model",
                "CodeBERT",
                "ML Systems",
            ],
            metric: "−18ms/tok latency",
            featured: true,
            paper: {
                title: "Learning to Fuse: A Data-Driven Cost Model for TorchInductor",
                date: "2025-12-20",
                link: "https://github.com/sameer-n012/pytorch-learned-fusion/blob/main/report/report.pdf",
            },
        },
        {
            _id: 11,
            name: "Query-Conditioned Guideline RL for LLM Steering",
            description:
                "Trained a small planner model to generate natural-language strategy guidelines that help a larger frozen solver solve math problems more accurately. The planner is trained via GRPO using verl; the solver runs offline batch inference with vLLM. This reduced prompt tokens by 35-50% and latency by 30-40% while maintaining accuracy on benchmarks like GSM8K and CommonsenseQA.",
            githubRepoPrefix: "https://github.com/jashparekh1",
            githubRepoName: "query-conditioned-guidelines",
            images: ["qcg_0.png"],
            tags: [
                "Python",
                "Reinforcement Learning",
                "FSDP",
                "GRPO",
                "LLM Evaluation",
            ],
            hidden_tags: [
                "LLM Fine-Tuning",
                "LLM Steering",
                "verl",
                "RL",
                "PyTorch",
                "LLM",
                "Qwen",
                "GSM8K",
                "StrategyQA",
                "CommonsenseQA",
            ],
            metric: "−35–50% token cost",
            featured: true,
            paper: {
                title: "Learning Query-Conditioned Guidelines to Steer Frozen Language Models",
                date: "2025-12-20",
                link: "https://github.com/sameer-n012/query-conditioned-guidelines/blob/main/report.pdf",
            },
        },
        {
            _id: 12,
            name: "Wisdom of the Crowd in LLMs",
            description:
                "Engineered a large-scale evaluation pipeline on an HPC cluster to demonstrate that median aggregation improves LLM guesstimation accuracy, outperforming methods like self-consistency. Developed a custom guesstimation dataset of Fermi-type questions and future prediction questions and published to EMNLP 2025 and NeurIPS Behavioral ML 2024.",
            githubRepoName: "N/A",
            images: ["woc_0.png"],
            tags: [
                "Python",
                "LLM Evaluation",
                "HPC",
                "Data Analysis",
                "PyTorch",
                "EMNLP",
            ],
            hidden_tags: ["NeurIPS Behavioral ML", "Guesstimation", "Research"],
            metric: "EMNLP 2025",
            featured: true,
            paper: {
                title: "Probing LLM World Models: Enhancing Guesstimation with Wisdom of Crowds Decoding",
                date: "2025-09-23",
                link: "https://arxiv.org/abs/2501.17310",
            },
        },
        {
            _id: 13,
            name: "Distributed Compute Framework in Go",
            description:
                "Built a Spark-like distributed compute framework from scratch in Go, supporting Map, Filter, and Reduce API on top of a custom Cassandra-style distributed file storage with 3-node replication and state-based recovery. Designed a centralized scheduler, failure detection, and data rereplication via peer-to-peer recovery.",
            githubRepoName: "N/A",
            images: ["rainstorm_0.png"],
            tags: [
                "Go",
                "Distributed Systems",
                "Fault Tolerance",
                "Apache Spark",
            ],
            hidden_tags: [
                "Replication",
                "Cassandra",
                "Gossip Protocol",
                "MapReduce",
            ],
            metric: "3.5k LOC",
            featured: true,
        },
        {
            _id: 14,
            name: "Compiler for a C-like Language",
            description:
                "Designed and implemented a full compiler (C to ARM64) with lexing, parsing, type checking, multiple AST-level optimization passes (e.g., CSE, DCE, inlining), and ARM64 code generation.",
            githubRepoName: "N/A",
            images: [],
            tags: ["Compilers", "C", "ARM64", "Code Generation"],
            hidden_tags: [],
            featured: false,
        },
        {
            _id: 15,
            name: "GPU / NPU Kernel Engineering",
            description:
                "Wrote and optimized BLAS and convolution kernels for CUDA and Amazon Trainium, managing memory hierarchies (shared memory, HBM, SBUF) to achieve up to 8x speedup vs. CPU baselines.",
            githubRepoName: "N/A",
            images: [],
            tags: ["CUDA", "Performance", "Hardware"],
            hidden_tags: [],
            featured: false,
        },
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
            featured: false,
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
            featured: false,
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
            tags: [
                "Python",
                "Tensorflow",
                "Transfer Learning",
                "Machine Learning",
            ],
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
            images: [
                "ema0.png",
                "ema1.png",
                "ema2.png",
                "ema3.png",
                "ema4.png",
            ],
            tags: ["Java", "Java Swing", "SQL"],
            hidden_tags: ["JDBC", "Object-Oriented", "Employee Management"],
            featured: false,
        },
        {
            _id: 5,
            name: "Computer Science Interview Prep Helper",
            description: `A web application that helps users prepare for computer science interviews by generating
                        interview questions based on user-specified topics. The frontend is built using React, while the
                        backend uses Node.js and Express. The application utilizes ChromaDB to retrieve relevant example
                        questions with Retrieval-Augmented Generation (RAG) and incorporates them into a Google Gemini prompt.
                        Additionally, a caching system is implemented on the server using an in-memory database to store
                        recently generated questions.`,
            githubRepoName: "interview-prep",
            images: ["interviewprep0.png"],
            tags: [
                "Google Gemini",
                "React.js",
                "JavaScript",
                "ChromaDB",
                "Node.js",
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
                "React.js",
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
            metric: "1st place, CheeseHacks 2022",
            featured: true,
        },
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
            metric: "100x faster",
            featured: true,
            paper: {
                title: "Computing Heesch Numbers of Polykites",
                date: "2023-12-20",
                link: "https://github.com/sameer-n012/mxm-aperiodic-monotiles/blob/main/Heesch_Number_Final_Paper.pdf",
            },
        },
    ],
};
