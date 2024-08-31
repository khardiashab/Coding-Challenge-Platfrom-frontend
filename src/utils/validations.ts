import { ValidationErrors } from "./types/types";

type FormData = {
  [key: string]: string | undefined;
};

export const validateForm = (
  formName: "signup" | "login" | "resetPassword",
  data: FormData
): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (formName === "signup") {
    if (!data.displayName || data.displayName.trim().length < 3) {
      errors.displayName = "Username must be at least 3 characters long";
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email address";
    }
    if (!data.password || data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
  }

  if (formName === "login") {
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email address";
    }
    if (!data.password || data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
  }

  if (formName === "resetPassword") {
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email address";
    }
    //   if (!data.newPassword || data.newPassword.length < 6) {
    //     errors.newPassword = "New password must be at least 6 characters long";
    //   }
    //   if (data.newPassword !== data.confirmPassword) {
    //     errors.confirmPassword = "Passwords do not match";
    //   }
  }

  return errors;
};
