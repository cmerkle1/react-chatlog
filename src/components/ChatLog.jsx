import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => {
    return (
      <li key={entry.id}>
        <ChatEntry
          sender={entry.sender}
          sender1={props.sender1}
          sender2={props.sender2}
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
