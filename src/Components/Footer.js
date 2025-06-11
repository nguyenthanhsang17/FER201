import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#282c34",
      color: "white",
      textAlign: "center",
      padding: "20px 10px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: "relative",
      bottom: 0,
      width: "100%",
      boxShadow: "0 -2px 8px rgba(0,0,0,0.2)",
      marginTop: "auto",
    },
    link: {
      color: "#61dafb",
      textDecoration: "none",
      margin: "0 8px",
      cursor: "pointer",
      transition: "color 0.3s",
    },
  };

  // Simple hover effect for links
  const [hoverIndex, setHoverIndex] = React.useState(null);

  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
  ];

  return (
    <footer style={styles.footer}>
      <div>
        {socialLinks.map((link, idx) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.link,
              color: hoverIndex === idx ? "#21a1f1" : styles.link.color,
            }}
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {link.name}
          </a>
        ))}
      </div>
      <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
