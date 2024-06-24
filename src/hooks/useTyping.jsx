import { useEffect, useState } from "react";

const Phase = {
  Typing: 1,
  Pausing: 2,
  Deleting: 3,
};

const TYPING_INTERVAL = 150;
const PAUSE_MS = 1000;
const DELETING_INTERVAL = 50;

export const useTyping = (words) => {
  const [typing, setTyping] = useState("");
  const [phase, setPhase] = useState(Phase.Typing);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextWord = words[selectedIndex].slice(0, typing.length + 1);

        if (nextWord === typing) {
          setPhase(Phase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTyping(nextWord);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case Phase.Deleting: {
        if (!typing) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(words[nextIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
          return;
        }
        const nextRemaining = words[selectedIndex].slice(0, typing.length - 1);

        const timeout = setTimeout(() => {
          setTyping(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case Phase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_MS);
        return () => clearTimeout(timeout);
    }
    // if (phase === Phase.Pausing) return;
  }, [words, typing, selectedIndex, phase]);

  return typing;
};
