import { useState } from "react"

export default function SelfCare() {
  const [mood, setMood] = useState("happy")

  const data = {
    happy: {
      title: "😊 Happy",
      message: "Keep your positive energy flowing!",
      suggestions: [
        "Write down 3 things you are grateful for.",
        "Share your happiness with a friend.",
        "Go for a short walk and enjoy the moment.",
        "Do something creative like drawing or journaling."
      ],
      music: [
        { name: "Happy Vibes Playlist", link: "https://www.youtube.com/results?search_query=happy+vibes+playlist" },
        { name: "Feel Good Songs", link: "https://www.youtube.com/results?search_query=feel+good+songs" },
        { name: "Positive Energy Music", link: "https://www.youtube.com/results?search_query=positive+energy+music" }
      ]
    },

    sad: {
      title: "😔 Sad",
      message: "It’s okay to feel low. Be gentle with yourself.",
      suggestions: [
        "Take slow deep breaths for 2 minutes.",
        "Write your feelings in your journal.",
        "Talk to someone you trust.",
        "Drink water and rest for a while.",
        "Remind yourself: this feeling will pass."
      ],
      music: [
        { name: "Healing Music", link: "https://www.youtube.com/results?search_query=healing+music+for+sadness" },
        { name: "Calm Piano", link: "https://www.youtube.com/results?search_query=calm+piano+music" },
        { name: "Comfort Songs", link: "https://www.youtube.com/results?search_query=comfort+songs+playlist" }
      ]
    },

    stressed: {
      title: "😣 Stressed",
      message: "Pause. Breathe. You don’t have to solve everything now.",
      suggestions: [
        "Try box breathing: inhale 4, hold 4, exhale 4.",
        "Close your eyes and relax your shoulders.",
        "Break your task into one small step.",
        "Avoid phone scrolling for 10 minutes.",
        "Stretch your neck and hands."
      ],
      music: [
        { name: "Stress Relief Music", link: "https://www.youtube.com/results?search_query=stress+relief+music" },
        { name: "Meditation Music", link: "https://www.youtube.com/results?search_query=meditation+music+for+stress" },
        { name: "Rain Sounds", link: "https://www.youtube.com/results?search_query=rain+sounds+for+relaxation" }
      ]
    },

    tired: {
      title: "😴 Tired",
      message: "Your body needs rest. Listen to it.",
      suggestions: [
        "Take a 20-minute power nap.",
        "Drink water slowly.",
        "Avoid caffeine late in the day.",
        "Do light stretching.",
        "Sleep early tonight if possible."
      ],
      music: [
        { name: "Sleep Music", link: "https://www.youtube.com/results?search_query=sleep+music" },
        { name: "Deep Relaxation Sounds", link: "https://www.youtube.com/results?search_query=deep+relaxation+music" },
        { name: "Soft Instrumental Music", link: "https://www.youtube.com/results?search_query=soft+instrumental+sleep+music" }
      ]
    },

    calm: {
      title: "😌 Calm",
      message: "Beautiful. Protect this peaceful energy.",
      suggestions: [
        "Read something peaceful.",
        "Do a short gratitude journal.",
        "Keep your phone aside for 15 minutes.",
        "Enjoy silence or soft music.",
        "Plan your next task slowly."
      ],
      music: [
        { name: "Calm Music", link: "https://www.youtube.com/results?search_query=calm+music" },
        { name: "LoFi Relax Beats", link: "https://www.youtube.com/results?search_query=lofi+relax+beats" },
        { name: "Peaceful Morning Music", link: "https://www.youtube.com/results?search_query=peaceful+morning+music" }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13001f] via-black to-[#00152e] text-white p-6 md:p-10">

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Self Care 🌸</h1>
          <p className="text-gray-300">Choose your mood and get personalized care suggestions.</p>
        </div>

        <a href="/dashboard" className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-2xl">
          Back
        </a>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            onClick={() => setMood(key)}
            className={`px-5 py-3 rounded-2xl transition hover:scale-105 ${
              mood === key ? "bg-purple-600" : "bg-white/10 border border-white/20"
            }`}
          >
            {data[key].title}
          </button>
        ))}
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-8 shadow-2xl">
        <h2 className="text-3xl font-bold mb-3">{data[mood].title}</h2>
        <p className="text-gray-300 text-xl">{data[mood].message}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7">
          <h3 className="text-2xl font-bold mb-5">Suggestions 💡</h3>

          <div className="space-y-4">
            {data[mood].suggestions.map((tip, index) => (
              <div key={index} className="bg-black/30 p-4 rounded-2xl">
                {tip}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7">
          <h3 className="text-2xl font-bold mb-5">Music For You 🎵</h3>

          <div className="space-y-4">
            {data[mood].music.map((song, index) => (
              <a
                key={index}
                href={song.link}
                target="_blank"
                className="block bg-purple-600/30 hover:bg-purple-600 transition p-4 rounded-2xl"
              >
                {song.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}