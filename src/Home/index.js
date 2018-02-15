import React from 'react';
import { withClientData } from 'yllet-react';

class Home extends React.Component {
  render() {
    if (this.props.error) {
      return <p>{this.props.error.message}</p>;
    }

    if (this.props.loading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>Home</h1>
        <ul>
          {this.props.data.map(post => (
            <li key={post.slug}><a href={post.slug}>{post.title.rendered}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withClientData(client => {
  return client.posts().get();
})(Home);
