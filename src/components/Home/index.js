import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const blogsList = await response.json()
    const updatedBlogsList = blogsList.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: updatedBlogsList, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div>
        <UserInfo />
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <BlogList blogsList={blogsList} />
        )}
      </div>
    )
  }
}

export default Home
