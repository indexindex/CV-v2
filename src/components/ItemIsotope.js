import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        console.log(
          m.pageY,
          e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
          e.offsetTop
        );
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio items */}
      <div className="box-items portfolio-items">

        {/* <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/ahhaa.jpg" className="wp-post-image" alt="project" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Project</span>
                      <span className="name">AHHAA</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/ahhaa.jpg)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Project</div>
                <h4>AHHAA</h4>
                <p>
                  The aim of Science Centre AHHAA is to introduce science to everyone and encourage studying through the joy of discovery. More than 3 million people of different ages have visited our exhibitions and other science events. In addition to trying out numerous ´hands-on´ exhibits on our various exhibitions, visitors of AHHAA can also take part in workshops, enjoy planetarium and science theatre shows. We also offer several special programmes for schools. AHHAA welcomes visitors of all ages and offers a great opportunity to spend a fun day filled with science!
                </p>
                <ul>
                  <li>
                    Duration: 7 months;
                  </li>
                  <li>
                    Challanges Overcome: Layout decisions, extensive modularity, programming aspects (components, behaviour), integration of 3rd-party packages;
                  </li>
                  <li>
                    Skills Applied: HTML, CSS (SCSS), JS (ES6+), React.js (component systems), WordPress, Webpack;
                  </li>
                  <li>
                    Achievements: Advanced CSS GRID solutions, extensive React.js component development and usage;
                  </li>
                  <li>
                    Impact: Built a web application to help AHHAA Centre clients to navigate on site;
                  </li>
                  <li>
                    Collaboration: worked with Back-End team, Design lead & Project client.
                  </li>
                </ul>
                <Link href="https://minu.ahhaa.ee/en/">
                  <a target="_blank" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div> */}

        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/elk.png" className="wp-post-image" alt="project" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Project</span>
                      <span className="name">ELK</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/elk.png)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Project</div>
                <h4>ELK</h4>
                <p>
                  The Estonian Children’s Literature Centre is a vital institution for subject-based information in the field of children’s literature. It’s history dates back to 1933, although today’s Centre was established on the 1st December 1997 as the legal successor of the Estonian Children’s Library.
                </p>
                <ul>
                  <li>
                    Duration: 3 months;
                  </li>
                  <li>
                    Challanges Overcome: Layout decisions, extensive modularity, programming aspects (components, behaviour), integration of 3rd-party packages;
                  </li>
                  <li>
                    Skills Applied: HTML, CSS (SCSS), JS (ES6+), React.js (component systems), Webpack;
                  </li>
                  <li>
                    Achievements: Advanced CSS GRID solutions, extensive React.js component development and usage;
                  </li>
                  <li>
                    Impact: Built a website that collects, preserves, and offers the opportunity to engage with childrens’s and youth literature for all enthusiasts as part of Estonia’s cultural heritage;
                  </li>
                  <li>
                    Collaboration: worked with Back-End team, Design lead & Project client.
                  </li>
                </ul>
                <Link href="https://elk.ee/en/">
                  <a target="_blank" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/cuitu.png" className="wp-post-image" alt="project" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Project</span>
                      <span className="name">Cuitu</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/cuitu.png)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Project</div>
                <h4>Cuitu</h4>
                <p>
                  Cuitu® is a feed ingredient produced with proprietary technology developed by Bang & Bonsomer.
                </p>
                <ul>
                  <li>
                    Duration: 1 month;
                  </li>
                  <li>
                    Challanges Overcome: Layout decisions;
                  </li>
                  <li>
                    Skills Applied: HTML, CSS (SCSS), JS (ES6+), WordPress, Webpack;
                  </li>
                  <li>
                    Achievements: Advanced CSS GRID solutions, Accurate page structure according to design template;
                  </li>
                  <li>
                    Impact: Highlight and ease of access for one of B&B brand products;
                  </li>
                  <li>
                    Collaboration: worked with Design lead & Project client.
                  </li>
                </ul>
                <p>! Project is yet to be live but exists on our staging server.</p>
                <Link href="https://cuitu.bangbonsomer.staging.1kdigital.com/">
                  <a target="_blank" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/kaart.png" className="wp-post-image" alt="project" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Project</span>
                      <span className="name">Maaportaali kaart (Land portal map)</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/kaart.png)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Project</div>
                <h4>Maaportaali kaart (Land portal map)</h4>
                <p>
                  Map serves as an interactive application for main website. It allows clients to see active auctions,
                  advertisements and buying areas. Allows to see landmarks through different layers and help with planning and selling.
                  Features also include: liking a landmark, see owners and agents, custom searches, own CSV import.
                </p>
                <ul>
                  <li>
                    Duration: 2 months (partly continuous development on top of built structure);
                  </li>
                  <li>
                    Challanges Overcome: Filtering of data with React.js components, workflow with existing code logic, big project maintenance and code compilation improvements;
                  </li>
                  <li>
                    Skills Applied: HTML, CSS (SCSS), JS (ES6+), React.js (component systems), jQuery.js, Webpack;
                  </li>
                  <li>
                    Achievements: Successful data manipulation of OpenLayers library to build a scalable map application;
                  </li>
                  <li>
                    Impact: Map serves many points of interest for clients: landmarks, advertisements, auctions, buying areas;
                  </li>
                  <li>
                    Collaboration: worked with Back-End team & Design lead.
                  </li>
                </ul>
                <Link href="https://maaportaal.ee/kaart/index.php?keel=en&f=">
                  <a target="_blank" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/maaportaal.png" className="wp-post-image" alt="project" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Project</span>
                      <span className="name">Maaportaal (Land portal)</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/maaportaal.png)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Project</div>
                <h4>Maaportaal (Land portal)</h4>
                <p>
                  Maaportaal.ee is an unique website that allows users to sell property, cutting rights, and timber material through auction or advertisement for free.
                  For buyers we offer map application that makes it easier and faster to buy real estate or cutting rights.
                  As of 2019 May Maaportaal OÜ is a member of Estonian Chamber of Agriculture and Commerce.
                </p>
                <ul>
                  <li>
                    Duration: 5 months (partly continuous development on top of built structure);
                  </li>
                  <li>
                    Challanges Overcome: Integration of newly added 3rd-party plugins and workflow with existing code logic, big project maintenance and code compilation improvements;
                  </li>
                  <li>
                    Skills Applied: HTML, CSS (SCSS), JS (ES6+), React.js (component systems, navigation and routing), Webpack;
                  </li>
                  <li>
                    Achievements: Successful HTML/CSS/React.js integrations with data flow inside large tables and throughout page navigation;
                  </li>
                  <li>
                    Impact: Main website for real estate buyers in local forest/land sector;
                  </li>
                  <li>
                    Collaboration: worked with Back-End team & Design lead.
                  </li>
                </ul>
                <Link href="https://maaportaal.ee/index.php?keel=en&f=avaleht">
                  <a target="_blank" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/eta.png" className="wp-post-image" alt="project" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Project</span>
                      <span className="name">ETA</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/eta.png)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Project</div>
                <h4>ETA</h4>
                <p>
                  The Estonian Theatre Agency is a development and competence center in the field of Estonian performing arts, the main activities of which are: Playwriting and copyrights, theatre information and statistics, internationalization of Estonian Theatre.
                </p>
                <ul>
                  <li>
                    Duration: 6 months;
                  </li>
                  <li>
                    Challanges Overcome: Complex layout decisions, async-await fetch calls for data management, implementation of many 3rd-party packages for individual solutions;
                  </li>
                  <li>
                    Skills Applied: HTML, CSS (SCSS), JS (ES6+), React.js (component systems), WordPress, Webpack;
                  </li>
                  <li>
                    Achievements: Built complex data stucture dependant website, which relies heavily on data visualization, integrated solutions to connect fetched data with dynamically created components, big project maintenance with best practices in mind;
                  </li>
                  <li>
                    Impact: Main website in Estonia to book and check plays, performances and actors. See history of theatre arts and people, see statistics, internationalization and much much more;
                  </li>
                  <li>
                    Collaboration: worked with Back-End team, Design lead, Project client and were aid in certain aspects by some theatre background people.
                  </li>
                </ul>
                <Link href="https://teater.ee/?lang=en">
                  <a target="_blank" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/corp.png" className="wp-post-image" alt="project" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Project</span>
                      <span className="name">B&B Corporate website</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/corp.png)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Project</div>
                <h4>B&B Corporate website</h4>
                <p>
                  Bang & Bonsomer’s strategic approach is to offer smart material technologies to our customers. Smart material technologies are a combination of distribution, our own products, smart process technology solutions, services, and own application laboratories/technical centsearchres. We strive to be known as an innovative material technology company with knowledge and heritage dating back to 1927.
                </p>
                <ul>
                  <li>
                    Duration: 4 months;
                  </li>
                  <li>
                    Challanges Overcome: Extension on top of Kiranto project, building complex location routes to separate B&B offices and warehouses, big project maintenance;
                  </li>
                  <li>
                    Skills Applied: HTML, CSS (SCSS), JS (ES6+), React.js (component systems), WordPress, Webpack;
                  </li>
                  <li>
                    Achievements: Biggest project I have built in terms of page redirections, a home page for many smaller unit pages;
                  </li>
                  <li>
                    Impact: Development of main B&B corporate website;
                  </li>
                  <li>
                    Collaboration: worked with Back-End team, Design lead & Project client.
                  </li>
                </ul>
                <p>! Project is yet to be live but exists on our staging server.</p>
                <Link href="https://v2.bangbonsomer.staging.1kdigital.com/">
                  <a target="_blank" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/graco.png" className="wp-post-image" alt="project" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Project</span>
                      <span className="name">GRACO</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/graco.png)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Project</div>
                <h4>GRACO</h4>
                <p>
                  GRACO EKOSPRAY® is a safe, well-known polyurethane foam which has been guaranteeing high-quality insulation for even the most demanding objects for over 40 years. EKOSPRAY® insulations provide this heat-insulating foam in sprayable form for use in any renovation project.
                </p>
                <ul>
                  <li>
                    Duration: 1 month;
                  </li>
                  <li>
                    Challanges Overcome: Layout decisions, responsive layout;
                  </li>
                  <li>
                    Skills Applied: HTML, CSS (SCSS), JS (ES6+), WordPress, Webpack;
                  </li>
                  <li>
                    Achievements: Creation of responsive multi-component page;
                  </li>
                  <li>
                    Impact: Development of yet another B&B brands, which helps to inform customers about new innovations in renovating sector;
                  </li>
                  <li>
                    Collaboration: worked with Design lead & Project client.
                  </li>
                </ul>
                <Link href="https://graco.ekospray.fi/?lang=en">
                  <a target="_blank" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/kiranto.png" className="wp-post-image" alt="project" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Project</span>
                      <span className="name">Kiranto Foods</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/kiranto.png)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Project</div>
                <h4>Kiranto Foods</h4>
                <p>
                  Kiranto Foods ensures that the flavour and function of your food is always in perfect balance.
                </p>
                <ul>
                  <li>
                    Duration: 3 months;
                  </li>
                  <li>
                    Challanges Overcome: Extension on top of Eurogum project, extensive modularity, programming aspects (components, behaviour);
                  </li>
                  <li>
                    Skills Applied: HTML, CSS (SCSS), JS (ES6+), jQuery.js, Zurb F., WordPress, Webpack;
                  </li>
                  <li>
                    Achievements: Further extension of CSS GRID solutions on top of Eurogum project, OOP modularity for easier extension of the project, big project maintenance;
                  </li>
                  <li>
                    Impact: Highlight and ease of access for one of many B&B brands;
                  </li>
                  <li>
                    Collaboration: worked with Back-End team, Design lead & Project client.
                  </li>
                </ul>
                <Link href="https://kiranto.bangbonsomer.com/">
                  <a target="_blank" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/eurogum.png" className="wp-post-image" alt="project" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Project</span>
                      <span className="name">Eurogum</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/eurogum.png)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Project</div>
                <h4>Eurogum</h4>
                <p>
                  EUROGUM A/S is an independent Danish manufacturer of carrageenan and alginate used by the food industry in a wide range of products to provide and improve stability, texture, and mouthfeel.
                </p>
                <ul>
                  <li>
                    Duration: 4 months;
                  </li>
                  <li>
                    Challanges Overcome: Layout decisions, extensive modularity, programming aspects (components, behaviour);
                  </li>
                  <li>
                    Skills Applied: HTML, CSS (SCSS), JS (ES6+), jQuery.js, Zurb F., WordPress, Webpack;
                  </li>
                  <li>
                    Achievements: Advanced CSS GRID solutions, OOP modularity for easier extension of the project, big project maintenance;
                  </li>
                  <li>
                    Impact: Highlight and ease of access for one of many B&B brands;
                  </li>
                  <li>
                    Collaboration: worked with Back-End team, Design lead & Project client.
                  </li>
                </ul>
                <Link href="https://eurogum.bangbonsomer.com/">
                  <a target="_blank" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/ellsa.png" className="wp-post-image" alt="project" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Project</span>
                      <span className="name">ELLSA</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/ellsa.png)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Project</div>
                <h4>ELLSA</h4>
                <p>
                  ELLSA - Estonian Children’s Literature Centre, is a database website that introduces Estonian children’s writers and illustrators, contains information about the authors, their books and translations.
                </p>
                <ul>
                  <li>
                    Duration: 1 month;
                  </li>
                  <li>
                    Challanges Overcome: Layout decisions;
                  </li>
                  <li>
                    Skills Applied: HTML, CSS (SCSS), JS (ES6+), jQuery.js, Zurb F., WordPress;
                  </li>
                  <li>
                    Achievements: Successful first project;
                  </li>
                  <li>
                    Impact: wider accessibility of information for: writers, illustrators, readers and literature enthusiasts;
                  </li>
                  <li>
                    Collaboration: worked with Back-End team & Design lead.
                  </li>
                </ul>
                <Link href="https://ellsa.ee/">
                  <a target="_blank" className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotope;
