export interface Project {

id: number;

title: string;

summary: string;

technologies: string[];

status: 'completed' | 'in-progress' | 'planned';

githubUrl?: string;

liveDemoUrl?: string;

}
