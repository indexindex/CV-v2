const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">2020 - Present</div>
                <div className="name">Front-End Developer - 1K-Digital OÜ</div>
                <div className="text">
                  Experience in building WordPress websites:<br/>
                  <strong>e-stores</strong>, <strong>desktop/mobile applications</strong>, <strong>websites</strong>, <strong>one-pagers</strong>.<br/><br/>
                  Experience building websites with concepts:<br/>
                  <strong>React.js integrations</strong>, <strong>React Router DOM navigation</strong>, <strong>OOP</strong>, <strong>SPA-integrations</strong>, <strong>SCSS w BEM-methodology</strong>, <strong>CSS3 GRID responsive layouts</strong>, <strong>BEM-methodology</strong>.<br/><br/>
                  Navigating designs through:<br/>
                  <strong>Figma</strong>, <strong>Affinity</strong>, <strong>Adobe XD</strong>, <strong>Adobe Photoshop</strong>, <strong>Adobe Illustrator</strong>.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2020 - Present</div>
                <div className="name">Freelance Web-Developer - multiple clients</div>
                <div className="text">
                  Experience in building websites:<br/>
                  <strong>Front-End websites</strong>, <strong>Front-End + Back-End websites</strong>, <strong>Shopify e-store page</strong>, <strong>blog-pages</strong>, <strong>one-pagers</strong>.<br/><br/>
                  Experience building websites with concepts:<br/>
                  <strong>React.js & React Router DOM</strong>, <strong>Node.js (Express.js) w mongoDB</strong>, <strong>React.js w Firebase Auth + DB</strong>, <strong>SPA-integrations</strong>, <strong>SCSS w BEM-methodology</strong>, <strong>CSS3 GRID responsive layouts</strong>, <strong>BEM-methodology</strong>.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2019 - 2020</div>
                <div className="name">Front-End Developer - WebShark OÜ</div>
                <div className="text">
                  Experience in building WordPress websites:<br/>
                  <strong>e-store</strong>, <strong>websites</strong>, <strong>one-pagers</strong>.<br/><br/>
                  Building CSS layouts with SCSS, using Flexbox & CSS GRID implementations.<br/><br/>
                  JS form validation functionalities, fetching and sending data with Axios
                  library to speed up development process.<br/><br/>
                  Building HTML5 banners with application of CSS3 animations.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">2020 - Present</div>
                <div className="name">Zero To Mastery Academy</div>
                <div className="text">
                  Online education in Web Development category.<br/><br/>
                  Involvement in team projects, tackling Front-End & Back-End implementations
                  to solve coding challenges. Participation in online meetups and monthly code contributions. 
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2018 - 2020</div>
                <div className="name">Tallinn Polytechnic School</div>
                <div className="text">
                  Vocational education in Computer Science and Web Development Speciality.<br/><br/>
                  Proficient learning curve in Web Development field with Grade 4 Multimedia
                  Specialist Degree.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
