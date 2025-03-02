import React from 'react';
import styles from './index.module.scss';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
