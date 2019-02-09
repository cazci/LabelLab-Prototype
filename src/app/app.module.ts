import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { SelectComponent } from './select/select.component';
import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
