import { type HTMLAttributes } from 'react';
export type CardHover = 'none' | 'lift' | 'image' | 'background';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hover?: CardHover;
}
/** A visual container. Use a link or button inside for interaction. */
export declare const Card: import("react").ForwardRefExoticComponent<CardProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Card.d.ts.map