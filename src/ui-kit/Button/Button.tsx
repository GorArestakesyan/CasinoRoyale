import type { ReactNode } from 'react';
import { Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface IButtonProps extends Omit<
  MuiButtonProps,
  'classes' | 'startIcon' | 'endIcon'
> {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  icon?: ReactNode;
  iconPlacement?: 'left' | 'right' | 'top' | 'bottom';
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  transition: 'all 0.3s ease',
  '&.MuiButton-contained': {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
  '&.MuiButton-root': {
    gap: theme.spacing(1),
  },
}));

const IconWrapper = styled('span', {
  shouldForwardProp: (prop) => prop !== 'size' && prop !== 'placement',
})<{
  size: 'small' | 'medium' | 'large';
  placement: string;
}>(({ size, placement }) => {
  const iconSizes = {
    small: '16px',
    medium: '20px',
    large: '24px',
  };

  const isVertical = placement === 'top' || placement === 'bottom';

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: iconSizes[size],
    height: iconSizes[size],
    flexShrink: 0,
    '& svg': {
      width: '100%',
      height: '100%',
      transition: 'transform 0.2s ease',
    },
    ...(isVertical && {
      flexDirection: 'column',
    }),
  };
});

const ButtonContent = styled('span', {
  shouldForwardProp: (prop) => prop !== 'iconPlacement',
})<{ iconPlacement: string }>(({ iconPlacement }) => {
  const isVertical = iconPlacement === 'top' || iconPlacement === 'bottom';

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    ...(isVertical && {
      flexDirection: 'column',
      gap: '4px',
    }),
  };
});

const Button = ({
  variant = 'contained',
  size = 'medium',
  children,
  className,
  icon,
  iconPlacement = 'left',
  ...props
}: IButtonProps) => {
  const renderIcon = () => {
    if (!icon) return null;

    return (
      <IconWrapper size={size} placement={iconPlacement}>
        {icon}
      </IconWrapper>
    );
  };

  const renderContent = () => {
    if (!icon) {
      return children;
    }

    const iconElement = renderIcon();
    const isIconFirst = iconPlacement === 'left' || iconPlacement === 'top';

    return (
      <ButtonContent iconPlacement={iconPlacement}>
        {isIconFirst ? iconElement : children}
        {isIconFirst ? children : iconElement}
      </ButtonContent>
    );
  };

  return (
    <StyledButton
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {renderContent()}
    </StyledButton>
  );
};

export default Button;
