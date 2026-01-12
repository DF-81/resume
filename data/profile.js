const profileData = {
  title: "Lebenslauf",
  name: "Daniel Fechner",
  sub_title: "IT-Koordinator/Manager",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro:
      "IT-Koordinator mit über 8 Jahren Berufserfahrung in der ganzheitlichen Betreuung einer IT-Landschaft im mittelständischen Unternehmen - Verantwortlich für IT-Infrastruktur, Warenwirtschaftssysteme und E-Commerce-Plattformen. Erfahrung in der Anforderungsanalyse, Projektleitung sowie in der Koordination externer IT-Partner. Starke analytische Fähigkeiten in der Fehleranalyse und Prozessoptimierung.",
    contact: {
      email: "kontakt@fechner-daniel.de",
      phone: "+49-17647131606",
      address: "Pfarrgasse 14, 06268 Obhausen",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://linkedin.com/in/danielfechner",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/DF-81",
      iconClass: "fa-brands fa-github",
    },
    /*{
      title: "Codepen",
      src: "https://codepen.io/imvpn22",
      iconClass: "fa-brands fa-codepen",
    },*/
  ],
  skills: [
    {
      title: "Sprachen & Standards",
      value: "HTML, CSS3, PHP, SQL, JavaScript, JSON",
    },
    {
      title: "Werkzeuge & Plattformen",
      value:
        "Git, GitHub, Postman, Asana, Magento 1&2, WordPress",
    },
    /*{
      title: "Maps & Visualization",
      value: "Canvas API, Leaflet.js, D3.js, Chart.js, HighCharts",
    },*/
    {
      title: "Andere",
      value:
        "Office Tools, Adobe Creativesuite, Online-Marketing Tools (Uberall, Hubspot, Doofinder u.w.)",
    },
  ],
  experiences: [
    {
      organization: "Holzboden-Direkt.de e.K.",
      title: "IT-Koordinator/Manager",
      date: "Juli 2017 - Heute",
      details: [
      `<b>IT-Infrastruktur & Systemlandschaft</b>
      - Ganzheitliche Betreuung und Weiterentwicklung der IT-Infrastruktur
      - Fehleranalyse und eigenständige Störungsbehebung
      - Koordination externer IT-Dienstleister (Hosting, Entwicklung, SEM)
      `,

      `<b>Warenwirtschaft & ERP</b>
      - Projektleitung bei der Einführung eines neuen Warenwirtschaftssystems
      - Erstellung des Lastenhefts und Abstimmung mit der Geschäftsleitung
      - Antrag Förderung, Budgetplanung, Steuerung und Begleitung bis zum Go-Live
      `,

      `<b>Warenwirtschaft & ERP</b>
      - Technische und organisatorische Verantwortung für den Online-Shop
      - Migration von Magento 1 auf Magento 2 in Zusammenarbeit mit externen Entwicklern
      - Anforderungsmanagement und Qualitätssicherung
	  - Erstellung von Kalkulationsunterlagen unter Berücksichtigung des Deckungsbeitrages
	  - Optimierung Datenbestand sowie kontinuierliche Datenpflege nach Vorgaben`,
	 ],
    },
    {
      organization: "LH Halle e.V.",
      title: "Mitarbeiter Buchhaltung & Controlling",
      date: "Juni 2015 - Juni 2017 (befristete Anstellung)",
      details: [
        `Durchführung der laufenden Finanzbuchhaltung (Debitoren & Kreditoren) unter Berücksichtigung von Kostenstellen- und Kostenartenrechnung`,
        `Mitwirkung bei vorbereitenden Jahresabschlussarbeiten`,
        `Erstellung betriebswirtschaftlicher Auswertungen und Kennzahlen`,
		`Soll-Ist-Analysen zur Budget- und Kostenkontrolle`,
		`Erzeugung von Anträgen zur Unterstützung und Verhandlung bei Entgeltsätzen vor der Sozialagentur oder Krankenkassen für die wirtschaftlichen Planungen`,
      ],
    },
    {
      organization: "Malmberg Bioerdgastech GmbH",
      title: `Kaufmännisch-technischer Assistent`,
      date: "Januar 2015 - Mai 2015 (befristete Anstellung)",
      details: [
        `Unterstützung administrativer und technischer Prozesse`,
		`Pflege und Strukturierung technischer Dokumentationen`,
		`Einführung/Weiterentwicklung von Dokumentationen nach DIN EN 82079`,
		`Schnittstelle zwischen technischen Inhalten und kaufmännischen Anforderungen`,
      ],
    },
    {
      organization: "Fish Fever GmbH",
      title: `Onlineshop-Manager`,
      date: "Mai 2013 - Dezenber 2014 (betriebesbedingte Kündigung)",
      details: [
        `Konzeption, Umsetzung und Pflege der Online-Präsenz`,
		`Verantwortung für Struktur, Inhalte und Produktdarstellung`,
		`Umsetzung von SEO-Maßnahmen zur Verbesserung der Sichtbarkeit`,
		`Gestaltung von Screendesigns und Nutzerführung`,
		`Zusammenarbeit mit externen Dienstleistern`,
      ],
    },
  ],
  projects: [],
  education: [
    {
      alma: "Masterstudium",
      duration: "Oktober 2010 - April 2013",
      std: "Master of Arts (Technische Redaktion und Wissenskommuniktion)",
      score: "ECTS Grade A | 91-100%",
    },
    {
      alma: "Bachelorstudium",
      duration: "Oktober 2007 - September 2010",
      std: "Bachelor of Science (Technische Betriebswirtschaft)",
      score: "ECTS Grade B | 84-91%",
    },
  ],
  certifications: [
    {
      desc: `Qualitätsmanagement-Auditor QMA-TÜV.
      (<a target='_blank' rel='noreferrer' href='https://www.tuvsud.com/de-de/store/akademie/seminare-management/qualitaetsmanagement/modulare-ausbildung/1111106'>https://www.tuvsud.com/de-de</a>)`,
      date: "September - November 2014",
    },
  ],
  events: [],
};
