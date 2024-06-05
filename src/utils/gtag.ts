"use client";
import "client-only";
import { env } from "~/env.mjs";
import type { NextWebVitalsMetric } from "next/app";

export const GA_TRACKING_ID = env.NEXT_PUBLIC_GA_ID;

/**
 * Function that tracks a page view event
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 * @param url URL of the page to track
 */
export const pageview = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url.toString(),
  });
};

export function reportWebVitals(props: NextWebVitalsMetric) {
  if (typeof window === "undefined" || !window?.gtag) return;
  const { id, name, label, value } = props;
  window.gtag("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  });
}

interface EventProps {
  action: Gtag.EventNames;
  category: string | undefined;
  label: string | undefined;
  value: number | undefined;
}

/**
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
export const event = ({ action, category, label, value }: EventProps) => {
  if (typeof window !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// * Example Usage - Vote
export const voteEvent = (selected: number, against: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "vote", {
      event_label: "vote",
      event_category: "waifu",
      votedFor: selected,
      votedAgainst: against,
    });
  }
};

/**
 * Function that tracks when a user submits the contact form
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * @param url URL of the page to track
 * @param name Name of the form
 * @param status Status of the form submission
 * @param error Error message if the form submission failed
 * // @param email Email of the user
 */
interface FormAnalyticsProps {
  url: string;
  name: string;
  status: string;
  error?: string;
  // email?: string;
}
export const formAnalytics: (props: FormAnalyticsProps) => void = ({
  url,
  name,
  status,
  error,
  // email,
}) => {
  window.gtag("event", "form_submission", {
    event_category: "form",
    event_label: name,
    value: status,
    page_path: url,
    error_message: error,
    // email,
  });
};
