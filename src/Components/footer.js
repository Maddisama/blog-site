import Logo from "../img/logo.png";
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>
        {" "}
        Made by Madison Vazquez Mitchell using <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
