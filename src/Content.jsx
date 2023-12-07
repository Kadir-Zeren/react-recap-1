import "./Content.css";
const Content = () => {
  const parStyle = {
    fontFamily: "tahoma",
    fontSize: "1.1rem",
    textAlign: "justify",
  };
  const imgStyle = {
    borderRadius: "20px",
    width: "400px",
    cursor: "pointer",
    margin: "auto",
    display: "block",
  };

  return (
    <main>
      <h2 style={{ color: "white", backgroundColor: "red" }}>React Js</h2>
      <p style={parStyle}>React is JS library</p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2023/11/21/21/38/puffins-8404284_1280.jpg"
        alt=""
      />
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2023/11/20/13/48/butterfly-8401173_640.jpg"
        alt=""
      />
      <p style={parStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        laudantium.
      </p>
      <h4 style={parStyle}>Bu bir h4</h4>
      <h3 className="content-h3">bu bir h3 elementdir</h3>
    </main>
  );
};

export default Content;
