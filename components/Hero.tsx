export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
  </div>

  {/* Floating game elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 text-6xl animate-float">🎮</div>
    <div className="absolute top-1/3 right-1/4 text-5xl animate-float animation-delay-1000">⭐</div>
    <div className="absolute bottom-1/3 left-1/3 text-4xl animate-float animation-delay-2000">🚀</div>
    <div className="absolute top-2/3 right-1/3 text-5xl animate-float animation-delay-3000">💡</div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left column - Content */}
      <div className="text-center lg:text-left z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full px-4 py-2 mb-6 animate-bounce-slow">
          <span className="text-2xl">🎯</span>
          <span className="text-white font-bold text-sm">AI-Powered Learning Revolution</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Homework Just Got
          <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent animate-gradient">
            Epic
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/95 font-medium mb-4 leading-relaxed">
          Turn boring assignments into addictive games. 
          <span className="block mt-2 text-yellow-200 font-bold">Level up your grades while having fun! 🚀</span>
        </p>

        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
          AI transforms any homework into interactive adventures. Math puzzles, history quests, science explorations—all while tracking your progress in real-time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
          <button 
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              // Add your sign up logic
            }}
            className="group relative bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-400/50 transition-all duration-300 hover:scale-105 hover:-rotate-1"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Playing Free
              <span className="text-2xl group-hover:translate-x-1 transition-transform">🎮</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </button>

          <button 
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              // Add your demo logic
            }}
            className="bg-white/10 backdrop-blur-sm text-white border-3 border-white/40 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:rotate-1 shadow-lg"
          >
            Watch Demo 🎬
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-semibold">5 min setup</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📱</span>
            <span className="font-semibold">Any device</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            <span className="font-semibold">All subjects</span>
          </div>
        </div>
      </div>

      {/* Right column - Visual */}
      <div className="relative lg:h-[600px] z-10">
        {/* Main device mockup */}
        <div className="relative mx-auto max-w-md lg:max-w-none">
          {/* Phone frame */}
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
              {/* Status bar */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 flex items-center justify-between text-white text-xs">
                <span className="font-semibold">9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              {/* App content */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 h-[500px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-gray-800">Math Quest 🎯</h3>
                    <p className="text-sm text-gray-600 font-medium">Level 7 • 250 XP</p>
                  </div>
                  <div className="bg-yellow-400 rounded-2xl px-4 py-2 shadow-lg animate-pulse">
                    <span className="text-2xl font-black">🔥 12</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="bg-white rounded-full p-2 mb-6 shadow-lg">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-full h-3 w-3/4 animate-pulse"></div>
                </div>

                {/* Game cards */}
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-4 shadow-xl border-4 border-purple-300 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">🧩</span>
                      <span className="font-bold text-lg text-gray-800">Solve to unlock!</span>
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-3">
                      <p className="text-2xl font-black text-purple-600">2x + 5 = 13</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">⏱️</span>
                        <span className="font-bold">2:34 left</span>
                      </div>
                      <span className="text-3xl animate-bounce">💎</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-4 shadow-xl border-4 border-green-300 transform hover:scale-105 transition-transform">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">✅</span>
                      <div>
                        <p className="font-bold text-green-600">Awesome work!</p>
                        <p className="text-sm text-gray-600">+50 XP earned</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating achievement badges */}
          <div className="absolute -top-8 -right-8 bg-yellow-400 rounded-2xl p-4 shadow-2xl animate-float transform rotate-12 hidden lg:block">
            <span className="text-4xl">🏆</span>
          </div>
          <div className="absolute -bottom-8 -left-8 bg-pink-400 rounded-2xl p-4 shadow-2xl animate-float animation-delay-2000 transform -rotate-12 hidden lg:block">
            <span className="text-4xl">⚡</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom stats */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {[
        { emoji: '👨‍🎓', stat: '10K+', label: 'Happy Students' },
        { emoji: '📚', stat: '50K+', label: 'Assignments Done' },
        { emoji: '⭐', stat: '4.9/5', label: 'App Rating' },
        { emoji: '🎮', stat: '95%', label: 'Completion Rate' }
      ].map((item, idx) => (
        <div key={idx} className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-center border-2 border-white/30 hover:scale-110 transition-transform">
          <div className="text-4xl mb-2">{item.emoji}</div>
          <div className="text-3xl font-black text-white mb-1">{item.stat}</div>
          <div className="text-sm font-semibold text-white/90">{item.label}</div>
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .animate-gradient {
      background-size: 200% auto;
      animation: gradient 3s linear infinite;
    }
    .animate-bounce-slow {
      animation: bounce 2s infinite;
    }
    .animation-delay-1000 {
      animation-delay: 1s;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
</div>
  );
}