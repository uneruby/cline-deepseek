import React from 'react';
import styles from './index.module.scss';

interface BaseButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button className={styles.baseButton} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default BaseButton;
