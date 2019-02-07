import Link from 'next/link'



const Nav = ({links}) => 
    links.map(({endpoint, pathName, label}) => <Link href={endpoint} as={pathName}><a>{label}</a></Link>)

export default ({links}) => <ul className="top-nav"><Nav links={links} /></ul>;
