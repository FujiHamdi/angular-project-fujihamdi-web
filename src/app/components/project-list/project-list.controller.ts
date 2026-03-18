import { filterProjects } from '../../utils/project-filter.util';
import { Project } from '../../types/project.type';
import { ProjectService } from '../../services/project.service';
import angular from 'angular';

export class ProjectListController {
  static $inject = ['ProjectService', '$location', '$timeout'];
  private debounceTimer?: angular.IPromise<void>;

  projects: Project[] = [];
  filtered: Project[] = [];
  areas: string[] = [];
  companies: string[] = [];
  search: string = '';
  area: string = '';
  company: string = '';
 
  constructor(
    private projectService: ProjectService,
    private $location: angular.ILocationService,
    private $timeout: angular.ITimeoutService
  ) {}

  $onInit() {
    this.projects = this.projectService.getProjects();
    this.areas = [...new Set(this.projects.map(x => x.area))];
    this.companies = [...new Set(this.projects.map(x => x.company))];
    this.applyFilter();
  }

  applyFilterDebounced() {
    if (this.debounceTimer) {
      this.$timeout.cancel(this.debounceTimer);
    }
    this.debounceTimer = this.$timeout(() => {
      this.applyFilter();
    }, 300); 
  }

  applyFilter() {
    this.filtered = filterProjects(
      this.projects,
      this.search,
      this.area,
      this.company
    );
  }

  open(id: string) {
    this.$location.path('/project/' + id);
  }
}