import React from 'react'
import './Detail.css'
const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">

        <img src="../public/avatar.png" alt="" />
        <h2>Abhishek Sharma</h2>
        <p>Lorem ipsum dolor .</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="../public/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="../public/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="../public/arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="../public/icons8-explore.gif" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="../public/download.png" alt="" className='icon' />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="../public/icons8-explore.gif" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="../public/download.png" alt="" className='icon' />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="../public/arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  )
}

export default Detail
