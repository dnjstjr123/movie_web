import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <button className="homeBtn" onClick={() => navigate(`/`)}>
        Home
      </button>
      <button className="recmBtn" onClick={() => navigate(`/Recommend`)}>
        Recommend
      </button>
    </div>
  );
};

export default Header;
