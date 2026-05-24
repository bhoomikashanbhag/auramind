import { useState } from "react"
import axios from "axios"

export default function Chat() {

  const [message, setMessage] = useState("")
  const [reply, setReply] = useState("")
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {

    if (!message) return

    setLoading(true)

    try {

      const response = await axios.post(

        "https://openrouter.ai/api/v1/chat/completions",

        {
          model: "openai/gpt-3.5-turbo",

          messages: [
            {
              role: "user",
              content: message
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

      setReply(
        response.data.choices[0].message.content
      )

    } catch (error) {

      console.log(error)

      alert("AI Error ❌")

    }

    setLoading(false)

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white flex justify-center items-center p-6">

      <div className="w-full max-w-4xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">

        <div className="flex items-center gap-4 mb-8">

          <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-2xl">
            🤖
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              AuraMind AI
            </h1>

            <p className="text-gray-300">
              Your AI wellness companion
            </p>
          </div>

        </div>

        <div className="bg-black/30 rounded-2xl p-6 min-h-[300px] mb-6 overflow-y-auto">

          {message && (

            <div className="flex justify-end mb-4">

              <div className="bg-purple-600 px-5 py-3 rounded-2xl max-w-[70%]">
                {message}
              </div>

            </div>

          )}

          {reply && (

            <div className="flex justify-start">

              <div className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl max-w-[70%] whitespace-pre-wrap">

                {reply}

              </div>

            </div>

          )}

          {loading && (

            <div className="text-gray-400 mt-4 animate-pulse">
              AuraMind is typing...
            </div>

          )}

        </div>

        <div className="flex gap-4">

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Talk with AuraMind..."
            className="flex-1 bg-white/10 border border-white/20 rounded-2xl p-4 text-white placeholder-gray-400 outline-none resize-none h-20"
          />

          <button
            onClick={sendMessage}
            className="bg-purple-600 hover:bg-purple-700 transition px-8 rounded-2xl font-semibold"
          >
            Send
          </button>

        </div>

      </div>

    </div>

  )

}