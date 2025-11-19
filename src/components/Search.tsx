import { useState, useEffect } from 'react';
import './Search.css';

interface SearchResult {
  id: number;
  name: string;
  type: 'attraction' | 'restaurant';
  description: string;
  category: string;
}

const searchData: SearchResult[] = [
  { id: 1, name: 'Tâmpa', type: 'attraction', description: 'Muntele Tâmpa oferă priveliști spectaculoase asupra orașului.', category: 'Natură' },
  { id: 2, name: 'Strada Sforii', type: 'attraction', description: 'Una dintre cele mai înguste străzi din Europa.', category: 'Istoric' },
  { id: 3, name: 'Biserica Neagră', type: 'attraction', description: 'Cea mai mare biserică gotică din România.', category: 'Arhitectură' },
  { id: 4, name: 'Cetatea Brașov', type: 'attraction', description: 'Bastioane medievale și turnuri de apărare.', category: 'Istoric' },
  { id: 5, name: 'Piața Sfatului', type: 'attraction', description: 'Inima centrului istoric.', category: 'Centru' },
  { id: 6, name: 'Poiana Brașov', type: 'attraction', description: 'Stațiune montană perfectă pentru schi și drumeții.', category: 'Sport' },
  { id: 14, name: 'Prima Școală Românească', type: 'attraction', description: 'Muzeu istoric dedicat învățământului românesc din secolul XVI.', category: 'Cultură' },
  { id: 15, name: 'Turnul Alb și Turnul Negru', type: 'attraction', description: 'Turnuri medievale de apărare cu vedere panoramică.', category: 'Istoric' },
  { id: 7, name: 'Sergiana', type: 'restaurant', description: 'Specific tradițional românesc.', category: 'Tradițional Românesc' },
  { id: 8, name: 'Bella Musica', type: 'restaurant', description: 'Atmosferă elegantă cu muzică live.', category: 'Internațional' },
  { id: 9, name: 'Bistro de l\'Arte', type: 'restaurant', description: 'Bucătărie mediteraneană în centrul istoric.', category: 'Mediteranean' },
  { id: 10, name: 'Festival 39', type: 'restaurant', description: 'Experiență culinară modernă.', category: 'Fusion' },
  { id: 11, name: 'Casa Hirscher', type: 'restaurant', description: 'Restaurant elegant în cea mai veche clădire comercială.', category: 'European' },
  { id: 12, name: 'Dei Frati', type: 'restaurant', description: 'Trattoria autentică cu paste și pizza napolitană.', category: 'Italian' },
  { id: 13, name: 'Keller Steak House', type: 'restaurant', description: 'Casa fripturilor premium și a vinurilor fine.', category: 'Steakhouse' },
];

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenSearch = () => setIsModalOpen(true);
    window.addEventListener('openSearch', handleOpenSearch);
    return () => window.removeEventListener('openSearch', handleOpenSearch);
  }, []);

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setResults([]);
      setShowResults(false);
      return;
    }

    const normalizedSearch = normalizeText(value);

    const filtered = searchData.filter(item => {
      const normalizedName = normalizeText(item.name);
      const normalizedDesc = normalizeText(item.description);
      const normalizedCategory = normalizeText(item.category);
      
      return normalizedName.includes(normalizedSearch) || 
             normalizedDesc.includes(normalizedSearch) ||
             normalizedCategory.includes(normalizedSearch);
    });

    setResults(filtered);
    setShowResults(true);
  };

  const handleResultClick = (result: SearchResult) => {
    const sectionId = result.type === 'attraction' ? 'attractions' : 'restaurants';
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowResults(false);
    setSearchTerm('');
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSearchTerm('');
    setResults([]);
    setShowResults(false);
  };

  return (
    <>
      {isModalOpen && (
        <div className="search-modal" onClick={closeModal}>
          <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="search-modal-close" onClick={closeModal}>✕</button>
            <h2 className="search-modal-title">Caută în Brașov</h2>
            
            <div className="search-container">
              <div className="search-box">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Caută atracții, restaurante..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => searchTerm && setShowResults(true)}
                  autoFocus
                />
              </div>

              {showResults && (
                <div className="search-results">
                  {results.length > 0 ? (
                    results.map(result => (
                      <div 
                        key={result.id} 
                        className="search-result-item"
                        onClick={() => handleResultClick(result)}
                      >
                        <div className="result-content">
                          <div className="result-header">
                            <h4>{result.name}</h4>
                            <span className="result-category">{result.category}</span>
                          </div>
                          <p>{result.description}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-results">
                      <p>Nu am găsit rezultate pentru "{searchTerm}"</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <section id="search" className="search-section" style={{ display: 'none' }}>
      </section>
    </>
  );
};

export default Search;
