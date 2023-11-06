import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const KnowledgeSkills = () => {
  return (
    <div className="section skills" id="section-skills-know">
      <div className="content">
        <div className="title">
          <div className="title_inner">Technical Skills</div>
        </div>
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Proficient in HTML5, CSS3, and JavaScript (ES6+)</div>
            </li>
            <li>
              <div className="name">Proficient in using React.js to create engaging and dynamic user interfaces</div>
            </li>
            <li>
              <div className="name">Experience in using RESTful APIs to communicate between Front-End and Back-End</div>
            </li>
            <li>
              <div className="name">Competence in using Node.js and Express.js for building server-side applications</div>
            </li>
            <li>
              <div className="name">Experienced in working with MongoDB and database design</div>
            </li>
            <li>
              <div className="name">Familiarity with Git version control for collaborative development</div>
            </li>
          </ul>
        </div>
        <br/><br/>
        <div className="title">
          <div className="title_inner">Everyday Tech</div>
        </div>
        <div className="skills list content-box tech">
          <ul>
            <li>
              <div className="name"><strong>Front-End Dev:</strong> HTML, CSS(SCSS), JS(ES6+), React.js, TypeScript, Redux, Redux Toolkit, Axios</div>
            </li>
            <li>
              <div className="name"><strong>Front-End Dev Tools:</strong> NPM for package management, PageSpeed Insights, Browser Dev Tools: (Chrome, Firefox, Edge, Safari)</div>
            </li>
            <li>
              <div className="name"><strong>Back-End Dev:</strong> Node.js(Express.js), MongoDB(mongoose.js)</div>
            </li>
            <li>
              <div className="name"><strong>Back-End Dev Tools:</strong> MongoDB Compass for DB management, Postman for API testing</div>
            </li>
            <li>
              <div className="name"><strong>Version Control:</strong> Git, GitHub, SourceTree, Bitbucket</div>
            </li>
            <li>
              <div className="name"><strong>Design Tools:</strong> Figma, Adobe Photoshop, Adobe Illustrator, Adobe XD, Affinity Designer</div>
            </li>
            <li>
              <div className="name"><strong>Project Management:</strong> Trello</div>
            </li>
            <li>
              <div className="name"><strong>IDE:</strong> Visual Studio Code</div>
            </li>
            <li>
              <div className="name"><strong>OS:</strong> Windows 11, macOS</div>
            </li>
          </ul>
        </div>
        <br/><br/>
        <div className="title">
          <div className="title_inner">Front-End Skills</div>
        </div>
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Creating responsive and mobile-friendly web applications</div>
            </li>
            <li>
              <div className="name">Proficiency in CSS preprocessor like Sass (SCSS)</div>
            </li>
            <li>
              <div className="name">Familiarity with CSS frameworks like Bootstrap or Zurb Foundation</div>
            </li>
            <li>
              <div className="name">Strong understanding of code compiler, like Webpack</div>
            </li>
            <li>
              <div className="name">Solid understanding of cross-browser compatibility issues and solutions</div>
            </li>
            <li>
              <div className="name">Ability to implement modern design patterns and best practices</div>
            </li>
          </ul>
        </div>
        <br/><br/>
        <div className="title">
          <div className="title_inner">Back-End Skills</div>
        </div>
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Developing APIs and handling CRUD operations using Express.js</div>
            </li>
            <li>
              <div className="name">Experience with authentication and authorization mechanism (Firebase Auth)</div>
            </li>
            <li>
              <div className="name">Understanding of asynchronous programming and handling callbacks/promises/async-await</div>
            </li>
            <li>
              <div className="name">Familiarity with middleware and routing concepts</div>
            </li>
          </ul>
        </div>
        <br/><br/>
        <div className="title">
          <div className="title_inner">General Knowledge</div>
        </div>
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Strong problem-solving skills and debugging techniques</div>
            </li>
            <li>
              <div className="name">Awareness of web performance optimization strategies</div>
            </li>
            <li>
              <div className="name">Understanding of SEO principles and their implementation</div>
            </li>
            <li>
              <div className="name">Basic knowledge of UI/UX design principles for better user experiences</div>
            </li>
            <li>
              <div className="name">Comfortable with the command line and development tools</div>
            </li>
          </ul>
        </div>
        <br/><br/>
        <div className="title">
          <div className="title_inner">Collaboration and Communication</div>
        </div>
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Ability to collaborate with designers, Back-End developers, and other team members</div>
            </li>
            <li>
              <div className="name">Effective communication skills for discussing project requirements and progress</div>
            </li>
          </ul>
        </div>
        <br/><br/>
        <div className="title">
          <div className="title_inner">Continuous Learning</div>
        </div>
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Demonstrated willingness to learn and adapt to new technologies and trends</div>
            </li>
            <li>
              <div className="name">Active participation in online developer communities, forums, and tech blogs</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Language Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Russian</div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Estonian</div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};