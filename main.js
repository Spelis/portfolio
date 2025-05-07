function createProjectCard(repo, color, delay = 0) {
  const card = document.createElement("div");
  card.className = "project";
  card.style.borderColor = color;
  card.style.transition = "all .3s ease";
  card.style.opacity = 0;
  card.onclick = () => window.open(repo.html_url, "_blank");

  const title = document.createElement("h3");
  title.textContent = " " + repo.name;
  title.style.color = color;

  const meta = document.createElement("small");
  meta.textContent = `${repo.stargazers_count}★ | ${repo.forks_count} forks${repo.language ? ` (${repo.language})` : ""}`;

  const desc = document.createElement("p");
  desc.textContent = repo.description ?? "No description.";

  const text = document.createElement("div");
  text.className = "text";
  text.append(title, meta, desc);

  card.appendChild(text);

  setTimeout(() => (card.style.opacity = 1), delay);

  return card;
}

async function MKP(parentSelector, exclude = []) {
  const colors = [
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

  const parent = document.querySelector(parentSelector);
  const response = await fetch("https://api.github.com/users/Spelis/repos");
  const data = await response.json();

  const repos = data.filter((repo) => !exclude.includes(repo.name));
  repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  repos.forEach((repo, i) => {
    const color = getComputedStyle(document.body)
      .getPropertyValue(`--${colors[i % colors.length]}`)
      .trim();
    const card = createProjectCard(repo, color, 100 * i);
    parent.appendChild(card);
  });
}

async function ManualGitHub(repos, parentSelector) {
  const colors = [
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

  const parent = document.querySelector(parentSelector);

  for (let i = 0; i < repos.length; i++) {
    const repoName = repos[i];
    const color = getComputedStyle(document.body)
      .getPropertyValue(`--${colors[i % colors.length]}`)
      .trim();

    const res = await fetch(`https://api.github.com/repos/${repoName}`);
    if (!res.ok) continue;

    const repo = await res.json();
    const card = createProjectCard(repo, color, 100 * i);
    parent.appendChild(card);
  }
}

var href = window.location.pathname;
var dir = href.substring(0, href.lastIndexOf("/")) + "/";

window.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("bar");
  const spelis = document.createElement("h1");
  spelis.textContent = "spelis";
  bar.appendChild(spelis);
  const nav = document.createElement("div");
  nav.className = "nav";
  const home = document.createElement("a");
  home.textContent = "home";
  home.href = "/";
  home.className = "sel";
  const tech = document.createElement("a");
  tech.textContent = "github";
  tech.href = "https://github.com/spelis";
  const ytbtn = document.createElement("a");
  ytbtn.textContent = "youtube";
  ytbtn.href = "https://www.youtube.com/@Spelis";
  const smbtn = document.createElement("a");
  smbtn.textContent = "skolmaten";
  smbtn.href = "/skolmaten/";
  const dbtn = document.createElement("a");
  dbtn.textContent = "donate";
  dbtn.href = "https://www.paypal.com/donate/?hosted_button_id=39UGGPZVFTLJQ";
  nav.appendChild(home);
  nav.appendChild(dbtn);
  nav.appendChild(tech);
  nav.appendChild(ytbtn);
  nav.appendChild(smbtn);
  bar.appendChild(nav);
});
