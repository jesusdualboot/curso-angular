import { Component } from '@angular/core';

@Component({
  selector: 'app-card-loading',
  templateUrl: './card-loading.component.html',
  styleUrls: ['./card-loading.component.css'],
  template: `
    <div>
      <ng-template cardHost></ng-template>
    </div>
  `,
})
export class CardLoadingComponent {}
