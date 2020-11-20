import horse from '../assets/horse.png';

function Header() {
  return (
    <div className="header">
        <img width='50px' src={horse} className="horse" alt="horse" />
    </div>
  );
}

export default Header;
