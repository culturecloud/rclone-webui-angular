import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { jsonStringValidator } from 'src/app/shared/json-string-validator.directive';
import { SimpleDialogComponent } from 'src/app/shared/simple-dialog/simple-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-mount-dialog',
  templateUrl: './new-mount-dialog.component.html',
  styleUrls: ['./new-mount-dialog.component.scss'],
})
export class NewMountDialogComponent {
  mountForm = this.fb.nonNullable.group({
    Fs: ['', Validators.required],
    AutoMountPoint: [true], // Only for Windows
    MountPoint: ['', Validators.required],
    enabled: [true],
    autoMount: [false], // Scheduled task
    readonly: [false],
    windowsNetworkMode: [true],
    filePerms: [
      '0666',
      [Validators.required, Validators.pattern(/^0?[1-7][0-7]{2}$/)], // although something like 077 is valid, we don't want to allow it
    ],
    dirPerms: [
      '0777',
      [Validators.required, Validators.pattern(/^0?[1-7][0-7]{2}$/)],
    ],
    noModTime: [false],
    vfsCacheMode: ['minimal'],
    vfsCacheMaxAge: [
      '1h',
      [Validators.required, Validators.pattern(/^\d+[smhd]$/)],
    ],
    customMountOpt: ['{\n}', jsonStringValidator()],
    customVfsOpt: ['{\n}', jsonStringValidator()],
  });
  showAdvancedOptions = false;
  hasCron = environment.electron;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      osType: string;
      fsOptions: string[];
    },
  ) {
    if (data.osType === 'windows') {
      this.mountForm.controls.MountPoint.setValue('Z:');
    } else {
      this.mountForm.controls.AutoMountPoint.setValue(false);
      this.mountForm.controls.MountPoint.setValue('/mnt/rclone');
    }
  }

  getMountOptHelp() {
    this.dialog.open(SimpleDialogComponent, {
      data: {
        title: $localize`Information`,
        message: $localize`This is options for advanced user only!\nPlease input options in JSON format, keys are in PascalCase.\nAvailable options: please refer to https://github.com/rclone/rclone/blob/master/cmd/mountlib/mount.go\nfind "type Options struct" part`,
        actions: [{ label: $localize`Close`, value: 0 }],
      },
    });
  }
  getVfsOptHelp() {
    this.dialog.open(SimpleDialogComponent, {
      data: {
        title: $localize`Information`,
        message: $localize`This is options for advanced user only!\nPlease input options in JSON format, keys are in PascalCase.\nAvailable options: please refer to https://github.com/rclone/rclone/blob/master/vfs/vfscommon/options.go\nfind "type Options struct" part`,
        actions: [{ label: $localize`Close`, value: 0 }],
      },
    });
  }
}
