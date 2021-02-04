import Link from 'next/link';

import HomeInfoMedia from './home-info-media'
import styles from '../../styles/components/HomeInfo.module.scss';

const HomeInfo = () => {
    return (
        <>
            <div className={ styles.container }>
                <div className={ styles.image }>
                    <img src="https://res.cloudinary.com/esdran26/image/upload/v1612371692/55358669_tok40d.jpg" alt="Andres Vargas"/>
                </div>

                <div className={ styles.content }>
                    <p>THIS IS ME</p>
                    <h1>ANDRES VARGAS</h1>
                    <p>Web Developer passionate about software development and <br/>
                    keep learning new technologies, experiences and communities.</p>
                    <br/><br/>
                    
                    <div className={ styles.buttons }>
                        <Link href="/">
                            <a>Discover Now</a>
                        </Link>
                        <a 
                            target="_blank" 
                            href="/"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            <div className={ styles.contact }>
                <div className={ styles.media }>
                    <HomeInfoMedia />
                </div>
            </div>
        </>
    );
}

export default HomeInfo;