import angular from 'angular';
import 'angular-route';

import { ProjectService } from './services/project.service';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

angular
  .module('app', ['ngRoute'])
  .service('ProjectService', ProjectService)
  .component('projectList', ProjectListComponent)
  .component('projectDetail', ProjectDetailComponent);
