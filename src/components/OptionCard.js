import blank_card from '../assets/blank_card.png';

function OptionCard(props) {
  return (
      <div style={cardStyle}>
        <div style={questionStyle}> {props.question['question']} </div>
        {props.question['options'].map((value, index ) => (
          <p style={optionStyle}> {value}
          </p>
        ))}
      </div>
  );
};

export default OptionCard;

const cardStyle = {
  backgroundImage: `url(${blank_card})`,
  width: '333.6px',
  height: '444.8px',
  fontFamily: 'KeeponTruckin',
  color: '#FFFFFF',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '333.6px 444.8px'
}

const questionStyle = {
    fontSize: '30px',
    padding: '20px',
    paddingTop: '50px',
}

const optionStyle = {
    backgroundColor: '#E5C85D',
    borderRadius: '50%',
    color: '#FBEFC2',
}