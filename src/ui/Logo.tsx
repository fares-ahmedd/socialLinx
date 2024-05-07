import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"} className="flex items-center gap-3">
      <div className="flex items-center">
        <img src={"/logo.png"} alt="Logo" className="w-[50px]" />
        <span className="logo-text">SocialLinx</span>
      </div>{" "}
    </Link>
  );
}
