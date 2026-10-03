import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			// Geist for everything, Geist Mono for small labels. Legacy names are aliases
			// so older classes render in the current system.
			fontFamily: {
				'serif': ['Geist', 'system-ui', 'sans-serif'],
				'sans': ['Geist', 'system-ui', 'sans-serif'],
				'mono': ['"Geist Mono"', 'ui-monospace', 'monospace'],
				'dm-sans': ['Geist', 'system-ui', 'sans-serif'],
				'serif-accent': ['Geist', 'system-ui', 'sans-serif'],
				'playfair': ['Geist', 'system-ui', 'sans-serif'],
				'bricolage': ['Geist', 'system-ui', 'sans-serif'],
				'syne': ['Geist', 'system-ui', 'sans-serif'],
				'inter': ['Geist', 'system-ui', 'sans-serif'],
				'ibm-plex-mono': ['"Geist Mono"', 'ui-monospace', 'monospace'],
				'jetbrains-mono': ['"Geist Mono"', 'ui-monospace', 'monospace'],
				'satoshi': ['Geist', 'system-ui', 'sans-serif'],
				'figtree': ['Geist', 'system-ui', 'sans-serif'],
				'urbanist': ['Geist', 'system-ui', 'sans-serif'],
				'outfit': ['Geist', 'system-ui', 'sans-serif'],
				'instrument': ['Geist', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'xs': 'var(--text-xs)',
				'sm': 'var(--text-sm)',
				'base': 'var(--text-base)',
				'lg': 'var(--text-lg)',
				'xl': 'var(--text-xl)',
				'2xl': 'var(--text-2xl)',
				'3xl': 'var(--text-3xl)',
				'4xl': 'var(--text-4xl)',
				'5xl': 'var(--text-5xl)',
				'6xl': 'var(--text-6xl)',
			},
			lineHeight: {
				'tight': 'var(--leading-tight)',
				'snug': 'var(--leading-snug)',
				'normal': 'var(--leading-normal)',
				'relaxed': 'var(--leading-relaxed)',
				'loose': 'var(--leading-loose)',
			},
			letterSpacing: {
				'tight': 'var(--tracking-tight)',
				'normal': 'var(--tracking-normal)',
				'wide': 'var(--tracking-wide)',
				'wider': 'var(--tracking-wider)',
			},
			fontWeight: {
				'normal': 'var(--font-normal)',
				'medium': 'var(--font-medium)',
				'semibold': 'var(--font-semibold)',
				'bold': 'var(--font-bold)',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Portfolio specific colors
				'bg-primary': 'hsl(var(--bg-primary))',
				'bg-secondary': 'hsl(var(--bg-secondary))',
				'bg-tertiary': 'hsl(var(--bg-tertiary))',
				'text-primary': 'hsl(var(--text-primary))',
				'text-secondary': 'hsl(var(--text-secondary))',
				'text-tertiary': 'hsl(var(--text-tertiary))',
				'accent-primary': 'hsl(var(--accent-primary))',
				'accent-hover': 'hsl(var(--accent-hover))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'zoom': {
					from: {
						transform: 'scale(0.8)',
						opacity: '0'
					},
					to: {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'shimmer': {
					'0%, 100%': {
						transform: 'translateX(-100%)'
					},
					'50%': {
						transform: 'translateX(100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'zoom': 'zoom 0.4s ease-out',
				'shimmer': 'shimmer 3s ease-in-out infinite',
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
