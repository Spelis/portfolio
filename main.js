function createProjectCard(icon, repo, color, delay = 0) {
    const card = document.createElement("div");
    card.onclick = () => window.open(repo.html_url, "_blank");
    card.className = "project";
    card.style.borderColor = color;
    card.style.transition = "all .3s ease";
    // card.style.opacity = 0;

    const title = document.createElement("h3");
    title.textContent = icon + repo.name;
    title.style.color = color;

    const meta = document.createElement("small");
    meta.textContent = `${repo.stargazers_count}★ | ${repo.forks_count} forks${repo.language ? ` (${repo.language})` : ""}`;

    const desc = document.createElement("p");
    desc.textContent = repo.description ?? "No description.";

    const text = document.createElement("div");
    text.className = "text";
    text.append(title, meta, desc);

    card.appendChild(text);

    // setTimeout(() => (card.style.opacity = 1), delay);

    return card;
}

const localRepos = [{
        icon: "󰚩 ",
        name: "LunaBot",
        html_url: "https://github.com/Spelis/LunaBot",
        stargazers_count: 2,
        forks_count: 0,
        language: "Python",
        description: "An Open-Source Discord bot with lots of features!",
    },
    {
        icon: "󰔶 ",
        name: "ats2",
        html_url: "https://github.com/Spelis/ats2",
        stargazers_count: 0,
        forks_count: 0,
        language: "C++",
        description: "Simple game where you need to avoid spikes and collect coins.",
    },
    {
        icon: "󰉚 ",
        name: "Skolmaten",
        html_url: "https://github.com/Spelis/skolmaten",
        stargazers_count: 1,
        forks_count: 0,
        language: "Python & Flask",
        description: "'The school food' is a simple web app for school food plans. Made for my fellow co-students",
    },
    {
        icon: "󱇧 ",
        name: "safe",
        html_url: "https://github.com/Spelis/safe",
        stargazers_count: 6,
        forks_count: 0,
        language: "Python",
        description: "Gimmicky text editor that feels like a shell!",
    },
    {
        icon: "󰚑 ",
        name: "DSMine",
        html_url: "https://github.com/spelis/dsmine",
        stargazers_count: 0,
        forks_count: 0,
        language: "C",
        description: "Minesweeper for the Nintendo DS!",
    },
    {
        icon: "󰈟 ",
        name: "nimg",
        html_url: "https://github.com/Spelis/newImg",
        stargazers_count: 1,
        forks_count: 0,
        language: "C",
        description: "Cross-platform way to easily create new images with a wide range of formats",
    },
    {
        icon: " ",
        name: "rsnote",
        html_url: "https://github.com/Spelis/rsnote",
        stargazers_count: 0,
        forks_count: 0,
        language: "Rust",
        description: "Simple CLI note taking app",
    },
    {
        icon: " ",
        name: "nvim-dotfiles",
        html_url: "https://github.com/Spelis/nvim",
        stargazers_count: 1,
        forks_count: 0,
        language: "Lua",
        description: "Configuration files for my neovim config",
    },
];

function startLoopScroll() {
    const container = document.getElementsByClassName("pj")[0];

    // Clone content for looping effect
    const originalChildren = Array.from(container.children);

    originalChildren.forEach((child) => {
        const clone = child.cloneNode(true);

        // If the original has an onclick property
        if (child.onclick) {
            clone.onclick = child.onclick;
        }

        container.appendChild(clone);
    });

    let scrollPos = 0;

    function loopScroll() {
        scrollPos++;
        if (scrollPos >= container.scrollWidth / 2) {
            scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
        requestAnimationFrame(loopScroll);
    }

    loopScroll();
}

function loadLocalProjects(parentSelector) {
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
    localRepos.forEach((repo, i) => {
        const color = `var(--${colors[i % colors.length]})`;
        const card = createProjectCard(repo.icon, repo, color, 100 * i);
        card.onclick = () => window.open(repo.html_url, "_blank");
        parent.appendChild(card);
    });
}

var href = window.location.pathname;
var dir = href.substring(0, href.lastIndexOf("/")) + "/";

window.addEventListener("DOMContentLoaded", function() {
    const bar = document.getElementById("bar");
    const spelis = document.createElement("h1");
    const titletext = "spelis";
    const letters = [];
    for (let i = 0; i < titletext.length; i++) {
        const letter = document.createElement("span");
        letter.innerText = titletext[i];
        letter.className = "titleletter";
        spelis.appendChild(letter);
        letters.push({
            el: letter,
            offset: i * 0.4
        }); // each letter gets phase offset
    }
    let t = 0;

    function animate() {
        t += 0.05;
        letters.forEach(({
            el,
            offset
        }) => {
            const y = Math.sin((t * 1.5) + offset) * 5; // adjust amplitude (10px here)
            el.style.transform = `translateY(${y}px)`;
        });
        requestAnimationFrame(animate);
    }
    animate();
    bar.appendChild(spelis);
    const nav = document.createElement("div");
    nav.className = "nav";
    const home = document.createElement("a");
    home.textContent = " ";
    home.href = "/";
    home.className = "sel";
    const tech = document.createElement("a");
    tech.textContent = " ";
    tech.href = "https://github.com/spelis";
    const ytbtn = document.createElement("a");
    ytbtn.textContent = " ";
    ytbtn.href = "https://www.youtube.com/@Spelis";
    const dcbtn = document.createElement("a");
    dcbtn.textContent = " ";
    dcbtn.href = "https://discord.com/users/710856373675491381";
    const bbtn = document.createElement("a");
    bbtn.textContent = " ";
    bbtn.href = "/blog/";
    const smbtn = document.createElement("a");
    smbtn.textContent = "󰉚 ";
    smbtn.href = "/skolmaten/";
    const dbtn = document.createElement("a");
    dbtn.textContent = " ";
    dbtn.href = "https://www.paypal.com/donate/?hosted_button_id=39UGGPZVFTLJQ";
    nav.appendChild(home);
    // nav.appendChild(dbtn);
    nav.appendChild(bbtn);
    nav.appendChild(dcbtn);
    nav.appendChild(tech);
    nav.appendChild(ytbtn);
    nav.appendChild(smbtn);
    bar.appendChild(nav);
});

function updateAge() {
    const specificDate = new Date("2010-05-11T22:50:00"); // Your birth date
    const currentDate = new Date();

    // Calculate age in years (with decimals)
    const age = (
        (currentDate - specificDate) /
        (1000 * 60 * 60 * 24 * 365.25)
    ).toFixed(15);

    // Calculate time remaining until the next birthday
    let nextBirthday = new Date(specificDate);
    nextBirthday.setFullYear(currentDate.getFullYear());
    if (currentDate > nextBirthday) {
        nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }

    const timeDiff = nextBirthday - currentDate;
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Display age in years
    document.getElementById("ageDisplay").textContent = `${age}`;

    // Set the title with the days remaining until the next birthday
    document.getElementById("ageDisplay").title = `${daysLeft} days left`;
}
