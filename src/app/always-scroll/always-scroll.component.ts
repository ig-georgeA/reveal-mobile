import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';

@Component({
  selector: 'app-always-scroll',
  imports: [],
  templateUrl: './always-scroll.component.html',
  styleUrls: ['./always-scroll.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlwaysScrollComponent {
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
