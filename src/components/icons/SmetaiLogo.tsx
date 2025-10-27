import * as React from "react";

export type SmetaiLogoProps = React.SVGProps<SVGSVGElement>;

export const SmetaiLogo = React.forwardRef<SVGSVGElement, SmetaiLogoProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      width={180}
      height={44}
      viewBox="0 0 180 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <text
        x={0}
        y={28}
        fontFamily="Inter, 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize={30}
        fontWeight={700}
        letterSpacing="0.4em"
        fill="#0F172A"
      >
        SMETAI
      </text>
    </svg>
  )
);

SmetaiLogo.displayName = "SmetaiLogo";

export default SmetaiLogo;
