import React from "react";

function ReviewsCard({ name, position, review }) {
  return (
    <div className="p-3 lg:p-6 border border-neutral-700 bg-[#1E1F31] rounded-md shadow-md">
      <p className="text-white font-semibold">{review}</p>
      <p className="text-gray-400 mt-2 font-medium">{name}</p>
      <p className="text-gray-500 text-sm">{position}</p>
    </div>
  );
}

export default ReviewsCard;

