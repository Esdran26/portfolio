import styles from '../../styles/components/footer/Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={ styles.footer }>
      <p>Andres Felipe Vargas Gomez &copy; { year }</p>
    </footer>
  );
}

export default Footer;