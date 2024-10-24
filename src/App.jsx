import './css/cardContainer.css';
import Navigation from './components/Navigation.jsx';
import DisplayComponent from './components/DisplayComponent.jsx';
import { useState } from 'react';

function App() {
    const [ activePage, setActivePage] = useState('Home');

    function handlePageChange(page) {
        setActivePage(page);
    }
    return (
        <>
            <div className="cardBackground">
                    <Navigation activePage={activePage} handlePageChange={handlePageChange}/>
                <div className="cardContent">
                    <DisplayComponent activePage={activePage}/>
                </div>
            </div>
        </>
    )
}

export default App;
