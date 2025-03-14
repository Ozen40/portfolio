import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    HomeComponent,
    NavbarComponent,
    AngularComponent,
    JavaComponent,
    SqlComponent,
    GitComponent,
    TuComponent,
    UxComponent,
    CompetenceComponent,
    ProjetsComponent,
    ContactComponent,
    CommunicationComponent,
    DocComponent,
    AutonomieComponent,
    GestionComponent,
    OpenentComponent,
    GrandangleComponent,
    GeosaviorComponent,
    LinkntradeComponent,
    SpeedcleanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
