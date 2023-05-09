import { useEffect } from "react";

function Projects() {

  useEffect(() => {
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
  }, [])

  return (
    <div className="projects">
      <h3 className="title"><span className="navigation" id="p">P</span> Projects</h3>
      <ul id="repos"></ul>
    </div>
  )
}

export default Projects;