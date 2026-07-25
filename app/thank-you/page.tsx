"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { trackLeadConversion } from "@/lib/google-ads";
import styles from "./page.module.css";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source") ?? "registration";

  useEffect(() => {
    trackLeadConversion(source);
  }, [source]);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.card}`}>
        <div className={styles.icon} aria-hidden="true">
          ✓
        </div>
        <h1>You&apos;re on the list</h1>
        <p>
          Floor plan PDFs and current pricing for The Enclave Milton are on the way. Check your
          inbox and spam folder within a few minutes.
        </p>
        <div className={styles.actions}>
          <Link href="/floor-plans" className="btn btn-primary">
            Browse floor plans
          </Link>
          <Link href="/" className="btn btn-gold">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<section className={styles.section} aria-busy="true" />}>
      <ThankYouContent />
    </Suspense>
  );
}
