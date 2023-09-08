import welcomeBgImg from "../../assets/images/safe-rooftop-their-new-home.jpg";

const WellcomeBg = () => {
  return (
    <>
      <div className="bg-[#333333d5] absolute inset-0 z-10"></div>
      <div className="absolute inset-0">
        <img
          src={welcomeBgImg}
          alt="Safe Home"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default WellcomeBg;
