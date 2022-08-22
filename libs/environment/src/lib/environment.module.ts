import { NgModule, ModuleWithProviders } from '@angular/core';

import { PlayerEnvironment } from './players.model';
import { PLAYER_ENVIRONMENT } from './players.token';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: PlayerEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: PLAYER_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
