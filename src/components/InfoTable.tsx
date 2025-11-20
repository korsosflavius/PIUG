import './InfoTable.css';

interface InfoItem {
  location: string;
  schedule: string;
  price: string;
  duration: string;
}

const infoData: InfoItem[] = [
  {
    location: 'Telecabina Tâmpa',
    schedule: 'Martie-Noiembrie: 09:30-19:00,\nDecembrie-Februarie: 09:30-17:00,\nÎnchis Luni',
    price: '45 RON dus-întors',
    duration: '2-3 ore'
  },
  {
    location: 'Biserica Neagră',
    schedule: 'Aprilie-Octombrie: 10:00-18:00,\nNoiembrie-Martie: 10:00-15:30,\nDuminică: 12:00-18:00',
    price: '20 RON',
    duration: '1 oră'
  },
  {
    location: 'Cetatea Brașov - Bastionul Țesătorilor',
    schedule: 'Marți-Duminică: 10:00-18:00,\nÎnchis Luni',
    price: '10 RON',
    duration: '45 minute'
  },
  {
    location: 'Piața Sfatului',
    schedule: 'Acces permanent 24/7',
    price: 'Gratuit',
    duration: '1-2 ore'
  },
  {
    location: 'Muzeul de Istorie - Casa Sfatului',
    schedule: 'Marți-Duminică: 10:00-18:00,\nÎnchis Luni',
    price: '15 RON',
    duration: '1 oră'
  },
  {
    location: 'Strada Sforii',
    schedule: 'Acces permanent 24/7',
    price: 'Gratuit',
    duration: '10 minute'
  },
  {
    location: 'Poiana Brașov',
    schedule: 'Sezon Schi (Decembrie-Martie): 09:00-16:30,\nVară: Activități variate',
    price: 'Skipass de la 150 RON',
    duration: 'Zi întreagă'
  },
  {
    location: 'Prima Școală Românească',
    schedule: 'Marți-Duminică: 10:00-18:00,\nÎnchis Luni',
    price: '8 RON',
    duration: '30 minute'
  },
  {
    location: 'Turnul Alb și Turnul Negru',
    schedule: 'Mai-Octombrie: 10:00-17:00',
    price: 'Gratuit',
    duration: '1-1.5 ore'
  },
  {
    location: 'Poarta Ecaterinei',
    schedule: 'Acces permanent 24/7 (exterior)',
    price: 'Gratuit',
    duration: '15 minute'
  }
];

const InfoTable: React.FC = () => {
  return (
    <section id="info-table" className="info-table-section">
      <div className="container">
        <h2 className="section-title">Informații Utile</h2>
        <p className="section-subtitle">Program, prețuri și durata vizitelor</p>
        
        <div className="table-container">
          <table className="info-table">
            <thead>
              <tr>
                <th>Locație</th>
                <th>Program</th>
                <th>Preț</th>
                <th>Durată Vizită</th>
              </tr>
            </thead>
            <tbody>
              {infoData.map((item, index) => (
                <tr key={index}>
                  <td data-label="Locație">
                    <strong>{item.location}</strong>
                  </td>
                  <td data-label="Program">{item.schedule}</td>
                  <td data-label="Preț">
                    <span className="price">{item.price}</span>
                  </td>
                  <td data-label="Durată">{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="info-note">
          <p><strong>Notă:</strong> Prețurile prezentate sunt orientative și se pot modifica în timp. Vă recomandăm să verificați tarifele actuale pe site-urile oficiale ale obiectivelor turistice înainte de vizită.</p>
        </div>
      </div>
    </section>
  );
};

export default InfoTable;
