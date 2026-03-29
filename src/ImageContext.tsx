import { createContext } from 'react';

interface ImageContextType {
  imageUrl: string;
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ImageContext = createContext<ImageContextType | undefined>(undefined);