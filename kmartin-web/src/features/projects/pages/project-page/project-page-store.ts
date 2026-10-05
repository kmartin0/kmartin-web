import {DestroyRef, inject, Injectable, signal} from '@angular/core';
import {ProjectRepository} from '../../../../data/repository/project-repository';
import {INITIAL_PROJECT_PAGE_STATE, ProjectPageState} from './project-page-state';
import {ActivatedRoute} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {LoadState} from '../../../../shared/types/load-state';
import {Project} from '../../../../data/model/project/project';


@Injectable()
export class ProjectPageStore {
  private readonly projectRepository = inject(ProjectRepository);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  private readonly _state = signal<ProjectPageState>(INITIAL_PROJECT_PAGE_STATE);

  readonly state = this._state.asReadonly();

  constructor() {
    this.registerRouteParamObserver();
  }

  /**
   * Registers the observer that loads the project whenever the route parameter changes.
   */
  private registerRouteParamObserver(): void {
    this.route.paramMap
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(paramMap => {
        const projectId = paramMap.get('projectId');

        if (projectId === null) {
          this.patchState({project: {status: 'error'}});
          return;
        }

        this.loadProject(projectId);
      });
  }

  /**
   * Loads the project identified by the given project ID.
   *
   * Sets the project state to loading while resolving the project, then updates
   * it to either loaded with the matching project or error when no project exists.
   *
   * @param projectId - ID of the project to load.
   */
  private loadProject(projectId: string): void {
    this.patchState({project: {status: 'loading'}});

    const project = this.projectRepository.findProjectById(projectId);
    const projectLoadState: LoadState<Project> = project ? {status: 'loaded', data: project} : {status: 'error'};

    this.patchState({project: projectLoadState});
  }

  /**
   * Updates the current page state with the provided values.
   *
   * @param patch - Partial state containing the values to update.
   */
  private patchState(patch: Partial<ProjectPageState>): void {
    this._state.update(state => ({
      ...state,
      ...patch
    }));
  }
}
