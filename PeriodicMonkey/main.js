var href = window.location.pathname;
var dir = href.substring(0, href.lastIndexOf("/")) + "/";

console.log(dir)

const bar = document.createElement("div");
bar.className = "topBar";
const logo = document.createElement("h1");
logo.className = "logo";
logo.textContent = "";
bar.appendChild(logo);
const logoSep = document.createElement("p");
logoSep.textContent = "|";
logoSep.style.color = "#555";
logoSep.style.fontSize = "30px";
bar.appendChild(logoSep);

const bbar = document.createElement("div");
bbar.className = "botBar";
const blogo = document.createElement("h1");
blogo.className = "logo";
blogo.textContent = "";
bbar.appendChild(blogo);
bbar.appendChild(logoSep);

document.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(bar);
  document.body.appendChild(bbar);
});

function crButton(name, href,parent) {
  const listener = document.createElement("a");
  listener.href = href;
  listener.className = "barBtn";
  if (dir === href) {
    listener.style.color = "#aaa";
  }
  const btn = document.createElement("span");
  btn.className = "material-symbols-outlined";
  btn.textContent = name;
  listener.append(btn);
  return listener;
}

function search() {
  if (bar.lastChild.className === "sBar") {
    bar.lastChild.remove();
  } else {
    const searchbar = document.createElement("input");
    searchbar.className = "sBar";
    searchbar.placeholder = "Search Here...";
    bar.appendChild(searchbar);
  }
}

bar.appendChild(crButton("arrow_back", "/",bar));
bar.appendChild(crButton("home", "/PeriodicMonkey/",bar));
bar.appendChild(crButton("info", "/PeriodicMonkey/about/",bar));
bar.appendChild(crButton("settings", "/PeriodicMonkey/settings/",bar));
if (dir === "/" || dir === "/PeriodicMonkey/settings/") {
  bar.appendChild(crButton("search", "javascript:search()",bar));
}

document.addEventListener("DOMContentLoaded", function () {
  if (dir === "/PeriodicMonkey/settings/") {
    let textarea = document.getElementById("ccss");
    textarea.textContent = localStorage.getItem("customcss")
    textarea.addEventListener("input", function () {
      let cssText = this.value;
      localStorage.setItem("customcss",this.value)
      let lines = cssText.split("\n");
      for (let line of lines) {
        line = line.replace(";", "");
        let parts = line.split(":");
        document.body.style.setProperty(parts[0], parts[1]);
      }
    });
  }
});

function setCSS(code) {
  let cssText = code;
  let lines = cssText.split("\n");
  for (let line of lines) {
    line = line.replace(";", "");
    let parts = line.split(":");
    document.body.style.setProperty(parts[0], parts[1]);
  }
}

document.addEventListener("DOMContentLoaded", function () {
    setCSS(localStorage.getItem("customcss"))
})
