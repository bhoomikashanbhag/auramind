import { useState } from "react"
import { db } from "../firebase"
import { addDoc, collection } from "firebase/firestore"

function Journal() {
    <a
  href="/dashboard"
  className="inline-block mb-6 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-2xl"
>
  ← Back to Dashboard
</a>

  const [text, setText] = useState("")
  const [savedText, setSavedText] = useState([])

  const saveJournal = async () => {

  if (text.trim() === "") return

  try {

    await addDoc(
      collection(db, "journals"),
      {
        text: text,
        createdAt: new Date()
      }
    )

    setSavedText([...savedText, text])

    setText("")

    alert("Journal Saved ✅")

  } catch (error) {

    alert("Error saving journal ❌")

  }

}

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14001f] via-black to-[#001233] text-white p-8">

      <h1 className="text-5xl font-bold mb-4">
        My Journal 📖
      </h1>

      <p className="text-gray-300 mb-8">
        Write your thoughts and feelings here.
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something..."
        className="w-full h-60 bg-white/10 border border-white/20 rounded-3xl p-6 text-white outline-none resize-none"
      />

      <button
        onClick={saveJournal}
        className="mt-6 bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl text-lg font-semibold"
      >
        Save Journal
      </button>

      {/* Saved Entries */}
      <div className="mt-10 space-y-4">

        {savedText.map((entry, index) => (

          <div
            key={index}
            className="bg-white/10 border border-white/20 p-5 rounded-2xl"
          >
            {entry}
          </div>

        ))}

      </div>

    </div>
  )
}

export default Journal