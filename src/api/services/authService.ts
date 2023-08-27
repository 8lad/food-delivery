import { UserResponse } from '../../slices/userSlice';
import { API_ENDPOINTS } from '../../utils/endpointConstants';
import { httpClient } from '../HttpClient/HttpClient';
import { BaseResponse } from '../HttpClient/HttpClient.model';
import { UserLogin, UserSignup } from '../../globalTypes';

class AuthService {
  authUser(token: string): Promise<BaseResponse<UserResponse>> {
    return httpClient.get(
      `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.GOOGLE_API_CALLBACK}${token}`,
    );
  }
  loginUser(userData: UserLogin): Promise<BaseResponse<UserResponse>> {
    return httpClient.post(
      `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.LOGIN_URL}`,
      userData,
    );
  }
  registrationUser(userData: UserSignup): Promise<BaseResponse<UserResponse>> {
    return httpClient.post(
      `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.REGISTRATION_URL}`,
      userData,
    );
  }
}

export const authService = new AuthService();
