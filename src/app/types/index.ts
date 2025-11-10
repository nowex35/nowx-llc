export interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export interface ScrollAnimationResult {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface MobileMenuState {
  isOpen: boolean;
  shouldRender: boolean;
  closeRect: {
    top: number;
    left: number;
    width: number;
    height: number;
  } | null;
}