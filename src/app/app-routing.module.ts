import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UploadComponent} from './upload/upload.component'
import {SelectComponent} from './select/select.component'

const routes: Routes = [
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'select',
    component: SelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }