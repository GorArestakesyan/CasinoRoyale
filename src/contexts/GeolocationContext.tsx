import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import type { Geolocation, GeolocationStyles } from '@/constants/geolocation';
import {
  DEFAULT_GEOLOCATION,
  GEOLOCATION_STYLES,
} from '@/constants/geolocation';

interface GeolocationContextType {
  geolocation: Geolocation;
  setGeolocation: (location: Geolocation) => void;
  styles: GeolocationStyles;
}

const GeolocationContext = createContext<GeolocationContextType | undefined>(
  undefined
);

interface IGeolocationProviderProps {
  children: ReactNode;
}

export const GeolocationProvider = ({
  children,
}: IGeolocationProviderProps) => {
  const [geolocation, setGeolocationState] =
    useState<Geolocation>(DEFAULT_GEOLOCATION);

  const setGeolocation = useCallback((location: Geolocation) => {
    setGeolocationState(location);
    localStorage.setItem('geolocation', location);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('geolocation') as Geolocation;
    if (saved && GEOLOCATION_STYLES[saved]) {
      setGeolocationState(saved);
    }
  }, []);

  const styles = GEOLOCATION_STYLES[geolocation];

  return (
    <GeolocationContext.Provider
      value={{ geolocation, setGeolocation, styles }}
    >
      {children}
    </GeolocationContext.Provider>
  );
};

export const useGeolocation = (): GeolocationContextType => {
  const context = useContext(GeolocationContext);
  if (!context) {
    throw new Error('useGeolocation must be used within GeolocationProvider');
  }
  return context;
};
