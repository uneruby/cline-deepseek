import { useState } from 'react';
import styles from './index.module.scss';

interface AccordionBannerProps {
  mainText: string;
  subText: string;
}

export const AccordionBanner = ({
  mainText,
  subText,
}: AccordionBannerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={toggleAccordion}>
        <div className={styles.mainText}>{mainText}</div>
        <div>{isOpen ? '▲' : '▼'}</div>
      </div>
      {isOpen && <div className={styles.subText}>{subText}</div>}
    </div>
  );
};
