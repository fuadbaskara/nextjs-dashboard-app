import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  [key: string]: any;
};

function Button({ children, ...props }: ButtonProps) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
