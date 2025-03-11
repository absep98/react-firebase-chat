import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './Chatlist.css'
const Chatlist = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchBar">
            <img src="../../public/search.png" alt="" />
            <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ? "../../public/plus.png" : "../../public/minus.png"} alt="" className="add" 
          onClick={() => setAddMode(!addMode)} 
        />
      </div>
      <div className="item">
        <img src="../public/avatar.png" alt="" />
        <div className="texts">
          <span>Aks Sharma</span>
          <p>Hello Aks!</p>
        </div>
      </div>
      <div className="item">
        <img src="../public/avatar.png" alt="" />
        <div className="texts">
          <span>Aks Sharma</span>
          <p>Hello Aks!</p>
        </div>
      </div>
      <div className="item">
        <img src="../public/avatar.png" alt="" />
        <div className="texts">
          <span>Aks Sharma</span>
          <p>Hello Aks!</p>
        </div>
      </div>
      <div className="item">
        <img src="../public/avatar.png" alt="" />
        <div className="texts">
          <span>Aks Sharma</span>
          <p>Hello Aks!</p>
        </div>
      </div>
      <div className="item">
        <img src="../public/avatar.png" alt="" />
        <div className="texts">
          <span>Aks Sharma</span>
          <p>Hello Aks!</p>
        </div>
      </div>
    </div>
  )
}

export default Chatlist
