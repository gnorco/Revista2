
import { useEffect, useState } from "react"

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

useEffect(() => {
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
}, [])

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
      behavior: "smooth", // animación suave
    })
}

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-800 transition"
        >
          ↑
        </button>
      )}
    </>
  )
}
