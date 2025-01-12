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

  const fatchVideoData = async ()=>{
    //Fetch video data from youtube api
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

    await fetch(video_url).then(res=>res.json()).then(data=>setApidata(data.items[0])); 
  }

  const fatchOtherData = async ()=>{
    //Fetch channel data from youtube api
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))
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
        <img src={jack} alt="" />
        <div>
          <p>{apidata?apidata.snippet.channelTitle:""}</p>
          <span>{apidata?apidata.snippet:""} Subcribers</span>
        </div>
        <button>Subcribe</button>
      </div>
      <div className='vid-discriptoin'>
        <p>{apidata?apidata.snippet.description.slice(0,250):""}</p>
        <hr />
        <h4>{apidata?valueConverter(apidata.statistics.commentCount):"0"} comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>yogesh <span>1 day ago</span></h3>
            <p>A globale network ptovideimng a variety of innformation and communication of interconnected network using standard communicartion protocall </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>yogesh <span>1 day ago</span></h3>
            <p>A globale network ptovideimng a variety of innformation and communication of interconnected network using standard communicartion protocall </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>yogesh <span>1 day ago</span></h3>
            <p>A globale network ptovideimng a variety of innformation and communication of interconnected network using standard communicartion protocall </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>yogesh <span>1 day ago</span></h3>
            <p>A globale network ptovideimng a variety of innformation and communication of interconnected network using standard communicartion protocall </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>yogesh <span>1 day ago</span></h3>
            <p>A globale network ptovideimng a variety of innformation and communication of interconnected network using standard communicartion protocall </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo