import React, { useState } from 'react';
import './Restaurants.css';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  description: string;
  rating: number;
  details: {
    fullDescription: string;
    openingHours: string;
    address: string;
    priceRange: string;
    tips: string[];
  };
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Sergiana',
    cuisine: 'Tradițional Românesc',
    description: 'Specific tradițional românesc într-un decor autentic',
    rating: 4.8,
    details: {
      fullDescription: 'Sergiana este restaurantul emblematic al Brașovului pentru bucătăria tradițională românească, deschis în 1984. Cu trei locații în oraș, oferă o experiență culinară autentică într-un cadru rustic specific zonei Transilvaniei. Meniul include preparate clasice precum sarmale în foi de varză, mămăligă cu brânză și smântână, tocană de miel, cârnați de Pleșcoi și tochitura ardelenească. Restaurantul este renumit pentru porțiile generoase și ingredientele proaspete de la producători locali. Decorat cu mobilier tradițional din lemn sculptat, costume populare și instrumente muzicale vechi, Sergiana recreează atmosfera unei case țărănești transilvănene.',
      openingHours: 'Luni-Duminică: 12:00 - 23:00',
      address: 'Str. Mureșenilor nr. 28, Brașov (locația principală)',
      priceRange: '45-80 RON/persoană. Meniu complet: 60-100 RON. Rezervări recomandate weekendul.',
      tips: [
        'Specialitate recomandată: Platoul Sergiana (mix de preparate tradiționale pentru 2-3 persoane) - 150 RON',
        'Vinuri: selecție de vinuri românești din regiunile Dealu Mare, Jidvei, Murfatlar',
        'Muzică live tradițională: vineri și sâmbătă seara după ora 19:00',
        'Copii: meniu special pentru copii și zonă de joacă disponibilă',
        'Parcare: parcare privată gratuită pentru clienți la locația Mureșenilor',
        'Grup mare: rezervați cu 24h înainte pentru mese peste 8 persoane'
      ]
    }
  },
  {
    id: 2,
    name: 'Bella Musica',
    cuisine: 'Internațional',
    description: 'Atmosferă elegantă cu muzică live și bucătărie rafinată',
    rating: 4.7,
    details: {
      fullDescription: 'Bella Musica, deschis în 1996, este unul dintre cele mai rafinate restaurante din Brașov, situat într-o clădire istorică din Piața Sfatului. Restaurantul combină eleganța arhitecturii medievale cu un meniu internațional sofisticat, inspirat din bucătăria italiană, franceză și mediteraneană. Cheful Mircea Tănase, cu experiență în restaurante cu stele Michelin, creează preparate gourmet folosind tehnici culinare moderne și ingrediente premium. Restaurantul dispune de trei săli elegante (capacitate totală 120 locuri), decoruri cu lustre de cristal, mobilier antic și un piano cu coadă unde muzicieni profesioniști interpretează clasici de jazz și muzică de cameră în fiecare seară.',
      openingHours: 'Marți-Duminică: 12:00 - 00:00. Luni: închis',
      address: 'Piața Sfatului nr. 19, Centrul Istoric, Brașov',
      priceRange: '80-150 RON/persoană. Meniu degustare: 200 RON. Vinuri premium: 120-500 RON/sticlă.',
      tips: [
        'Meniu recomandat: Meniu degustare 5 feluri (200 RON) - include aperitiv, supă, fel principal, desert, cafea',
        'Specialități: Risotto cu trufe negre (95 RON), File de vită Black Angus (140 RON)',
        'Muzică live: jazz și clasici din repertoriul internațional - zilnic 19:30-22:30',
        'Dress code: smart casual - evitați ținuta sport',
        'Ocazii speciale: pachete pentru aniversări, cereri în căsătorie - contactați pentru aranjamente',
        'Rezervări obligatorii: telefon 0268-477-946 sau online pe site-ul restaurantului'
      ]
    }
  },
  {
    id: 3,
    name: 'Bistro de l\'Arte',
    cuisine: 'Mediteranean',
    description: 'Bucătărie mediteraneană în centrul istoric',
    rating: 4.6,
    details: {
      fullDescription: 'Bistro de l\'Arte este un restaurant boutique deschis în 2012, specializat în bucătăria mediteraneană cu influențe italiene, grecești și spaniole. Situat pe o stradă pietonală în inima Centrului Vechi, restaurantul oferă o atmosferă intimă și relaxată, cu o terasă exterioară în sezonul cald (30 de locuri). Meniul pune accent pe ingrediente proaspete, fructe de mare importate săptămânal, paste proaspete făcute în casă, și uleiuri de măsline extra virgin din Grecia și Italia. Chef Andrei Popescu, absolvent al Institutului de Artă Culinară din Florența, creează preparate inspirate din călătoriile sale în regiunea Mediterană. Interiorul este decorat cu opere de artă contemporană de artiști locali, care se schimbă trimestrial.',
      openingHours: 'Marți-Duminică: 11:00 - 23:00. Luni: închis',
      address: 'Str. Apollonia Hirscher nr. 4, Centrul Vechi, Brașov',
      priceRange: '60-110 RON/persoană. Paste: 45-65 RON. Fructe de mare: 80-120 RON. Vinuri: 80-300 RON/sticlă.',
      tips: [
        'Specialități recomandate: Paste carbonara cu guanciale (55 RON), Branzino la grătar (95 RON)',
        'Meniu prânz (luni-vineri 11:00-15:00): 2 feluri + desert = 50 RON',
        'Vinuri: selecție de vinuri italiene (Toscana, Piemont), grecești (Santorini) și spaniole',
        'Terasă: disponibilă aprilie-octombrie, încălzită cu lămpi infraroșii în seri răcoroase',
        'Vegetarian/vegan: opțiuni dedicat - întrebați pentru meniul zilei',
        'Parcare: P1 Piața Sfatului (5 RON/oră) sau Str. Apollonia Hirscher (parcare stradală limitată)'
      ]
    }
  },
  {
    id: 4,
    name: 'Festival 39',
    cuisine: 'Fusion',
    description: 'Experiență culinară modernă cu preparate creative',
    rating: 4.9,
    details: {
      fullDescription: 'Festival 39, deschis în 2018, este restaurantul cel mai inovator din Brașov, specializat în bucătăria fusion contemporană. Chef Cătălin Scărlătescu, finalist la competiții internaționale de gastronomy, combină tehnici culinare asiatice, europene și sud-americane pentru a crea preparate vizuale și gustative spectaculoase. Restaurantul funcționează cu un concept de "fine dining casual" - preparate de nivel înalt într-o atmosferă relaxată și prietenoasă. Meniul se schimbă sezonier (4 ori/an) pentru a reflecta ingredientele de sezon. Designul interior ultramodern combină elemente industriale (pereți din cărămidă aparentă, instalații metalice) cu accente calde (lemn, plante, iluminat ambiant). Bucătăria deschisă permite oaspeților să vizioneze echipa la lucru.',
      openingHours: 'Miercuri-Duminică: 18:00 - 00:00. Luni-Marți: închis. Brunch weekend: Sâmbătă-Duminică 10:00-14:00',
      address: 'Str. Republicii nr. 39, Brașov',
      priceRange: '90-180 RON/persoană. Meniu degustare Chef: 250 RON (7 feluri). Brunch: 65 RON. Cocktailuri: 35-55 RON.',
      tips: [
        'Experience recomandat: Meniu degustare Chef (250 RON) - 7 feluri + paleta de vinuri acordate (6 pahare mini) - durată 2.5-3 ore',
        'Signature dishes: Tuna tataki cu miso negru (85 RON), Duck confit cu cartofi trufați (110 RON)',
        'Bar: cocktailuri signature create de mixologul casei - majoritatea folosesc ingrediente infuzate in-house',
        'Brunch weekend: formula all-you-can-eat (65 RON) - include prosecco unlimited',
        'Private dining: sală separată pentru 12 persoane - ideal pentru evenimente corporate sau sărbători private',
        'Rezervări obligatorii: online pe website sau telefon 0722-345-678. Se acceptă rezervări cu max. 30 zile înainte'
      ]
    }
  },
  {
    id: 5,
    name: 'Casa Hirscher',
    cuisine: 'European',
    description: 'Restaurant elegant în cea mai veche clădire comercială din oraș',
    rating: 4.7,
    details: {
      fullDescription: 'Casa Hirscher este situată în cea mai veche clădire comercială din Brașov, construită în secolul al XV-lea în Piața Sfatului. Restaurantul oferă o experiență culinară europeană sofisticată într-un cadru arhitectural impresionant, cu bolți gotice și ferestre medievale. Bucătăria combină rețete clasice franceze și germane cu ingrediente locale premium. Interiorul păstrează elemente originale ale clădirii, inclusiv pereți din piatră aparentă și mobilier antic restaurat. Restaurantul dispune de două niveluri și o terasă cu vedere la Biserica Neagră.',
      openingHours: 'Luni-Duminică: 11:00 - 23:30',
      address: 'Piața Sfatului nr. 12, Brașov',
      priceRange: '70-140 RON/persoană. Meniu business lunch: 55 RON. Vinuri: 90-400 RON/sticlă.',
      tips: [
        'Specialitate: Cotlet de miel cu rozmarin și legume glazurate (105 RON)',
        'Terasă: vedere panoramică către Biserica Neagră - ideală pentru fotografii',
        'Business lunch (luni-vineri 12:00-15:00): supă + fel principal + cafea = 55 RON',
        'Vinuri: selecție premium din France, Germania și România',
        'Eveniment special: cină medievală tematică - prima sâmbătă din lună (195 RON/persoană)',
        'Parcare: P1 Piața Sfatului la 50m distanță'
      ]
    }
  },
  {
    id: 6,
    name: 'Dei Frati',
    cuisine: 'Italian',
    description: 'Trattoria autentică cu paste și pizza napolitană',
    rating: 4.8,
    details: {
      fullDescription: 'Dei Frati este o trattorie italiană autentică, condusă de familia Rossi din Napoli. Restaurantul s-a deschis în 2015 și a devenit rapid favoritul localnicilor pentru pizza napolitană autentică și paste proaspete făcute zilnic în casă. Cuptorul pentru pizza este importat din Italia și folosește tehnica tradițională de coacere la 485°C. Mozzarella di bufala, parmigiano reggiano și celelalte ingrediente sunt importate săptămânal din Italia. Atmosfera este caldă și familiară, cu decor rustic italian - mese din lemn masiv, fotografii alb-negru din Napoli și muzică italiană relaxantă.',
      openingHours: 'Luni-Duminică: 12:00 - 23:00',
      address: 'Str. Michael Weiss nr. 23, Brașov',
      priceRange: '40-75 RON/persoană. Pizza: 35-55 RON. Paste: 38-62 RON. Aperol Spritz: 28 RON.',
      tips: [
        'Must try: Pizza Margherita DOC (42 RON) - certificată de Associazione Verace Pizza Napoletana',
        'Paste recomandate: Cacio e pepe (45 RON), Amatriciana (48 RON) - rețete tradiționale romane',
        'Deserturi: Tiramisù autentic (28 RON), Panna cotta (25 RON) - făcute în casă',
        'Meniu copii: pizza mică + suc + înghețată = 35 RON',
        'Comanda la pachet: reducere 10% pentru comenzi takeaway',
        'Fără rezervări necesare - funcționează pe baza "first come, first served"'
      ]
    }
  },
  {
    id: 7,
    name: 'Keller Steak House',
    cuisine: 'Steakhouse',
    description: 'Casa fripturilor premium și a vinurilor fine',
    rating: 4.9,
    details: {
      fullDescription: 'Keller Steak House este destinația principală pentru iubitorii de carne din Brașov. Deschis în 2019, restaurantul este specializat în fripturi premium din carne de Black Angus, Wagyu și rasă românească. Carnea este maturată în cameră specială cu control de temperatură și umiditate (dry-aged 28-45 zile), apoi pregătită la grătar Josper cu cărbune din lemn de fag. Interiorul combină eleganța modernă cu accente masculine - piele neagră, lemn închis la culoare, iluminat discret și o vitrină refrigerată unde puteți alege bucata de carne dorită. Sommelier-ul casei vă poate recomanda vinuri roșii din colecția de peste 200 de etichete.',
      openingHours: 'Marți-Duminică: 17:00 - 00:00. Luni: închis',
      address: 'Str. Poarta Schei nr. 4, Brașov',
      priceRange: '100-250 RON/persoană. Fripturi: 120-280 RON (250-400g). Vinuri premium: 150-800 RON/sticlă.',
      tips: [
        'Signature steak: Tomahawk Black Angus 1kg dry-aged 35 zile (295 RON) - perfect pentru 2 persoane',
        'Side dishes recomandate: Cartofi fondant cu rozmarin (25 RON), Sparanghel la grătar (32 RON)',
        'Meniu lunch (marți-vineri 12:00-15:00): burger premium + cartofi + desert = 75 RON',
        'Master class: ședințe lunare de degustare carne + vinuri - 250 RON/persoană (rezervare obligatorie)',
        'Dress code: smart casual - evitați șorturi și tricouri sport',
        'Rezervări: esențiale pentru weekend - telefon 0268-555-789 sau online'
      ]
    }
  }
];

