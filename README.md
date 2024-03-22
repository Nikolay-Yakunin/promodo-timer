This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Certainly! Below is the revised README file content for the `useTimer` hook:

---

# useTimer Hook

The `useTimer` hook is custom-designed to manage timer functionality within your React and Next.js application. It provides methods to operate a Pomodoro timer that alternates between work periods and breaks.

## Usage Example

```jsx
import { useTimer } from 'path_to_hook';

const TimerComponent = () => {
  const { timeLeft, startTimer, pauseTimer, resetTimer, setTimerState } = useTimer({
    workTime: 25,
    breakTime: 5,
  });

  // Timer management functions go here...
  const formatTimeLeft = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    // Timer component JSX goes here...
    <div>
      <h1>Promodo Timer</h1>
      <div>
        <div onClick={() => setTimerState('WORK')}>
          <span>{formatTimeLeft(25 * 60)}</span>
        </div>
        <div onClick={() => setTimerState('BREAK')}>
          <span>{formatTimeLeft(5 * 60)}</span>
        </div>
      </div>
      <div>{formatTimeLeft(timeLeft)}</div>
      <div>
        <button onClick={startTimer}>
          Start
        </button>
        <button onClick={pauseTimer}>
          Pause
        </button>
        <button onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};
```

## Parameters

`useTimer` accepts an object with the following properties:
- `workTime` (number): The duration of the work period in minutes.
- `breakTime` (number): The duration of the break period in minutes.
Example: `{ workTime: 25, breakTime: 5 }`

## Return Values

`useTimer` returns an object with the following properties and methods:
- `timeLeft` (number): The number of seconds remaining in the current period (work or break).
- `startTimer` (function): A function to start the timer.
- `pauseTimer` (function): A function to pause the timer.
- `resetTimer` (function): A function to reset the timer to its initial state.
- `timerState` ('WORK' | 'BREAK' | 'IDLE'): The current state of the timer.

## Method Descriptions

### startTimer
Starts the countdown for the work period.

### pauseTimer
Pauses the timer, keeping the current time.

### resetTimer
Resets the timer to the initial work duration and sets its state to 'IDLE'.

## Notes

- When the timer state changes to 'WORK' or 'BREAK,' the time is automatically set to the initial duration for the respective period.
- The hook keeps track of the timer state and automatically switches it between work time and break time.


