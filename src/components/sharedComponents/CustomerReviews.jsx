import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CustomerReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock reviews for now (replace with API later)
    const mockReviews = [
      {
        reviewer: "Brooke",
        profileImage: "https://i.pravatar.cc/40?img=1",
        rating: 4,
        title: "Favorite dress",
        date: "2024-08-06",
        verified: true,
        comment:
          "I initially purchased this dress on sale. It turned out to be my favorite dress this summer! It's extremely versatile and unexpectedly flattering.",
      },
      {
        reviewer: "Elva S. D.",
        profileImage: "https://i.pravatar.cc/40?img=2",
        rating: 5,
        title: "Lindo!!",
        date: "2023-08-11",
        verified: true,
        comment: "Bien hecho, bonita tela y bonita caída, fresco y casual.",
      },
      {
        reviewer: "Ana Patricia Rodriguez",
        profileImage: "https://i.pravatar.cc/40?img=3",
        rating: 4,
        title: "COMODIDAD",
        date: "2023-06-29",
        verified: true,
        comment: "Es lindo, cómodo y ligero para clima cálido. Es la tela adecuada.",
      },
      {
        reviewer: "Ivelisse",
        profileImage: "https://i.pravatar.cc/40?img=4",
        rating: 5,
        title: "Excellent dress",
        date: "2019-04-03",
        verified: true,
        comment:
          "Lovely dress... I'm 5'1 with a pear-shaped body (149 lbs mostly in hips and booty) and it fits perfect.",
      },
    ];

    setTimeout(() => {
      setReviews(mockReviews);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <h2 className="text-center mt-5">Loading Reviews...</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg">
      {/* Customer Reviews Header */}
      <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>

      {/* Overall Rating Section */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500 text-xl">★★★★☆</span>
        <span className="text-gray-700 text-lg font-medium">4.1 out of 5</span>
      </div>

      {/* Rating Breakdown Section */}
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-700">1 global rating</h3>
        <div className="mt-2 space-y-2">
          {[
            { stars: 5, percentage: 71 },
            { stars: 4, percentage: 23 },
            { stars: 3, percentage: 0 },
            { stars: 2, percentage: 6 },
            { stars: 1, percentage: 0 },
          ].map((item) => (
            <div key={item.stars} className="flex items-center">
              <span className="w-12 text-gray-600">{item.stars} star</span>
              <div className="w-48 h-3 bg-gray-200 rounded overflow-hidden ml-2">
                <div
                  className="h-full bg-yellow-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="ml-2 text-gray-600">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-6 space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="border-b pb-4">
              {/* Profile Image & Name */}
              <div className="flex items-center gap-3">
                <img
                  src={review.profileImage}
                  alt={review.reviewer}
                  className="w-10 h-10 rounded-full"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.reviewer}
                </h3>
              </div>

              {/* Star Rating */}
              <div className="text-yellow-500 text-lg mt-1">
                {"★".repeat(review.rating)}{" "}
                {"☆".repeat(5 - review.rating)}
              </div>

              {/* Review Title */}
              <h4 className="text-md font-bold text-gray-800 mt-1">
                {review.title}
              </h4>

              {/* Review Date & Location */}
              <p className="text-gray-600 text-sm">
                Reviewed in the United States on{" "}
                {new Date(review.date).toLocaleDateString()}
              </p>

              {/* Verified Purchase Tag */}
              {review.verified && (
                <p className="text-orange-600 font-semibold text-sm mt-1">
                  Verified Purchase
                </p>
              )}

              {/* Review Content */}
              <p className="text-gray-700 mt-2">{review.comment}</p>

              {/* Report Button */}
              <button className="text-blue-500 mt-2 text-sm">Report</button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews available for this product.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerReviews;
