import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg viewBox="-4 0 32 24" className="fill-current">
        <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V8.82843C22 8.03278 21.6839 7.26972 21.1213 6.70711L17.2929 2.87868C16.7303 2.31607 15.9672 2 15.1716 2H7Z" fill="#4296FF"/>
        <path d="M7 4C6.44772 4 6 4.44772 6 5V7C6 7.55228 6.44772 8 7 8H15C15.5523 8 16 7.55228 16 7V5C16 4.44772 15.5523 4 15 4H7Z" fill="#152C70"/>
        <path d="M15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14Z" fill="#152C70"/>
      </svg>
    ),
    title: "ID Management",
    paragraph:
      "Creation and storage of pseudonyms. Pseudonymization of 1st, 2nd and higher levels. Non-persisted pseudonyms generated by a symmetrical process. Protected transmission of pseudonyms thanks to asymmetric encryption."/*"Erzeugung und Speicherung von Pseudonymen. Pseudonymisierung 1., 2. und höherer Stufe. Durch symmetrisches Verfahren erzeugte, nicht persistierte Pseundonyme. Geschützte Übertragung der Pseudonyme, dank asymmetischer Verschlüsselung"*/,
  },
  {
    id: 1,
    icon: (
      <svg viewBox="-2 0 28 24" className="fill-current">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#4296FF"/>
        <path d="M12.0001 6C10.3433 6 9.00012 7.34315 9.00012 9C9.00012 10.6569 10.3433 12 12.0001 12C13.657 12 15.0001 10.6569 15.0001 9C15.0001 7.34315 13.657 6 12.0001 6Z" fill="#152C70"/>
        <path d="M17.8948 16.5528C18.0356 16.8343 18.0356 17.1657 17.8948 17.4473C17.9033 17.4297 17.8941 17.4487 17.8941 17.4487L17.8933 17.4502L17.8918 17.4532L17.8883 17.46L17.8801 17.4756C17.874 17.4871 17.8667 17.5004 17.8582 17.5155C17.841 17.5458 17.8187 17.5832 17.7907 17.6267C17.7348 17.7138 17.6559 17.8254 17.5498 17.9527C17.337 18.208 17.0164 18.5245 16.555 18.8321C15.623 19.4534 14.1752 20 12.0002 20C8.31507 20 6.76562 18.4304 6.26665 17.7115C5.96476 17.2765 5.99819 16.7683 6.18079 16.4031C6.91718 14.9303 8.42247 14 10.0691 14H13.7643C15.5135 14 17.1125 14.9883 17.8948 16.5528Z" fill="#152C70"/>
      </svg>
    ),
    title: "Duplicate detection"/*"Dublettenerkennung"*/,
    paragraph:
      "Thanks to fault-tolerant record linkage of demographic data, identifying data (IDAT) from different sources can be assigned to the same person even if the quality varies."/*"Dank einer fehlertoleranten Record Linkage von demographischen Daten können identifizierende Daten (IDAT) aus unterschiedlichen Quellen auch bei wechselnder Qualität der selben Person zugeordnet werden."*/,
  },
  {
    id: 1,
    icon: (
      <svg viewBox="-4 0 30 24" className="fill-current">
        <path fillRule="evenodd" clipRule="evenodd" d="M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17ZM19.5303 16.5303L17.0303 19.0303C16.7374 19.3232 16.2621 19.3227 15.9692 19.0298L14.9697 18.0303C14.6768 17.7374 14.6768 17.2626 14.9697 16.9697C15.2626 16.6768 15.7374 16.6768 16.0303 16.9697L16.5 17.4393L18.4697 15.4697C18.7626 15.1768 19.2374 15.1768 19.5303 15.4697C19.8232 15.7626 19.8232 16.2374 19.5303 16.5303Z" fill="#152C70"/>
        <path d="M10 2C7.23858 2 5 4.23858 5 7C5 9.76142 7.23858 12 10 12C12.7614 12 15 9.76142 15 7C15 4.23858 12.7614 2 10 2Z" fill="#4296FF"/>
        <path d="M3.54545 22C2.69192 22 2 21.3081 2 20.4545C2 16.8898 4.8898 14 8.45455 14H9.54545C9.91548 14 10.2782 14.0311 10.6312 14.0909C10.2259 14.9769 10 15.9621 10 17C10 18.9587 10.8045 20.7295 12.101 22H3.54545Z" fill="#4296FF"/>
      </svg>
    ),
    title: "Re-identification"/*"Re-Identifizierung"*/,
    paragraph:
      "Performing re-identification requests."/*"Durchführen von Re-Identifizierungsanfragen."*/,
  },
  {
    id: 1,
    icon: (
      <svg viewBox="-3 0 30 25" className="fill-current">
        <path d="M3 8C2.44772 8 2 8.44772 2 9V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V9C22 8.44772 21.5523 8 21 8H3Z" fill="#4296FF"/>
        <path d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4.10002C20.2822 4.56329 22 6.58104 22 9C22 9.55228 21.5523 10 21 10H3C2.44772 10 2 9.55228 2 9C2 6.58104 3.71776 4.56329 6 4.10002V3C6 2.44772 6.44772 2 7 2Z" fill="#152C70"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13Z" fill="#152C70"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z" fill="#152C70"/>
      </svg>
    ),
    title: "Audit Trail",
    paragraph:
      "...",
  },
  {
    id: 1,
    icon: (
      <svg viewBox="-3 0 30 25" className="fill-current">
        <path fillRule="evenodd" clipRule="evenodd" d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9C17 9.55228 16.5523 10 16 10H8C7.44772 10 7 9.55228 7 9V7ZM12 4C10.3431 4 9 5.34315 9 7V8H15V7C15 5.34315 13.6569 4 12 4Z" fill="#152C70"/>
        <path d="M9 8C6.23858 8 4 10.2386 4 13V17C4 19.7614 6.23858 22 9 22H15C17.7614 22 20 19.7614 20 17V13C20 10.2386 17.7614 8 15 8H9Z" fill="#4296FF"/>
        <path d="M13 15.7324C13.5978 15.3866 14 14.7403 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 14.7403 10.4022 15.3866 11 15.7324V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15.7324Z" fill="#152C70"/>
      </svg>
    ),
    title: "sMCP",
    paragraph:
      "Matching patient master data records between two parties without plain text IDAT leaving the locations."/*"Abgleich von Patienten Stammdatensätzen zwischen zwei Parteien, ohne dass Klartext-IDAT die Standorte verlassen."*/,
  },
  {
    id: 1,
    icon: (
      <svg viewBox="-3 0 30 24" className="fill-current">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.04582 10.8715C8.52718 10.6007 8.6979 9.99103 8.42713 9.50967C8.15637 9.02831 7.54665 8.85759 7.0653 9.12836L3.50974 11.1284C3.18725 11.3098 2.99128 11.6544 3.0003 12.0243C3.00931 12.3942 3.22184 12.7289 3.55279 12.8944L5.63258 13.9343L3.50974 15.1284C3.18725 15.3098 2.99128 15.6544 3.0003 16.0243C3.00931 16.3942 3.22184 16.7289 3.55279 16.8944L11.5528 20.8944C11.8343 21.0351 12.1657 21.0351 12.4472 20.8944L20.4472 16.8944C20.7782 16.7289 20.9907 16.3942 20.9997 16.0243C21.0087 15.6544 20.8128 15.3098 20.4903 15.1284L18.3674 13.9343L20.4472 12.8944C20.7782 12.7289 20.9907 12.3942 20.9997 12.0243C21.0087 11.6544 20.8128 11.3098 20.4903 11.1284L16.9347 9.12836C16.4533 8.85759 15.8436 9.02831 15.5729 9.50967C15.3021 9.99103 15.4728 10.6007 15.9542 10.8715L17.8679 11.948L12 14.8819L6.13213 11.948L8.04582 10.8715ZM16.2077 15.0141L12.4472 16.8944C12.1657 17.0351 11.8343 17.0351 11.5528 16.8944L7.7923 15.0141L6.13213 15.948L12 18.8819L17.8679 15.948L16.2077 15.0141Z" fill="#152C70"/>
        <path d="M12.4472 3.10557C12.1657 2.96481 11.8343 2.96481 11.5528 3.10557L3.55279 7.10557C3.214 7.27496 3 7.62123 3 8C3 8.37877 3.214 8.72504 3.55279 8.89443L11.5528 12.8944C11.8343 13.0352 12.1657 13.0352 12.4472 12.8944L20.4472 8.89443C20.786 8.72504 21 8.37877 21 8C21 7.62123 20.786 7.27496 20.4472 7.10557L12.4472 3.10557Z" fill="#4296FF"/>
      </svg>
    ),
    title: "More flexible integration"/*"Flexibler Integration"*/,
    paragraph:
      "Use of tokens, redirects, callbacks and integrated HTML pages."/*"Verwendung von Tokens, Weiterleitung, Callbacks und integrierten HTML-Seiten."*/,
  },
];
export default featuresData;
