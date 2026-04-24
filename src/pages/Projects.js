import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Projects</h1>

      <ProjectCard
        title="Stock Market Alert System"
        desc="Real-time alerts using RSI, VWAP"
        link="https://github.com/varshcodes-lab/stock-alert-system"
      />

      <ProjectCard
        title="Smart Fit AI"
        desc="AI-based fitness recommendation system"
        link="https://github.com/varshcodes-lab/SmartFit"
      />

      <ProjectCard
        title="Crypto Intraday alerts "
        desc="Real time intraday trading alerts"
        link="https://github.com/varshcodes-lab/crypto-intraday-alert-engine"
      />

    </div>
  );
}

export default Projects;