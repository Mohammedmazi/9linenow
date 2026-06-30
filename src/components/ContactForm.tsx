"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const form = e.currentTarget;

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      project: formData.get("project"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit request.");
      }

      form.reset();

      router.replace("/contact/success");
    } catch (error) {
      console.error(error);

      alert(
        "Unable to submit your request right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="
        space-y-6
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-8
        shadow-xl
      "
    >
      {/* Full Name */}

      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-semibold text-gray-700"
        >
          Full Name *
        </label>

        <Input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="John Smith"
          disabled={loading}
        />
      </div>

      {/* Email */}

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-semibold text-gray-700"
        >
          Email Address *
        </label>

        <Input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="john@example.com"
          disabled={loading}
        />
      </div>

      {/* Company */}

      <div className="space-y-2">
        <label
          htmlFor="company"
          className="text-sm font-semibold text-gray-700"
        >
          Company
        </label>

        <Input
          id="company"
          name="company"
          autoComplete="organization"
          placeholder="Company Name"
          disabled={loading}
        />
      </div>

      {/* Phone */}

      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-semibold text-gray-700"
        >
          Phone Number
        </label>

        <Input
          id="phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+91 98765 43210"
          disabled={loading}
        />
      </div>

      {/* Service */}

      <div className="space-y-2">
        <label
          htmlFor="service"
          className="text-sm font-semibold text-gray-700"
        >
          Service Required *
        </label>

        <select
          id="service"
          name="service"
          required
          disabled={loading}
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-4

            text-gray-900

            shadow-sm

            transition-all
            duration-300

            hover:border-emerald-300
            hover:shadow-md

            focus:border-emerald-500
            focus:outline-none
            focus:ring-4
            focus:ring-emerald-100

            disabled:bg-gray-100
            disabled:text-gray-400
          "
        >
          <option value="">
            Select a service
          </option>

          <option value="Web Development">
            Web Development
          </option>

          <option value="Mobile Applications">
            Mobile Applications
          </option>

          <option value="AI Solutions">
            AI Solutions
          </option>

          <option value="Automation">
            Automation
          </option>

          <option value="Custom Software">
            Custom Software
          </option>
        </select>
      </div>

      {/* Project */}

      <div className="space-y-2">
        <label
          htmlFor="project"
          className="text-sm font-semibold text-gray-700"
        >
          Project Details *
        </label>

        <Textarea
          id="project"
          name="project"
          required
          rows={6}
          disabled={loading}
          placeholder="Tell us about your project, goals, timeline, budget and requirements..."
        />
      </div>

      {/* Submit */}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full"
      >
        {loading
          ? "Sending Request..."
          : "Submit Request"}
      </Button>
    </form>
  );
}