function SignupHeader() {
  return (
    <div className="flex-col sm:w-[80%] flex-center mb-6 ">
      <div className="flex items-center">
        <img src={"/logo.png"} alt="Logo" className="w-[50px]" />
        <span className="logo-text">SocialLinx</span>
      </div>
      <h2 className="text-white h3-bold md:h2-bold">Create a new Account</h2>
    </div>
  );
}

export default SignupHeader;
