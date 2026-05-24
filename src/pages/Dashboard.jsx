import { useState } from "react"
function Dashboard() {
  const [mood, setMood] = useState("😊")
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14001f] via-black to-[#001233] text-white flex">
      
<div className="flex justify-between items-center mb-10">

  <div>

    <h1 className="text-5xl font-bold mb-2">
      Welcome Back ✨
    </h1>

    <p className="text-gray-300">
      Track your emotions and relax your mind.
    </p>

  </div>

  <a
    href="/"
    className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-2xl"
  >
    Logout
  </a>

</div>

      {/* Sidebar */}
      <div className="w-64 bg-white/10 backdrop-blur-lg border-r border-white/20 p-6 hidden md:flex flex-col">

        <h1 className="text-3xl font-bold mb-10">
          MindBloom
        </h1>

        <nav className="flex flex-col gap-6 text-lg">

          <button className="text-left hover:text-purple-400 transition">
            🏠 Dashboard
          </button>

          <button className="text-left hover:text-purple-400 transition">
            😊 Mood Tracker
          </button>

          <button className="text-left hover:text-purple-400 transition">
            <a
  href="/journal"
  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:scale-105 transition block"
>

  <h2 className="text-2xl font-bold mb-3">
    📖 Journal
  </h2>

  <p className="text-gray-300">
    Write your thoughts and daily reflections.
  </p>

</a>
          </button>

          <button className="text-left hover:text-purple-400 transition">
            <a
  href="/chat"
  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:scale-105 transition block"
>

  <h2 className="text-2xl font-bold mb-3">
    🤖 AI Chat
  </h2>

  <p className="text-gray-300">
    Talk with your AI mood companion anytime.
  </p>

</a>
          </button>

          <button className="text-left hover:text-purple-400 transition">
            <a
  href="/selfcare"
  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:scale-105 transition block"
>

  <h2 className="text-2xl font-bold mb-3">
    💆 Self Care
  </h2>

  <p className="text-gray-300">
    Relaxation tips and wellness suggestions.
  </p>

</a>
          </button>

        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <h2 className="text-4xl font-bold mb-3">
          Welcome Back ✨
        </h2>

        <p className="text-gray-300 mb-8">
          Track your emotions and relax your mind.
        </p>

        {/* Mood Box */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-8">

          <h3 className="text-2xl font-semibold mb-6">
            How are you feeling today?
          </h3>

          <div className="flex gap-6 mb-12 text-6xl">

  <button
    onClick={() => setMood("😊")}
    className="hover:scale-125 transition"
  >
    😊
  </button>

  <button
    onClick={() => setMood("😌")}
    className="hover:scale-125 transition"
  >
    😌
  </button>

  <button
    onClick={() => setMood("😔")}
    className="hover:scale-125 transition"
  >
    😔
  </button>

  <button
    onClick={() => setMood("😡")}
    className="hover:scale-125 transition"
  >
    😡
  </button>

  <button
    onClick={() => setMood("😴")}
    className="hover:scale-125 transition"
  >
    😴
  </button>

</div>
<h2 className="text-3xl font-semibold mb-10">
  Current Mood: {mood}
</h2>

        </div>

      </div>

    </div>
  )
}

export default Dashboard