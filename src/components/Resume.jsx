import React from "react";
import "./styles.css";

const Resume = () => {
  return (
    <main className="resume-page">
      <h1>Brianne (Gerber) Nelson</h1>
      <p className="subtitle">
        Atmospheric Scientist | Scientific Software Developer
      </p>
      <p className="contact-info">
        <a
          href="mailto:briannemg@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          briannemg@gmail.com
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/briannemg"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/briannemg
        </a>{" "}
        |{" "}
        <a
          href="https://linkedin.com/in/brianne-gerber-nelson"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/brianne-gerber-nelson
        </a>
      </p>

      <section>
        <h2>Professional Summary</h2>
        <p>
          Atmospheric scientist with over 8 years of experience in numerical
          weather prediction (NWP), forecast verification, and scientific data
          analysis. Skilled in scientific programming (Python, shell scripting,
          R) and high-performance computing (HPC) to automate and accelerate
          weather modeling and evaluation workflows. Adept at research
          documentation, workflow automation, and collaborative development to
          advance operational forecasting and atmospheric science research.
        </p>
      </section>

      <section>
        <h2>Core Competencies</h2>
        <ul>
          <li>Numerical Weather Prediction (NWP)</li>
          <li>
            Forecast Verification & Model Evaluation (METplus, Statistical
            Methods)
          </li>
          <li>Scientific Programming (Python, R, Shell Scripting)</li>
          <li>
            Data Analysis & Visualization (NetCDF, GRIB, Statistical Methods)
          </li>
          <li>High-Performance Computing (HPC)</li>
          <li>
            Research Documentation & Technical Writing (Sphinx, ReadTheDocs)
          </li>
          <li>Workflow Automation & Pipeline Development</li>
          <li>Weather Modeling Systems (WRF)</li>
          <li>Version Control & Collaboration (Git, GitHub)</li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>

        <h3>Associate Scientist II</h3>
        <p>
          <em>
            National Center for Atmospheric Research (NCAR), Boulder, CO | Dec
            2019 – Present
          </em>
        </p>
        <ul>
          <li>
            Led automation of data processing and verification workflows to
            improve evaluation speed and accuracy of experimental weather
            modeling systems.
          </li>
          <li>
            Developed and maintained Sphinx-based documentation to increase
            accessibility and reproducibility of scientific tools.
          </li>
          <li>
            Adapted quickly to a variety of projects across the research group,
            contributing to diverse modeling and verification efforts while
            specializing in forecast verification.
          </li>
          <li>
            Collaborated with multidisciplinary teams to support ensemble and
            deterministic forecasts, combining scientific expertise with
            software best practices.
          </li>
        </ul>

        <h3>Associate Scientist</h3>
        <p>
          <em>
            AWS Truepower (a UL Company), Albany, NY | Jun 2017 – Oct 2019
          </em>
        </p>
        <ul>
          <li>
            Produced and verified meteorological and power forecasts for
            renewable energy clients using statistical methods and data quality
            assessments.
          </li>
          <li>
            Automated forecast verification pipelines with Python, enhancing
            data accuracy and reporting efficiency.
          </li>
          <li>
            Partnered with web developers to deliver client-facing forecast
            visualization tools grounded in meteorological science.
          </li>
          <li>
            Generated manual solar power forecasts for California, integrating
            observational and model data.
          </li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>

        <h3>Master of Science in Atmospheric and Environmental Science</h3>
        <p>
          <em>
            South Dakota School of Mines and Technology, Rapid City, SD | May
            2015
          </em>
        </p>
        <p>GPA: 3.91 / 4.00</p>
        <p>
          Thesis: Verification and Assessment of Operational Local Area Weather
          Forecasting Models
        </p>

        <h3>Bachelor of Science in Atmospheric Science</h3>
        <p>
          <em>University of Kansas, Lawrence, KS | May 2012</em>
        </p>
        <p>GPA (Major): 3.42 / 4.00</p>
        <p>Certification in Research Experience</p>
      </section>

      <section>
        <h2>Research Experience</h2>

        <h3>Graduate Researcher – Atmospheric and Environmental Sciences</h3>
        <p>
          <em>
            South Dakota School of Mines and Technology | Aug 2013 – May 2015
          </em>
        </p>
        <ul>
          <li>
            Built and utilized UNIX-based verification software for
            precipitation forecasts from the WRF system.
          </li>
          <li>Processed meteorological data in NetCDF and GRIB formats.</li>
          <li>Developed skills in R, NCL, UNIX Bash, and C-Shell scripting.</li>
          <li>
            Publication: Nelson, B. (2015). Verification and Assessment of
            Operational Local Area Weather Forecasting Models (M.S. Thesis).
          </li>
        </ul>

        <h3>Undergraduate Research Assistant – Atmospheric Science</h3>
        <p>
          <em>University of Kansas | Aug 2011 – May 2012</em>
        </p>
        <ul>
          <li>
            Analyzed synoptic and mesoscale tornado outbreak conditions using
            GEMPAK and shell scripting.
          </li>
          <li>
            Conducted data visualization and synoptic pattern identification.
          </li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>

        <ul>
          <li>
            <strong>I-WRF Use Case Development:</strong> Developed experimental
            weather forecast use cases, automating workflows with Python and
            Bash in High-Performance Computing environments. Tools: METplus,
            Bash, HPC, Git, Sphinx, Read the Docs
          </li>
          <li>
            <strong>HAFS Precipitation Verification & Visualization:</strong>{" "}
            Contributed to verification and documentation of HAFS precipitation
            forecasts using METplus; automated evaluation and maintained project
            documentation. Tools: METplus, Bash, HPC. Publication: Newman, K.M.,
            Nelson, B., Biswas, M., & Pan, L. (2024). Multi-season evaluation of
            HAFS quantitative precipitation forecasts. Frontiers in Earth
            Science, 12, 1417705. DOI:
            https://doi.org/10.3389/feart.2024.1417705
          </li>
          <li>
            <strong>Responsive Web Design Portfolio:</strong> Completed
            freeCodeCamp responsive web design certification, building five
            projects focused on semantic HTML and CSS layout techniques. Tools:
            HTML5, CSS3
          </li>
          <li>
            <strong>
              Weather Model Verification Toolkit (Thesis Project):
            </strong>{" "}
            Developed a UNIX-based tool for WRF precipitation forecast
            verification using NetCDF and GRIB datasets. Tools: Bash, C-Shell,
            R, NCL, NetCDF, GRIB
          </li>
        </ul>
      </section>

      <section>
        <h2>Technical Skills</h2>

        <ul>
          <li>
            Proficient In: Python, Shell scripting (Bash, C-Shell), METplus,
            NetCDF, GRIB, NCL (NCAR Command Language), GitHub, Sphinx, Git,
            ReadTheDocs, Markdown, XML
          </li>
          <li>
            Familiar With / Previously Used: R, HTML, CSS, MATLAB, Fortran90,
            GEMPAK, IDL, JavaScript (learning)
          </li>
          <li>
            Data & Analysis: Statistical Analysis, Forecast Verification, Data
            Visualization
          </li>
          <li>
            Scientific Tools & Modeling: WRF, High-Performance Computing (HPC),
            Weather Forecasting, Ensemble Modeling
          </li>
          <li>
            Platforms & Software: UNIX/Linux, High-Performance Computing
            Clusters, Shell Environments
          </li>
          <li>
            Other Strengths: Technical Writing, Research Communication, Workflow
            Automation, Collaboration
          </li>
        </ul>
      </section>

      <section className="resume-download">
        <a
          href="/files/YourResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-download-button"
        >
          Download PDF Version
        </a>
      </section>
    </main>
  );
};

export default Resume;
