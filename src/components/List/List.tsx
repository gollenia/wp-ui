import { type HTMLAttributes, type ReactNode } from 'react';

export interface ListProps extends HTMLAttributes<HTMLElement> {
  as?: 'ul' | 'ol' | 'dl' | 'div';
}

export function List({ as: Tag = 'ul', className, ...props }: ListProps) {
  return <Tag className={['ctx-ui-list', className].filter(Boolean).join(' ')} {...props} />;
}

export interface ListItemProps extends HTMLAttributes<HTMLElement> {
  as?: 'li' | 'div';
  leading?: ReactNode;
  action?: ReactNode;
}

export function ListItem({
  as: Tag = 'li', className, leading, action, children, ...props
}: ListItemProps) {
  return (
    <Tag className={['ctx-ui-list-item', className].filter(Boolean).join(' ')} {...props}>
      {leading != null && <div className="ctx-ui-list-item__leading">{leading}</div>}
      <div className="ctx-ui-list-item__content">{children}</div>
      {action != null && <div className="ctx-ui-list-item__action">{action}</div>}
    </Tag>
  );
}
