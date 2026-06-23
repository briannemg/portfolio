export const featuredProjects = [
  {
    title: "Forecast Verification Platform",
    subtitle: "API-driven forecast evaluation pipeline",
    description:
      "Built and end-to-end Python data pipeline that retrieves archived weather forecast and historical weather data from external APIs, stores normalized records in SQLite, calculates forecast verification metrics, and generates analytical visualizations.",
    highlights: [
      "Integrated REST APIs with reusable Python client functions",
      "Designed a normalized SQLite schema for forecast, observation, and verification data",
      "Calculated Bias, MAE, and RMSE across matched hourly forecast records",
      "Generated time series and summary visualizations for model evaluation",
    ],
    tech: ["Python", "SQLite", "SQL", "Pandas", "Matplotlib", "REST APIs"],
    repoUrl: "https://github.com/briannemg/forecast-verification/platform",
    liveUrl: "",
  },
  {
    title: "Book Analytics Platform",
    subtitle: "Relational database and BI reporting project",
    description:
      "Developed a full-stack personal analytics platform that transforms raw reading history data into a normalized relational database, automated ETL workflow, and Tableau reporting layer.",
    highlights: [
      "Normalized denormalized CSV data into relational SQLite tables",
      "Built Python ETL scripts for repeatable database creation",
      "Validated book, author, genre, and mood relationships",
      "Created Tableau dashboard outputs for reading behavior analysis",
    ],
    tech: ["Python", "SQLite", "SQL", "Pandas", "Tableau", "ETL"],
    repoUrl: "https://github.com/briannemg/book-analytics-platform",
    liveUrl: "",
  },
  {
    title: "Large-Scale Anomaly Project",
    subtitle: "Meteorological data analysis and visualization",
    description:
      "Analyzed large-scale atmospheric anomaly patterns using Python-based scientific computing workflows, with a focus on meteorological interpretation, data processing, and visualization.",
    highlights: [
      "Processed atmospheric datasets using Python scientific libraries",
      "Created geospatial visualizations for anomaly analysis",
      "Applied meteorological domain knowledge to interpret synoptic-scale patterns",
      "Documented reproducible analysis workflow in a public repository",
    ],
    tech: [
      "Python",
      "Meteorology",
      "Data Analysis",
      "Visualization",
      "Scientific Computing",
    ],
    repoUrl: "https://github.com/briannemg/large-scale-anomaly-project",
    liveUrl: "",
  },
  {
    title: "Kids Growth Charts",
    subtitle: "Personal data tracking and visualization tool",
    description:
      "Built a Python-based data project for tracking and visualizing child growth data over time, emphasizing clean data organization, repeatable analysis, and clear chart outputs.",
    highlights: [
      "Structured longitudinal growth data for repeatable analysis",
      "Generated clear visualizations from personal datasets",
      "Applied Python and data cleaning techniques to real-world family data",
      "Designed project for maintainability and future updates",
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Data Cleaning", "Visualization"],
    repoUrl: "https://github.com/briannemg/kids-growth-charts",
    liveUrl: "",
  },
];

export const learningProjects = [
  {
    title: "Responsive Web Design Projects",
    description:
      "Collection of HTML and CSS projects completed with rebuilding frontend fundamentals through freeCodeCamp.",
    tech: ["HTML", "CSS", "Responsive Design"],
    repoUrl: "https://github.com/briannemg/fcc-responsive-web-design",
  },
];
