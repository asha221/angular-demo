import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './layout/home/home.component';
import { EventsComponent } from './layout/modules/events/events.component';
import { FeaturesComponent } from './layout/modules/features/features.component';
import { DocsComponent } from './layout/modules/docs/docs.component';
import { ResourcesComponent } from './layout/modules/resources/resources.component';
import { BlogComponent } from './layout/modules/blog/blog.component';
import { MatTableModule} from '@angular/material/table';
import { EducationComponent } from './layout/modules/resources/education/education.component';
import { DevelopmentComponent } from './layout/modules/resources/development/development.component';
import { CommunityComponent } from './layout/modules/resources/community/community.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule} from '@angular/material/list';
import { DocsSidebarComponent } from './layout/modules/docs-sidebar/docs-sidebar.component';
import { DocsHeaderComponent } from './layout/modules/docs-header/docs-header.component';
import { MatSelectModule} from '@angular/material/select';
import { IntrodComponent } from './layout/modules/docs/introd/introd.component';
import { GettingComponent } from './layout/modules/docs/getting/getting.component';
import { UnderstandingComponent } from './layout/modules/docs/understanding/understanding.component';
import { MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    MainComponent,
    HomeComponent,
    EventsComponent,
    FeaturesComponent,
    DocsComponent,
    ResourcesComponent,
    BlogComponent,
    EducationComponent,
    DevelopmentComponent,
    CommunityComponent,
    DocsSidebarComponent,
    DocsHeaderComponent,
    IntrodComponent,
    GettingComponent,
    UnderstandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatListModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
