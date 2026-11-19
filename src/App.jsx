import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  const sender1 = 'Vladimir';
  const sender2 = 'Estragon';

  return (
    <div id="App">
      <header>
        <h1 className='chat-header'>
          Chat Between
          <span className='sender1'>{sender1}</span>
          {' and '}
          <span className='sender2'>{sender2}</span>
        </h1>
      </header>
      <main>
        <ChatLog
          entries={messages}
          sender1={sender1}
          sender2={sender2}
        />
      </main>
    </div>
  );
};

export default App;
