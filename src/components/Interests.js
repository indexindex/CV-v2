const Interests = () => {
  return (
    <div className="section service" id="section-interests">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Interests</div>
        </div>
        {/* interests items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-code" />
              </div>
              <div className="name">Coding</div>
              <div className="text">
                Aside from work I also like to code my own projects.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-bug" />
              </div>
              <div className="name">Code Challanges</div>
              <div className="text">
                To keep my knowledge sharp, I practice with code challanges.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-palette" />
              </div>
              <div className="name">Designing</div>
              <div className="text">
                Adobe Illustrator & Figma are usually my main choices when it comes to template building.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-video" />
              </div>
              <div className="name">Video Editing</div>
              <div className="text">
                Adobe Premiere Pro or CyberLink PowerDirector are the programs I use for video content creation.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-book" />
              </div>
              <div className="name">Reading</div>
              <div className="text">
                When I have a book I like and time for reading it.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-camera" />
              </div>
              <div className="name">Photography</div>
              <div className="text">
                Habit throughout many years.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-camera" />
              </div>
              <div className="name">Attending Gym</div>
              <div className="text">
                Something I also do to keep myself more active.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-plane" />
              </div>
              <div className="name">Traveling</div>
              <div className="text">
                I like to meet different cultures and see world beyond my own country.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Interests;
