import BottomLogo from "../assets/bottom-logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={BottomLogo} alt="bottom logo"></img>
      </div>
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
export default Footer;
