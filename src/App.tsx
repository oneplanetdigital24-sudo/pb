import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import DataCollectionForm from './components/DataCollectionForm';

function App() {
  const [selectedLAC, setSelectedLAC] = useState<string | null>(null);

  const handleSelectLAC = (lac: string) => {
    setSelectedLAC(lac);
  };

  const handleBack = () => {
    setSelectedLAC(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex flex-col">
      <Header />
      {selectedLAC ? (
        <DataCollectionForm lac={selectedLAC} onBack={handleBack} />
      ) : (
        <HomePage onSelectLAC={handleSelectLAC} />
      )}
      <Footer />
    </div>
  );
}

export default App;
