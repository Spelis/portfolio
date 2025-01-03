

async function MKP(parent, exclude) {
    let colors = [
        "green",
        "sapphire",
        "yellow",
        "rosewater",
        "flamingo",
        "pink",
        "mauve",
        "red",
        "lavender",
        "teal",
        "peach",
        "blue",
        "maroon",
        "sky",
    ];
    parent = document.querySelector(parent);
    const ughdfsiygh = await fetch("https://api.github.com/users/Spelis/repos");
    const asfas = await ughdfsiygh.json();

    let repos = [];

    asfas.forEach((element) => {
        if (!exclude.includes(element.name)) {
            repos.push(element);
        }
    });

    let i = 0;
    repos.forEach((repo) => {
        const color = window
            .getComputedStyle(document.body)
            .getPropertyValue("--" + colors[i%colors.length])
            .trim();
        const project = document.createElement("div");
        project.style.opacity = 0
        project.style.transition = 'all .3s ease'
        project.className = "project";
        project.onclick = function(){
          window.location.href = repo.html_url
        }
        project.style.borderColor = color;
        project.style.backgroundSize = "cover";
        project.style.backgroundAttachment = "fixed";
        project.style.backgroundBlendMode = "multiply";

        const text = document.createElement("div");
        text.className = "text";
        const name = document.createElement("h3");
        name.textContent = repo.name;
        name.innerHTML += ` <span style='font-size:15px;'>(${repo.language})</span>`;
        name.style.color = color;
        name.style.textWrapMode = "nowrap";
        const desc = document.createElement("div");
        desc.textContent = repo.description;
        text.appendChild(name);

        project.appendChild(text);
        project.appendChild(document.createElement("br"));
        project.appendChild(desc);
        parent.appendChild(project);
        i++;
        setTimeout(() => {
          project.style.opacity = 1;
       }, 100*i); // Adjust the delay as needed
    });
}

async function NonGitHub(title, id, description, link, parent) {
    parent = document.querySelector(parent);
    const project = document.createElement("div");
    project.className = "project";
    project.style.backgroundSize = "cover";
    project.style.backgroundAttachment = "fixed";
    project.style.backgroundBlendMode = "multiply";

    const text = document.createElement("div");
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
    github.textContent = "Go";
    buttons.appendChild(github);

    project.appendChild(text);
    project.appendChild(document.createElement("br"));
    project.appendChild(desc);
    project.appendChild(buttons);
    parent.appendChild(project);
}

var href = window.location.pathname;
var dir = href.substring(0, href.lastIndexOf("/")) + "/";

window.addEventListener('DOMContentLoaded',function(){
  const bar = document.getElementById('bar');
  const spelis = document.createElement('h1')
  spelis.textContent = 'spelis'
  bar.appendChild(spelis)
  const nav = document.createElement('div')
  nav.className = 'nav'
  const home = document.createElement('a')
  home.textContent = 'home'
  home.href = '/'
  if (dir === '/') {
    console.log('hey')
    home.className = 'sel'
  }
  const tech = document.createElement('a')
  tech.textContent = 'github'
  tech.href = 'https://github.com/spelis'
  const ytbtn = document.createElement('a')
  ytbtn.textContent = 'youtube'
  ytbtn.href = 'https://www.youtube.com/@Spelis'
  nav.appendChild(home)
  nav.appendChild(tech)
  nav.appendChild(ytbtn)
  bar.appendChild(nav)

})
