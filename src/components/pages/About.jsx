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
        <div id="about" className={`container mx-auto lg:px-20 px-5 py-10`}>
            <h1 className={`h1 lg:text-8xl md:text-7xl text-6xl font-cairo font-black text-primary lg:mt-10 mt-5 lg:mb-20 md:-mb-20 -mb-12`}>About Me</h1>
            <div className={`lg:flex block lg:px-10 px-5 lg:mb-20 mb-10 `}>
                <div className="lg:w-4/12 flex justify-end items-center lg:px-0 px-5 lg:mb-0 -mb-3">
                    <img className="lg:w-full w-3/12" src={working} alt="About Me" />
                </div>
                <div className="hidden lg:block lg:w-1/12">
                </div>
                <div className={`flex items-center lg:w-8/12 bg-gray-700 text-text shadow-lg px-10 md:py-10 py-5`}>
                    <div>
                        <h4 className="h4 font-bold mb-3">Hello, my name is Anukul Joshi.</h4>
                        <p className={`font-cairo mb-2`}>
                            I am a full-stack web developer with experience in languages like Python, JavaScript, HTML, CSS and frameworks and libraries related to these languages such as Django, ReactJS, Express, TailwindCSS.
                        </p>
                        <p className={`font-cairo`}>
                        </p>
                    </div>
                </div>
            </div>
            <div className={`lg:flex block lg:px-10 px-5 lg:mb-20 mb-10 relative`}>
                <div className={`flex items-center lg:w-8/12 bg-gray-700 text-text shadow-lg px-10 md:py-10 py-5`}>
                    <div>
                        <h4 className="h4 font-bold mb-3">Hello, my name is Anukul Joshi.</h4>
                        <p className={`font-cairo mb-2`}>
                            I am a full-stack web developer with experience in languages like Python, JavaScript, HTML, CSS and frameworks and libraries related to these languages such as Django, ReactJS, Express, TailwindCSS.
                        </p>
                        <p className={`font-cairo`}>
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/12">
                </div>
                <div className="lg:w-4/12 flex justify-start items-center lg:px-0 px-5 lg:mb-0 -mb-3">
                    <img className="lg:w-full w-3/12" src={working} alt="About Me" />
                </div>
            </div>
        </div>
    )
}

export default About
