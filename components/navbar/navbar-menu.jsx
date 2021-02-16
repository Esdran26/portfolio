import Link from 'next/link';

const NavbarMenu = ({ menu, section, styleLinksMenu }) => {
  return (
    <>
      {
        menu.map((item, index) => (
          <Link
            href={ item.to }
            key={ index }
          >
            <a
              style={ styleLinksMenu }
            >
              { item.name }
            </a>
          </Link>
        ))
      }
    </>
  );
}

export default NavbarMenu;