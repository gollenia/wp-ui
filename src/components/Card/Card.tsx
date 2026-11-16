import { forwardRef, type HTMLAttributes } from 'react';

export type CardHover = 'none' | 'lift' | 'image' | 'background';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: CardHover;
}

/** A visual container. Use a link or button inside for interaction. */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, hover, ...props }, ref,
) {
  const classes = ['ctx-ui-card', hover && `ctx-ui-card--hover-${hover}`, className]
    .filter(Boolean).join(' ');
  return <div ref={ref} className={classes} {...props} />;
});
