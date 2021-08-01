import React, {useEffect, useState} from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages.sync'). then(response => {
      
      setMessages(response.data);
    })

  }, []);


  useEffect(() => {
    //Run this code once
    const pusher = new Pusher('e7e477d18d51f6a2c203', {
      cluster: 'ap4'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  }, []);

  console.log(messages); 
  return (
    <div className="app">
      <div className="app_body">
      <Sidebar/>

      <Chat/>
      </div>
    </div>
  );
}

export default App;
