export interface Project {
  readonly id: number;
  readonly title: string;
  readonly summary: string;
  readonly technologies: readonly string[];
  readonly status: 'completed' | 'in-progress' | 'planned';
  readonly githubUrl?: string;
  readonly liveDemoUrl?: string;
}
