import Marquee from "react-fast-marquee";

const marqueeItems = [
  `INTVIEW&nbsp;&nbsp;&nbsp;is&nbsp;&nbsp;&nbsp;Coming&nbsp;&nbsp;&nbsp;Soon&nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp;Revolutionize&nbsp;&nbsp;&nbsp;Conversational&nbsp;&nbsp;&nbsp;AI&nbsp;&nbsp;&nbsp;Interactions&nbsp;&nbsp;&nbsp;Worldwide`
];

const MarqueeComponent = () => {
  return (
    <Marquee speed={120} autoFill={true}>
      {marqueeItems.map((item, index) => (
        <div key={index} className="marqueeTxt flex items-center px-5 text-5xl font-bold text-red-500">
          <span className="marqueeText" dangerouslySetInnerHTML={{ __html: item }} />
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeComponent;



