import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Basu.
            <br className="hidden lg:inline-block" /> I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a user-focused and detail-oriented Web Developer with a passion
            for designing creative websites using the latest programming
            languages and technologies. I recently obtained a Certificate in Web
            Development from the Ohio State University, Coding Bootcamp. Also, I
            am self-learning evolving languages and technologies such as C++,
            Laravel, Java, Python, and AWS through multiple free websites and
            YouTube tutorials. Currently employed with the State of Ohio,
            Opportunities for Ohioans with Disabilities, as an Account Examiner
            II, I processed the highest amount of authorizations for services in
            2021 throughout the State of Ohio.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="a picture of me"
            src="./basu.jpg"
          />
        </div>
      </div>
    </section>
  );
}
