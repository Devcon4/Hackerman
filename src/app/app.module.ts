import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { PostProccessComponent } from './post-proccess/post-proccess.component';


@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    PostProccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
