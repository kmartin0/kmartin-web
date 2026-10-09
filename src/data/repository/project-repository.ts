import {Injectable} from '@angular/core';
import {Project} from '../model/project/project';
import {ProjectGroup} from '../model/project/project-group';
import {PROJECT_1_PROJECT_GROUP} from '../static/projects/project-1';
import {PROJECT_2_PROJECT_GROUP} from '../static/projects/project-2';

const PROJECT_GROUPS = [
  PROJECT_1_PROJECT_GROUP,
  PROJECT_2_PROJECT_GROUP
];

/**
 * Repository responsible for providing portfolio project data.
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectRepository {
  readonly projectGroups: ProjectGroup[] = PROJECT_GROUPS;

  private readonly projects: Project[] =
    this.projectGroups.flatMap(projectGroup => projectGroup.projects);

  /**
   * Finds a project by its id.
   *
   * @param projectId - id identifying the project.
   * @returns Matching project, or undefined when no project exists for the id.
   */
  findProjectById(projectId: string): Project | undefined {
    return this.projects.find(project => project.id === projectId);
  }
}

