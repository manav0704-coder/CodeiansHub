import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cva } from 'class-variance-authority';

const cardVariants = cva(
  'group flex flex-col overflow-hidden rounded-lg border transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
        elevated: 'border-transparent bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
        outline: 'border-gray-200 bg-transparent dark:border-gray-700',
        glass: 'border-white/20 bg-white/10 backdrop-blur-md dark:border-gray-700/30 dark:bg-gray-800/30',
      },
      hover: {
        default: 'hover:border-secondary-200 dark:hover:border-secondary-800',
        lift: 'hover:-translate-y-1 hover:shadow-lg',
        glow: 'hover:shadow-lg hover:shadow-secondary-500/20',
        none: '',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        none: '',
      },
      fullWidth: {
        true: 'w-full',
      },
      disabled: {
        true: 'opacity-70 cursor-not-allowed',
      },
    },
    defaultVariants: {
      variant: 'default',
      hover: 'default',
      size: 'md',
    },
  }
);

const Card = forwardRef(
  ({ className, children, variant, hover, size, fullWidth, disabled, to, href, image, title, subtitle, footer, ...props }, ref) => {
    // Card content
    const cardContent = (
      <>
        {image && (
          <div className="relative overflow-hidden">
            {typeof image === 'string' ? (
              <img 
                src={image} 
                alt={title || 'Card image'} 
                className={`h-48 w-full object-cover transition-transform duration-500 ${!disabled && hover !== 'none' ? 'group-hover:scale-110' : ''}`} 
              />
            ) : (
              <div className="h-48 w-full">{image}</div>
            )}
          </div>
        )}
        
        <div className={`flex flex-1 flex-col ${size !== 'none' ? '' : 'p-6'}`}>
          {title && (
            <h3 className={`mb-2 text-xl font-semibold text-gray-900 ${!disabled && hover !== 'none' ? 'group-hover:text-secondary-600' : ''} dark:text-white dark:group-hover:text-secondary-400`}>
              {title}
            </h3>
          )}
          
          {subtitle && (
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
          
          {children}
          
          {footer && (
            <div className="mt-auto pt-4">
              {footer}
            </div>
          )}
        </div>
      </>
    );

    // Use Link for internal navigation
    if (to && !disabled) {
      return (
        <Link
          to={to}
          className={cardVariants({ variant, hover, size, fullWidth, disabled, className })}
          ref={ref}
          {...props}
        >
          {cardContent}
        </Link>
      );
    }

    // Use anchor for external links
    if (href && !disabled) {
      return (
        <a
          href={href}
          className={cardVariants({ variant, hover, size, fullWidth, disabled, className })}
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {cardContent}
        </a>
      );
    }

    // Default div
    return (
      <div
        className={cardVariants({ variant, hover, size, fullWidth, disabled, className })}
        ref={ref}
        {...props}
      >
        {cardContent}
      </div>
    );
  }
);

Card.displayName = 'Card';

const CardHeader = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`space-y-1.5 pb-4 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
});

CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={`text-2xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white ${className || ''}`}
      {...props}
    >
      {children}
    </h3>
  );
});

CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={`text-sm text-gray-500 dark:text-gray-400 ${className || ''}`}
      {...props}
    >
      {children}
    </p>
  );
});

CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`pt-0 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
});

CardContent.displayName = 'CardContent';

const CardFooter = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex items-center pt-4 ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
});

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardVariants }; 