export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(path, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });
  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`Request failed ${response.status}: ${text}`);
  }
  return response.json() as Promise<T>;
}

export type HealthResponse = { status: string; service: string; time: string };
export const getHealth = () => apiRequest<HealthResponse>('/api/health');

export type Project = { id: string; name?: string; description?: string };
export const getProjects = () => apiRequest<Project[]>('/api/projects');
export const createProject = (project: Omit<Project, 'id'>) =>
  apiRequest<Project>('/api/projects', {
    method: 'POST',
    body: JSON.stringify(project),
  });
