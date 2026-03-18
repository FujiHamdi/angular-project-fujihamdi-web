import { Project } from '../types/project.type';

export class ProjectService {
  projects: Project[] = [
    {
      id: 'p-1',
      project_name: 'Bridge Fix',
      company: 'ABC Construction',
      area: 'London',
      project_start: '2026-01-01',
      project_end: '2026-12-01',
      project_value: 1500000,
      description: 'Fixing old bridge',
    },
    {
      id: 'p-2',
      project_name: 'Highway Expansion',
      company: 'XYZ Hamdi',
      area: 'Manchester',
      project_start: '2026-02-15',
      project_end: '2026-11-30',
      project_value: 2500000,
      description: 'Highway expansion project for the future',
    },
    {
      id: 'p-3',
      project_name: 'Rise Tower Expansion',
      company: 'DEF Construction',
      area: 'London',
      project_start: '2026-04-01',
      project_end: '2026-12-01',
      project_value: 2500000,
      description: 'Rise Tower expansion project',
    },
  ];

  getProjects(): Project[] {
    return this.projects || [];
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}