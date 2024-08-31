import ResetPassword from "@/Components/Modals/ResetPassword";
import {
  RegisterFormData,
  LoginFormData,
  ResetPasswordFormData,
  ApiResponse,
  AuthResponse,
} from "@/utils/types/types";

export const mockAuthApi = {
  // Register User
 
 RegisterUser : async (inputs: RegisterFormData) => {
  await simulateNetworkDelay(1000);

  
  if (inputs.email === "dataValidation@gmail.com") {
    return {
      status: 400, // Bad Request
      data: {
        message: "Invalid email address.",
        error: "DataValidationException",
      },
    };
  }
  
  if (inputs.email === "exist@gmail.com") {
    return {
      status: 409,
      data: {
        message: `${inputs.email} is already in use.`,
        error: "UserAlreadyExistEXception",
      },
    };
  }
  if (inputs.email === "internalError@gmail.com") {
    return {
      status: 500, // Internal Server Error
      data: {
        message: "Internal Server Error.",
        error: "InternalSeverException",
      },
    };
  }

  return {
    status: 200, // OK
    data: {
      message: "Login successful!",
      user: {
        id: "1",
        email: inputs.email,
        displayName: "Valid User",
      },
      token: "dummy-jwt-token",
    },
  };
},

 LoginUser : async (inputs: LoginFormData) => {
  await simulateNetworkDelay(1000);

  if (inputs.email === "dataValidataion@gmail.com") {
    return {
      status: 400, // Bad Request
      data: {
        message: "Invalid email.",
        error: "DataValidationException",
      },
    };
  }
  if (inputs.email === "emailDoesNotExist@gmail.com") {
    return {
      status: 404, // Not Found
      data: {
        message: "Email does not exist.",
        error: "UserNotFoundException",
      },
    };
  }

  if (inputs.email === "badCredentials@gmail.com") {
    return {
      status: 401, // Unauthorized
      data: {
        message: "Invalid credentials.",
        error: "InvalidCredentialsException",
      },
    };
  }

  return {
    status: 200, // OK
    data: {
      message: "Login successful!",
      user: {
        id: "1",
        email: inputs.email,
        displayName: "Valid User",
      },
      token: "dummy-jwt-token",
    },
  };
},

 ResetPassword : async (inputs: ResetPasswordFormData) => {
  await simulateNetworkDelay(1000);

  if (inputs.email === "dataValidataion@gmail.com") {
    return {
      status: 400, // Bad Request
      data: {
        message: "Invalid email address.",
        error: "dataValidationException",
      },
    };}

    if (inputs.email === "emailDoesNotExist@gmail.com") {
      return {
        status: 404, // Not Found
        data: {
          message: "Email does not exist.",
          error: "UserNotFoundException",
        },
      };
    }
    if (Math.random() < 0.4) {
      return {
        status: 500, // Internal Server Error
        data: {
          message: "Internal Server Error.",
          error: "InternalSeverException",
        },
      };
    }

    return {
      status: 200, // OK
      data: {
        message: "Password reset link has been sent to your email.",
      },
    };
  },

   LogoutUser : async () => {
    await simulateNetworkDelay(1000);

    if (Math.random() < 0.1) {
      return {
        status: 400, // Bad Request
        data: {
          message: "Token not found.",
          error: "BadRequestException",
        },
      };
    }

    if (Math.random() < 0.2) {
      return {
        status: 401, // Unauthorized
        data: {
          message: "Invalid token.",
          error: "InvalidTokenException",
        },
      };
    }
    if (Math.random() < 0.4) {
      return {
        status: 403, // Forbidden
        data: {
          message: "Forbidden.",
          error: "ForbiddenException",
        },
      };
    }

    if (Math.random() < 0.5) {
      return {
        status: 404, // Not Found
        data: {
          message: "User not found.",
          error: "UserNotFoundException",
        },
      };
    }

    if (Math.random() < 0.6) {
      return {
        status: 500, // Internal Server Error
        data: {
          message: "Internal Server Error.",
          error: "InternalSeverException",
        },
      };
    }

    return {
      status: 200, // OK
      data: {
        message: "User logged out successfully.",
      },
    };
  }

}

const simulateNetworkDelay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
