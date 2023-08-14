const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/profile.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            Hello! I’m Andri Suvorov. Front-End developer from Estonia, Tallinn.<br/>
            I create user-friendly, visually pleasant, easy to use websites/web applications.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 25
              </li>
              <li>
                <strong>Residence:</strong> Estonia, Tallinn
              </li>
              <li>
                <strong>Phone:</strong> +372 5662 0550
              </li>
              <li>
                <strong>E-mail:</strong> andrisuvorov@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="mailto:andrisuvorov@gmail.com" className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">Send Mail</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
