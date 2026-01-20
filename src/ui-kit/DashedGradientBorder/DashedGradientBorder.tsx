import type { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useMemo } from 'react';

interface IDashedGradientBorderProps {
  children: ReactNode;
  className?: string;
  borderRadius?: number;
  gradientColors?: {
    start: string;
    end: string;
  };
  dashPattern?: string;
}

const Container = styled(Box)<{
  borderRadius: number;
}>(({ borderRadius }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: `${borderRadius}px`,
}));

const BorderSvg = styled('svg')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 0,
  overflow: 'hidden',
});

const Content = styled(Box)({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const DashedGradientBorder = ({
  children,
  className,
  borderRadius = 16,
  gradientColors = { start: '#ff8d6b', end: '#ffba47' },
  dashPattern = '4 4',
}: IDashedGradientBorderProps) => {
  const gradientId = useMemo(
    () => `gradient-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  return (
    <Container borderRadius={borderRadius} className={className}>
      <BorderSvg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={gradientColors.start} />
            <stop offset="100%" stopColor={gradientColors.end} />
          </linearGradient>
        </defs>
        <rect
          x="0.5"
          y="0.5"
          width="99.4"
          height="99.4"
          rx={borderRadius / 3}
          ry={borderRadius / 3}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="1"
          strokeDasharray={dashPattern}
          vectorEffect="non-scaling-stroke"
        />
      </BorderSvg>
      <Content>{children}</Content>
    </Container>
  );
};

export type { IDashedGradientBorderProps };
export default DashedGradientBorder;
