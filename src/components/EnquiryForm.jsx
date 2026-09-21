import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitEnquiry } from "../lib/enquiryService";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  city: "",
  projectType: "",
  material: "",
  requirement: "",
  message: "",
};

const projectTypes = ["Residential", "Commercial", "Hospitality", "Architectural / Design Firm"];
const materials = ["Marble", "Granite", "Not sure yet"];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) errors.phone = "Enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = "Enter a valid email address.";
  if (!form.city.trim()) errors.city = "Please enter your city.";
  if (!form.projectType) errors.projectType = "Select a project type.";
  if (!form.material) errors.material = "Select a material of interest.";
  return errors;
}

const inputClass =
  "w-full bg-transparent border-b border-ink/25 py-3 text-sm focus:outline-none focus:border-ink placeholder:text-ink/35 transition-colors duration-300";

export default function EnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitEnquiry(form);
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("idle");
      setErrors({ submit: "Something went wrong. Please try again." });
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16 px-6">
        <CheckCircle2 className="mx-auto text-bronze-dark" size={44} strokeWidth={1.25} />
        <h3 className="font-display text-2xl md:text-3xl text-ink mt-5">Enquiry Received</h3>
        <p className="mt-3 text-ink/60 max-w-sm mx-auto leading-relaxed">
          Thank you — one of our stone experts will reach out within 24 hours to discuss your
          project.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-8 btn-outline">
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
      <div>
        <input
          value={form.name}
          onChange={update("name")}
          placeholder="Full Name *"
          className={inputClass}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="text-xs text-red-700 mt-1.5">{errors.name}</p>}
      </div>
      <div>
        <input
          value={form.phone}
          onChange={update("phone")}
          placeholder="Phone Number *"
          className={inputClass}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="text-xs text-red-700 mt-1.5">{errors.phone}</p>}
      </div>
      <div>
        <input
          value={form.email}
          onChange={update("email")}
          placeholder="Email *"
          className={inputClass}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="text-xs text-red-700 mt-1.5">{errors.email}</p>}
      </div>
      <div>
        <input
          value={form.city}
          onChange={update("city")}
          placeholder="City *"
          className={inputClass}
          aria-invalid={!!errors.city}
        />
        {errors.city && <p className="text-xs text-red-700 mt-1.5">{errors.city}</p>}
      </div>
      <div>
        <select value={form.projectType} onChange={update("projectType")} className={`${inputClass} appearance-none`}>
          <option value="">Project Type *</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.projectType && <p className="text-xs text-red-700 mt-1.5">{errors.projectType}</p>}
      </div>
      <div>
        <select value={form.material} onChange={update("material")} className={`${inputClass} appearance-none`}>
          <option value="">Material Interested In *</option>
          {materials.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        {errors.material && <p className="text-xs text-red-700 mt-1.5">{errors.material}</p>}
      </div>
      <div className="sm:col-span-2">
        <input
          value={form.requirement}
          onChange={update("requirement")}
          placeholder="Approximate Requirement (e.g. 800 sq. ft.)"
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <textarea
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your project…"
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      {errors.submit && <p className="sm:col-span-2 text-sm text-red-700">{errors.submit}</p>}

      <div className="sm:col-span-2 mt-2">
        <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60">
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Submitting…
            </>
          ) : (
            "Submit Enquiry"
          )}
        </button>
      </div>
    </form>
  );
}
