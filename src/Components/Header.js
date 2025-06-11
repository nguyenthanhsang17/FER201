import React from "react";

const Header = () => {
  const styles = {
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      backgroundColor: "#282c34",
      color: "white",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontWeight: "bold",
      fontSize: "1.5rem",
      cursor: "pointer",
    },
    nav: {
      display: "flex",
      gap: "20px",
      fontSize: "1rem",
    },
    navItem: {
      cursor: "pointer",
      transition: "color 0.3s",
    },
    navItemHover: {
      color: "#61dafb",
    },
    button: {
      backgroundColor: "#61dafb",
      border: "none",
      borderRadius: "5px",
      padding: "8px 16px",
      color: "#282c34",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#21a1f1",
      color: "white",
    },
  };

  // Simple hover effect with React state
  const [hoverIndex, setHoverIndex] = React.useState(null);
  const [btnHover, setBtnHover] = React.useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (

    <header style={styles.header}>
      <div style={styles.logo}>MyBrand</div>
      <nav style={styles.nav}>
        {navItems.map((item, index) => (
          <div
            key={item}
            style={{
              ...styles.navItem,
              ...(hoverIndex === index ? styles.navItemHover : {}),
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {item}
          </div>
        ))}
      </nav>
      <button
        style={{ ...styles.button, ...(btnHover ? styles.buttonHover : {}) }}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
      >
        Sign Up
      </button>
    </header>
  );
};

export default Header;
