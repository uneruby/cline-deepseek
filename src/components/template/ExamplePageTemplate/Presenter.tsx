import { FC } from 'react';
import styles from './index.module.scss';
import Button from '@/components/button/BaseButton';
import { AccordionBanner } from '@/components/banner/AccordionBanner';

type Props = {
  handleClick: () => void;
};

const Presenter: FC<Props> = ({ handleClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Button Component Example</h1>
      <AccordionBanner
        mainText="Main Banner Text"
        subText="Additional information that appears when expanded"
      />
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default Presenter;
