import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <Link className={styles['post-link']} to={`/posts/${props.post.slug}-${props.post.cuid}`} >
    <div className={styles['single-post']}>
      <img className={styles['post-icon']} src={props.post.icon} alt="Item Icon"/>
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
    icon: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
