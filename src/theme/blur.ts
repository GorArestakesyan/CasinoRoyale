export const BLUR_EFFECTS = {
  blur1: {
    backdropFilter: 'blur(1px)',
  },
  blur10: {
    backdropFilter: 'blur(10px)',
  },
} as const;

export const GLASS_EFFECT_DARK = {
  backgroundColor: 'rgba(2, 1, 31, 0.95)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  ...BLUR_EFFECTS.blur1,
} as const;
