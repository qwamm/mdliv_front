//components/SearchComponent.js
import React from 'react';
import '../App.css'

function SearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>Магазин мерча</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Поиск товаров..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}

export default SearchComponent;