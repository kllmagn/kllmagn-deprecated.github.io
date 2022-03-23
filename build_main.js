class StartPage {
    constructor(name, person_url, img_src) {
        this.name = name;
        this.person_url = person_url;
        this.img_src = img_src;
    }
    Render(parent) {
        let start_page = document.createElement("div");
        start_page.classList.add("start-page");
        let person = document.createElement("a");
        person.href = this.person_url;
        person.classList.add("person");
        let person_img = document.createElement("img");
        person_img.src = this.img_src;
        person_img.classList.add("person-img");
        let person_name = document.createElement("span");
        person_name.classList.add("person-name");
        person_name.textContent = this.name;
        person.appendChild(person_img);
        person.appendChild(person_name);
        start_page.appendChild(person);
        let project_but = document.createElement("button");
        project_but.addEventListener("click", RenderProjects);
        project_but.textContent = "Мои проекты";
        project_but.classList.add("projects-link");
        start_page.appendChild(project_but);
        parent.appendChild(start_page);
    }
}

class Project {
    constructor(title, description, img_src, url, date) {
        this.title = title;
        this.description = description;
        this.img_src = img_src;
        this.url = url;
        this.date = date;
    }
    Render(parent) {
        let image = document.createElement("img");
        image.src = this.img_src;
        let title_elem = document.createElement("span");
        title_elem.textContent = this.title;
        title_elem.classList.add("title");
        let desc_elem = document.createElement("p");
        desc_elem.textContent = this.description;
        let project = document.createElement("a");
        project.href = this.url;
        project.classList.add("project-container");
        project.appendChild(title_elem);
        project.appendChild(image);
        project.appendChild(desc_elem);
        parent.appendChild(project);
    }
}

projects = [
    new Project(
        "ASuKa",
        "Сайт-вопросник, написанный на Python с использованием Django.",
        "static/p1.png",
        "https://github.com/kllmagn/web_askme",
        "окт 2021"
    ),
    new Project(
        "Система стабилизации полета Boeing 747 на машинном обучении",
        "Система стабилизации, написанная на Python с использованием библиотеки stable-baselines3.",
        "static/p2.jpg",
        "https://github.com/kllmagn/B747_RL_CTRL",
        "янв 2022"
    )
]

TIMELINE_START = 0;
TIMELINE_BETWEEN = 1;
TIMELINE_END = 2;

function RenderTimelineBlob(parent, text, mode) {
    if (mode == TIMELINE_BETWEEN || mode == TIMELINE_END) {
        let line = document.createElement("div");
        line.classList.add("timeline-line");
        parent.appendChild(line);
    }
    let blob = document.createElement("div");
    blob.textContent = text;
    blob.classList.add("timeline-blob");
    parent.appendChild(blob);
    if (mode == TIMELINE_BETWEEN || mode == TIMELINE_START) {
        let line = document.createElement("div");
        line.classList.add("timeline-line");
        parent.appendChild(line);
    }
}

function RenderProjects() {
    let parent = document.getElementById("root");
    parent.innerHTML = '';
    let projects_container = document.createElement("div");
    projects_container.classList.add("content");
    RenderTimelineBlob(projects_container, projects[0].date, TIMELINE_START);
    projects[0].Render(projects_container);
    for (let i = 1; i < projects.length; i++) {
        project = projects[i];
        RenderTimelineBlob(projects_container, project.date, TIMELINE_BETWEEN);
        project.Render(projects_container);
    }
    parent.appendChild(projects_container);
}

let start = new StartPage("Роман Медников", "https://github.com/kllmagn", "static/person.jpg");
start.Render(document.getElementById("root"));