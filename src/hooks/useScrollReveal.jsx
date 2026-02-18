
import { useEffect, useRef, useState } from "react";

export default function useScrollReveal({ once = false } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.08 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [once]);

  return { ref, isVisible };
}