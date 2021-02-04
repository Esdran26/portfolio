import PropTypes from 'prop-types';
import Link from 'next/link'

import NavbarMenu from './navbar-menu';
import styles from '../../styles/components/Navbar.module.scss';

const Navbar = ({ transparent }) => {
    const menu = [
        {
            to: '/',
            name: 'Home'
        },
        {
            to: '/',
            name: 'About'
        },
        {
            to: '/',
            name: 'Timeline'
        },
        {
            to: '/',
            name: 'Projects'
        },
    ];

    let styleMenu = {};
    let styleLinksMenu = {};

    if(transparent === 'on') {
        styleMenu = {
            backgroundColor: 'transparent'
        }

        styleLinksMenu = {
            color: '#111414'
        }
    }
    else {
        styleMenu = {
            backgroundColor: '#111414',
            position: 'fixed'
        }

        styleLinksMenu = {
            color: '#EDF6F9'
        }
    }

    return (
        <div
            style={ styleMenu } className={ styles.container }
        >
            <div className={ styles.logo }>
                <h2>
                    <Link href="/" >
                       <a>AV</a>
                    </Link>
                </h2>
            </div>
            <div className={ styles.menu }>
                <NavbarMenu 
                    menu={ menu }
                    styleLinksMenu={ styleLinksMenu }
                />
            </div>
        </div>
    );
}

export default Navbar;

Navbar.propTypes = {
    transparent: PropTypes.string.isRequired
}