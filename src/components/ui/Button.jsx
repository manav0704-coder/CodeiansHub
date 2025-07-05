import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
        secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
        outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-secondary-500',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
    },
  }
);

const Button = forwardRef(
  ({ className, children, variant, size, fullWidth, href, to, ...props }, ref) => {
    // Use Link for internal navigation
    if (to) {
      return (
        <Link
          to={to}
          className={buttonVariants({ variant, size, fullWidth, className })}
          ref={ref}
          {...props}
        >
          {children}
        </Link>
      );
    }

    // Use anchor for external links
    if (href) {
      return (
        <a
          href={href}
          className={buttonVariants({ variant, size, fullWidth, className })}
          ref={ref}
          {...props}
        >
          {children}
        </a>
      );
    }

    // Default button
    return (
      <button
        className={buttonVariants({ variant, size, fullWidth, className })}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants }; 