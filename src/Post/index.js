import React from 'react';
import { withClientData } from 'yllet-react';

class Post extends React.Component {
  render() {
    if (this.props.error) {
      return <p>{this.props.error.message}</p>;
    }

    if (this.props.loading) {
      return <p>Loading...</p>;
    }

    const post = this.props.data;

    return (
      <div>
        <h2>{post.title.rendered}</h2>
        <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    );
  }
}

export default withClientData((client, props) => {
  return client.posts().get({
    slug: props.match.params.slug
  }).then(res => {
    if (res.status === 200 && res.data.length) {
      return res.data[0];
    }

    throw new Error('No post found');
  });
})(Post);
