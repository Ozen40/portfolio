import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './tech/angular/angular.component';
import { JavaComponent } from './tech/java/java.component';
import { SqlComponent } from './tech/sql/sql.component';
import { GitComponent } from './tech/git/git.component';
import { TuComponent } from './tech/tu/tu.component';
import { UxComponent } from './tech/ux/ux.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { CommunicationComponent } from './hum/communication/communication.component';
import { DocComponent } from './hum/doc/doc.component';
import { AutonomieComponent } from './hum/autonomie/autonomie.component';
import { GestionComponent } from './hum/gestion/gestion.component';
import { OpenentComponent } from './real/openent/openent.component';
import { GrandangleComponent } from './real/grandangle/grandangle.component';
import { GeosaviorComponent } from './real/geosavior/geosavior.component';
import { LinkntradeComponent } from './real/linkntrade/linkntrade.component';
import { SpeedcleanComponent } from './real/speedclean/speedclean.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'competences', component: CompetenceComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'java', component: JavaComponent },
  { path: 'sql', component: SqlComponent },
  { path: 'git', component: GitComponent },
  { path: 'tu', component: TuComponent },
  { path: 'ux', component: UxComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'doc', component: DocComponent },
  { path: 'autonomie', component: AutonomieComponent },
  { path: 'gestion', component: GestionComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'openent', component: OpenentComponent },
  { path: 'grandangle', component: GrandangleComponent },
  { path: 'geosavior', component: GeosaviorComponent },
  { path: 'linkntrade', component: LinkntradeComponent },
  { path: 'speedclean', component: SpeedcleanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
