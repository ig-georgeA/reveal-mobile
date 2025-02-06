import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { AlwaysScrollComponent } from './always-scroll/always-scroll.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sticky-header', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'sticky-header',
    component: StickyHeaderComponent,
    data: {
      text: 'Sticky header'
    }
  },
  {
    path: 'always-scroll',
    component: AlwaysScrollComponent,
    data: {
      text: 'Always scroll'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
