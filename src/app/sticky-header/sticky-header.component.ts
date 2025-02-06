import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';

@Component({
  selector: 'app-sticky-header',
  imports: [],
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StickyHeaderComponent {
  dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };
  constructor() {
    RevealSdkSettings.serverUrl = 'https://samples.revealbi.io/upmedia-backend/reveal-api/';
  }
}
