import {ProjectImage} from './project-image';
import {ProjectLink} from './project-link';
import {Technology} from './technology';

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly technicalDetails: readonly string[];
  readonly screenshots: readonly ProjectImage[];
  readonly previewImage: ProjectImage | null;
  readonly projectLinks: readonly ProjectLink[];
  readonly technologies: readonly Technology[];
}
