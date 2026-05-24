import { useState } from "react"
import { db } from "../firebase"
import { addDoc, collection } from "firebase/firestore"

export default function Mood() {

  const [selectedMood, setSelectedMood] = useState("")

  const moods = [
    "😊 Happy",
    "😔 Sad",
    "😌 Calm",
    "😣 Stressed"
  ]

  const saveMood = async (mood) => {

    setSelectedMood(mood)

    try {

      await addDoc(
        collection(db, "moods"),
        {
          mood: mood,
          createdAt: new Date()
        }
      )

      alert("Mood Saved 💜")

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Mood Tracker 🌈
      </h1>

      <div className="grid grid-cols-2 gap-6">

        {moods.map((mood, index) => (

          <button
            key={index}
            onClick={() => saveMood(mood)}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl text-2xl hover:bg-purple-700 transition"
          >

            {mood}

          </button>

        ))}

      </div>

      {selectedMood && (

        <div className="mt-10 bg-white/10 p-6 rounded-3xl text-2xl">

          Today's Mood:
          <span className="text-purple-300 ml-3">

            {selectedMood}

          </span>

        </div>

      )}

    </div>

  )

}