import Link from 'next/link';

const NavbarItem = ({to,text}) => {
	return  <Link href={to} >{text}</Link>
}

export default NavbarItem