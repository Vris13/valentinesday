import { useState } from 'react'
import './App.css'

function App() {
  const [noCount, setNoCount] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [heart, setHeart] = useState('💕')
  const [question, setQuestion] = useState('Will you be my Valentine?')
  const [shake, setShake] = useState(false)

  const handleYes = () => {
    setShowDetails(true)
    setHeart('❤️')
  }

  const handleNo = () => {
    const newCount = noCount + 1
    setNoCount(newCount)
    
    setShake(true)
    setTimeout(() => setShake(false), 500)

    if (newCount === 1) {
      setQuestion('Σε παρακαλώ;')
    } else if (newCount === 2) {
      setQuestion('Σε παρακαλωωω;')
    } else if (newCount === 3) {
      setQuestion('Σε παρακαλωωωωωω;')
    } else if (newCount >= 4) {
      setQuestion('Ει! Θα είσαι!')
      setHeart('😤')
    }
  }

  return (
    <div className={`container ${shake ? 'shake' : ''}`}>
      {!showDetails ? (
        <>
          <div className="heart">{heart}</div>
          <h1>{question}</h1>
          <div className="button-container">
            <button className="yes-btn" onClick={handleYes}>
              Ναι!
            </button>
            {noCount < 4 && (
              <button className="no-btn" onClick={handleNo}>
                Όχι
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="date-details">
          <div className="celebration">🎉✨💖</div>
          <h2>Τέλεια! Ανυπομονώ! 💕</h2>

          <div className="event-card">
            <h3>📍 Έξοδος 1</h3>
            <div className="detail-item">
              <strong>📅 Ημερομηνία:</strong>
              14 Φεβρουαρίου 2026
            </div>
            <div className="detail-item">
              <strong>🕐 Ώρα:</strong>
              13:30
            </div>
            <div className="detail-item">
              <strong>📍 Πού:</strong>
              Έκπληξη! 🎁
            </div>
            <div className="detail-item">
              <strong>💝 Τι να φορέσεις:</strong>
              Κάτι κομψό αλλά αρκούντως άνετο!
            </div>
            <div className="detail-item">
              <strong>📝 Σημειώσεις:</strong>
              Έλα πεινασμένη!
            </div>
          </div>

          <div className="event-card">
            <h3>📍 Έξοδος 2</h3>
            <div className="detail-item">
              <strong>📅 Ημερομηνία:</strong>
              15 Φεβρουαρίου 2026
            </div>
            <div className="detail-item">
              <strong>🕐 Ώρα:</strong>
              18:00
            </div>
            <div className="detail-item">
              <strong>📍 Πού:</strong>
              Έκπληξη! 🎁
            </div>
            <div className="detail-item">
              <strong>💝 Τι να φορέσεις:</strong>
              Τα επίσημα σου ρούχα! Θα είναι μια βραδιά γεμάτη λάμψη! ✨
            </div>
            <div className="detail-item">
              <strong>📝 Σημειώσεις:</strong>
              Έλα πνευματικά πεινασμένη!<br />
              Αναχώρηση από το σπίτι στις 17:15!
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
