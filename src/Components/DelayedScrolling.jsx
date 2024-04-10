"use client"

import { useState, useEffect } from 'react'

const DelayedScrolling = (delayTime = 2000) => {

    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true)
        },delayTime)

        return () => clearTimeout(timer)
    },[delayTime])

  return showContent
}

export default DelayedScrolling