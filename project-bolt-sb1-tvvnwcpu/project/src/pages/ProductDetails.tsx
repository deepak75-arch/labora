import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Shield, 
  Calendar, 
  Camera,
  MessageSquare,
  Heart,
  Share2,
  AlertTriangle,
  CheckCircle,
  User
} from 'lucide-react';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDates, setSelectedDates] = useState({ start: '', end: '' });
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Mock product data - in real app, fetch based on ID
  const product = {
    id: 1,
    name: 'Canon EOS R5 DSLR Camera',
    category: 'Cameras & Photography',
    price: 850,
    location: 'Mumbai, Maharashtra',
    rating: 4.8,
    reviews: 24,
    owner: {
      name: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4.9,
      rentals: 45,
      verified: true,
      joinedDate: 'March 2023'
    },
    verified: true,
    insurance: true,
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional-grade DSLR camera perfect for photography and videography projects. This camera has been well-maintained and comes with all original accessories.',
    features: [
      '45 Megapixel Full-Frame CMOS Sensor',
      'Dual Pixel CMOS AF II',
      '8K DCI and 4K UHD 2160p Video',
      'Weather-sealed Construction',
      'Dual Memory Card Slots',
      'Built-in Wi-Fi & Bluetooth'
    ],
    included: [
      'Canon EOS R5 Camera Body',
      'RF 24-70mm f/2.8L IS USM Lens',
      'Battery Pack LP-E6NH',
      'Battery Charger LC-E6',
      '32GB CF Express Card',
      'Camera Strap',
      'Original Box & Manual'
    ],
    availability: [
      { date: '2024-12-15', available: true },
      { date: '2024-12-16', available: true },
      { date: '2024-12-17', available: false },
      { date: '2024-12-18', available: true },
      { date: '2024-12-19', available: true },
      { date: '2024-12-20', available: true }
    ],
    damageProtection: {
      covered: true,
      amount: 50000,
      details: 'Full replacement value coverage for accidental damage'
    }
  };

  const reviews = [
    {
      id: 1,
      user: 'Arjun Patel',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: 'December 2024',
      comment: 'Excellent camera! Perfect condition and the owner was very responsive. Used it for a wedding shoot and the results were amazing.'
    },
    {
      id: 2,
      user: 'Sneha Reddy',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: 'November 2024',
      comment: 'Great experience! The camera was exactly as described and pickup/drop-off was seamless. Will definitely rent from Priya again.'
    }
  ];

  const calculateDays = () => {
    if (selectedDates.start && selectedDates.end) {
      const start = new Date(selectedDates.start);
      const end = new Date(selectedDates.end);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const totalDays = calculateDays();
  const subtotal = totalDays * product.price;
  const insurance = Math.ceil(subtotal * 0.05); // 5% insurance
  const serviceFee = Math.ceil(subtotal * 0.1); // 10% service fee
  const total = subtotal + insurance + serviceFee;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Browse
      </button>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Images and Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image Gallery */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              {product.insurance && (
                <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Damage Protection
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600">{product.category}</p>
                <div className="flex items-center mt-2">
                  <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-600">{product.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">₹{product.price}</div>
                <div className="text-sm text-gray-500">per day</div>
                <div className="flex items-center mt-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900 ml-1">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="grid md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h3>
              <ul className="space-y-2">
                {product.included.map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Owner Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Meet Your Host</h3>
            <div className="flex items-center space-x-4">
              <img
                src={product.owner.avatar}
                alt={product.owner.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <h4 className="text-lg font-medium text-gray-900">{product.owner.name}</h4>
                  {product.owner.verified && (
                    <div className="ml-2 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-blue-600" />
                    </div>
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span>{product.owner.rating} rating • {product.owner.rentals} rentals</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Joined {product.owner.joinedDate}</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message
              </button>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reviews</h3>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={review.avatar}
                      alt={review.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="font-medium text-gray-900">{review.user}</h5>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Booking */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Book This Item</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={selectedDates.start}
                    onChange={(e) => setSelectedDates({ ...selectedDates, start: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={selectedDates.end}
                    onChange={(e) => setSelectedDates({ ...selectedDates, end: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {totalDays > 0 && (
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>₹{product.price} × {totalDays} days</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Insurance fee</span>
                      <span>₹{insurance}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Service fee</span>
                      <span>₹{serviceFee}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                  </div>
                )}

                <button
                  disabled={!selectedDates.start || !selectedDates.end}
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {totalDays > 0 ? `Book for ₹${total.toLocaleString()}` : 'Select Dates'}
                </button>

                <div className="text-center text-sm text-gray-500">
                  You won't be charged yet
                </div>
              </div>

              {/* Damage Protection Info */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-medium text-green-900">Damage Protection</span>
                </div>
                <p className="text-sm text-green-700">
                  Covered up to ₹{product.damageProtection.amount.toLocaleString()} for accidental damage
                </p>
              </div>

              {/* AI Verification Notice */}
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Camera className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium text-blue-900">AI Verification</span>
                </div>
                <p className="text-sm text-blue-700">
                  Photos taken before & after rental for your protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Booking</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Item</span>
                <span className="font-medium">{product.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dates</span>
                <span className="font-medium">
                  {new Date(selectedDates.start).toLocaleDateString()} - {new Date(selectedDates.end).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total</span>
                <span className="font-bold text-lg">₹{total.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowBookingModal(false);
                  // Handle booking logic here
                  alert('Booking confirmed! You will receive a confirmation email.');
                }}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}