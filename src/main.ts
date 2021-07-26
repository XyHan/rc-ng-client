import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { UiModule } from './ui/ui.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(UiModule)
  .catch(err => console.error(err));
