import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { MainComponent } from './ui/layout/main/main.component';

@NgModule({
  imports: [UiModule],
  exports: [UiModule],
  bootstrap: [MainComponent]
})
export class AppModule { }
