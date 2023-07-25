import './index.css'
import {Component} from 'react'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogById()
  }

  getBlogById = async () => {
    //  Route component after rendering stores the data and returns the history , location and match..
    const {match} = this.props
    const {params} = match
    const {id} = params
    const slicedId = id.slice(1)
    console.log(slicedId)
    //  fetch the api based on the id
    const response = await fetch(`https://apis.ccbp.in/blogs/${slicedId}`)
    const data = await response.json()
    const updatedBlog = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogItemDetails: updatedBlog, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemDetails
    return (
      <>
        {isLoading ? (
          <h1>loading...</h1>
        ) : (
          <div className="blog-item2">
            <h1>{title}</h1>
            <div>
              <img src={avatarUrl} alt="profile" />
              <p className="blog-author">{author}</p>
            </div>
            <img src={imageUrl} alt="img" />
            <p>{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
