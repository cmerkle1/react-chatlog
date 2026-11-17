import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => {
    return (
      <li key={entry.id}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      </li>
    );
  });

  return (
    <ul className="chat-log">
      {chatComponents}
    </ ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired
};

export default ChatLog;
