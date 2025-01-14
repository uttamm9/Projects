import React from 'react'
import './Recommended.css'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'
import { valueConverter } from '../../data'
const Recommended = ({categoryId}) => {
    const [apidata, setApidata] = React.useState([]);

    const fetchVideoData = async ()=>{
      //Fetch video data from youtube api
      const RelatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`

      await fetch(RelatedVideo_url).then(res=>res.json()).then(data=>setApidata(data.items))

    }
    React.useEffect(()=>{
      fetchVideoData();
    },[categoryId])

  return (
    <div className='recommended'>
      {apidata.map((item,index)=>{
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className='video-info'>
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{valueConverter(item.statistics.viewCount)} views</p>
            </div>
          </Link>
        )
      })}
      
      
    </div>
  )
}

export default Recommended