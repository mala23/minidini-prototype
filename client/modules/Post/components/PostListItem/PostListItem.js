import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
    <div className={styles['single-post']}>
      <img className={styles['post-icon']} src="https://s3.eu-central-1.amazonaws.com/minidini/images/icons/icon_microwave-white.svg" alt="Item Icon"/>
      <h3 className={styles['post-title']}>
          {props.post.title}
      </h3>
    </div>
    </Link>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
