import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";


function Gallery(props) {
  const styles = {
    wrapper: {
      backgroundColor: "#EBD7C1",
      padding: "50px",
      color: "#462920",
      marginLeft: "50px",
      marginRight: "50px",
      marginBottom: "20px",
      marginTop: "30px",
      borderRadius: "6px",
      padding: "30px",
    },
    about: {
      width: "auto",
      margin: "0 auto",
      textAlign: "center",
    },
    skills: {
      textAlign: "center",
    },
    badges: {
      height: "50px",
      margin: "15px",
      color: "#462920",
    },
    h3: {
      fontSize: "25px",
      marginTop: "30px",
      marginBottom: "15px",
    },
    aside: {
      margin: "40px",
      textAlign: "center",
    },
  };

  return (
    <main>
      <h1 style={{ marginBottom: "30px" }}>About Me</h1>

      <div className="wrapper" style={styles.wrapper}>
        <p className="about" style={styles.about}>
          I'm a marketing professional with a passion for design. I hold
          experience in areas such as graphic design, marketing strategy, paid
          social advertising and E-Commerce - just to name a few! I've recently
          decided to make a career switch to Front-End Web Development and I'm
          excited to bring my marketing mindset and design skills to the field!
        </p>
        <div>
          <section className="skills" style={styles.skills}>
            <h3 style={styles.h3}>Skills</h3>

            <h5 style={{ margin: "10px" }}>Development:</h5>
            <p>
              HTML, CSS, Javascript, JQuery, JSX, Bootstrap, moment.js, React,
              Node.js, JSON, Git & Git Version Control, JEST, APIs
            </p>

            <h5 style={{ marginTop: "20px", marginBottom: "10px" }}>
              Transferable:
            </h5>
            <p>
              Social media advertising, Graphic design, Adobe: Photoshop,
              Indesign and Illustrator, Attention to detail, Quick learner
            </p>
          </section>

          <aside style={styles.aside}>
            <a href="https://github.com/TamzinC" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                style={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/tamzin-chikhalia-44a59a188/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="mailto:tamzin.chikhalia@gmail.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="./assets/tamzin_cv.pdf" target="_blank">
              <FontAwesomeIcon
                icon={faFilePdf}
                style={styles.badges}
              ></FontAwesomeIcon>
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Gallery;