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
          I am a Medical Biochemist and a Dental student. I've recently
          decided to step into Front-End Web Development and I'm
          excited to bring my skills into the field!
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
              AGILE, Attention to detail, analytical. 
            </p>
          </section>

          <aside style={styles.aside}>
            <a href="" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                style={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="mailto:tasmiah070301@gmail.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={styles.badges}
              ></FontAwesomeIcon>
            </a>
            <a href="" target="_blank">
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