"use client"

import { useEffect } from "react";

const RefreshScroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

export default RefreshScroll;
