import Link from 'next/link';

const NavbarItem = ({to, text}) => {
    return ( 
        <Link  href={{
              pathname: "/[category]",
              query: { date: from, category: to },
            }}>
        <a>{text}</a> 
        </Link>)
}

export default NavbarItem