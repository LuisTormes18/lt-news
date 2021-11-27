import Link from 'next/link';

const NavbarItem = ({to,text}) => {
     const date = new Date();
     const from = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;

    return ( 
        <Link  href={{
              pathname: "/[date]/[category]",
              query: { date: from, category: to },
            }}>

        <a>{text}</a> 
        </Link>)
}

export default NavbarItem