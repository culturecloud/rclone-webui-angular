import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BytesPipe } from './bytes.pipe';

@NgModule({
  declarations: [BytesPipe],
  imports: [CommonModule],
  exports: [BytesPipe],
})
export class SharedModule {}