import React from 'react';
import { withClientData } from 'yllet-react';

class Page extends React.Component {
  render() {
    if (this.props.error) {
      return <p>{this.props.error.message}</p>;
    }

    if (!this.props.data) {
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

export default withClientData(client => {
  return client.posts().get(1);
})(Page);
