import Marquee from "react-fast-marquee";

const marqueeItems = [
  "REVOLUTIONARY AI-POWERED INTERVIEW PLATFORM",
  "TRANSPARENT, FLAT PRICING",
  "CUSTOMIZABLE INTERVIEW TEMPLATES",
  "DATA-DRIVEN INSIGHTS FOR SHORTLISTING"
];

const MarqueeComponent = () => {
  return (
    <Marquee speed={120} autoFill={true}>
      {marqueeItems.map((item, index) => (
        <div key={index} className="marqueeTxt flex items-center px-5 text-5xl font-bold">
          <span className="marqueeText">{item}</span>
          <span className="pl-14 pr-3 pt-8 inline-block text-center">
            <img src="/img/marqueeImg.svg" alt="marquee icon" />
          </span>
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeComponent;
