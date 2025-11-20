import { useState } from 'react';
import './HelpButton.css';

const HelpButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <button 
        className="help-button"
        onClick={openModal}
        aria-label="Help"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 17V17.01M12 14C12 13.5 12.5 13 13 12.5C13.5 12 14 11.5 14 10.5C14 9.67157 13.3284 9 12.5 9C11.6716 9 11 9.67157 11 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className="help-modal">
          <div className="help-content">
            <button 
              className="help-close"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="help-content-inner">
              <h3>Ajutor</h3>
              <div className="help-section">
                <h4>Navigare</h4>
                <p>Folosește meniul din partea de sus pentru a accesa rapid diferite secțiuni ale site-ului.</p>
              </div>
              <div className="help-section">
                <h4>Căutare</h4>
                <p>Click pe iconița <svg style={{display: 'inline', verticalAlign: 'middle', marginLeft: '4px', marginRight: '4px'}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><path d="m22 22-5.5-5.5"></path></svg> din bara de navigație pentru a căuta rapid atracții sau restaurante.</p>
              </div>
              <div className="help-section">
                <h4>Contact</h4>
                <p>Pentru întrebări, completează formularul de contact. Vom răspunde în maxim 24h.</p>
              </div>
              <div className="help-section">
                <h4>Schimbă tema</h4>
                <p>Click pe iconița <svg style={{display: 'inline', verticalAlign: 'middle', marginLeft: '4px', marginRight: '2px'}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>/<svg style={{display: 'inline', verticalAlign: 'middle', marginLeft: '2px', marginRight: '4px'}} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> din meniu pentru a comuta între modul întunecat și luminos.</p>
              </div>
              <div className="help-section">
                <h4>Buton înapoi sus</h4>
                <p>Apasă butonul din colțul din dreapta jos pentru a reveni rapid în partea de sus a paginii.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpButton;
