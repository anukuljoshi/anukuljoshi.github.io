import React from 'react';

import aboutme from '../../svgs/undraw_about_me.svg';
import certificate from '../../svgs/undraw_certificate.svg';
import coding from '../../svgs/undraw_coding.svg';
import designer from '../../svgs/undraw_designer.svg';
import percentages from '../../svgs/undraw_percentages.svg';
import personalinfo from '../../svgs/undraw_personal_info.svg';
import resume from '../../svgs/undraw_resume.svg';
import work from '../../svgs/undraw_work_in_progress.svg';
import working from '../../svgs/undraw_working_from_anywhere.svg';


function About() {
    return (
        <div id="about" className={`lg:px-32 md:px-20 px-8 py-10`}>
            <h1 className={`lg:text-8xl md:text-7xl text-6xl font-cairo font-black text-primary lg:my-20 mt-5`}>About Me</h1>
            <div className={`lg:flex gap-10 block lg:px-10 px-5 lg:mb-40 mb-20`}>
                <div className="lg:w-5/12 mx-auto flex items-center lg:px-0 lg:mb-0 -mb-2">
                    <div className="lg:hidden block w-7/12"></div>
                    <img id="aboutMeImg" className="lg:w-full w-4/12" src={working} alt="About Me" />
                </div>
                <div className={`flex items-center lg:w-8/12  mx-auto bg-gray-700 text-text shadow-lg px-10 lg:py-16 md:py-12 py-10`}>
                    <div className="w-full">
                        <h4 className="h4 font-bold text-primary mb-3">Hello, my name is <span className="text-secondary">Anukul Joshi.</span></h4>
                        <p className={`font-cairo px-2`}>
                            I am a full-stack web developer with experience in languages like Python, JavaScript, HTML, CSS and frameworks and libraries related to these languages such as Django, ReactJS, Express, TailwindCSS.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`lg:flex gap-10 block lg:px-10 px-5 lg:mb-40 mb-20`}>
                <div className="lg:hidden lg:w-4/12 mx-auto flex items-center lg:px-0 lg:mb-0 -mb-2">
                    <div className="lg:hidden block w-6/12"></div>
                    <img className="lg:w-full w-4/12 mx-auto" src={certificate} alt="About Me" />
                </div>
                <div className={`flex items-center lg:w-8/12  mx-auto bg-gray-700 text-text shadow-lg px-10 lg:py-16 md:py-12 py-10`}>
                    <div className="w-full">
                        <h4 className="h4 font-bold mb-3 text-primary">Things I can work with.</h4>
                        <div className=" grid grid-cols-4">
                            <div>Python</div>
                            <div>JavaScript</div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>Django</div>
                            <div>React</div>
                            <div>NodeJS</div>
                            <div>Express</div>
                            <div>TailwindCSS</div>
                            <div>SQL</div>
                            <div>BootStrap</div>
                            <div>GSAP</div>
                            <div>REST</div>
                            <div>JSON</div>
                            <div>MongoDB</div>
                            <div>React-Query</div>
                            <div>Redux</div>
                            <div>Git</div>
                        </div>
                        {/* <div className="px-2">
                            <h6 className="h6 text-secondary">Programming Lanaguages End</h6>
                            <p className={`font-cairo mb-2 px-1`}>
                                Python, JavaScript, HTML, CSS 
                            </p>
                        </div>
                        <div className="px-2">
                            <h6 className="h6 text-secondary">Back End</h6>
                            <p className={`font-cairo mb-2 px-1`}>
                                Django, ExpressJS, 
                            </p>
                        </div> */}
                    </div>
                </div>
                <div className="hidden lg:w-5/12 lg:flex justify-start items-center lg:px-0 px-5 lg:mb-0 -mb-3">
                    <img className="lg:w-full w-3/12" src={certificate} alt="About Me" />
                </div>
            </div>
        </div>
    )
}

export default About
