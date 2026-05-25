import { useState } from "react"
import { db } from "../firebase"
import { addDoc, collection } from "firebase/firestore"
import axios from "axios"

export default function Journal() {
  const [text, setText] = useState("")
  const [mood, setMood] = useState("😊 Happy")
  const [entries, setEntries] = useState([])
  const [reflection, setReflection] = useState("")
  const [loading, setLoading] = useState(false)

  const moods = ["😊 Happy", "😌 Calm", "😔 Sad", "😣 Stressed", "😴 Tired"]

  const quote = "Your feelings are valid. Take one gentle step at a time 💜"

  const saveJournal = async () => {
    if (text.trim() === "") {
      alert("Please write something first")
      return
    }

    const newEntry = {
      text,
      mood,
      date: new Date().toLocaleString()
    }

    try {
      await addDoc(collection(db, "journals"), {
        ...newEntry,
        createdAt: new Date()
      })

      setEntries([newEntry, ...entries])
      setText("")
      alert("Journal saved ✅")
    } catch (error) {
      console.log(error)
      alert("Error saving journal")
    }
  }

  const getAIReflection = async () => {
    if (text.trim() === "") {
      alert("Write your journal first")
      return
    }

    setLoading(true)

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are AuraMind, a kind AI wellness journal assistant. Give a short supportive reflection, one practical suggestion, and one positive affirmation. Keep it gentle and simple."
            },
            {
              role: "user",
              content: `Mood: ${mood}. Journal: ${text}`
            }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_KEY}`,
            "Content-Type": "application/json"
          }
        }
      )

      setReflection(response.data.choices[0].message.content)
    } catch (error) {
      console.log(error)
      alert(
        error.response?.data?.error?.message ||
          "AI reflection failed"
      )
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13001f] via-black to-[#00152e] text-white p-6 md:p-10">

      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-purple-300 mb-2">AuraMind Journal ✨</p>
          <h1 className="text-4xl md:text-5xl font-bold">Reflect Your Mind</h1>
          <p className="text-gray-300 mt-2">Write, save, and receive gentle AI reflections.</p>
        </div>

        <a href="/dashboard" className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-2xl">
          Back
        </a>
      </div>

      <div className="bg-white/10 border border-white/20 rounded-3xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-2">Daily Quote 💜</h2>
        <p className="text-gray-300 text-lg">{quote}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl">

          <h2 className="text-2xl font-bold mb-5">How do you feel?</h2>

          <div className="flex flex-wrap gap-3 mb-6">
            {moods.map((item) => (
              <button
                key={item}
                onClick={() => setMood(item)}
                className={`px-5 py-3 rounded-2xl transition ${
                  mood === item ? "bg-purple-600" : "bg-white/10 border border-white/20"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your thoughts here..."
            className="w-full h-72 bg-black/30 border border-white/20 rounded-3xl p-6 text-white placeholder-gray-400 outline-none resize-none"
          />

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={saveJournal}
              className="bg-purple-600 hover:bg-purple-700 px-7 py-4 rounded-2xl font-semibold"
            >
              Save Journal
            </button>

            <button
              onClick={getAIReflection}
              className="bg-pink-600 hover:bg-pink-700 px-7 py-4 rounded-2xl font-semibold"
            >
              {loading ? "Thinking..." : "Get AI Reflection"}
            </button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">AI Reflection 🤖</h2>

          {reflection ? (
            <p className="text-gray-200 whitespace-pre-wrap leading-relaxed">
              {reflection}
            </p>
          ) : (
            <p className="text-gray-400">
              Write your journal and click “Get AI Reflection” to receive a gentle response.
            </p>
          )}
        </div>

      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-5">Saved Entries 📚</h2>

        {entries.length === 0 ? (
          <p className="text-gray-400">No entries saved in this session yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {entries.map((entry, index) => (
              <div key={index} className="bg-white/10 border border-white/20 rounded-3xl p-6">
                <p className="text-purple-300 mb-2">{entry.date}</p>
                <p className="mb-3">{entry.mood}</p>
                <p className="text-gray-300">{entry.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}