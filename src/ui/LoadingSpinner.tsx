const LoadingSpinner = () => {
  return (
    <div className="grid w-6 h-6 animate-pulse0112">
      <div className="border-4 border-white rounded-full border-r-transparent border-b-transparent mix-blend-darken animate-pulse0112"></div>
      <div className="border-4 border-white rounded-full border-l-transparent border-t-transparent mix-blend-darken animate-pulse0112 animate-reverse"></div>
    </div>
  );
};

export default LoadingSpinner;
