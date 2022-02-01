import React, { useEffect, useState } from "react";
import './App.css';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <section>
      <h1>Loading....</h1>
    </section>
  }

  const { company, dates, duties, title } = jobs[value];

  return <section>
    <div className="job-component">
      <div className="title">
        <h1>Experience</h1>
        <div className="underline"></div>
      </div>
      <div className="body">
        <div className="button-group">
          {
            jobs.map((job, index) => {
              return <button key={job.id} className={`job-btn ${index === value && 'active-btn'}`} onClick={() => setValue(index)}>{job.company}</button>
            })
          }
        </div>
        <div>
          <div className="main-section">
            <h1 className="job-title">{title}</h1>
            <div className="job-company-box">
              <h1 className="job-company-name">{company}</h1>
            </div>
            <h1 className="job-date">{dates}</h1>
          </div>
          <div className="job-duties">
            {
              duties.map((duty, index) => {
                return <div key={index}>
                  <FaAngleDoubleRight className="icon" />
                  <p>{duty}</p>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default App;