import React, { useState } from 'react';
import './Attractions.css';

interface Attraction {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
  rating: number;
  details: {
    fullDescription: string;
    openingHours: string;
    address: string;
    price: string;
    tips: string[];
  };
}

const attractions: Attraction[] = [
  {
    id: 1,
    name: 'Tâmpa',
    description: 'Muntele Tâmpa oferă priveliști spectaculoase asupra orașului. Accesibil pe jos sau cu telecabina.',
    icon: '🏔️',
    category: 'Natură',
    rating: 4.8,
    details: {
      fullDescription: 'Muntele Tâmpa (960 m altitudine) domină peisajul Brașovului și reprezintă cel mai important reper natural al orașului. În 2015, pe versantul vestic au fost instalate litere de 20 metri înălțime cu inscripția "BRAȘOV", inspirate de celebrul semn Hollywood. Muntele oferă 7 trasee marcate de diferite dificultăți, cel mai popular fiind traseul de la Telecabină (durată: 20-30 minute). Telecabina modernă, inaugurată în 2017, urcă 400 de metri în doar câteva minute și are o capacitate de 360 persoane/oră.',
      openingHours: 'Telecabina: 09:30 - 19:00 (mai-octombrie), 09:30 - 17:00 (noiembrie-aprilie). Închis luni. Trasee pedestru: accesibile permanent.',
      address: 'Stația de jos: Str. Dionysius Andrássy nr. 27, Brașov',
      price: 'Telecabina: 40 RON adulți dus-întors, 25 RON copii (3-14 ani). Grup familie: 100 RON. Trasee pedestru: gratuit.',
      tips: [
        'Durata: 2-3 ore pentru vizită completă',
        'La vârf: restaurant Panoramic, zonă copii, telescop panoramic',
        'Traseu recomandat: Crucea Tâmpei - 45 minute urcuș moderat',
        'Evitați weekendurile aglomerate - vizitați dimineața devreme',
        'Temperaturi cu 5-7°C mai scăzute decât în oraș'
      ]
    }
  },
  {
    id: 2,
    name: 'Strada Sforii',
    description: 'Una dintre cele mai înguste străzi din Europa, cu doar 1.3 metri lățime.',
    icon: '🏘️',
    category: 'Istoric',
    rating: 4.5,
    details: {
      fullDescription: 'Strada Sforii, construită în jurul anului 1650, măsoară între 111-135 cm lățime și este una dintre cele mai înguste străzi din Europa. Cu o lungime de doar 80 metri, a fost inițial un coridor de trecere pentru pompieri între Strada Cerbului și Piața Sfatului. Numele provine de la activitatea comercianților de sfori care își depozitau mărfurile aici în secolul al XVIII-lea. În 1994, strada a fost restaurată și deschisă publicului, devenind rapid o atracție turistică iconică.',
      openingHours: 'Accesibilă 24/7, iluminată noaptea',
      address: 'Între Str. Cerbului 23 și Piața Sfatului, Centrul Istoric',
      price: 'Acces gratuit',
      tips: [
        'Lungime: 80 metri - vizitarea durează 5-10 minute',
        'Fotografii recomandate: 7:00-9:00 (fără turiști)',
        'Acces dinspre Piața Sfatului - căutați indicatorul lângă Crama Sergiana',
        'Nu este accesibilă pentru persoane cu dizabilități motorii',
        'Record: Strada Parliament (Exeter, UK) - 64 cm este mai îngustă'
      ]
    }
  },
  {
    id: 3,
    name: 'Biserica Neagră',
    description: 'Cea mai mare biserică gotică din România, construită între 1385 și 1477.',
    icon: '⛪',
    category: 'Arhitectură',
    rating: 4.9,
    details: {
      fullDescription: 'Biserica Neagră (Schwarze Kirche) este cea mai mare biserică în stil gotic din România, având 89 metri lungime și turnul de 65 metri înălțime. Construită între 1383-1477 de comunitatea săsească, a fost numită inițial Biserica Sfânta Maria. Numele actual provine din incendiul din 1689 când armata austriacă a dat foc orașului - zidurile au fost afumate grav. Renovată în stil baroc în secolul XVIII, Biserica găzduiește cea mai mare colecție de covoare anatoliene din afara Turciei (119 piese din secolele XVII-XVIII) și o orgă monumentală cu 4000 de tuburi, construită de firma Buchholz în 1839.',
      openingHours: 'Aprilie-octombrie: Luni-Sâmbătă 10:00-18:00, Duminică 12:00-18:00. Noiembrie-martie: până la 17:00. Închis în timpul slujbelor.',
      address: 'Curtea Johannes Honterus nr. 2, Brașov 500025',
      price: 'Adulți: 20 RON, Studenți/pensionari: 10 RON, Copii sub 7 ani: gratuit. Ghid audio: +5 RON.',
      tips: [
        'Durata vizitei: 45-60 minute',
        'Concerte de orgă: marți și joi, 18:00 (aprilie-octombrie) - 30 RON',
        'Fotografiere interzisă în interior - cumpărați cărți poștale',
        'Capacitate: 5000 persoane - cea mai mare biserică gotică din sud-estul Europei',
        'Vizitați cripta cu pietre funerare medievale'
      ]
    }
  },
  {
    id: 4,
    name: 'Cetatea Brașov',
    description: 'Bastioane medievale și turnuri de apărare din secolul XV.',
    icon: '🏰',
    category: 'Istoric',
    rating: 4.7,
    details: {
      fullDescription: 'Sistemul de fortificații medievale al Brașovului a fost construit între secolele XIV-XVII pentru apărarea orașului. Zidurile măsurau 3 km lungime și 12 metri înălțime, întărite cu 7 bastioane și 4 turnuri de poartă. Fiecare bastion era construit și întreținut de o breaslă: Țesătorilor (1450), Croitorilor (1450), Cojocarilor (1450), Postăvarilor (1460), etc. Din ansamblul original au supraviețuit: Bastionul Postăvarilor, Bastionul Graft, Bastionul Țesătorilor, Turnul Alb (1460-1494), Turnul Negru (1494-1521), Poarta Ecaterinei (1559) și Poarta Schei (1828).',
      openingHours: 'Bastionul Țesătorilor: Marți-Duminică 10:00-18:00. Turnul Alb/Negru: 10:00-17:00 (mai-octombrie). Poarta Ecaterinei: acces liber exterior.',
      address: 'Bastionul Țesătorilor: Str. Coșbuc nr. 9. Turnul Alb: Dealul Warthe. Poarta Ecaterinei: Str. Porții 22.',
      price: 'Bastionul Țesătorilor: 10 RON adulți, 5 RON reducere. Turnul Alb/Negru: gratuit.',
      tips: [
        'Traseu recomandat: Str. După Ziduri - 1.5 km pe lângă fortificații',
        'Bastionul Țesătorilor: expoziție medievală cu machete ale orașului',
        'Turnul Alb și Negru: conectate printr-un culoar de 200m pe Dealul Straja',
        'Poarta Ecaterinei: singura poartă medievală păstrată complet',
        'Durata completă a traseului: 2-3 ore'
      ]
    }
  },
  {
    id: 5,
    name: 'Piața Sfatului',
    description: 'Inima centrului istoric, înconjurată de clădiri colorate și terase.',
    icon: '🏛️',
    category: 'Centru',
    rating: 4.8,
    details: {
      fullDescription: 'Piața Sfatului, amenajată în 1364, este centrul istoric și pulsul social al Brașovului de peste 650 de ani. Cu o suprafață de 6.600 m², piața este înconjurată de 40 de clădiri colorate în stil baroc și gotic. Casa Sfatului (Rathaus), construită în 1420 în stil gotic, domină centrul pieței și găzduiește Muzeul de Istorie. Turnul de 58 metri a fost folosit ca post de pază contra incendiilor. Piața a fost centrul comercial medieval și loc de executare publică. Astăzi găzduiește evenimente majore: Festivalul Cerbul de Aur (din 1968), Târgul de Crăciun, Juni Brașovului, Golden Stag.',
      openingHours: 'Accesibilă 24/7. Casa Sfatului (Muzeu): Marți-Duminică 10:00-18:00.',
      address: 'Piața Sfatului, Brașov 500025',
      price: 'Acces gratuit. Muzeu Casa Sfatului: 15 RON adulți, 8 RON reducere.',
      tips: [
        'Atmosferă: dimineața (08:00-10:00) - liniște, ideal pentru fotografii',
        'Evenimente: verificați brașovtourism.ro pentru calendar',
        'Clădiri notabile: Casa Hirscher (nr. 12), Casa Sfatului (centru)',
        'Târgul de Crăciun (noiembrie-ianuarie): cel mai mare din România',
        'Parcare: P1 Piața Sfatului - 5 RON/oră (subteran)'
      ]
    }
  },
  {
    id: 6,
    name: 'Poiana Brașov',
    description: 'Stațiune montană perfectă pentru schi iarna și drumeții vara.',
    icon: '⛷️',
    category: 'Sport',
    rating: 4.6,
    details: {
      fullDescription: 'Poiana Brașov, situată la altitudini între 1030-1775 metri, este cea mai mare stațiune de schi din România și singura clasificată cu 5 stele de FIRS. Înființată în 1906 ca stațiune montană, a devenit centru de schi în anii 1950. Stațiunea dispune de 25 km de pârtii (14 pârtii: 2 ușoare, 6 medii, 6 dificile), 11 instalații moderne (telecabine, telescaune, teleschi), capacitate 13.000 persoane/oră. Gazda Festivalului de Schi și Snowboard din România și a Cupei Mondiale de Schi Alpin. Vara oferă peste 300 km trasee montane marcate către Vârful Postăvaru (1799m), Vârful Cristianul Mare (1696m), 7 Scări (cascadă), Lacul Bâlea.',
      openingHours: 'Sezon schi: decembrie-martie, 09:00-16:30. Trasee montane: mai-octombrie, acces permanent. Telecabina Kanzel: vara 09:00-18:00.',
      address: 'Poiana Brașov, Brașov (12 km de centru, 3 km de Râșnov)',
      price: 'Skipass: 190 RON/zi adulți (weekend), 150 RON (săptămână). Copii: 140 RON. Echipament: 100 RON/zi. Lecții schi: 150-200 RON/oră.',
      tips: [
        'Transport: autobuz 20 (6 RON) sau taxi (30-40 RON)',
        'Cazare: 350-800 RON/noapte - rezervați 2-3 luni înainte',
        'Începători: pârtiile Ruia și Bradul (ușoare, 2 km)',
        'Avansați: pârtia Lupului (3.5 km, 870m diferență nivel)',
        'Vara: bicicleta montană, paintball, tyrolienne (75m)',
        'Restaurant recomandat: Sura Dacilor (tradițional)'
      ]
    }
  },
  {
    id: 7,
    name: 'Prima Școală Românească',
    description: 'Muzeu istoric dedicat învățământului românesc din secolul al XVI-lea.',
    icon: '📚',
    category: 'Cultură',
    rating: 4.5,
    details: {
      fullDescription: 'Prima Școală Românească, înființată în 1495 în cartierul Șcheii Brașovului, este unul dintre cele mai vechi centre de cultură și învățământ românesc din Transilvania. Clădirea actuală datează din secolul al XVI-lea și găzduiește un muzeu dedicat istoriei învățământului și tiparului românesc. Aici au funcționat diacon Coresi și tipografia sa, unde s-au tipărit primele cărți în limba română (1559-1583), inclusiv celebra Tetraevangheliar. Muzeul prezintă manuscrise rare, cărți vechi tipărite, mobilier școlar autentic din secolul XVI-XVII, obiecte de cult și documente istorice. Sala de clasă reconstituită oferă o perspectivă asupra metodelor educaționale medievale. Curtea interioară păstrează atmosphere medievală cu ziduri din piatră și arcade gotice.',
      openingHours: 'Marți-Duminică: 09:00-17:00. Luni: închis. Vara (iunie-septembrie): 09:00-18:00.',
      address: 'Piața Unirii nr. 2, Șchei, Brașov',
      price: 'Adulți: 15 RON. Studenți/Elevi: 8 RON. Pensionari: 10 RON. Foto: 5 RON. Ghidaj: 40 RON/grup.',
      tips: [
        'Durată vizită: 1 ore. Combinați cu Biserica Sfântul Nicolae (100m distanță)',
        'Ghidaj recomandat pentru înțelegerea contextului istoric - disponibil în română și engleză',
        'Expoziție permanentă: cărți tipărite de Coresi, inclusiv Cazania (1581)',
        'Program educațional: ateliere de caligrafie chirilică pentru copii - rezervare prealabilă',
        'Transport: autobuz 4, 12, 51 până la stația Șchei sau 15 minute mers pe jos din centru',
        'Zona Șcheii: explorați cartierul săsesc tradițional cu case vechi și străduțe pietruite'
      ]
    }
  },
  {
    id: 8,
    name: 'Turnul Alb și Turnul Negru',
    description: 'Turnuri medievale de apărare cu vedere panoramică asupra orașului.',
    icon: '🏰',
    category: 'Istoric',
    rating: 4.6,
    details: {
      fullDescription: 'Turnul Alb (construit în 1494) și Turnul Negru (1559) sunt două fortificații medievale situate pe Dealul Warthe, parte integrantă a sistemului defensiv al Cetății Brașov. Turnul Alb, cu 20 metri înălțime și ziduri de 2 metri grosime, servea ca post de observație și aparare a intrării sudice în oraș. Numele provine de la piatră calcaroasă albă folosită la construcție. Turnul Negru (13 metri înălțime), construit din piatră bazaltică neagră, apăra accesul nordic și comunica prin semnale cu celelalte bastioane. În 1689, un incendiu devastator a afumat zidurile, intensificând culoarea neagră. Ambele turnuri au fost restaurate și oferă priveliști spectaculoase asupra centrului istoric, munților Postăvaru și Piatra Mare. Traseul pedestru între turnuri (1.2 km) trece prin pădure și oferă panouri informative despre istoria fortificațiilor.',
      openingHours: 'Aprilie-octombrie: 10:00-19:00 (zilnic). Noiembrie-martie: 10:00-17:00 (sâmbătă-duminică). Traseu pedestru: accesibil permanent.',
      address: 'Accesul principal: Strada După Ziduri (de la Biserica Sfântul Nicolae) sau via Aleea Tiberiu Brediceanu',
      price: 'Intrare în turnuri: 10 RON/persoană (adulți), 5 RON copii. Traseu pedestru: gratuit.',
      tips: [
        'Durată vizită completă: 2-3 ore (include urcare, vizitare turnuri, coborâre)',
        'Urcuș moderat: 300 metri diferență de nivel, pantă 15-20%. Echipament: pantofi sport',
        'Cel mai bun moment: apus de soare pentru fotografii panoramice spectaculoase',
        'Traseu circular recomandat: Turnul Alb → Turnul Negru → Bastion Graft → coborâre la Strada Dupa Ziduri',
        'Nu există facilități pe traseu - aduceți apă și snacks',
        'Combinați cu: Cetatea Brașov (15 minute mers pe jos de la Turnul Negru)'
      ]
    }
  }
];

