import styles from './page.module.css';
import { TimerWidget } from './components/Timer';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <TimerWidget />
      </div>
    </main>
  );
}
