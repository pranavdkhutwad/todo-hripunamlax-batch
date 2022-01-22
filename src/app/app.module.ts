// Angular or Third party modules.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Custom Components.
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/header/app-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Custom Pipes.
import { FileSizePipe } from './shared/pipes/filesize.pipe';
import { FlyHerosPipe } from './shared/pipes/fly-heros.pipe';

// Custom Modules
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FileSizePipe,
    FlyHerosPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
