import React from 'react';
import { withClient } from 'yllet-react';

class Page extends React.Component {
  state = {};

  componentDidMount() {
    const slug = this.props.match.params.slug.replace('/', '');

    this.props.client.posts().get({
        slug: slug
    }).then(res => {
        this.setState({
            post: res.data[0]
        })
    });
  }

  render() {
    if (!this.state.post) {
      return <p>Loading...</p>;
    }

    const { post } = this.state;

    return (
      <div>
        <h2>{post.title.rendered}</h2>
        <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    );
  }
}

export default withClient(Page);
