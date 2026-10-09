export const AppEndpoints = {
  home: () => '/',
  projects: () => '/projects',
  project: (projectId: string) => `/projects/${projectId}`,
};
