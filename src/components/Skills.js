import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        {/* skills items */}
        <div className="skills circles content-box">
          <ul>
          <li>
              <div className="name">HTML</div>
              <div className="progress p90">
                {" "}
                <div className="percentage">
                  <span className="percent">90%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">CSS</div>
              <div className="progress p90">
                {" "}
                <div className="percentage">
                  <span className="percent">90%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>

            <li>
              <div className="name">JavaScript (ES6+)</div>
              <div className="progress p85">
                {" "}
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">React.js</div>
              <div className="progress p40">
                {" "}
                <div className="percentage">
                  <span className="percent">40%</span>
                </div>
                <span>40%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">jQuery.js</div>
              <div className="progress p80">
                {" "}
                <div className="percentage">
                  <span className="percent">80%</span>
                </div>
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">TypeScript.js</div>
              <div className="progress p20">
                {" "}
                <div className="percentage">
                  <span className="percent">20%</span>
                </div>
                <span>20%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">SCSS</div>
              <div className="progress p85">
                {" "}
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Bootstrap</div>
              <div className="progress p70">
                {" "}
                <div className="percentage">
                  <span className="percent">70%</span>
                </div>
                <span>70%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Zurb Foundation</div>
              <div className="progress p70">
                {" "}
                <div className="percentage">
                  <span className="percent">70%</span>
                </div>
                <span>70%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Node.js</div>
              <div className="progress p30">
                {" "}
                <div className="percentage">
                  <span className="percent">30%</span>
                </div>
                <span>30%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Express.js</div>
              <div className="progress p30">
                {" "}
                <div className="percentage">
                  <span className="percent">30%</span>
                </div>
                <span>30%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">MongoDB</div>
              <div className="progress p25">
                {" "}
                <div className="percentage">
                  <span className="percent">25</span>
                </div>
                <span>25%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Firebase</div>
              <div className="progress p35">
                {" "}
                <div className="percentage">
                  <span className="percent">35%</span>
                </div>
                <span>35%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">WordPress</div>
              <div className="progress p65">
                {" "}
                <div className="percentage">
                  <span className="percent">65%</span>
                </div>
                <span>65%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Webpack</div>
              <div className="progress p95">
                {" "}
                <div className="percentage">
                  <span className="percent">95%</span>
                </div>
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
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