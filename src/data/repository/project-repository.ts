import {Injectable} from '@angular/core';
import {Project} from '../model/project/project';
import {ProjectGroup} from '../model/project/project-group';
import {SCENEFORM_SHOWCASE_PROJECT_GROUP} from '../static/projects/project-sceneform-showcase';
import {BACKFLOW_CALCULATOR_PROJECT_GROUP} from '../static/projects/project-backflow-calculator';
import {CIVILIAN_CPR_PROJECT_GROUP} from '../static/projects/project-civilian-cpr';
import {KNITSTER_PROJECT_GROUP} from '../static/projects/project-knitster';
import {MUSIC_PLAYER_PROJECT_GROUP} from '../static/projects/project-music-player';
import {SPRING_BOOT_API_BOILERPLATE_PROJECT_GROUP} from '../static/projects/project-spring-boot-api-boilerplate';
import {PARCEL_ORGANIZER_PROJECT_GROUP} from '../static/projects/project-parcel-organizer';
import {DARTS_MATCHER_PROJECT_GROUP} from '../static/projects/project-darts-matcher';

const PROJECT_GROUPS = [
  DARTS_MATCHER_PROJECT_GROUP,
  KNITSTER_PROJECT_GROUP,
  CIVILIAN_CPR_PROJECT_GROUP,
  SCENEFORM_SHOWCASE_PROJECT_GROUP,
  PARCEL_ORGANIZER_PROJECT_GROUP,
  MUSIC_PLAYER_PROJECT_GROUP,
  BACKFLOW_CALCULATOR_PROJECT_GROUP,
  SPRING_BOOT_API_BOILERPLATE_PROJECT_GROUP
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

