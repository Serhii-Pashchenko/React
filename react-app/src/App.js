import './sass-style.css';
import Image from './Image';
import photo from './photo.jpg';
import Contacts from "./Contacts";
import Experience from './Experience';
import Counter from './Counter';

function App() {
  function scale() {
    let photo = document.querySelector(".photo");
    photo.classList.toggle("photo-scale");
  }

  document.addEventListener("keyup", (event) => {
    if(event.key === "c" || event.key === "C" || event.key === "l" || event.key === "L" || event.key === "s" || event.key === "S" || event.key === "p" || event.key === "P" || event.key === "h" || event.key === "H" || event.key === "w" || event.key === "W" || event.key === "e" || event.key === "E") {
      const btn = document.getElementById(`${event.key}`);
      btn.scrollIntoView({behavior: 'smooth'});
    }
  });
  
  async function fetchRepos() {
    const repos = await fetch('https://api.github.com/users/serhii-pashchenko/repos');
    const data = await repos.json();

    data.forEach(rep => {
        let li = document.createElement('li');
        document.getElementById('repos').appendChild(li);
        let a = document.createElement('a');
        a.classList.add('repository-link');
        a.href = rep.html_url;
        a.target = '_blank';
        a.innerHTML = rep.full_name;
        li.appendChild(a);
        if (rep.description) {
            let p = document.createElement('p');
            p.innerHTML = rep.description;
            li.appendChild(p);
        }
    })
  }

  window.onload = function () {
    fetchRepos();
  };
  
  return (
      <div className="App">
        <div className="main">
          {/* Sidebar */}
          <aside className="sidebar">
              <h1 className="name"><span style={{color: '#fff'}}>Serhii</span> Pashchenko</h1>
              <a href="./hire-me.html" className="contact-link hire-me">Hire me</a>
              <Image src={photo} alt="user photo" className="photo" onclick={scale}/>
              
              {/* Contacts */}
              <Contacts/>
              
              <div className="languages">
                  <h3 className="title"><span className="navigation" id="l">L</span> Languages</h3>
                  <p>Ukrainian - C2</p>
                  <p>English - B2</p>
              </div>
          </aside>
          {/* Main content */}
          <div className="main-content">
              <div className="summary">
                  <h3 className="title"><span className="navigation" id="s">S</span> Summary</h3>
                  <p className="summary-description">I'm an enthusiastic and detail-oriented Frontend Software Engineer seeking an entry-level position with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects. I look forward to interesting projects, opportunities for professional growth and development.</p>
              </div>
              {/* Projects */}
              <div className="projects">
                  <h3 className="title"><span className="navigation" id="p">P</span> Projects</h3>
                  <ul id="repos"></ul>
              </div>
              {/* Skills */}
              <div className="skills">
                  <h3 className="title"><span className="navigation" id="h">H</span> Skills Highlights</h3>
                  <div className="list-items">
                      <ul>
                          <li>JavaScript</li>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>React</li>
                      </ul>
                      <ul>
                          <li>React Native</li>
                          <li>Redux</li>
                          <li>Scrum</li>
                          <li>Kanban</li>
                      </ul>
                  </div>
              </div>

              {/* Work */}
              <Experience jobTitle="Online Verification Specialist" companyName="INFUSEmedia" link="https://infusemedia.com" workDescription="verify the contact details of potential leads in accordance with standard operating procedures, identify clients’ needs, monitor lead tracking, research a variety of channels to find information about a potential client, prospecting, qualifying and generating new sales leads"/>

              {/* Education */}
              <div className="education">
                  <h3 className="title"><span className="navigation" id="e">E</span> Education</h3>
                  <div className="education-description">
                      <span style={{fontWeight: 'bold'}}>Dates of studying:</span> from 2009 – to 2015<br/>
                      <span style={{fontWeight: 'bold'}}>Name of institution:</span> Ukrainian State University of Finance and International Trade<br/>
                      <span style={{fontWeight: 'bold'}}>Degree and major:</span> MS, Finance and сredit
                  </div>
              </div>

              {/* Counter */}
              <Counter/>
          </div>
      </div>

    </div>
      
  );
}

export default App;
