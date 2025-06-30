"use client"

/**
 * Extremely small toast helper.
 * You still call it the same way:
 *
 *   const { toast } = useToast()
 *   toast({ title: "Success", description: "File exported!" })
 *
 * In the preview it logs to the console **and**
 * shows a non-blocking alert for quick feedback.
 * You can swap this out for any toast library later.
 */
import { useCallback } from "react"

type ToastVariant = "default" | "destructive"

interface ToastOptions {
  title: string
  description?: string
  variant?: ToastVariant
}

export function useToast() {
  const toast = useCallback((opts: ToastOptions) => {
    const { title, description, variant = "default" } = opts

    // Console output (helpful while developing in the sandbox)
    // eslint-disable-next-line no-console
    console[variant === "destructive" ? "error" : "log"](
      `[toast:${variant}] ${title}${description ? ` – ${description}` : ""}`,
    )

    // Lightweight in-browser feedback
    if (typeof window !== "undefined") {
      // Stack a tiny alert so users see *something* in the v0 preview
      window.setTimeout(() => {
        // Using setTimeout prevents blocking layout calculations
        alert(`${title}${description ? `\n\n${description}` : ""}`)
      }, 0)
    }
  }, [])

  return { toast }
}
