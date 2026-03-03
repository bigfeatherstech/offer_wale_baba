import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Lock, 
  MapPin, 
  ShoppingBag, 
  Heart, 
  LogOut,
  ChevronRight,
  Edit2,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  Star,
  Home,
  Phone,
  Mail as MailIcon,
  Map,
  Trash2,
  AlertCircle,
  Settings,
  Shield,
  CreditCard
} from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Sample user data
  const userData = {
    name: 'Krishna Chabhai Haru',
    email: 'kchabhaiharu@gmail.com',
    memberSince: 'January 2024',
    totalOrders: 12,
    wishlistCount: 8
  };

   

  // Sample orders data
  const orders = [
    { id: '#ORD-2024-001', date: '2024-01-15', total: '$129.99', status: 'delivered', items: 3, product: 'Ultraboost 22', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=100&h=100&fit=crop' },
    { id: '#ORD-2024-002', date: '2024-02-20', total: '$89.99', status: 'shipped', items: 1, product: 'Superstar Shoes', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=100&h=100&fit=crop' },
    { id: '#ORD-2024-003', date: '2024-03-05', total: '$199.99', status: 'processing', items: 2, product: 'NMD_R1 Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop' },
    {id: '#ORD-2024-004', date: '2024-04-10', total: '$79.99', status: 'delivered', items: 1, product: 'Stan Smith Shoes', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop' },
   {id: '#ORD-2024-005', date: '2024-05-01', total: '$49.99', status: 'shipped', items: 1, product: 'Adilette Slides', image: 'https://images.unsplash.com/photo-1512499617640-c2f999feae9e?w=100&h=100&fit=crop' },
   {id: '#ORD-2024-006', date: '2024-06-15', total: '$109.99', status: 'processing', items: 2, product: 'Forum Low Shoes', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=100&h=100&fit=crop' },


]
  ;

  // Sample wishlist data
  const wishlist = [
    { id: 1, name: 'Ultraboost Light', price: '$190', rating: 4.8, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=200&h=200&fit=crop' },
    { id: 2, name: 'Forum Low Shoes', price: '$100', rating: 4.5, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=200&fit=crop' },
    { id: 3, name: 'NMD_R1 Primeblue', price: '$150', rating: 4.7, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop' },
    { id: 4, name: 'Stan Smith Shoes', price: '$85', rating: 4.3, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
    {id: 5, name: 'Adilette Slides', price: '$45', rating: 4.6, image: 'https://images.unsplash.com/photo-1512499617640-c2f999feae9e?w=200&h=200&fit=crop' },
    {id: 6, name: 'Superstar Shoes', price: '$100', rating: 4.5, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=200&fit=crop' },

];

  // Sample addresses
  const addresses = [
    { id: 1, type: 'Home', address: '123 Main Street', city: 'New York', state: 'NY', zip: '10001', default: true },
    { id: 2, type: 'Office', address: '456 Business Ave', city: 'New York', state: 'NY', zip: '10002', default: false },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';

    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{userData.name}</h2>
            <p className="text-blue-100">Member since {userData.memberSince}</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Orders</p>
              <p className="text-3xl font-bold text-gray-800">{userData.totalOrders}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Wishlist Items</p>
              <p className="text-3xl font-bold text-gray-800">{userData.wishlistCount}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Saved Addresses</p>
              <p className="text-3xl font-bold text-gray-800">{addresses.length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Login Details */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Login Details</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{userData.email}</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Lock className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Password</p>
                <p className="font-medium">••••••••••••</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Change</button>
          </div>
        </div>
      </div>

      {/* Logout from all devices */}
      <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-orange-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">Log out from all web browsers</h4>
            <p className="text-sm text-gray-600 mb-4">
              This will log you out from all web browsers you have used to access the website. 
              To log in again, you'll have to enter your credentials.
            </p>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
              Log me out
            </button>
          </div>
        </div>
      </div>

      {/* Delete Account */}
      <div className="bg-red-50 rounded-xl p-6 border border-red-200">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Trash2 className="w-5 h-5 text-red-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">Delete Account</h4>
            <p className="text-sm text-gray-600 mb-4">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>
            {!showDeleteConfirm ? (
              <button 
                onClick={() => setShowDeleteConfirm(true)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Delete Account
              </button>
            ) : (
              <div className="space-y-3">
                <p className="text-sm font-medium text-red-800">Are you sure? This action cannot be undone.</p>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                    Yes, Delete
                  </button>
                  <button 
                    onClick={() => setShowDeleteConfirm(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-6">My Orders</h3>
      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="font-semibold">{order.id}</span>
              <span className="text-sm text-gray-500 ml-3">{order.date}</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <img src={order.image} alt={order.product} className="w-16 h-16 rounded-lg object-cover" />
            <div className="flex-1">
              <p className="font-medium">{order.product}</p>
              <p className="text-sm text-gray-500">{order.items} items</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{order.total}</p>
              <button className="text-blue-600 text-sm hover:underline">Track Order</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderWishlist = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-6">My Wishlist</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
            <div className="flex-1">
              <h4 className="font-semibold">{item.name}</h4>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{item.rating}</span>
              </div>
              <p className="text-lg font-bold text-gray-800 mt-2">{item.price}</p>
              <button className="mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAddresses = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Saved Addresses</h3>
        <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm">
          Add New Address
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <div key={address.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="flex justify-between items-start mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                {address.type}
              </span>
              {address.default && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  Default
                </span>
              )}
            </div>
            <div className="space-y-2">
              <p className="text-gray-800">{address.address}</p>
              <p className="text-gray-600">{address.city}, {address.state} {address.zip}</p>
            </div>
            <div className="flex space-x-3 mt-4">
              <button className="text-blue-600 text-sm hover:underline">Edit</button>
              {!address.default && (
                <button className="text-red-600 text-sm hover:underline">Remove</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">Account Settings</h3>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h4 className="font-semibold mb-4">Notification Preferences</h4>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Order Updates</p>
              <p className="text-sm text-gray-500">Receive notifications about your orders</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </label>
          <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Promotional Emails</p>
              <p className="text-sm text-gray-500">Receive offers and discounts</p>
            </div>
            <input type="checkbox" className="toggle" />
          </label>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h4 className="font-semibold mb-4">Payment Methods</h4>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <CreditCard className="w-6 h-6 text-gray-500" />
            <div>
              <p className="font-medium">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-500">Expires 12/25</p>
            </div>
          </div>
          <button className="text-blue-600 text-sm hover:underline">Edit</button>
        </div>
        <button className="mt-4 text-blue-600 text-sm font-medium hover:underline">
          Add Payment Method
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-4 sticky top-8">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                        activeTab === tab.id
                          ? 'bg-black text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                      {activeTab === tab.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </nav>
              
              <div className="border-t border-gray-200 my-4"></div>
              
              <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              {activeTab === 'overview' && renderOverview()}
              {activeTab === 'orders' && renderOrders()}
              {activeTab === 'wishlist' && renderWishlist()}
              {activeTab === 'addresses' && renderAddresses()}
              {activeTab === 'settings' && renderSettings()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;