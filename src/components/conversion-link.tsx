"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackGoogleAdsConversion } from "../lib/google-ads";

type ConversionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  sendTo: string;
  children: ReactNode;
  delayMs?: number;
};

export function ConversionLink({
  sendTo,
  children,
  href,
  target,
  rel,
  delayMs = 120,
  onClick,
  ...props
}: ConversionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (event.defaultPrevented || typeof window === "undefined") {
      return;
    }

    event.preventDefault();
    trackGoogleAdsConversion(sendTo);

    window.setTimeout(() => {
      if (target === "_blank") {
        window.open(typeof href === "string" ? href : "", "_blank", "noopener,noreferrer");
        return;
      }

      if (typeof href === "string") {
        window.location.href = href;
      }
    }, delayMs);
  }

  return (
    <a href={href} target={target} rel={rel} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
