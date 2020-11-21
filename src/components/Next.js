function Next(props) {
  return (
      <div className="nextButton" style={nextStyle}>
        <div style={textStyle}> Next </div>
      </div>
  );
};

export default Next;

const nextStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: '#FCEEC2',
  border: '9px solid #EBCC68',
  fontFamily: 'KeeponTruckin',
  fontSize: '35px',
  color: '#EBCC68'
}

const textStyle = {
  paddingTop: '30px',
}