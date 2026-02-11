import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-app-card rounded-3xl p-5 shadow-lg border border-slate-700/50 backdrop-blur-sm transition-transform duration-200 ${onClick ? 'cursor-pointer active:scale-95' : ''} ${className}`}
    >
      {children}
    </div>
  );
};