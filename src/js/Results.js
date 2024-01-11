import {SchoolSyncDescription} from "../texts/resultText";
import {SchoolSyncImg1} from "./Images";

export class Result {
    constructor({ title, description, skills, imageSrc }) {
        this.title = title;
        this.description = description;
        this.skills = skills;
        this.imageSrc = imageSrc;
    }
}

export const Result1 = new Result({
    title: "SchoolSync",
    description: SchoolSyncDescription,
    skills: "Android, Java, Kotlin, Flutter, Dart, Firebase, MySQL, XML, Markdown",
    imageSrc: SchoolSyncImg1,
});

export const Result2 = new Result({
    title: "Project 2",
    description: "A brief description of the project, its purpose, and the technologies used.",
    skills: "Python, Flutter",
    imageSrc: "/path/to/image2.jpg"
});