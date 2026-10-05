import {Project} from '../../../../data/model/project/project';
import {LoadState} from '../../../../shared/types/load-state';

export interface ProjectPageState {
  readonly project: LoadState<Project>;
}

export const INITIAL_PROJECT_PAGE_STATE: ProjectPageState = {
  project: {status: 'idle'}
};
