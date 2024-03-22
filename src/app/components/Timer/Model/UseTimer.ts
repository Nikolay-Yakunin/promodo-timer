'use client';
import { useState, useEffect } from 'react';

type TimerState = 'WORK' | 'BREAK' | 'IDLE';

interface UseTimerProps {
  workTime: number; // рабочее время в минутах
  breakTime: number; // время перерыва в минутах
}

export const useTimer = ({ workTime, breakTime }: UseTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(workTime * 60);
  const [timerState, setTimerState] = useState<TimerState>('IDLE');
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerState === 'WORK') {
      setTimeLeft(workTime * 60);
    } else if (timerState === 'BREAK') {
      setTimeLeft(breakTime * 60);
    }
  }, [timerState, workTime, breakTime]);

  useEffect(() => {
    if (timeLeft === 0 && timerState === 'WORK') {
      setTimerState('BREAK');
    } else if (timeLeft === 0 && timerState === 'BREAK') {
      setTimerState('WORK');
    }
  }, [timeLeft, timerState]);

  const startTimer = () => {
    if (!intervalId) {
      setTimerState('WORK');
      const id = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); // Обновляем каждую секунду
      setIntervalId(id);
    }
  };

  const pauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTimerState('IDLE');
    setTimeLeft(workTime * 60);
  };

  return { timeLeft, startTimer, pauseTimer, resetTimer, setTimerState, timerState };
};
