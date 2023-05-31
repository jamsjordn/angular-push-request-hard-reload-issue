import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
})
export class AppComponent {
  title = 'base-angular';

  constructor(private readonly swPush: SwPush) {}

  public registerForNotifications(): void {
    this.swPush.requestSubscription({
      serverPublicKey:
        'BAdbQh377J451TOypWJwbUoX4uCJghuPH6YkDaM6YQetgActTPr4rKK-xr6HhUnjmD2oId7KZ_56aRDcTz_mQlo',
    });
  }
}
