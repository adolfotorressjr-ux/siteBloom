"use client";
import { useState, useRef, type FormEvent } from "react";
import { budgetOptions, timelineOptions } from "@/data/site";
import { submitInquiry } from "@/lib/inquiry";
export default function Inquiry() {
  const [success, setSuccess] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [summary, setSummary] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!needs.length) {
      setError("Choose at least one thing you need.");
      document.getElementById("need-New Website")?.focus();
      return;
    }
    setError("");
    setBusy(true);
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data);
    try {
      const result = await submitInquiry({
        ...payload,
        needs: needs.join(", "),
      });
      setSummary(result.summary);
      setSuccess(true);
      setTimeout(() => heading.current?.focus(), 0);
    } catch {
      setError("Your project brief couldn’t be prepared. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  if (success)
    return (
      <div className="inquiry-success">
        <span className="success-mark" aria-hidden="true">
          ↗
        </span>
        <h2 ref={heading} tabIndex={-1}>
          A good beginning.
        </h2>
        <p>
          Your project brief is ready. This preview isn’t connected to a
          submission service yet, so nothing has been sent.
        </p>
        <p>Download your brief to keep it, or start a new one.</p>
        <a
          className="button"
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(summary)}`}
          download="siteBloom-project-brief.txt"
        >
          Download My Brief <span>↓</span>
        </a>
        <button
          className="text-link"
          onClick={() => {
            setNeeds([]);
            setSummary("");
            setSuccess(false);
          }}
        >
          Start another brief ↗
        </button>
      </div>
    );
  return (
    <form onSubmit={submit} className="inquiry-form">
      <div className="form-grid">
        <label>
          Your name <span>*</span>
          <input
            name="name"
            autoComplete="name"
            placeholder="First and last name"
            required
            maxLength={120}
          />
        </label>
        <label>
          Business name <span>*</span>
          <input
            name="business"
            autoComplete="organization"
            placeholder="The name you’ve built"
            required
            maxLength={150}
          />
        </label>
        <label>
          Email <span>*</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@yourbusiness.com"
            required
            maxLength={254}
          />
        </label>
        <label>
          Current website URL
          <input
            type="url"
            name="website"
            autoComplete="url"
            placeholder="https://yourwebsite.com"
          />
        </label>
      </div>
      <fieldset>
        <legend>
          What do you need? <span>*</span>
        </legend>
        <p className="field-help">Choose all that sound right.</p>
        <div className="option-group">
          {[
            "New Website",
            "Website Redesign",
            "Landing Page",
            "E-Commerce",
            "Other",
          ].map((x) => (
            <label key={x}>
              <input
                id={`need-${x}`}
                type="checkbox"
                checked={needs.includes(x)}
                onChange={(e) =>
                  setNeeds(
                    e.target.checked
                      ? [...needs, x]
                      : needs.filter((n) => n !== x),
                  )
                }
              />
              <span>
                {x} <i>↗</i>
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label>
        What isn’t working with your current website?
        <textarea
          name="problem"
          placeholder="Be honest. We’ve seen it all."
          rows={3}
          maxLength={5000}
        />
      </label>
      <fieldset>
        <legend>Approximate budget</legend>
        <p className="field-help">A starting point, not a commitment.</p>
        <div className="option-group">
          {budgetOptions.map((x) => (
            <label key={x}>
              <input type="radio" name="budget" value={x} />
              <span>{x}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Desired timeline</legend>
        <div className="option-group">
          {timelineOptions.map((x) => (
            <label key={x}>
              <input type="radio" name="timeline" value={x} />
              <span>{x}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label>
        Anything else we should know?
        <textarea
          name="notes"
          placeholder="Big ideas, little details, questions…"
          rows={3}
          maxLength={5000}
        />
      </label>
      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}
      <div className="form-submit">
        <button className="button" disabled={busy} type="submit">
          {busy ? "Preparing your brief…" : "Start My Project"}
          <span>→</span>
        </button>
        <p>
          Preview mode: we’ll prepare a downloadable brief.
          <br />
          Your details won’t be sent or saved to a server.
        </p>
      </div>
    </form>
  );
}
