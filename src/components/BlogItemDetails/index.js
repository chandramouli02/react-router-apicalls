import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

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
    //  fetch the api based on the id
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
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
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
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
