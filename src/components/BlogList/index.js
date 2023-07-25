import './index.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <ul>
        {blogsList.map(eachItem => (
          <BlogItem item={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
