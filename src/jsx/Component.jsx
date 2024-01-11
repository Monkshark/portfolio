import {profile} from '../js/Images.js';
import React, { useState } from 'react';
import '../css/Component.css';
import { Link } from 'react-scroll';
import {Greeting, Introduction} from "../texts/introduce";
import {Email, Instagram, Phone} from"../texts/contact.js";
import {
    AndroidSkill,
    AngularSkill,
    CSharpSkill,
    CSSSkill,
    DartSkill,
    FirebaseSkill,
    FlutterSkill,
    GithubSkill,
    GitSkill,
    GoLangSkill,
    HTMLSkill,
    JavaScriptSkill,
    JavaSkill,
    KotlinSkill,
    MarkDownSkill,
    MongoDBSkill,
    MySQLSkill,
    NodeJSSkill,
    PhpSkill,
    PugSkill,
    PythonSkill,
    ReactNativeSkill,
    ReactSkill,
    RustSkill,
    SCSSSkill,
    SpringBootSkill,
    TailWindCSSSkill,
    TypeScriptSkill,
    VueSkill,
    XMLSkill
} from "../js/Skills";
import {Result1, Result2} from "../js/Results";


function SkillCard({ skillObject }) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative group hover:bg-gray-800 transition-colors duration-200 rounded-lg"
            title={skillObject.description}
        >
            <img
                alt={skillObject.alt}
                className="w-24 h-24 object-cover rounded-lg group-hover:opacity-50 transition-opacity duration-200 mx-auto"
                src={skillObject.src}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <h3 className="text-base font-bold text-white text-center">{skillObject.skill}</h3>
            </div>
            {showTooltip && (
                <div className="tooltip">
                    {skillObject.description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br/>
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
}

function LinkCard({ to }) {
    return (
        <Link
            className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            to={to.toLowerCase()}
            smooth={true}
            duration={500}
        >
            {to}
        </Link>
    );
}

function ContactCard({ title, description }) {
    return (
        <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    );
}

function ResultCard({ result }) {
    return (
        <div className="mx-auto max-w-md rounded-lg bg-white dark:bg-gray-800 shadow-md p-4">
            <img src={result.imageSrc} alt={result.title} className="w-full h-64 object-cover rounded-t-lg rounded-bl-lg rounded-br-lg"/>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{result.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{result.description}</p>
            <h4 className="mt-2 text-lg font-bold text-gray-800 dark:text-white">Skills Used:</h4>
            <p className="text-gray-600 dark:text-gray-300">{result.skills}</p>
        </div>
    );
}


export default function Component() {
    return (
        <main key="1" className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 rounded-lg">
            <header
                className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md rounded-t-lg"
                style={{position: 'sticky', top: 0, zIndex: 100}}
            >
                <div className="text-2xl font-bold text-gray-800 dark:text-white font-[NIXGONM-vb]">추희도 포트폴리오</div>
                <nav className="space-x-4">
                    <LinkCard to="About"/>
                    <LinkCard to="Skills"/>
                    <LinkCard to="Results"/>
                    <LinkCard to="Contact"/>
                </nav>
            </header>

            <section
                className="flex flex-col items-start justify-center py-20 bg-gray-100 dark:bg-gray-900 rounded-lg"
                id="about"
            >
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white self-center">About Me</h2>
                <div className="mt-8 flex items-start">
                    <div className="flex flex-col items-center text-left mr-8 px-28">
                        <img
                            alt="Profile"
                            className="w-48 h-48 rounded-full object-cover mb-12"
                            height="200"
                            src={profile}
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                            }}
                            width="200"
                        />
                        <p className="text-gray-600 dark:text-gray-300 font-[NIXGONM-Vb] font-bold mb-4">{Greeting}</p>
                    </div>
                    <div className="flex flex-col items-start text-left">
                        {Introduction.split('\n').map((paragraph, index) => (
                            <p key={index}
                                className="text-gray-600 dark:text-gray-300 text-left text-xs font-[NIXGONM-Vb]">{paragraph}</p>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800 rounded-lg"
                id="skills"
            >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Programming Skills</h2>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8">Language</h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-8">
                    <SkillCard skillObject={HTMLSkill}/>
                    <SkillCard skillObject={CSSSkill}/>
                    <SkillCard skillObject={JavaScriptSkill}/>
                    <SkillCard skillObject={TypeScriptSkill}/>
                    <SkillCard skillObject={PythonSkill}/>
                    <SkillCard skillObject={JavaSkill}/>
                    <SkillCard skillObject={KotlinSkill}/>
                    <SkillCard skillObject={RustSkill}/>
                    <SkillCard skillObject={GoLangSkill}/>
                    <SkillCard skillObject={PhpSkill}/>
                    <SkillCard skillObject={DartSkill}/>
                    <SkillCard skillObject={CSharpSkill}/>
                    <SkillCard skillObject={MarkDownSkill}/>
                    <SkillCard skillObject={XMLSkill}/>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8">Library / Framework</h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-8">
                    <SkillCard skillObject={ReactSkill}/>
                    <SkillCard skillObject={AngularSkill}/>
                    <SkillCard skillObject={VueSkill}/>
                    <SkillCard skillObject={FlutterSkill}/>
                    <SkillCard skillObject={AndroidSkill}/>
                    <SkillCard skillObject={SpringBootSkill}/>
                    <SkillCard skillObject={ReactNativeSkill}/>
                    <SkillCard skillObject={PugSkill}/>
                    <SkillCard skillObject={SCSSSkill}/>
                    <SkillCard skillObject={TailWindCSSSkill}/>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8">Server & Database</h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SkillCard skillObject={FirebaseSkill}/>
                    <SkillCard skillObject={MySQLSkill}/>
                    <SkillCard skillObject={MongoDBSkill}/>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8">etc</h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SkillCard skillObject={NodeJSSkill}/>
                    <SkillCard skillObject={GitSkill}/>
                    <SkillCard skillObject={GithubSkill}/>
                </div>
            </section>
            <section
                className="flex flex-col items-center justify-center py-20 bg-gray-100 dark:bg-gray-900 rounded-lg"
                id="results"
            >
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Results</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ResultCard
                        result={Result1}
                    />
                    <ResultCard
                        result={Result2}
                    />
                </div>
            </section>
            <section
                className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800 rounded-lg"
                id="contact"
            >
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Contact</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ContactCard title="Phone" description={Phone}/>
                    <ContactCard title="Instagram" description={Instagram}/>
                    <ContactCard title="Email" description={Email}/>

                </div>
            </section>
            <footer
                className="flex items-center justify-center py-4 bg-gray-100 dark:bg-gray-900 shadow-md rounded-b-lg">
                <p className="text-gray-600 dark:text-gray-300">© 추희도 포트폴리오</p>
            </footer>
        </main>
    );
}

