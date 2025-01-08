import React from 'react'
import './Feed.css'
import thumbnain1 from '../../assets/thumbnail1.png'
import thumbnain2 from '../../assets/thumbnail2.png'
import thumbnain3 from '../../assets/thumbnail3.png'
import thumbnain4 from '../../assets/thumbnail4.png'
import thumbnain5 from '../../assets/thumbnail5.png'
import thumbnain6 from '../../assets/thumbnail6.png'
import thumbnain7 from '../../assets/thumbnail7.png'
import thumbnain8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import {API_KEY} from '../../data'
import { use } from 'react'
import { valueConverter } from '../../data'
import moment from 'moment'

const Feed = ({category}) => {
  const[data, setData] = React.useState([])
  const fetchData = async ()=>{
    const videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(videolist_url).then(res=>res.json()).then(data=>setData(data.items))

  }

  React.useEffect(()=>{
    fetchData()
  },[category])

  return (
    <div className="feed">
      {data.map((item,index)=>{
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} ago</p>
      </Link>
        )
      })}
    
    </div>
  )
}

export default Feed