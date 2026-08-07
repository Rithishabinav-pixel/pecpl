const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9]{10,13}$/;

export function sanitizePhoneInput(value) {
  return value.replace(/\D/g, "").slice(0, 13);
}

export function validateName(name) {
  const value = (name ?? "").trim();
  if (!value) return "Name is required.";
  if (value.length < 2) return "Name must be at least 2 characters.";
  return null;
}

export function validatePhone(phone) {
  const value = (phone ?? "").trim();
  if (!value) return "Phone number is required.";
  if (!/^[0-9]+$/.test(value)) return "Phone number can only contain digits.";
  if (!PHONE_REGEX.test(value)) return "Phone number must be 10 to 13 digits.";
  return null;
}

export function validateEmail(email) {
  const value = (email ?? "").trim();
  if (!value) return "Email is required.";
  if (!EMAIL_REGEX.test(value)) return "Enter a valid email address.";
  return null;
}

export function validateLocation(location) {
  const value = (location ?? "").trim();
  if (!value) return "Location is required.";
  return null;
}

export function validateEnquiryForm({ name, phone, email, location }) {
  const errors = {
    name: validateName(name),
    phone: validatePhone(phone),
    email: validateEmail(email),
    location: validateLocation(location),
  };

  Object.keys(errors).forEach((key) => {
    if (!errors[key]) delete errors[key];
  });

  return { valid: Object.keys(errors).length === 0, errors };
}

export function validateNewsletterEmail(email) {
  const errors = {};
  const error = validateEmail(email);
  if (error) errors.email = error;

  return { valid: Object.keys(errors).length === 0, errors };
}

export function validatePosition(position) {
  const value = (position ?? "").trim();
  if (!value) return "Position applied for is required.";
  return null;
}

export function validateCareerForm({ name, phone, email, location, position }) {
  const errors = {
    name: validateName(name),
    phone: validatePhone(phone),
    email: validateEmail(email),
    location: validateLocation(location),
    position: validatePosition(position),
  };

  Object.keys(errors).forEach((key) => {
    if (!errors[key]) delete errors[key];
  });

  return { valid: Object.keys(errors).length === 0, errors };
}

const ALLOWED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_RESUME_SIZE = 5 * 1024 * 1024;

export function validateResumeFile(file) {
  if (!file || typeof file === "string" || !file.name) {
    return "Resume is required.";
  }

  const ext = `.${file.name.split(".").pop().toLowerCase()}`;
  if (!ALLOWED_RESUME_EXTENSIONS.includes(ext)) {
    return "Only PDF, DOC, or DOCX files are allowed.";
  }

  if (file.size > MAX_RESUME_SIZE) {
    return "File size must not exceed 5MB.";
  }

  return null;
}
