import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CovidKontaktiSharedModule } from 'app/shared/shared.module';
import { CovidKontaktiCoreModule } from 'app/core/core.module';
import { CovidKontaktiAppRoutingModule } from './app-routing.module';
import { CovidKontaktiHomeModule } from './home/home.module';
import { CovidKontaktiEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CovidKontaktiSharedModule,
    CovidKontaktiCoreModule,
    CovidKontaktiHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CovidKontaktiEntityModule,
    CovidKontaktiAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CovidKontaktiAppModule {}
