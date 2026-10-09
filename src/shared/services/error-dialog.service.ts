import {inject, Injectable} from '@angular/core';
import {InternalErrorDialog} from '../components/internal-error-dialog/internal-error-dialog';
import {DialogManagerService} from './dialog-manager.service';

@Injectable({providedIn: 'root'})
export class ErrorDialogService {
  private readonly dialogManagerService = inject(DialogManagerService);

  /**
   * Opens the internal error dialog.
   *
   * @param stackable - Whether the dialog can be opened while another dialog is already open.
   */
  openInternalErrorDialog(stackable: boolean = false): void {
    void this.dialogManagerService.open<InternalErrorDialog, unknown, undefined>(
      InternalErrorDialog,
      undefined,
      stackable
    ).catch(error => {
      console.error('Failed to open internal error dialog:', error);
    });
  }
}
