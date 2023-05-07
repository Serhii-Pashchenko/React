function AddNewWork({ experience }) {
  return (
    <div>
      {experience.map(exp => (
        <div className={"work-description"}>
          <span style={{fontWeight: 'bold'}}>Name of employer:</span> <a href={exp.link}>{exp.companyName}</a><br/>
          <span style={{fontWeight: 'bold'}}>Dates of employment:</span> {exp.dateOfEmployment}<br/>
          <span style={{fontWeight: 'bold'}}>Job title:</span> {exp.jobTitle}<br/>
          <span style={{fontWeight: 'bold'}}>Project/Role description:</span> {exp.workDescription}
        </div>
      ))}
    </div>
  )
}

export default AddNewWork;