import horse from '../assets/horse.png';

function Header() {
  return (
    <div style={headerStyle}>
        <img width='75px' src={horse} className="horse" alt="horse" />
    </div>
  );
}

export default Header;

const headerStyle = {
  textAlign: 'end',
  paddingRight: '20px',
  paddingTop: '20px'
}
