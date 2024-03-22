'use client';
import React from 'react';
import styles from './TimerWidget.module.css';
import { useTimer } from '..';

export function TimerWidget() {
  const { timeLeft, startTimer, pauseTimer, resetTimer, setTimerState } = useTimer({
    workTime: 25,
    breakTime: 5,
  });

  // Форматирование времени для отображения
  const formatTimeLeft = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.container}>
      <h1>Promodo Timer</h1>
      <div className={styles.grid}>
        <div className={styles.button} onClick={() => setTimerState('WORK')}>
          <span>{formatTimeLeft(25 * 60)}</span>
        </div>
        <div className={styles.button} onClick={() => setTimerState('BREAK')}>
          <span>{formatTimeLeft(5 * 60)}</span>
        </div>
      </div>
      <div className={styles.timerDisplay}>{formatTimeLeft(timeLeft)}</div>
      <div>
        <button className={styles.button} onClick={startTimer}>
          Start
        </button>
        <button className={styles.button} onClick={pauseTimer}>
          Pause
        </button>
        <button className={styles.button} onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}
