import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CytoSharedModule } from 'app/shared/shared.module';
import { CytoCoreModule } from 'app/core/core.module';
import { CytoAppRoutingModule } from './app-routing.module';
import { CytoHomeModule } from './home/home.module';
import { CytoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CytoSharedModule,
    CytoCoreModule,
    CytoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CytoEntityModule,
    CytoAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CytoAppModule {}
