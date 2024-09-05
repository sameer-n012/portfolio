const projects = [
  {
    _id: 0,
    name: "Portfolio Website",
    description: `A website built using JavaScript and React to showcase my past programming work. 
            It has links to my resume, email address, GitHub, and LinkedIn 
            and contains descriptions and images of many of the projects I have worked on in the past.`,
    githubRepoName: "portfolio",
    images: [
      "portfolio0.png",
      "portfolio1.png",
      "portfolio2.png",
      "portfolio3.png",
      "portfolio4.png",
    ],
    tags: [
      "javascript",
      "react",
      "bootstrap",
      "web-design",
      "web-development",
      "design",
    ],
    featured: true,
  },
  {
    _id: 1,
    name: "Food Review",
    description: `A web application that allows users to sign up with an account in order to create, edit, and share reviews of menu items at restaurants.
                    Users can search through their own and other users' reviews, upload images of the food, and modify or delete their account.
                    This application was built using a React/Redux front-end, NodeJS, Express, and MongoDB as the database.`,
    githubRepoName: "food-review",
    images: [
      "foodreview0.jpg",
      //'foodreview1.png',
      "foodreview2.png",
      //'foodreview3.png',
      "foodreview4.png",
      "foodreview5.png",
      "foodreview6.png",
    ],
    tags: [
      "full-stack",
      "react",
      "redux",
      "javascript",
      "bootstrap",
      "mongodb",
      "express",
      "nodejs",
      "web-development",
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
    tags: [
      "python",
      "sk-learn",
      "linear-regression",
      "machine-learning",
      "matplotlib",
      "numpy",
      "pandas",
    ],
    featured: true,
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
      "python",
      "tensorflow",
      "transfer-learning",
      "neural-network",
      "machine-learning",
      "keras",
      "numpy",
    ],
    featured: true,
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
    tags: [
      "java",
      "jdbc",
      "java-swing",
      "sql",
      "object-oriented",
      "employee-management",
    ],
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
        project.tags.map((t) => t.toLowerCase()).includes(s.toLowerCase()) ||
        project.name.toLowerCase().includes(s.toLowerCase()),
    ),
  );
};

const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
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
