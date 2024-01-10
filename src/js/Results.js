export class Result {
    constructor({ title, description, skills }) {
        this.title = title;
        this.description = description;
        this.skills = skills;
    }
}

export const Result1 = new Result({
    title: "Project 1",
    description: "A brief description of the project, its purpose, and the technologies used.",
    skills: "JavaScript, React, Node.js"
});

export const Result2 = new Result({
    title: "Project 2",
    description: "A brief description of the project, its purpose, and the technologies used.",
    skills: "Python, Flutter, PostgreSQL"
});