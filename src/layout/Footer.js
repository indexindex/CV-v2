const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: <a href="mailto:andrisuvorov@gmail.com">andrisuvorov@gmail.com</a></p>
        <p>T: <a href="tel:+37256620550">+372 5662 0550</a></p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/andri-suvorov-4a10b81a9">
            <span className="icon fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
