import React from "react";

function Experience() {
  return (
    <div className={"work"}>
      <h3 className={"title"}><span className={"navigation"} id={"w"}>W</span> Work Experience</h3>
      {/* Company 1 */}
      <div className={"work-description current"}>
          <span style={{fontWeight: 'bold'}}>Name of employer:</span> INFUSEmedia, Kyiv<br/>
          <span style={{fontWeight: 'bold'}}>Dates of employment:</span> 09/2022 - present<br/>
          <span style={{fontWeight: 'bold'}}>Job title:</span> Online Verification Specialist<br/>
          <span style={{fontWeight: 'bold'}}>Project/Role description:</span> verify the contact details of potential leads in accordance with standard operating procedures, identify clients’ needs, monitor lead tracking, research a variety of channels to find information about a potential client, prospecting, qualifying and generating new sales leads
      </div>
      {/* Company 2 */}
      <div className={"work-description previous"}>
          <span style={{fontWeight: 'bold'}}>Name of employer:</span> Nova Poshta LLC, Kyiv<br/>
          <span style={{fontWeight: 'bold'}}>Dates of employment:</span> August 2015 - August 2022<br/>
          <span style={{fontWeight: 'bold'}}>Job title:</span> Head of the department<br/>
          <span style={{fontWeight: 'bold'}}>Project/Role description:</span> fast and high-quality customer service, purchase of goods and equipment, monitoring the discipline of employees and the quality of their work, inventory of commodity balances, trained interns
      </div>
    </div>
  );
}

export default Experience;