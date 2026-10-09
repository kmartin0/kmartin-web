import {Project} from './project';

export interface ProjectGroup {
  readonly id: string;
  readonly title: string;
  readonly projects: readonly Project[];
}
