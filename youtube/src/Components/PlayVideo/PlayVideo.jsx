import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay muted></video>
      <h3>Best channel to learn coding that help you</h3>
      <div className="play-video-info">
        <p>1434 views &bull; 2 days ago</p>
        <div>
          <span><img src = {like} alt=""/>125</span>
          <span><img src = {dislike} alt=""/>34</span>
          <span><img src = {share} alt=""/>share</span>
          <span><img src = {save} alt=""/>save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>the uttam</p>
          <span>1M Subcribers</span>
        </div>
        <button>Subcribe</button>
      </div>
      <div className='vid-discriptoin'>
        <p>channel that make learning Eazy</p>
        <p>Subcripe channel for learning more about coding and devlopment</p>
        <hr />
        <h4>130 comments</h4>
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