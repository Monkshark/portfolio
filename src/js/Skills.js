import {
    AndroidLogo,
    AngularLogo,
    CSSLogo,
    CSharpLogo,
    DartLogo,
    FirebaseLogo,
    FlutterLogo,
    GitLogo,
    GithubLogo,
    GoLangLogo,
    HTMLLogo,
    JavaLogo,
    JavaScriptLogo,
    KotlinLogo,
    MarkDownLogo,
    MongoDBLogo,
    MySQLLogo,
    NodeJSLogo,
    PhpLogo,
    PugLogo,
    PythonLogo,
    ReactLogo,
    ReactNativeLogo,
    RustLogo,
    SCSSLogo,
    SpringBootLogo,
    TailWIndCSSLogo,
    TypeScriptLogo,
    VueLogo,
    XMLLogo,
} from "./Images";
import {
    AndroidDescription,
    AngularDescription,
    CSharpDescription,
    CSSDescription,
    DartDescription,
    FirebaseDescription,
    FlutterDescription,
    GitDescription,
    GitHubDescription,
    GoLangDescription,
    HTMLDescription,
    JavaDescription,
    JavaScriptDescription,
    KotlinDescription,
    MarkdownDescription,
    MongoDBDescription,
    MySQLDescription,
    NodeJSDescription,
    PhpDescription,
    PugDescription,
    PythonDescription,
    ReactDescription,
    ReactNativeDescription,
    RustDescription,
    SCSSDescription,
    SpringBootDescription,
    TailWIndCSSDescription,
    TypeScriptDescription,
    XMLDescription,
    VueDescription,
} from "../texts/description";

export class Skill {
    constructor({ skill, src, alt, description }) {
        this.skill = skill;
        this.src = src;
        this.alt = alt;
        this.description = description;
    }
}

export const AndroidSkill = new Skill({
    skill: "Android",
    src: AndroidLogo,
    alt: "Android",
    description: AndroidDescription
});

export const AngularSkill = new Skill({
    skill: "Angular.js",
    src: AngularLogo,
    alt: "Angular.js",
    description: AngularDescription
});

export const CSSSkill = new Skill({
    skill: "CSS",
    src: CSSLogo,
    alt: "CSS",
    description: CSSDescription
});

export const CSharpSkill = new Skill({
    skill: "C#",
    src: CSharpLogo,
    alt: "C#",
    description: CSharpDescription
});

export const DartSkill = new Skill({
    skill: "Dart",
    src: DartLogo,
    alt: "Dart",
    description: DartDescription
});

export const FirebaseSkill = new Skill({
    skill: "Firebase",
    src: FirebaseLogo,
    alt: "Firebase",
    description: FirebaseDescription
});

export const FlutterSkill = new Skill({
    skill: "Flutter",
    src: FlutterLogo,
    alt: "Flutter",
    description: FlutterDescription
});

export const GitSkill = new Skill({
    skill: "Git",
    src: GitLogo,
    alt: "Git",
    description: GitDescription
});

export const GithubSkill = new Skill({
    skill: "Github",
    src: GithubLogo,
    alt: "Github",
    description: GitHubDescription
});

export const GoLangSkill = new Skill({
    skill: "Go",
    src: GoLangLogo,
    alt: "Go",
    description: GoLangDescription
});

export const HTMLSkill = new Skill({
    skill: "HTML",
    src: HTMLLogo,
    alt: "HTML",
    description: HTMLDescription
});

export const JavaSkill = new Skill({
    skill: "Java",
    src: JavaLogo,
    alt: "Java",
    description: JavaDescription
});

export const JavaScriptSkill = new Skill({
    skill: "JavaScript",
    src: JavaScriptLogo,
    alt: "JavaScript",
    description: JavaScriptDescription
});

export const KotlinSkill = new Skill({
    skill: "Kotlin",
    src: KotlinLogo,
    alt: "Kotlin",
    description: KotlinDescription
});

export const MarkDownSkill = new Skill({
    skill: "MarkDown",
    src: MarkDownLogo,
    alt: "MarkDown",
    description: MarkdownDescription
});

export const MongoDBSkill = new Skill({
    skill: "MongoDB",
    src: MongoDBLogo,
    alt: "MongoDB",
    description: MongoDBDescription
});

export const MySQLSkill = new Skill({
    skill: "MySQL",
    src: MySQLLogo,
    alt: "MySQL",
    description: MySQLDescription
});

export const NodeJSSkill = new Skill({
    skill: "Node.js",
    src: NodeJSLogo,
    alt: "Node.js",
    description: NodeJSDescription
});

export const PhpSkill = new Skill({
    skill: "PHP",
    src: PhpLogo,
    alt: "PHP",
    description: PhpDescription
});

export const PugSkill = new Skill({
    skill: "Pug",
    src: PugLogo,
    alt: "Pug",
    description: PugDescription
});

export const PythonSkill = new Skill({
    skill: "Python",
    src: PythonLogo,
    alt: "Python",
    description: PythonDescription
});

export const ReactSkill = new Skill({
    skill: "React.js",
    src: ReactLogo,
    alt: "React.js",
    description: ReactDescription
});

export const ReactNativeSkill = new Skill({
    skill: "React Native",
    src: ReactNativeLogo,
    alt: "React Native",
    description: ReactNativeDescription
});

export const RustSkill = new Skill({
    skill: "Rust",
    src: RustLogo,
    alt: "Rust",
    description: RustDescription
});

export const SCSSSkill = new Skill({
    skill: "SCSS",
    src: SCSSLogo,
    alt: "SCSS",
    description: SCSSDescription
});

export const SpringBootSkill = new Skill({
    skill: "Spring Boot",
    src: SpringBootLogo,
    alt: "Spring Boot",
    description: SpringBootDescription
});

export const TailWindCSSSkill = new Skill({
    skill: "Tailwind CSS",
    src: TailWIndCSSLogo,
    alt: "Tailwind CSS",
    description: TailWIndCSSDescription
});

export const TypeScriptSkill = new Skill({
    skill: "TypeScript",
    src: TypeScriptLogo,
    alt: "TypeScript",
    description: TypeScriptDescription
});

export const VueSkill = new Skill({
    skill: "Vue.js",
    src: VueLogo,
    alt: "Vue.js",
    description: VueDescription
});

export const XMLSkill = new Skill({
    skill: "XML",
    src: XMLLogo,
    alt: "XML",
    description: XMLDescription
});