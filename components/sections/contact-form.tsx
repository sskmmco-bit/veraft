"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import {
  contactSchema,
  toFieldErrors,
  type ContactInput,
  type FieldErrors,
} from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

const empty: ContactInput = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

const inputBase =
  "w-full rounded-lg border bg-paper px-4 py-3 text-body text-ink " +
  "placeholder:text-muted/60 transition-colors duration-150";

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  function update<K extends keyof ContactInput>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(toFieldErrors(parsed.error));
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: FieldErrors;
      };

      if (res.ok && data.ok) {
        setStatus("success");
        return;
      }
      if (res.status === 400 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }
      throw new Error("Unexpected response");
    } catch {
      setStatus("error");
      setFormError(
        "Something went wrong sending your message. Please try again, or email us directly.",
      );
    }
  }

  function reset() {
    setValues(empty);
    setErrors({});
    setStatus("idle");
    setFormError(null);
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-line bg-paper p-8">
        <span className="flex size-11 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Check size={22} strokeWidth={1.75} aria-hidden />
        </span>
        <h2 className="mt-5 text-heading text-ink">Thanks — message received.</h2>
        <p className="mt-2.5 max-w-md text-body text-muted">
          We read every message and usually reply within one business day. If
          it&apos;s urgent, email us directly and mention it&apos;s time
          sensitive.
        </p>
        <Button variant="secondary" className="mt-6" onClick={reset}>
          Send another message
        </Button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-card border border-line bg-paper p-6 sm:p-8"
    >
      {formError && (
        <p
          role="alert"
          className="mb-6 rounded-lg border border-danger/30 bg-danger/5 px-4 py-3 text-body-sm text-danger"
        >
          {formError}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          required
          error={errors.name}
          value={values.name}
          onChange={(v) => update("name", v)}
          autoComplete="name"
          placeholder="Your name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          error={errors.email}
          value={values.email}
          onChange={(v) => update("email", v)}
          autoComplete="email"
          placeholder="you@company.com"
        />
      </div>

      <div className="mt-5">
        <Field
          id="company"
          label="Company"
          optional
          error={errors.company}
          value={values.company ?? ""}
          onChange={(v) => update("company", v)}
          autoComplete="organization"
          placeholder="Optional"
        />
      </div>

      <div className="mt-5">
        <FieldLabel htmlFor="message" label="Message" required />
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="What would you like to build or automate?"
          className={cn(
            inputBase,
            "resize-y",
            errors.message ? "border-danger" : "border-line",
          )}
        />
        {errors.message && <FieldError id="message-error">{errors.message}</FieldError>}
      </div>

      {/* Honeypot — visually hidden, off the tab order. */}
      <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website ?? ""}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="mt-7 flex items-center gap-4">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? "Sending…" : "Send message"}
          {!submitting && (
            <ArrowRight size={18} strokeWidth={1.75} aria-hidden />
          )}
        </Button>
        <p className="text-body-sm text-muted">Usually a reply within a day.</p>
      </div>
    </form>
  );
}

function FieldLabel({
  htmlFor,
  label,
  required,
  optional,
}: {
  htmlFor: string;
  label: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block font-mono text-label uppercase tracking-[0.1em] text-muted"
    >
      {label}
      {required && <span className="ml-1 text-accent">*</span>}
      {optional && <span className="ml-1 normal-case text-muted">(optional)</span>}
    </label>
  );
}

function FieldError({ id, children }: { id: string; children: string }) {
  return (
    <p id={id} className="mt-2 text-body-sm text-danger">
      {children}
    </p>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
  optional,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id} label={label} required={required} optional={optional} />
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={cn(inputBase, error ? "border-danger" : "border-line")}
      />
      {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </div>
  );
}
