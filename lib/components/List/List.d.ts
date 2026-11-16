import { type HTMLAttributes, type ReactNode } from 'react';
export interface ListProps extends HTMLAttributes<HTMLElement> {
    as?: 'ul' | 'ol' | 'dl' | 'div';
}
export declare function List({ as: Tag, className, ...props }: ListProps): import("react/jsx-runtime").JSX.Element;
export interface ListItemProps extends HTMLAttributes<HTMLElement> {
    as?: 'li' | 'div';
    leading?: ReactNode;
    action?: ReactNode;
}
export declare function ListItem({ as: Tag, className, leading, action, children, ...props }: ListItemProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=List.d.ts.map