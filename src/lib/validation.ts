export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export function validateContactForm(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.name.trim() || input.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }
  if (!input.email.trim() || !isValidEmail(input.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!input.subject.trim()) {
    errors.subject = 'Please select or enter an enquiry subject.';
  }
  if (!input.message.trim() || input.message.trim().length < 20) {
    errors.message = 'Please provide a brief message (at least 20 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateServiceEnquiryForm(input: {
  name: string;
  email: string;
  serviceSlug: string;
  manuscriptStage: string;
  notes: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!input.name.trim()) {
    errors.name = 'Please enter your name.';
  }
  if (!input.email.trim() || !isValidEmail(input.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!input.serviceSlug.trim()) {
    errors.serviceSlug = 'Please choose a publishing service.';
  }
  if (!input.manuscriptStage.trim()) {
    errors.manuscriptStage = 'Please indicate the current stage of your manuscript.';
  }
  if (!input.notes.trim() || input.notes.trim().length < 15) {
    errors.notes = 'Please share a few details about your project (at least 15 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}