const Projects = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Redux Toolkit Projects</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={styles.headings}>Counter App</h3>
          <p style={styles.para}>Simple Counter using Redux Toolkit</p>
          <a style={styles.link} href="https://counter-redux-eight-kohl.vercel.app/" target="_blank">Live Demo</a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "40px", textAlign: "center" },
  heading: { marginBottom: "20px" },
  grid: { display: "flex", gap: "20px", justifyContent: "center" },
  card: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    width: "250px",
    background:"#6393eb",
  },
   headings:{
  color:"#fff"
  },
  para:{
  color:"#fff"
  },
  link:{
    color:"#fff",
  }
};

export default Projects;
