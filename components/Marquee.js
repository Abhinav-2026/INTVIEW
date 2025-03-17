import Marquee from "react-fast-marquee";

const marqueeItems = [
  "INTVIEW is Coming Soon to Revolutionize Conversational AI Interactions Worldwide"
];

const MarqueeComponent = () => {
  return (
    <Marquee speed={120} autoFill={true}>
      {marqueeItems.map((item, index) => (
        <div key={index} className="marqueeTxt flex items-center px-5 text-5xl font-bold">
          <span className="marqueeText">{item}</span>
          {/* <span className="pl-14 pr-3 pt-8 inline-block text-center">
            <img src="/img/marqueeImg.svg" alt="marquee icon" />
          </span> */}
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeComponent;
