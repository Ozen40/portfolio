import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {
  projets = [
    { nom: 'OpenENT', route: '/openent', note: 4, logo: 'logo_ent.png', type: 'Technique', desc: "Open ENT est une application libre et open source de portail numérique pour les établissements scolaires. Elle permet aux élèves et enseignants d'accéder à un ensemble d’outils et de services en ligne (messagerie, cahier de textes, emploi du temps) via une interface unique." },
    { nom: 'Grand Angle', route: '/grandangle', note: 4, logo: 'logo_gda.png', type: 'Technique', desc: "Grand Angle est une application de gestion financière conçue pour les collectivités locales. Elle vise à moderniser et optimiser les systèmes d'information publics en intégrant divers modules adaptés aux besoins spécifiques des collectivités." },
    { nom: 'Geosavior', route: '/geosavior', note: 4, logo: 'logo_geosavior.png', type: 'Technique', desc: "Geosavior est une application mobile permettant de signaler un animal marin en détresse afin qu'il soit secouru soit par un centre spécialisé soit par le SDIS en fonction de la gravité. Elle a été réalisé en colaboration avec l'association Sibylline Océans qui est une association qui oeuvre pour le sauvetage des animaux marins." },
    { nom: 'Link & Trade', route: '/linkntrade', note: 4, logo: 'logo_linkntrade.png', type: 'Technique', desc: "Link & Trade est une application permettant aux lycéen du lycée de Borda de mettre en vente les objects ou les vêtements dont ils ne se servent plus. Elle leur permet de créer des annonces avec un QR code pour pouvoir la partager." },
    { nom: 'SpeedClean', route: '/speedclean', note: 4, logo: 'logo_speedclean.png', type: 'Technique', desc: "SpeedClean est un projet de nettoyage de la plage de Vielle-Saint-Girons ainsi que la réalisation du défi sportif de soixante kilomètres. Ce projet a été réalisé en autofinancement par le groupe." }
  ];
}
