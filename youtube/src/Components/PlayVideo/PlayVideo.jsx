import React, { useEffect } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import {API_KEY, valueConverter} from '../../data' 
import moment from 'moment'
const PlayVideo = ({videoId}) => {
  const [apidata, setApidata] = React.useState(null)
  const [channelData, setChannelData] = React.useState(null)
  const [commentData, setCommentData] = React.useState(null)

  const fatchVideoData = async ()=>{
    //Fetch video data from youtube api
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

    await fetch(video_url).then(res=>res.json()).then(data=>setApidata(data.items[0])); 
  }

  const fatchOtherData = async ()=>{
    //Fetch channel data from youtube api
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))
    //fatch comment data from youtube api
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
  }

  useEffect(()=>{
    fatchVideoData();
  },[videoId])

  useEffect(()=>{
    fatchOtherData();
  },[apidata])
  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apidata?apidata.snippet.title:"Title here"}</h3>
      <div className="play-video-info">
        <p>{apidata?valueConverter(apidata.statistics.viewCount):"0"} views &bull;      {apidata?moment(apidata.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span><img src = {like} alt=""/>{apidata?valueConverter(apidata.statistics.likeCount):"0"}</span>
          <span><img src = {dislike} alt=""/></span>
          <span><img src = {share} alt=""/>share</span>
          <span><img src = {save} alt=""/>save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
          <p>{apidata?apidata.snippet.channelTitle:""}</p>
          <span>{channelData?valueConverter(channelData.statistics.subscriberCount):"0"} Subcribers</span>
        </div>
        <button>Subcribe</button>
      </div>
      <div className='vid-discriptoin'>
        <p>{apidata?apidata.snippet.description.slice(0,250):""}</p>
        <hr />
        <h4>{apidata?valueConverter(apidata.statistics.commentCount):"0"} comments</h4>
        {commentData && commentData.map((item,index)=>{
          return(
            <div className="comment" key={index}>
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          )
        })}
       
        
      </div>
    </div>
  )
}

export default PlayVideo