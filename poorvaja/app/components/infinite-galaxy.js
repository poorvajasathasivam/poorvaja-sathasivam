'use client'

import { useEffect, useRef } from 'react'

export default function InfiniteGalaxy() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Star properties
    const stars = []
    const numStars = 300
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        opacity: Math.random(),
      })
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        star.z -= 0.1
        if (star.z <= 0) {
          star.z = canvas.width
        }

        const x = (star.x - centerX) * (canvas.width / star.z)
        const y = (star.y - centerY) * (canvas.width / star.z)

        const twinkle = Math.sin(Date.now() * 0.002 + star.opacity * 10) * 0.3 + 0.7
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
        const size = (canvas.width / star.z) * 0.5
        ctx.fillRect(x + centerX, y + centerY, size, size)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
}

