export const featuredProjects = [
  {
    title: "Forecast Verification Platform",
    subtitle: "API-driven forecast evaluation pipeline",
    description:
      "Built an end-to-end Python data pipeline that retrieves archived weather forecast and historical weather data from external APIs, stores normalized records in SQLite, calculates forecast verification metrics, and generates analytical visualizations.",
    highlights: [
      "Integrated REST APIs with reusable Python client functions",
      "Designed a normalized SQLite schema for forecast, observation, and verification data",
      "Calculated Bias, MAE, and RMSE across matched hourly forecast records",
      "Generated time series and summary visualizations for model evaluation",
    ],
    tech: ["Python", "SQLite", "SQL", "Pandas", "Matplotlib", "REST APIs"],
    repoUrl: "https://github.com/briannemg/forecast-verification-platform",
    demoUrl: "",
    image: "/images/forecast-verification.png",
  },
  {
    title: "Book Analytics Platform",
    subtitle: "Data engineering and business intelligence pipeline",
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
    demoUrl: "",
    image: "/images/book-analytics.png",
  },
  {
    title: "Atmospheric Pattern Analysis Tool",
    subtitle: "Scientific computing and geospatial data analysis",
    description:
      "Built a Python-based atmospheric analysis project that processes large-scale anomaly data, generates meteorological visualizations, and presents results through a web-based project page.",
    highlights: [
      "Processed atmospheric datasets using Python scientific libraries",
      "Created geospatial visualizations for 500-mb height anomaly analysis",
      "Applied meteorological domain knowledge to interpret synoptic-scale patterns",
      "Published analysis outputs through a public-facing web presentation",
    ],
    tech: [
      "Python",
      "Meteorology",
      "Data Analysis",
      "Geospatial Visualization",
      "Scientific Computing",
    ],
    repoUrl: "https://github.com/briannemg/large-scale-anomaly-project",
    demoUrl: "https://briannemg.github.io/large-scale-anomaly-project/",
    image: "/images/atmospheric-analysis.png",
  },
  {
    title: "Pediatric Growth Tracking Application",
    subtitle: "Full-stack data visualization application",
    description:
      "Built a full-stack web application that allows users to enter child growth measurements, stores historical data in a database, generates dynamic growth charts, and supports full record management through an interactive interface.",
    highlights: [
      "Built user-facing forms for entering growth measurements",
      "Persisted longitudinal growth data in a backend database",
      "Generated dynamic visualizations directly within the application",
      "Implemented full CRUD functionality with edit and delete operations",
    ],
    tech: [
      "Python",
      "Flask",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
      "Data Visualization",
    ],
    repoUrl: "https://github.com/briannemg/kids-growth-charts",
    demoUrl: "https://kids-growth-charts.onrender.com/",
    image: "/images/placeholder.png",
  },
];

export const learningProjects = [
  {
    title: "Responsive Web Design Projects",
    description:
      "Collection of HTML and CSS projects completed while rebuilding frontend fundamentals through freeCodeCamp.",
    tech: ["HTML", "CSS", "Responsive Design"],
    repoUrl: "https://github.com/briannemg/fcc-responsive-web-design",
    demoUrl: "",
  },
];
