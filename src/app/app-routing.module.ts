import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { BlogComponent } from './layout/modules/blog/blog.component';
import { DocsComponent } from './layout/modules/docs/docs.component';
import { EventsComponent } from './layout/modules/events/events.component';
import { FeaturesComponent } from './layout/modules/features/features.component';
import { CommunityComponent } from './layout/modules/resources/community/community.component';
import { DevelopmentComponent } from './layout/modules/resources/development/development.component';
import { EducationComponent } from './layout/modules/resources/education/education.component';
import { ResourcesComponent } from './layout/modules/resources/resources.component';
import { PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';
import { IntrodComponent } from './layout/modules/docs/introd/introd.component';
import { GettingComponent } from './layout/modules/docs/getting/getting.component';
import { UnderstandingComponent } from './layout/modules/docs/understanding/understanding.component';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'features',component:FeaturesComponent},
  {path:'docs',component:DocsComponent,
   children:[{path:'',component:IntrodComponent},
   {path:'getting',component:GettingComponent},
   {path:'understanding',component:UnderstandingComponent}]
  },
  {path:'resources',component:ResourcesComponent},
  {path:'development',component:DevelopmentComponent},
  {path:'education',component:EducationComponent},
  {path:'community',component:CommunityComponent},
  {path:'events',component:EventsComponent},
  {path:'blog',component:BlogComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
