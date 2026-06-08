import { useState, useEffect } from 'react'

export default function Logo({ src, className, alt = 'Logo', style }) {
  const [processedSrc, setProcessedSrc] = useState(null)
  const [aspectRatio, setAspectRatio] = useState(null)

  useEffect(() => {
    if (!src) return

    const img = new Image()
    img.src = src
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        setProcessedSrc(src)
        return
      }

      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)

      try {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imgData.data

        let minX = canvas.width
        let minY = canvas.height
        let maxX = 0
        let maxY = 0
        const threshold = 35 // Dark threshold for black background removal

        // Find bounding box of non-black pixels
        for (let y = 0; y < canvas.height; y++) {
          for (let x = 0; x < canvas.width; x++) {
            const idx = (y * canvas.width + x) * 4
            const r = data[idx]
            const g = data[idx + 1]
            const b = data[idx + 2]

            // Check if not black/dark
            if (!(r < threshold && g < threshold && b < threshold)) {
              if (x < minX) minX = x
              if (y < minY) minY = y
              if (x > maxX) maxX = x
              if (y > maxY) maxY = y
            }
          }
        }

        if (maxX >= minX && maxY >= minY) {
          // Add minor padding to avoid cropping too tightly
          const padding = 4
          minX = Math.max(0, minX - padding)
          minY = Math.max(0, minY - padding)
          maxX = Math.min(canvas.width - 1, maxX + padding)
          maxY = Math.min(canvas.height - 1, maxY + padding)

          const croppedWidth = maxX - minX + 1
          const croppedHeight = maxY - minY + 1

          const croppedCanvas = document.createElement('canvas')
          croppedCanvas.width = croppedWidth
          croppedCanvas.height = croppedHeight
          const croppedCtx = croppedCanvas.getContext('2d')

          if (croppedCtx) {
            const croppedData = ctx.getImageData(minX, minY, croppedWidth, croppedHeight)
            const cData = croppedData.data

            // Make black/dark pixels in the cropped region transparent
            for (let i = 0; i < cData.length; i += 4) {
              const r = cData[i]
              const g = cData[i + 1]
              const b = cData[i + 2]
              if (r < threshold && g < threshold && b < threshold) {
                cData[i + 3] = 0 // transparent alpha
              }
            }

            croppedCtx.putImageData(croppedData, 0, 0)
            setProcessedSrc(croppedCanvas.toDataURL())
            setAspectRatio(croppedWidth / croppedHeight)
          } else {
            setProcessedSrc(src)
          }
        } else {
          setProcessedSrc(src)
        }
      } catch (e) {
        console.error("Error processing logo in canvas", e)
        setProcessedSrc(src)
      }
    }

    img.onerror = () => {
      setProcessedSrc(src)
    }
  }, [src])

  if (!processedSrc) {
    return <div className={className} style={{ ...style, opacity: 0 }} />
  }

  return (
    <img
      src={processedSrc}
      alt={alt}
      className={className}
      style={{
        ...style,
        aspectRatio: aspectRatio ? `${aspectRatio}` : 'auto'
      }}
    />
  )
}
