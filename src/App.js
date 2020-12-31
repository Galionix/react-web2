import React, { useState, useEffect } from "react";
import ChatArea from "./components/ChatArea";

import ChatList from "./components/ChatList";

function App() {
  let [chats, setState] = useState({});
  let [chatShow, setchatShow] = useState(-1);

  useEffect((_) => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    fetch("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5")
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
        setState(data);
        // console.log('useEffect : ' ,chats);
      })
      .catch((error) => {
        setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }, []);

  // const loadChat = (index) => {
  //   console.log('loading chat: ' + index)
  //   // setState({chatToShow: index})
  // }
  return (
    <div className="App">
      <ChatList className="chatlist" chats={chats} loadChat={(index)=>{
        setchatShow(index)
        }}/>
      <ChatArea className="chatarea" chatShow={chatShow}  />
    </div>
  );
}

export default App;
