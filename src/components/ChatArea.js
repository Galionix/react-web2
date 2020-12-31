import React, { useState, useEffect } from "react";


function ChatArea(props) {
  const {chatShow} = props;
  let [messages, setMessages] = useState({});

  console.log('ChatArea chatShow: ' +chatShow)
  
    useEffect((_) => {
      // fetch("https://jsonplaceholder.typicode.com/users")
      if(chatShow>-1) {

        
      fetch("https://jsonplaceholder.typicode.com/comments?postId="+chatShow+"&_start=0&_limit=5")
        // fetch("https://api.npms.io/v2/invalid-url")
        .then(async (response) => {
          const data = await response.json();
  
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error =
              (data && data.message) || response.statusText || "Some Error";
            return Promise.reject(error);
          }
          setMessages(data);
          console.log('ChatArea useEffect : ' ,data);
        })
        .catch((error) => {
          setMessages({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
      }
    }, [chatShow]);
    // if (chatShow>-1)
    // {}

  return (
    <div className='chat_area'>
      <p>
      Showing: {chatShow}

      </p>
    
    <ul>

    {messages.length ? (
      messages.map((msg, index) => (
          <li key={msg.id} className='msg'  >
       

          <img src= 'http://placekitten.com/200/200' className='msg_avatar' alt=""/>
          <div className="msg_texts">

          <div  >Postid:  {msg.postId}  </div>
          <div className='msg_title'> {msg.name}  </div>
          <div className='msg_text'> {msg.body}  </div>
          </div>
          </li>
        ))
      ) : (
        <p>Сообщенрий нет!</p>
      )}
    </ul>
    
    </div>
  )
}

export default ChatArea
