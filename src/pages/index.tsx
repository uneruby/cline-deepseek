import styles from '@/styles/Home.module.scss';
import Button from '@/components/button/BaseButton';

export default function Home() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className={styles.container}>
      <h1>Button Component Example</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}
