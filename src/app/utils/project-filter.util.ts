import { Project } from "../types/project.type";

export function filterProjects(
  list: Project[],
  search: string,
  area: string,
  company: string
) {
  let data = [...list];

  if (search && search.trim().length > 0) {
    const keyword = search.toLowerCase();
    data = data.filter(p =>
      p.project_name.toLowerCase().includes(keyword)
    );
  }

  if (area && area !== '') {
    data = data.filter(p => p.area === area);
  }

  if (company && company !== '') {
    data = data.filter(p => p.company === company);
  }

  return data.sort((a, b) => {
    if (b.project_value !== a.project_value) {
      return b.project_value - a.project_value;
    }
    return a.project_name.localeCompare(b.project_name);
  });
}