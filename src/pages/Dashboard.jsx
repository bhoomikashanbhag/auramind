import { useState } from "react"

function Dashboard() {
  const [mood, setMood] = useState("😊 Happy")

  const moods = ["😊 Happy", "😌 Calm", "😔 Low", "😣 Stressed", "😴 Tired"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13001f] via-[#050008] to-[#00152e] text-white flex">

      {/* Sidebar */}
      <aside className="w-72 bg-white/10 backdrop-blur-xl border-r border-white/20 p-6 hidden md:flex flex-col">
        <h1 className="text-3xl font-bold mb-2">AuraMind</h1>
        <p className="text-gray-400 mb-10 text-sm">AI Wellness Companion</p>

        <nav className="flex flex-col gap-4">
          <a href="/dashboard" className="bg-purple-600/40 px-5 py-3 rounded-2xl">🏠 Dashboard</a>
          <a href="/mood" className="hover:bg-white/10 px-5 py-3 rounded-2xl transition">🌈 Mood Tracker</a>
          <a href="/journal" className="hover:bg-white/10 px-5 py-3 rounded-2xl transition">📖 Journal</a>
          <a href="/chat" className="hover:bg-white/10 px-5 py-3 rounded-2xl transition">🤖 AI Talk</a>
          <a href="/selfcare" className="hover:bg-white/10 px-5 py-3 rounded-2xl transition">🌸 Self Care</a>
        </nav>

        <a href="/" className="mt-auto bg-red-500/80 hover:bg-red-600 text-center px-5 py-3 rounded-2xl transition">
          Logout
        </a>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-10">

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
          <div>
            <p className="text-purple-300 mb-2">Welcome back ✨</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-3">
              Take care of your mind
            </h2>
            <p className="text-gray-300 text-lg">
              Track your mood, write your thoughts, and talk with AuraMind AI.
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-3xl p-5 h-fit">
            <p className="text-gray-400 text-sm">Current Mood</p>
            <h3 className="text-3xl font-bold mt-2">{mood}</h3>
          </div>
        </div>

        {/* Mood Card */}
        <section className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 mb-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-2">How are you feeling today?</h3>
          <p className="text-gray-400 mb-6">Choose your mood to personalize your wellness journey.</p>

          <div className="flex flex-wrap gap-4">
            {moods.map((item) => (
              <button
                key={item}
                onClick={() => setMood(item)}
                className={`px-6 py-4 rounded-2xl text-xl transition hover:scale-105 ${
                  mood === item ? "bg-purple-600" : "bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <a href="/journal" className="bg-white/10 border border-white/20 rounded-3xl p-6 hover:scale-105 transition">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-2xl font-bold mb-2">Journal</h3>
            <p className="text-gray-300">Write and save your daily reflections.</p>
          </a>

          <a href="/chat" className="bg-white/10 border border-white/20 rounded-3xl p-6 hover:scale-105 transition">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-2">AI Talk</h3>
            <p className="text-gray-300">Talk with your AI wellness companion.</p>
          </a>

          <a href="/selfcare" className="bg-white/10 border border-white/20 rounded-3xl p-6 hover:scale-105 transition">
            <div className="text-4xl mb-4">🌸</div>
            <h3 className="text-2xl font-bold mb-2">Self Care</h3>
            <p className="text-gray-300">Get calming tips and wellness suggestions.</p>
          </a>
        </section>

        {/* Bottom Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-600/20 border border-purple-400/30 rounded-3xl p-6">
            <p className="text-gray-300">Wellness Score</p>
            <h3 className="text-4xl font-bold mt-2">82%</h3>
          </div>

          <div className="bg-blue-600/20 border border-blue-400/30 rounded-3xl p-6">
            <p className="text-gray-300">Journal Entries</p>
            <h3 className="text-4xl font-bold mt-2">12</h3>
          </div>

          <div className="bg-pink-600/20 border border-pink-400/30 rounded-3xl p-6">
            <p className="text-gray-300">Mindful Minutes</p>
            <h3 className="text-4xl font-bold mt-2">45</h3>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Dashboard