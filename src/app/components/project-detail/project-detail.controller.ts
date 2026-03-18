import { Project, RouteParams } from '../../types/project.type';
import { ProjectService } from '../../services/project.service';

export class ProjectDetailController {
  static $inject = ['$routeParams', 'ProjectService', '$location'];

  project?: Project;

  constructor(
    private $routeParams: RouteParams,
    private service: ProjectService,
    private $location: angular.ILocationService
  ) {}

  $onInit() {
    const id = this.$routeParams.id || '';
    this.project = this.service.getProjectById(id);
  }

  goBack() {
    this.$location.path('/');
  }
}