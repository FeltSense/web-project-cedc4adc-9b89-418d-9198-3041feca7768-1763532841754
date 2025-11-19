import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 overflow-hidden">
  {/* Playful background elements */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
  <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300 rounded-full opacity-20 blur-2xl"></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section header */}
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-block mb-4">
        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide transform -rotate-1 shadow-lg">
          <span className="text-xl">⭐</span>
          REAL STORIES
          <span className="text-xl">⭐</span>
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-transparent bg-clip-text">
          Homework Just Got
        </span>
        <br />
        <span className="text-gray-900">100x More Fun</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Students are leveling up their grades while actually enjoying homework. Parents are finally getting peace of mind. 
      </p>
    </div>

    {/* Testimonials grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
      
      {/* Testimonial 1 - Student */}
      <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-purple-200 hover:border-purple-400 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop" 
                width={64} 
                height={64} 
                alt="Marcus Thompson"
                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-purple-200 group-hover:ring-purple-400 transition-all"
              />
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                🎮 LVL 47
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Marcus Thompson</h3>
              <p className="text-sm text-purple-600 font-semibold">8th Grader</p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 relative">
            <span className="text-6xl text-purple-200 absolute -top-2 -left-2 leading-none">"</span>
            <p className="text-gray-700 leading-relaxed relative z-10 pl-6">
              I used to take <span className="font-bold text-purple-600">2.5 hours on math homework</span> and still get Cs. Now I finish in <span className="font-bold text-pink-600">45 minutes</span> and I&apos;m getting As! The puzzle-solving mode makes equations actually make sense.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 border-2 border-purple-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 font-medium">Grade improvement:</span>
              <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">C → A</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - Parent */}
      <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-pink-200 hover:border-pink-400 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400 to-yellow-400 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
                width={64} 
                height={64} 
                alt="Jennifer Rodriguez"
                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-pink-200 group-hover:ring-pink-400 transition-all"
              />
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                MOM
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Jennifer Rodriguez</h3>
              <p className="text-sm text-pink-600 font-semibold">Parent of Two</p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 relative">
            <span className="text-6xl text-pink-200 absolute -top-2 -left-2 leading-none">"</span>
            <p className="text-gray-700 leading-relaxed relative z-10 pl-6">
              Homework battles are OVER. My daughter <span className="font-bold text-pink-600">actually asks to do her homework now</span>. I&apos;m saving <span className="font-bold text-purple-600">$300/month on tutoring</span> because she finally understands the concepts instead of just memorizing answers.
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-2xl p-4 border-2 border-pink-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 font-medium">Stress reduction:</span>
              <span className="text-2xl font-black bg-gradient-to-r from-pink-600 to-yellow-600 text-transparent bg-clip-text">95%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - Student */}
      <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-yellow-200 hover:border-yellow-400 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-purple-400 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                width={64} 
                height={64} 
                alt="Sophia Chen"
                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-yellow-200 group-hover:ring-yellow-400 transition-all"
              />
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                🏆 TOP 5%
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Sophia Chen</h3>
              <p className="text-sm text-yellow-600 font-semibold">6th Grade Honor Roll</p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 relative">
            <span className="text-6xl text-yellow-200 absolute -top-2 -left-2 leading-none">"</span>
            <p className="text-gray-700 leading-relaxed relative z-10 pl-6">
              History used to be SO boring. Now it&apos;s like <span className="font-bold text-yellow-600">playing an adventure game</span>! I went from <span className="font-bold text-purple-600">barely passing to getting 94%</span> on my last test. My teacher asked what changed and I told her about this app!
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-purple-100 rounded-2xl p-4 border-2 border-yellow-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 font-medium">Homework completion:</span>
              <span className="text-2xl font-black bg-gradient-to-r from-yellow-600 to-purple-600 text-transparent bg-clip-text">100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 4 - Parent */}
      <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-purple-200 hover:border-purple-400 relative overflow-hidden md:col-span-2 lg:col-span-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-yellow-400 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
                width={64} 
                height={64} 
                alt="David Park"
                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-purple-200 group-hover:ring-purple-400 transition-all"
              />
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                DAD
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">David Park</h3>
              <p className="text-sm text-purple-600 font-semibold">Father of Three</p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 relative">
            <span className="text-6xl text-purple-200 absolute -top-2 -left-2 leading-none">"</span>
            <p className="text-gray-700 leading-relaxed relative z-10 pl-6">
              As a working parent, the time tracking feature is a lifesaver. I can see my kids are <span className="font-bold text-purple-600">actually doing homework for 90 minutes</span>, not just saying they did. Their grades went up <span className="font-bold text-pink-600">an entire letter grade</span> in just one semester!
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 border-2 border-purple-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 font-medium">Family peace:</span>
              <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">PRICELESS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 5 - Teacher */}
      <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-pink-200 hover:border-pink-400 relative overflow-hidden md:col-span-2 lg:col-span-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
                width={64} 
                height={64} 
                alt="Ms. Emily Watson"
                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-pink-200 group-hover:ring-pink-400 transition-all"
              />
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                TEACHER
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Ms. Emily Watson</h3>
              <p className="text-sm text-pink-600 font-semibold">5th Grade Math Teacher</p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 relative">
            <span className="text-6xl text-pink-200 absolute -top-2 -left-2 leading-none">"</span>
            <p className="text-gray-700 leading-relaxed relative z-10 pl-6">
              My homework completion rate went from <span className="font-bold text-pink-600">62% to 97%</span> this year. The analytics show me exactly which concepts each student struggles with. It&apos;s like having <span className="font-bold text-purple-600">x-ray vision into their learning</span>!
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-2xl p-4 border-2 border-pink-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 font-medium">Class average boost:</span>
              <span className="text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">+18%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 6 - Student */}
      <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-yellow-200 hover:border-yellow-400 relative overflow-hidden md:col-span-2 lg:col-span-1">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-pink-400 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                width={64} 
                height={64} 
                alt="Jake Morrison"
                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-yellow-200 group-hover:ring-yellow-400 transition-all"
              />
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                🔥 32 STREAK
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Jake Morrison</h3>
              <p className="text-sm text-yellow-600 font-semibold">10th Grader</p>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 relative">
            <span className="text-6xl text-yellow-200 absolute -top-2 -left-2 leading-none">"</span>
            <p className="text-gray-700 leading-relaxed relative z-10 pl-6">
              I have ADHD and regular homework was impossible. The game format keeps me focused for <span className="font-bold text-yellow-600">the entire session</span>. I&apos;ve done homework <span className="font-bold text-purple-600">32 days in a row</span> - that&apos;s never happened before in my life!
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-4 border-2 border-yellow-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 font-medium">Focus improvement:</span>
              <span className="text-2xl font-black bg-gradient-to-r from-yellow-600 to-pink-600 text-transparent bg-clip-text">500%</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Stats bar */}
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-transform duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
        <div className="space-y-2">
          <div className="text-5xl md:text-6xl font-black">97%</div>
          <div className="text-lg md:text-xl font-semibold opacity-90">Homework completion rate</div>
        </div>
        <div className="space-y-2">
          <div className="text-5xl md:text-6xl font-black">2.5hrs</div>
          <div className="text-lg md:text-xl font-semibold opacity-90">Average time saved weekly</div>
        </div>
        <div className="space-y-2">
          <div className="text-5xl md:text-6xl font-black">+1.2</div>
          <div className="text-lg md:text-xl font-semibold opacity-90">Average GPA increase</div>
        </div>
      </div>
    </div>

  </div>
</section>
  );
}