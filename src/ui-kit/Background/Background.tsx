import type { ReactNode, CSSProperties } from 'react';
import { styled } from '@mui/material/styles';

export interface IBackgroundProps {
  children?: ReactNode;
  imageUrl?: string;
  className?: string;
  variant?: 'default' | 'gradient' | 'solid';
  color?: string;
  backgroundGradient?: string;
  style?: CSSProperties;
}

const StyledBackground = styled('div')<IBackgroundProps>(
  ({ imageUrl, variant, color, backgroundGradient }) => ({
    width: '100%',
    minHeight: '100vh',
    backgroundImage:
      variant === 'gradient'
        ? backgroundGradient ||
          `linear-gradient(135deg, ${color || '#667eea'} 0%, ${color || '#764ba2'} 100%)`
        : imageUrl
          ? `url(${imageUrl})`
          : 'none',
    backgroundColor: variant === 'solid' ? color || '#f5f5f5' : 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    transition: 'background-image 0.5s ease, background-color 0.5s ease',
    overflow: 'visible',
  })
);

const Background = ({
  children,
  imageUrl,
  className,
  variant = 'default',
  color,
  backgroundGradient,
  style,
}: IBackgroundProps) => {
  return (
    <StyledBackground
      imageUrl={imageUrl}
      variant={variant}
      color={color}
      backgroundGradient={backgroundGradient}
      className={className}
      style={style}
    >
      {children}
    </StyledBackground>
  );
};

export default Background;
