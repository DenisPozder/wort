"use client"

export default function myImageLoader({src, width, quality}) {
    return `https://www.wort.rs/${src}?w=${width}&q=${quality || 75}`
}