"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

interface PreloaderContextType {
  isLoading: boolean;
  /** Called by the hero image once it has finished loading (or errored). */
  markHeroLoaded: () => void;
}

const PreloaderContext = createContext<PreloaderContextType>({
  isLoading: true,
  markHeroLoaded: () => {},
});

export function usePreloader() {
  return useContext(PreloaderContext);
}

const MIN_DISPLAY_TIME = 1200;
// Safety net: never keep the preloader up forever if the hero image stalls.
const HERO_FALLBACK_TIME = 8000;

export default function PreloaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontsReady, setFontsReady] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  const markHeroLoaded = useCallback(() => setHeroLoaded(true), []);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeElapsed(true), MIN_DISPLAY_TIME);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) setFontsReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Fallback so a stalled/failed hero load can never strand the preloader.
  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), HERO_FALLBACK_TIME);
    return () => clearTimeout(timer);
  }, []);

  // Wait for fonts and the (optimized) hero image, then honour the min display
  // time. The hero signals readiness via markHeroLoaded, so we gate on the same
  // image next/image actually renders — no separate full-res download.
  const isLoading = !(fontsReady && heroLoaded && minTimeElapsed);

  const value = useMemo(
    () => ({ isLoading, markHeroLoaded }),
    [isLoading, markHeroLoaded]
  );

  return (
    <PreloaderContext.Provider value={value}>
      {children}
    </PreloaderContext.Provider>
  );
}
