import withPage from '../features/HOCs/withPage';
import fetch from 'isomorphic-fetch';

const Post = (props) => {
    console.log('Props inside post component', props);
    return (
        <h2>yoo from the post</h2>
    )
}
Post.getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }
  
  export default withPage(Post)