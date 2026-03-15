export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:4000";

interface FetchOptions extends RequestInit {
  requireAuth?: boolean;
}

const api = async <T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> => {
  const { requireAuth, headers: customHeaders, ...rest } = options;

  const headers = new Headers(customHeaders);

  // Set default content type
  if (!headers.has("Content-Type") && !(rest.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  // Always inject token if available
  const token = localStorage.getItem("admin_token");
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  // If requireAuth is true and no token, throw error
  if (requireAuth && !token) {
    throw new Error("Authentication required but no token found");
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...rest,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Request failed with status ${response.status}`,
    );
  }

  if (response.status === 204) {
    return null as T;
  }

  return response.json();
};

export default api;
