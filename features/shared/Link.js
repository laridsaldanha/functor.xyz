import Link from 'next/link'
import { connect }from 'react-redux';

const NavLink = ({links}) => 
        links.map(({href, pathName, key, label}) =>
            <Link key={key} href={href} as={pathName}><a>{label}</a></Link>;

export default connect(state => ({links: state.links}))(NavLink);