const Restaurants: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const openModal = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="restaurants" className="restaurants">
      <div className="container">
        <h2 className="section-title">Restaurante Recomandate</h2>
        <p className="section-subtitle">Savurează bucătăria locală și internațională</p>
        <div className="restaurants-grid">
          {restaurants.map((restaurant) => {
            // Generează un id unic din nume (fără diacritice, spații, litere mici)
            const cardId = `restaurant-` + restaurant.name
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/[^a-z0-9]+/g, '-');
            return (
              <div
                key={restaurant.id}
                id={cardId}
                className="restaurant-card"
                onClick={() => openModal(restaurant)}
              >
                <div className="restaurant-header">
                  <h3 className="restaurant-name">{restaurant.name}</h3>
                  <div className="restaurant-rating">
                      ★ {restaurant.rating}
                  </div>
                </div>
                <p className="restaurant-description">{restaurant.description}</p>
                <button className="restaurant-button">Vezi Detalii</button>
              </div>
            );
          })}
        </div>
      </div>

      {selectedRestaurant && (
        <div className="restaurant-modal" onClick={closeModal}>
          <div className="restaurant-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="restaurant-modal-close" onClick={closeModal}>✕</button>
            <div className="restaurant-modal-inner">
              <div className="restaurant-modal-header">
                <h2 className="restaurant-modal-title">{selectedRestaurant.name}</h2>
                <div className="restaurant-modal-meta">
                  <span className="restaurant-modal-cuisine">{selectedRestaurant.cuisine}</span>
                  <span className="restaurant-modal-rating">★ {selectedRestaurant.rating}</span>
                </div>
              </div>
              <p className="restaurant-modal-description">{selectedRestaurant.details.fullDescription}</p>
              
              <div className="restaurant-modal-info">
                <div className="restaurant-modal-info-item">
                  <strong>Program</strong>
                  <p>{selectedRestaurant.details.openingHours}</p>
                </div>
                <div className="restaurant-modal-info-item">
                  <strong>Adresă</strong>
                  <p>{selectedRestaurant.details.address}</p>
                </div>
                <div className="restaurant-modal-info-item">
                  <strong>Preț mediu</strong>
                  <p>{selectedRestaurant.details.priceRange}</p>
                </div>
              </div>

              <div className="restaurant-modal-tips">
                <strong>Informații utile</strong>
                <ul>
                  {selectedRestaurant.details.tips.map((tip, index) => (
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

export default Restaurants;
