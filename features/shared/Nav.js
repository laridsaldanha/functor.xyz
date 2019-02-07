import Link from 'next/link'



const Nav = ({links}) => 
    links.map(({key, href, pathName, label}) => <Link key={key} href={href} as={pathName}><a>{label}</a></Link>)

export default ({links}) => <ul className="top-nav"><Nav links={links} /></ul>;
