import SelfCare from "./pages/SelfCare"
import Chat from "./pages/Chat" 
import Journal from "./pages/Journal"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"
import Dashboard from "./pages/Dashboard"
import Mood from "./pages/Mood"

function LoginPage() {
  const login = async () => {

  try {

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    )

    navigate("/dashboard")

  } catch (error) {

    alert("Invalid Email or Password ❌")

  }

}
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14001f] via-black to-[#001233] flex items-center justify-center px-4">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 w-full max-w-md shadow-2xl">

        <div className="text-center mb-8">

          <h1 className="text-5xl font-bold text-white mb-3">
            MindBloom
          </h1>

          <p className="text-gray-300">
            Your AI Mood Companion ✨
          </p>

        </div>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-4 rounded-2xl bg-white/10 text-white mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-4 rounded-2xl bg-white/10 text-white mb-6 outline-none"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-purple-600 hover:bg-purple-700 transition p-4 rounded-2xl text-white font-semibold"
        >
          Login
          
          
        </button>

      </div>

    </div>
  )
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/selfcare" element={<SelfCare />} />
        <Route path="/mood" element={<Mood />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App