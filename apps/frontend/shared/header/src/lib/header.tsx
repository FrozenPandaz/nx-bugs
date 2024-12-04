import { businessLogic } from '@test/business-logic';
import styles from './header.module.css';

export function Header() {
  return (
    <div className={styles['container']}>
      <h2>This is a header</h2>
      <p>The results of the business logic: {businessLogic()}</p>
    </div>
  );
}

export default Header;
