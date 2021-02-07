const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer__container">
      <p>Andres Felipe Vargas Gomez &copy; { year }</p>
    </footer>
  );
}

export default Footer;