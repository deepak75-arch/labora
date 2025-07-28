import React, { useState } from 'react';
import { Camera, Upload, DollarSign, Shield, Sparkles } from 'lucide-react';

export function ListProduct() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    condition: '',
    purchasePrice: '',
    location: '',
    features: [''],
    included: ['']
  });
  const [images, setImages] = useState<string[]>([]);
  const [suggestedPrice, setSuggestedPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const categories = [
    'Cameras & Photography',
    'Electronics',
    'Audio Equipment',
    'Tools & Equipment',
    'Gaming',
    'Fitness Equipment',
    'Mobile Accessories',
    'Laptop & Computers'
  ];

  const conditions = [
    { value: 'excellent', label: 'Excellent - Like new' },
    { value: 'very-good', label: 'Very Good - Minor wear' },
    { value: 'good', label: 'Good - Visible wear but works perfectly' },
    { value: 'fair', label: 'Fair - Significant wear but functional' }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In real app, upload to cloud storage
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const calculateSuggestedPrice = () => {
    setLoading(true);
    // Mock AI pricing calculation
    setTimeout(() => {
      const basePrice = Math.floor(Math.random() * 800) + 200;
      setSuggestedPrice(basePrice);
      setLoading(false);
    }, 2000);
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const addIncluded = () => {
    setFormData({
      ...formData,
      included: [...formData.included, '']
    });
  };

  const updateIncluded = (index: number, value: string) => {
    const newIncluded = [...formData.included];
    newIncluded[index] = value;
    setFormData({ ...formData, included: newIncluded });
  };

  const removeIncluded = (index: number) => {
    const newIncluded = formData.included.filter((_, i) => i !== index);
    setFormData({ ...formData, included: newIncluded });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Product listed successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">List Your Item</h1>
        <p className="text-gray-600">
          Share your unused items and earn passive income
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Item Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Canon EOS R5 DSLR Camera"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe your item, its condition, and any important details..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Condition *
              </label>
              <select
                required
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select condition</option>
                {conditions.map(condition => (
                  <option key={condition.value} value={condition.value}>
                    {condition.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Mumbai, Maharashtra"
              />
            </div>
          </div>
        </div>

        {/* Photos & Video */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Photos & Video</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleImageUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Upload Photos & Video
              </h3>
              <p className="text-gray-600 mb-4">
                Add at least 3 photos and 1 video of your item
              </p>
              <span className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Choose Files
              </span>
            </label>
          </div>

          {images.length > 0 && (
            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-3">Uploaded Images</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setImages(images.filter((_, i) => i !== index))}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Camera className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-medium text-blue-900">AI Damage Detection</span>
            </div>
            <p className="text-sm text-blue-700">
              Our AI will analyze your photos to create a condition baseline for damage protection
            </p>
          </div>
        </div>

        {/* Smart Pricing */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Smart Pricing</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Original Purchase Price (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  value={formData.purchasePrice}
                  onChange={(e) => setFormData({ ...formData, purchasePrice: e.target.value })}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="25000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                AI Suggested Price
              </label>
              <div className="flex items-center space-x-3">
                {suggestedPrice ? (
                  <div className="flex-1 px-4 py-3 bg-green-50 border border-green-200 rounded-lg">
                    <span className="text-lg font-bold text-green-600">
                      ₹{suggestedPrice}/day
                    </span>
                  </div>
                ) : (
                  <div className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-500">
                    Click to get AI suggestion
                  </div>
                )}
                <button
                  type="button"
                  onClick={calculateSuggestedPrice}
                  disabled={loading || !formData.name || !formData.category}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors disabled:opacity-50 flex items-center"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Sparkles className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-medium text-purple-900">Smart Pricing Algorithm</span>
            </div>
            <p className="text-sm text-purple-700">
              Our AI considers market demand, location, item condition, and rental history to suggest optimal pricing
            </p>
          </div>
        </div>

        {/* Features & What's Included */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Details</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Key Features
              </label>
              {formData.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="e.g., 45MP Sensor"
                  />
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addFeature}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                + Add Feature
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What's Included
              </label>
              {formData.included.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateIncluded(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="e.g., Camera Body"
                  />
                  <button
                    type="button"
                    onClick={() => removeIncluded(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addIncluded}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                + Add Item
              </button>
            </div>
          </div>
        </div>

        {/* Insurance & Protection */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Protection & Insurance</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-green-600 mr-2" />
                <span className="font-medium text-green-900">Automatic Coverage</span>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Up to ₹50,000 damage protection</li>
                <li>• Theft and loss coverage</li>
                <li>• AI-powered damage detection</li>
                <li>• 24/7 support</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-3">
                <DollarSign className="w-6 h-6 text-blue-600 mr-2" />
                <span className="font-medium text-blue-900">Transparent Fees</span>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 10% service fee on bookings</li>
                <li>• ₹20-50 insurance fee per rental</li>
                <li>• No listing fees</li>
                <li>• Free damage assessment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            List My Item
          </button>
        </div>
      </form>
    </div>
  );
}