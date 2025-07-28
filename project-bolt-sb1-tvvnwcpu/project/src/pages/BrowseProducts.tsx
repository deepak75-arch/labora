import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BrowseProducts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'cameras', name: 'Cameras & Photography' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'tools', name: 'Tools & Equipment' },
    { id: 'audio', name: 'Audio Equipment' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'fitness', name: 'Fitness Equipment' }
  ];

  const mockProducts = [
    {
      id: 1,
      name: 'Canon EOS R5 DSLR Camera',
      category: 'cameras',
      price: 850,
      location: 'Mumbai, Maharashtra',
      rating: 4.8,
      reviews: 24,
      owner: 'Priya Sharma',
      verified: true,
      insurance: true,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['4K Video', '45MP Sensor', 'Weather Sealed']
    },
    {
      id: 2,
      name: 'MacBook Pro 16" M2 Max',
      category: 'electronics',
      price: 1200,
      location: 'Bangalore, Karnataka',
      rating: 5.0,
      reviews: 18,
      owner: 'Arjun Patel',
      verified: true,
      insurance: true,
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      features: ['M2 Max Chip', '32GB RAM', '1TB SSD']
    },
    {
      id: 3,
      name: 'DJI Mavic Air 2 Drone',
      category: 'electronics',
      price: 450,
      location: 'Delhi, NCR',
      rating: 4.6,
      reviews: 31,
      owner: 'Meera Singh',
      verified: true,
      insurance: true,
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['4K Camera', '34min Flight', 'Obstacle Sensing']
    },
    {
      id: 4,
      name: 'Sony A7 III Mirrorless Camera',
      category: 'cameras',
      price: 680,
      location: 'Chennai, Tamil Nadu',
      rating: 4.7,
      reviews: 19,
      owner: 'Karthik Kumar',
      verified: true,
      insurance: true,
      image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Full Frame', 'IBIS', 'Dual Card Slots']
    },
    {
      id: 5,
      name: 'iPhone 15 Pro Max',
      category: 'electronics',
      price: 280,
      location: 'Pune, Maharashtra',
      rating: 4.9,
      reviews: 42,
      owner: 'Sneha Reddy',
      verified: true,
      insurance: true,
      image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Titanium Build', 'A17 Pro', '48MP Camera']
    },
    {
      id: 6,
      name: 'Manfrotto Carbon Fiber Tripod',
      category: 'tools',
      price: 120,
      location: 'Hyderabad, Telangana',
      rating: 4.5,
      reviews: 15,
      owner: 'Rohit Agarwal',
      verified: true,
      insurance: true,
      image: 'https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Carbon Fiber', 'Fluid Head', 'Quick Release']
    }
  ];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Items</h1>
        <p className="text-gray-600">Find the perfect item for your next project</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="grid lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          {/* Price Range */}
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Prices</option>
            <option value="0-100">₹0 - ₹100</option>
            <option value="100-500">₹100 - ₹500</option>
            <option value="500-1000">₹500 - ₹1000</option>
            <option value="1000+">₹1000+</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {mockProducts.length} items
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
              {product.insurance && (
                <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Insured
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <div className="text-right">
                  <p className="text-xl font-bold text-blue-600">
                    ₹{product.price}
                  </p>
                  <p className="text-sm text-gray-500">/day</p>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                {product.location}
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900 ml-1">
                    {product.rating}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-1">by</span>
                  <span className="font-medium">{product.owner}</span>
                  {product.verified && (
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center ml-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Load More Items
        </button>
      </div>
    </div>
  );
}