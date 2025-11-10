import type { NavLink } from '../types';

export const ANIMATION_DURATION = {
  MOBILE_MENU: 280,
  TYPEWRITER_BLINK: 1000,
  TYPEWRITER_DEFAULT_SPEED: 50,
} as const;

export const BREAKPOINTS = {
  TABLET: 768,
  MOBILE: 480,
} as const;

export const NAVIGATION_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#works', label: 'Works' },
  { href: '#team', label: 'Members' },
  { href: '#history', label: 'History' },
  { href: '#contact', label: 'Contact' },
] as const;

export const SCROLL_ANIMATION_DEFAULTS = {
  THRESHOLD: 0.3,
  ROOT_MARGIN: '0px 0px -50px 0px',
} as const;

export const LAYOUT_CONSTANTS = {
  MAX_WIDTH: 1040,
  HEADER_HEIGHT: 70,
  MOBILE_MENU_WIDTH: 260,
} as const;

export const Z_INDEX = {
  HEADER: 50,
  MOBILE_MENU_OVERLAY: 9998,
  MOBILE_MENU: 9999,
  MOBILE_MENU_CLOSE_BTN: 10000,
} as const;