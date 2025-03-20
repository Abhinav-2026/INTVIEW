import React from "react";
import ReviewsCard from "./ReviewsCard";

function Testimonials() {
  const reviews = [
    { name: "Laniece Tovar", position: "Sales Coordinator", review: "In a world where time always feels so limited, the idea behind this system really stands out." },
    { name: "Chandler Sooferan", position: "Vice President", review: "I just had a pretty meaningful conversation with Katie. I am impressed at how conversational she was." },
    { name: "Cory West", position: "Lead Trainer", review: "Katie sounded like a real person. We had a great conversation and interview." },
    { name: "Jake Groat", position: "AVP Operations and Compliance", review: "This tool is impressive. I’m interested to see how this tool evolves." },
    { name: "Richard Ybarra", position: "Senior Manager, Marketing Operations & Strategy", review: "Katie sounds exactly like a real person. This is great for companies with aggressive growth targets." },
    { name: "Andrew Wagner", position: "Professional Service Associate", review: "Katie (the AI) is patient and waits for your response. She also responds quickly." },
  ];

  return (
    <section id="testimonials" className="relative py-10 lg:py-20">
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"></div>

      <div className="container mx-auto px-5">
        {/* ✅ Title Always Visible */}
        <h2 className="text-center text-white text-3xl lg:text-4xl font-bold">
          Exclusive Sneak Peek: What Users Think
        </h2>

        {/* ✅ Responsive Testimonials Grid */}
        <div className="mt-10 grid gap-5 reviewsWrp">
          {reviews.map((review, index) => (
            <ReviewsCard key={index} name={review.name} position={review.position} review={review.review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
