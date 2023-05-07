import { useState } from 'react';
import Add_new_work from './Add_new_work';

const initialExperiences = [
  {
    companyName: 'Nova Poshta LLC',
    link: 'https://novaposhta.com',
    dateOfEmployment: 'August 2015 - August 2022',
    jobTitle: 'Head of the department',
    workDescription: 'fast and high-quality customer service, purchase of goods and equipment, monitoring the discipline of employees and the quality of their work, inventory of commodity balances, trained interns'
  }
];

function Experience(props) {

  const [experiences, setExperience] = useState(initialExperiences);

  function addNewWork() {
    setExperience([...experiences, {
      companyName: document.getElementById('company-name').value,
      dateOfEmployment: document.getElementById('date-of-employment').value,
      jobTitle: document.getElementById('job-title').value,
      workDescription: document.getElementById('work-description').value
    }]);
  }

  return (
    <div className={"work"}>
      <h3 className={"title"}><span className={"navigation"} id={"w"}>W</span> Work Experience</h3>

      <div className={"work-description"}>
          <span style={{fontWeight: 'bold'}}>Name of employer:</span> <a href={props.link}>{props.companyName}</a><br/>
          <span style={{fontWeight: 'bold'}}>Dates of employment:</span> September 2022 - present<br/>
          <span style={{fontWeight: 'bold'}}>Job title:</span> {props.jobTitle}<br/>
          <span style={{fontWeight: 'bold'}}>Project/Role description:</span> {props.workDescription}
      </div>

      <Add_new_work experience={experiences}/>
        <div className={"new-work"}>
          <h3>Add new work</h3>
          <label htmlFor="company-name">Name of employer: </label>
          <input type="text" id="company-name" /> <br/>
          <label htmlFor="date-of-employment">Dates of employment: </label>
          <input type="text" id="date-of-employment" /> <br/>
          <label htmlFor="job-title">Job title: </label>
          <input type="text" id="job-title" /> <br/>
          <label htmlFor="work-description">Project/Role description: </label>
          <textarea type="text" id="work-description" rows={10} cols={50}></textarea> <br/>
          <button onClick={addNewWork}>Add new work</button>
        </div>
    </div>
  );
}

export default Experience;