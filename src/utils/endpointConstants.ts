export enum API_ENDPOINTS {
  BASE_URL = import.meta.env.VITE_BASE_ENDPOINT,
  GOOGLE_API_AUTH = '/api/connect/google',
  GOOGLE_API_CALLBACK = '/api/auth/google/callback',
  LOGIN_URL = '/api/auth/local',
  REGISTRATION_URL = '/api/auth/local/register',
}
