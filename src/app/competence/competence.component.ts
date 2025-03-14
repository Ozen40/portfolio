import { Component } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent {
  competences = [
    { nom: 'Angular', route: '/angular', note: 4, logo: 'logo_angular.png', type: 'Technique' },
    { nom: 'Java', route: '/java', note: 4, logo: 'logo_java.png', type: 'Technique' },
    { nom: 'SQL', route: '/sql', note: 4, logo: 'logo_sql.png', type: 'Technique' },
    { nom: 'Git', route: '/git', note: 4, logo: 'logo_git.png', type: 'Technique' },
    { nom: 'TU', route: '/tu', note: 4, logo: 'logo_tu.png', type: 'Technique' },
    { nom: 'UX/UI', route: '/ux', note: 4, logo: 'logo_ux.png', type: 'Technique' },
    { nom: 'Communication', route: '/communication', note: 3, logo: 'logo_communication.png', type: 'Humaine' },
    { nom: 'Rédaction de documentation', route: '/doc', note: 3, logo: 'logo_doc.png', type: 'Humaine' },
    { nom: 'Autonomie', route: '/autonomie', note: 4, logo: 'logo_autonomie.png', type: 'Humaine' },
    { nom: 'Gestion de projet', route: '/gestion', note: 3, logo: 'logo_gestion.png', type: 'Humaine' }
  ];

  setNote(competence: any, note: number) {
    competence.note = note;
  }
}
