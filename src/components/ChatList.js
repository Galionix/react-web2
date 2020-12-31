import React from "react";

function ChatList(props) {
  const loadChat= props.loadChat;
  const {chats}  = props;
// console.log('start ChatList');

// console.log('props', props)
// console.log('loadChat', loadChat)
// console.log('chats', chats)
// console.log('end ChatList');

  // console.log(chats);
  return (
    <ul className='chat_list'>
      {chats.length ? (
        chats.map((chat, index) => (
          <li key={chat.id} className='chat_item' onClick={()=>{loadChat(chat.id)   }} >
       

          <img src= {chat.thumbnailUrl} className='chat_img' alt=""/>
          <div className="chat_texts">

          <div className='chat_title'> {chat.title}  </div>
          <div className='chat_text'> {chat.title}  </div>
          </div>
          </li>
        ))
      ) : (
        <p>{chats.errorMessage}</p>
      )}
      </ul>
  );
}

export default ChatList;
