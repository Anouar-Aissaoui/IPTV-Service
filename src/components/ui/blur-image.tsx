"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Blurhash } from "react-blurhash"

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  hash?: string
  width?: number
  height?: number
  priority?: boolean
  fetchPriority?: "high" | "low" | "auto"
}

const BlurImage = React.forwardRef<HTMLImageElement, BlurImageProps>(
  ({ className, alt, hash, width, height, priority, fetchPriority = "auto", ...props }, ref) => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false)

    useEffect(() => {
      const img = new Image()
      img.onload = () => {
        setImageLoaded(true)
      }
      img.src = props.src || ""
    }, [props.src])

    return (
      <div className="relative">
        {!imageLoaded && hash && (
          <div className="absolute inset-0">
            <Blurhash
              hash={hash}
              width={width || 400}
              height={height || 300}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          </div>
        )}
        <img
          ref={ref}
          className={cn(
            "transition-opacity duration-300",
            imageLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={fetchPriority}
          {...props}
        />
      </div>
    )
  }
)

BlurImage.displayName = "BlurImage"

export { BlurImage }