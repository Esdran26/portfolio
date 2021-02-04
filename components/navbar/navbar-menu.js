import Link from 'next/link';

const NavbarMenu = ({ menu, styleLinksMenu }) => {
    return (
        <>
            {
                menu.map((item, index) => (
                    <Link
                        style={ styleLinksMenu }
                        href={ item.to }
                        key={ index }
                    >
                        <a>{ item.name }</a>
                    </Link>
                ))
            }
        </>
    );
}

export default NavbarMenu;