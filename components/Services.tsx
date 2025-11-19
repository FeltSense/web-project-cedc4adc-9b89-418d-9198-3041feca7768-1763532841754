export default function Services() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Floating animated shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-400 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg transform hover:scale-105 transition-transform">
            <span className="text-xl">⚡</span>
            <span>SUPERPOWERS FOR HOMEWORK</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
              How We Make
            </span>
            <br />
            <span className="text-gray-900">Homework Actually Fun</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Four game-changing features that transform boring assignments into epic learning adventures
          </p>
        </div>

        {/* Services grid - asymmetric layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-6 max-w-7xl mx-auto">
          
          {/* Service 1 - Large featured */}
          <div className="md:col-span-2 group">
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-purple-200 hover:border-purple-400 overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg transform group-hover:rotate-12 transition-transform">
                    <span className="text-3xl">🎮</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
                    AI Game Converter
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Snap a pic of any worksheet and watch as our AI instantly transforms boring problems into interactive game levels. Math becomes puzzle adventures, history turns into story quests, and science transforms into discovery missions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">📸 Photo Upload</span>
                    <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-bold">🤖 AI Parsing</span>
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold">⚡ Instant Games</span>
                  </div>
                </div>
                <div className="relative h-64 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-4 animate-bounce">📱➡️🎮</div>
                      <p className="text-2xl font-black text-gray-800">Homework → Game</p>
                      <p className="text-sm text-gray-600 mt-2">In seconds, not hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group">
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-blue-200 hover:border-blue-400 h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6 shadow-lg transform group-hover:rotate-12 transition-transform">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                  Real-Time Brain Checks
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  No more waiting for grades! Every game level secretly tests if you actually GET it. Answer wrong? Get hints and try different approaches until the concept clicks.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center text-xl">✓</div>
                    <span className="text-sm font-bold text-gray-800">Instant feedback loops</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-xl">🧠</div>
                    <span className="text-sm font-bold text-gray-800">Adaptive difficulty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center text-xl">🎪</div>
                    <span className="text-sm font-bold text-gray-800">Multiple question styles</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 border-2 border-blue-200">
                  <p className="text-xs font-bold text-blue-900 text-center">You can&apos;t advance until you truly understand ⭐</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="group">
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-green-200 hover:border-green-400 h-full overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-300 rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-6 shadow-lg transform group-hover:rotate-12 transition-transform">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900">
                  Smart Time Tracker
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  No more &quot;How long will this take?!&quot; Our AI predicts homework time based on YOUR speed. Plus get break reminders so you don&apos;t burn out. Parents can see real-time progress too!
                </p>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-green-900">Math Quest</span>
                    <span className="text-xs font-bold text-green-700">23 min left</span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-xs text-green-700 mt-2 font-medium">Level 7 of 10 complete 🔥</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">⏰ Break alerts</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">👪 Parent view</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4 - Wide featured */}
          <div className="md:col-span-2 group">
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-orange-200 hover:border-orange-400 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-100 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl mb-6 shadow-lg transform group-hover:rotate-12 transition-transform">
                    <span className="text-3xl">🌈</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
                    All Subjects, One Platform
                  </h3>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Whether it&apos;s algebra, American history, biology, or grammar—we&apos;ve got game modes for everything. Each subject gets its own unique gameplay style that makes sense for what you&apos;re learning.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 text-center border-2 border-blue-200 transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🔢</div>
                    <h4 className="font-black text-gray-900 mb-2">Math</h4>
                    <p className="text-xs text-gray-600">Puzzle adventures</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 text-center border-2 border-green-200 transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🔬</div>
                    <h4 className="font-black text-gray-900 mb-2">Science</h4>
                    <p className="text-xs text-gray-600">Discovery quests</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 text-center border-2 border-purple-200 transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">📚</div>
                    <h4 className="font-black text-gray-900 mb-2">History</h4>
                    <p className="text-xs text-gray-600">Story missions</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6 text-center border-2 border-pink-200 transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">✍️</div>
                    <h4 className="font-black text-gray-900 mb-2">Language</h4>
                    <p className="text-xs text-gray-600">Word challenges</p>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 border-2 border-orange-200 text-center">
                  <p className="text-sm font-black text-orange-900">
                    🎓 Aligned with school standards • 🔄 Regular content updates • 🌟 New game modes added monthly
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 text-white font-black text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <span className="relative z-10">Start Gaming Your Homework 🚀</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <p className="text-sm text-gray-600 font-medium">
              Free for your first 5 assignments ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}