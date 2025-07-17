/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        // Primary Colors - WhatsApp Green
        'primary': '#25D366', // WhatsApp green
        'primary-50': '#ECFDF5', // green-50
        'primary-100': '#D1FAE5', // green-100
        'primary-200': '#A7F3D0', // green-200
        'primary-300': '#6EE7B7', // green-300
        'primary-400': '#34D399', // green-400
        'primary-500': '#25D366', // WhatsApp green
        'primary-600': '#059669', // green-600
        'primary-700': '#047857', // green-700
        'primary-800': '#065F46', // green-800
        'primary-900': '#064E3B', // green-900
        'primary-foreground': '#FFFFFF', // white

        // Secondary Colors - Trust Navy
        'secondary': '#1E3A8A', // blue-800
        'secondary-50': '#EFF6FF', // blue-50
        'secondary-100': '#DBEAFE', // blue-100
        'secondary-200': '#BFDBFE', // blue-200
        'secondary-300': '#93C5FD', // blue-300
        'secondary-400': '#60A5FA', // blue-400
        'secondary-500': '#3B82F6', // blue-500
        'secondary-600': '#2563EB', // blue-600
        'secondary-700': '#1D4ED8', // blue-700
        'secondary-800': '#1E3A8A', // blue-800
        'secondary-900': '#1E40AF', // blue-900
        'secondary-foreground': '#FFFFFF', // white

        // Accent Colors - Urgency Amber
        'accent': '#F59E0B', // amber-500
        'accent-50': '#FFFBEB', // amber-50
        'accent-100': '#FEF3C7', // amber-100
        'accent-200': '#FDE68A', // amber-200
        'accent-300': '#FCD34D', // amber-300
        'accent-400': '#FBBF24', // amber-400
        'accent-500': '#F59E0B', // amber-500
        'accent-600': '#D97706', // amber-600
        'accent-700': '#B45309', // amber-700
        'accent-800': '#92400E', // amber-800
        'accent-900': '#78350F', // amber-900
        'accent-foreground': '#FFFFFF', // white

        // Background Colors
        'background': '#FFFFFF', // white
        'surface': '#F8FAFC', // slate-50
        'surface-100': '#F1F5F9', // slate-100
        'surface-200': '#E2E8F0', // slate-200

        // Text Colors
        'text-primary': '#111827', // gray-900
        'text-secondary': '#6B7280', // gray-500
        'text-muted': '#9CA3AF', // gray-400

        // Status Colors
        'success': '#10B981', // emerald-500
        'success-50': '#ECFDF5', // emerald-50
        'success-100': '#D1FAE5', // emerald-100
        'success-foreground': '#FFFFFF', // white

        'warning': '#F59E0B', // amber-500
        'warning-50': '#FFFBEB', // amber-50
        'warning-100': '#FEF3C7', // amber-100
        'warning-foreground': '#FFFFFF', // white

        'error': '#EF4444', // red-500
        'error-50': '#FEF2F2', // red-50
        'error-100': '#FEE2E2', // red-100
        'error-foreground': '#FFFFFF', // white

        // Border Colors
        'border': '#E5E7EB', // gray-200
        'border-light': '#F3F4F6', // gray-100
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'testimonial': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-5px)',
          },
          '60%': {
            transform: 'translateY(-3px)',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}