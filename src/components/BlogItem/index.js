import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class BlogItem extends Component {
  render() {
    const {item} = this.props
    const {id, title, imageUrl, avatarUrl, author, topic} = item

    return (
      <Link className="link-style" to={`/blogs/${id}`}>
        <div className="blog-item">
          <img className="image" src={imageUrl} alt="img" />
          <div className="blog-details">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author">
              <img className="avatar" src={avatarUrl} alt="avatar" />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
