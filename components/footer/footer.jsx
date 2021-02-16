import Link from 'next/link';
import styles from '../../styles/components/footer/Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={ styles.footer }>
      <p>
        Andres Felipe Vargas Gomez <Link href="/login">
          <a style={{ color: '#707070', fontWeight: 'normal'}}>
            &copy;
          </a>
        </Link> { year }
      </p>
    </footer>
  );
}

export default Footer;