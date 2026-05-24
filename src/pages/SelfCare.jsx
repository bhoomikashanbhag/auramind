export default function SelfCare() {

  const tips = [

    "💧 Drink more water today",

    "🌸 Take deep breaths for 2 minutes",

    "😴 Sleep at least 7 hours",

    "📖 Write your thoughts in journal",

    "🚶 Take a small walk outside",

    "🎵 Listen to calming music"

  ]

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-pink-950 to-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Self Care 🌸
      </h1>

      <div className="grid gap-6">

        {tips.map((tip, index) => (

          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl text-xl"
          >

            {tip}

          </div>

        ))}

      </div>

    </div>

  )

}