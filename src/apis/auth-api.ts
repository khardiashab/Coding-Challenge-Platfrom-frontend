import { mockAuthApi } from "@/dummy-data/mock-auth-api";
import { AlreadyInUseError, ConflictError, InternalServerError, InvalidDisplayNameError, InvalidEmailError } from "@/utils/errors";
import {
  AuthResponse,
  RegisterFormData,
  LoginFormData,
  ResetPasswordFormData,
  ApiResponse,
} from "@/utils/types/types";
import { capitalize } from "@/utils/utilityFunction";

export const AuthApi = {
  registerUser: async (
    data: RegisterFormData
  ): Promise<ApiResponse<AuthResponse>> => {
    const response = await mockAuthApi.registerUser(data);

    if (response.status === 400) {
      const error = response.data.error;
      if (error === "invalidEmail") {
        throw new InvalidEmailError(response.data.message);
      } else if (error === "invalidDisplayName") {
        throw new InvalidDisplayNameError(response.data.message);
      } else if (error === "alreadyInUse") {
        throw new AlreadyInUseError(response.data.message);
      } else {
        throw new Error(`${capitalize(error as string)}: ${response.data.message}`);
      }
    } else if (response.status === 409) {
      throw new ConflictError(response.data.message);
    } else if (response.status === 500) {
      throw new InternalServerError(response.data.message);
    }

    return response;
  },

  loginUser: async (
    data: LoginFormData
  ): Promise<ApiResponse<AuthResponse>> => {
    const response = await mockAuthApi.loginUser(data);

    if (!response || response.status !== 200) {
      const errorMessage = response?.data?.message || "Login failed";
      throw new Error(errorMessage);
    }

    return response;
  };

  resetPassword: async (
    data: ResetPasswordFormData
  ): Promise<ApiResponse<AuthResponse>> => {
    const response = await mockAuthApi.resetPassword(data);

    if (!response || response.status !== 200) {
      const errorMessage = response?.data?.message || "Reset Password failed";
      throw new Error(errorMessage);
    }

    return response;
  },
};

