/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';

const Card = ({author = 'tgrecojs', url = 'https://twitter.com/tgrecojs', title = 'Default Card'}) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div style={{border: '2px solid white',
    width: '400px', display: 'flex', flexDirection: 'column'}}>
    <h2>{author}</h2>
    <p>{title}</p>
    <button style={{height: '60px',
      background: 'rgb(54, 55, 50)'}}><a href={url} target="_blank">
        Read {title}
      </a>
    </button>
  </div>
);
export default Card;
