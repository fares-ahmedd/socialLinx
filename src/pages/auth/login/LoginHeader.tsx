function LoginHeader() {
  return (
    <div className="flex-col sm:w-[80%] flex-center mb-6 ">
      <p className="flex items-center  animate-fade-down">
        <img src={"/logo.png"} alt="Logo" className="w-[50px]" />
        <span className="logo-text">SocialLinx</span>
      </p>
      <h2 className="text-white h3-bold md:h2-bold animate-fade-down">
        Login To Your Account
      </h2>
    </div>
  );
}

export default LoginHeader;
