import "../App.css";

function Home() {
  return (
    <div className="container">

      {/* Profile Image */}
      <img 
        src="/image.png" 
        alt="profile"
        style={{ 
          width: "150px", 
          height: "150px",
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: "15px"
        }} 
      />

      {/* Name & Title */}
      <h1>Varshith Duppelli</h1>
      <h3 style={{ color: "#555" }}>
        CSE Student | AI & Full-Stack
      </h3>

      {/* About Me */}
      <div className="card">
        <h2>About Me</h2>
        <p>
          I am a Computer Science Engineering student at Mahindra University with strong
          interest in Artificial Intelligence, Machine Learning, and full-stack development.
          I enjoy building real-world projects like stock market analysis systems and AI-based
          applications that solve practical problems. I am actively seeking opportunities to
          contribute to scalable, data-driven solutions.
        </p>
      </div>

      {/* Skills */}
      <div className="card">
        <h2>Skills</h2>
        <ul>
          <li>Python, JavaScript, C</li>
          <li>React, Flask, Node.js</li>
          <li>MySQL, MongoDB</li>
          <li>Power BI</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="card">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:varshithduppelli@gmail.com">
            varshithduppelli@gmail.com
          </a>
        </p>
        Mobile:{" "}
        <a href="Phone: +919392821485">
             9392821485
        </a>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/varshcodes-lab"
            target="_blank"
            rel="noreferrer"
          >
            github.com/varshcodes-lab
          </a>
        </p>
      </div>

    </div>
  );
}

export default Home;