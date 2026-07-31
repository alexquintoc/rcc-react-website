import type { ReactNode } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { Link } from '../../lib/router';
import './Button.css';

type Variant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  variant?: Variant;
  showIcon?: boolean;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
}

interface AnchorButtonProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
}

interface ActionButtonProps extends BaseProps {
  onClick: () => void;
  to?: never;
  href?: never;
  type?: 'button' | 'submit';
}

type ButtonProps = LinkButtonProps | AnchorButtonProps | ActionButtonProps;

export function Button(props: ButtonProps) {
  const { variant = 'primary', showIcon = true, className = '', children } = props;
  const classes = `btn btn--${variant} ${className}`.trim();
  const icon = showIcon ? <ArrowUpRight weight="bold" aria-hidden="true" className="btn__icon" /> : null;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const external = /^https?:\/\//.test(props.href);
    return (
      <a
        href={props.href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  const { onClick, type = 'button' } = props as ActionButtonProps;
  return (
    <button type={type} onClick={onClick} className={classes}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