const Attractions: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  const openModal = (attraction: Attraction) => {
    setSelectedAttraction(attraction);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAttraction(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="attractions" className="attractions">
      <div className="container">
        <h2 className="section-title">Atracții Turistice</h2>
        <p className="section-subtitle">Descoperă cele mai frumoase locuri din Brașov</p>
        <div className="attractions-grid">
          {attractions.map((attraction) => (
            <div 
              key={attraction.id} 
              className="attraction-card"
              onClick={() => openModal(attraction)}
            >
              <h3 className="attraction-name">{attraction.name}</h3>
              <p className="attraction-description">{attraction.description}</p>
              <button className="attraction-details-btn">Detalii →</button>
            </div>
          ))}
        </div>
      </div>

      {selectedAttraction && (
        <div className="attraction-modal" onClick={closeModal}>
          <div className="attraction-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="attraction-modal-close" onClick={closeModal}>✕</button>
            <div className="attraction-modal-inner">
              <h2 className="attraction-modal-title">{selectedAttraction.name}</h2>
              <div className="attraction-modal-meta">
                <span className="attraction-modal-category">{selectedAttraction.category}</span>
              </div>
              <p className="attraction-modal-description">{selectedAttraction.details.fullDescription}</p>
              
              <div className="attraction-modal-info">
                <div className="attraction-modal-info-item">
                  <strong>Program</strong>
                  <p>{selectedAttraction.details.openingHours}</p>
                </div>
                <div className="attraction-modal-info-item">
                  <strong>Adresă</strong>
                  <p>{selectedAttraction.details.address}</p>
                </div>
                <div className="attraction-modal-info-item">
                  <strong>Preț</strong>
                  <p>{selectedAttraction.details.price}</p>
                </div>
              </div>

              <div className="attraction-modal-tips">
                <strong>Informații utile</strong>
                <ul>
                  {selectedAttraction.details.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Attractions;
