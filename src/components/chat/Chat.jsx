import React, { useEffect, useState, useRef } from "react";
import "./Chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const chatRef = useRef(null); // Reference for the message container

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [text]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="../../public/avatar.png" alt="" />
          <div className="texts">
            <span>Aks Sharma</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div className="icons">
            <img src="../../public/phone.png" alt="" />
            <img src="../../public/video.png" alt="" />
            <img src="../../public/info.png" alt="" />
          </div>
        </div>
      </div>
      <div className="center" ref={chatRef}>
        <div className="message">
          <img src="../../public/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet...</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet...</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="../../public/avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet...</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet...</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="../../public/img.png" alt="" />
          <img src="../../public/camera.png" alt="" />
          <img src="../../public/mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="../../public/emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
