import { Button } from '@test/button';
import styles from './jason-page.module.css';
import { useCounter } from '@test/counter';

export function JasonPage() {

  const {count, increment} = useCounter();

  return (
    <div className={styles['container']}>
      <h1>Welcome to my site! {}</h1>
      <Button></Button>
      <button onClick={increment}>{count}</button>
    </div>
  );
}

export default JasonPage;
