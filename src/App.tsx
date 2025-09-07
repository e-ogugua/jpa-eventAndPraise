import { Cross, Heart, Users, BookOpen, Sparkles, Shield } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Cross className="w-12 h-12 text-amber-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Jesus Power Arena</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Faith-based community platform for spiritual growth, fellowship, and divine empowerment
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Spiritual Growth</h3>
            </div>
            <p className="text-gray-600">
              Deepen your relationship with Jesus through guided devotions and prayer
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Community Fellowship</h3>
            </div>
            <p className="text-gray-600">
              Connect with believers worldwide for encouragement and shared faith experiences
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Bible Study</h3>
            </div>
            <p className="text-gray-600">
              Interactive Bible studies and theological resources for deeper understanding
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-purple-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Miracles & Testimonies</h3>
            </div>
            <p className="text-gray-600">
              Share and witness God's miraculous works in everyday life
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-indigo-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Spiritual Warfare</h3>
            </div>
            <p className="text-gray-600">
              Equip yourself with biblical knowledge for spiritual battles and victory
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Cross className="w-8 h-8 text-amber-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Prayer Arena</h3>
            </div>
            <p className="text-gray-600">
              Join collective prayers and intercession for personal and global needs
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Enter the Arena
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
