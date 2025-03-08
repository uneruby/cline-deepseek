import styles from '@/styles/Home.module.scss';
import Button from '@/components/button/BaseButton';
import { AccordionBanner } from '@/components/banner/AccordionBanner';

export default function Home() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className={styles.container}>
      <h1>Button Component Example</h1>
      <AccordionBanner
        mainText="Main Banner Text"
        subText="Additional information that appears when expanded"
      />
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}
