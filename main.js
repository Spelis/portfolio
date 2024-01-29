async function MKP(parent, exclude) {
    parent = document.querySelector(parent);
    const ughdfsiygh = await fetch("https://api.github.com/users/Spelis/repos");
    const asfas = await ughdfsiygh.json();
  
    let repos = [];
  
    asfas.forEach(element => {
      if (!exclude.includes(element.name)) {
        repos.push(element);
      }
    });
  
    repos.forEach(repo => {
      const project = document.createElement("div");
      project.className = "project";
      project.style.backgroundImage = 'url(' + repo.name + '.png)';
      project.style.backgroundSize = "cover";
      project.style.backgroundAttachment = "fixed";
      project.style.backgroundBlendMode = "multiply"
  
      const bg = document.createElement("img");
        bg.src = repo.name + ".png";
        bg.style.width = '50px';
        bg.onerror = function () {
          bg.src = "template.png"
        }
        bg.style.borderRadius = "100%";
  
      const text = document.createElement("div");
      text.appendChild(bg);
        text.className = "text";
        const name = document.createElement("h3");
          name.textContent = repo.name;
        const desc = document.createElement("div");
        var descText = repo.description;
        desc.textContent = '"' + descText + '"';
        text.appendChild(name);

      const buttons = document.createElement("div");
      buttons.className = "buttons";
      const github = document.createElement("a");
      github.href = repo.html_url;
      github.className = "github";
      github.textContent = 'GitHub'
      buttons.appendChild(github);
      
      project.appendChild(text)
      project.appendChild(document.createElement("br"));
      project.appendChild(desc);
      project.appendChild(buttons);
      parent.appendChild(project);
    });
  }

  async function NonGitHub(title,id,description,link,parent) {
    parent = document.querySelector(parent);
      const project = document.createElement("div");
      project.className = "project";
      project.style.backgroundImage = 'url(' + id + '.png)';
      project.style.backgroundSize = "cover";
      project.style.backgroundAttachment = "fixed";
      project.style.backgroundBlendMode = "multiply"
  
      const bg = document.createElement("img");
        bg.src = id + ".png";
        bg.style.width = '50px';
        bg.onerror = function () {
          bg.src = "template.png"
        }
        bg.style.borderRadius = "100%";
  
      const text = document.createElement("div");
      text.appendChild(bg);
        text.className = "text";
        const name = document.createElement("h3");
          name.textContent = title;
        const desc = document.createElement("div");
        desc.textContent = '"' + description + '"';
        text.appendChild(name);

      const buttons = document.createElement("div");
      buttons.className = "buttons";
      const github = document.createElement("a");
      github.href = link;
      github.className = "github";
      github.textContent = 'Go'
      buttons.appendChild(github);
      
      
      project.appendChild(text)
      project.appendChild(document.createElement("br"));
      project.appendChild(desc);
      project.appendChild(buttons);
      parent.appendChild(project);
    };