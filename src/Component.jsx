import React from 'react';

function SkillCard({ alt, src, skill }) {
    return (
        <div className="relative group hover:bg-gray-800 transition-colors duration-200 rounded-lg">
            <img
                alt={alt}
                className="w-24 h-24 object-cover rounded-lg group-hover:opacity-50 transition-opacity duration-200 mx-auto"
                src={src}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <h3 className="text-base font-bold text-white">{skill}</h3>
            </div>
        </div>
    );
}

function ProjectCard({ title, description, skills }) {
    return (
        <div className="mx-auto max-w-md rounded-lg bg-white dark:bg-gray-800 shadow-md p-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
            <h4 className="mt-2 text-lg font-bold text-gray-800 dark:text-white">Skills Used:</h4>
            <p className="text-gray-600 dark:text-gray-300">{skills}</p>
        </div>
    );
}

export default function Component() {
    return (
        <main key="1" className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 rounded-lg">
            <header
                className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md rounded-t-lg">
                <div className="text-2xl font-bold text-gray-800 dark:text-white">My Portfolio</div>
                <nav className="space-x-4">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        href="#"
                    >
                        About
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        href="#"
                    >
                        Skills
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        href="#"
                    >
                        Projects
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        href="#"
                    >
                        Contact
                    </a>
                </nav>
            </header>
            <section
                className="flex flex-col items-center justify-center py-20 bg-gray-100 dark:bg-gray-900 rounded-lg"
                id="about"
            >
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">About Me</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center text-center">
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img
                            alt="Profile Picture"
                            className="w-48 h-48 rounded-full object-cover mb-4"
                            height="200"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <p className="text-gray-600 dark:text-gray-300">Hello, nice to meet you!</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <p className="text-gray-600 dark:text-gray-300 max-w-xl text-center">
                            Hello! I'm a software developer who loves creating beautiful and functional applications. I
                            enjoy learning
                            new technologies and finding innovative solutions to challenges. In my free time, I like to
                            read, hike,
                            and spend time with my family.
                        </p>
                    </div>
                </div>
            </section>
            <section
                className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800 rounded-lg"
                id="skills"
            >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Programming Skills</h2>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8">Languages</h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SkillCard alt="JavaScript" src="/placeholder.svg" skill="JavaScript"/>
                    <SkillCard alt="Python" src="/placeholder.svg" skill="Python"/>
                    <SkillCard alt="Java" src="/placeholder.svg" skill="Java"/>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8">Frameworks</h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SkillCard alt="React" src="/placeholder.svg" skill="React"/>
                    <SkillCard alt="Flutter" src="/placeholder.svg" skill="Flutter"/>
                    <SkillCard alt="Spring Boot" src="/placeholder.svg" skill="Spring Boot"/>
                </div>
            </section>
            <section
                className="flex flex-col items-center justify-center py-20 bg-gray-100 dark:bg-gray-900 rounded-lg"
                id="projects"
            >
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Projects</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProjectCard
                        title="Project 1"
                        description="A brief description of the project, its purpose, and the technologies used."
                        skills="JavaScript, React, Node.js"
                    />
                    <ProjectCard
                        title="Project 2"
                        description="A brief description of the project, its purpose, and the technologies used."
                        skills="Python, Flutter, PostgreSQL"
                    />
                </div>
            </section>
            <section
                className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800 rounded-lg"
                id="contact"
            >
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Contact</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">휴대전화</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">+82 10 8127-7180</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Instagram</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">@void___main</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Email</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">example@example.com</p>
                    </div>
                </div>
            </section>
            <footer
                className="flex items-center justify-center py-4 bg-gray-100 dark:bg-gray-900 shadow-md rounded-b-lg">
                <p className="text-gray-600 dark:text-gray-300">© My Portfolio</p>
            </footer>
        </main>
    )
}