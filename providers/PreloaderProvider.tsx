"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

interface PreloaderContextType {
  isLoading: boolean;
  setReady: () => void;
}

const PreloaderContext = createContext<PreloaderContextType>({
  isLoading: true,
  setReady: () => {},
});

export function usePreloader() {
  return useContext(PreloaderContext);
}

const MIN_DISPLAY_TIME = 2000;

export default function PreloaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeElapsed(true), MIN_DISPLAY_TIME);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setContentReady(true);
    });
  }, []);

  useEffect(() => {
    if (contentReady && minTimeElapsed) {
      setIsLoading(false);
    }
  }, [contentReady, minTimeElapsed]);

  const setReady = useCallback(() => {
    setContentReady(true);
  }, []);

  return (
    <PreloaderContext.Provider value={{ isLoading, setReady }}>
      {children}
    </PreloaderContext.Provider>
  );
}
