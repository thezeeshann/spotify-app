import { createContext, useContext, useState, useEffect } from "react";
import { Audio } from "expo-av";
// import { songs } from "@/src/data/song.json";

interface Song {
  id: number;
  title: string;
  artist: string;
  artwork: string;
  artwork_bg_color?: string;
  mp4_link?: string;
}

interface AudioContextType {
  sound: Audio.Sound | null;
  isPlaying: boolean;
  currentSong: Song | null;
  position: number;
  duration: number;
  setSound: (sound: Audio.Sound | null) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setCurrentSong: (song: Song) => void;
  playSound: (song: Song) => Promise<void>;
  pauseSound: () => Promise<void>;
  togglePlayPause: () => Promise<void>;
  playNextSong: () => Promise<void>;
  playPreviousSong: () => Promise<void>;
}

export const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    const setupAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          shouldDuckAndroid: true,
        });
      } catch (error) {
        console.error("Error setting up audio mode:", error);
      }
    };

    setupAudio();
  }, []);

  const playSound = async (song: Song) => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: song.mp4_link },
        { shouldPlay: true }
      );

      setSound(newSound);
      setCurrentSong(song);
      setIsPlaying(true);
      await newSound.playAsync();
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  // const playRandomSound = async (song: Song) => {
  //   try {
  //     if (sound) {
  //       await sound.unloadAsync();
  //     }
  //     const randomSong = songs[Math.floor(Math.random() * song.length)];
  //   } catch (error) {
  //     console.log("error playing sound", error);
  //   }
  // };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const togglePlayPause = async () => {
    if (!sound || !currentSong) return;

    if (isPlaying) {
      await pauseSound();
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        sound,
        isPlaying,
        currentSong,
        position,
        duration,
        setSound,
        setIsPlaying,
        setCurrentSong,
        playSound,
        pauseSound,
        togglePlayPause,
        playNextSong: async () => {},
        playPreviousSong: async () => {},
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
