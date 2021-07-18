import React from 'react';
import Card from '../../component/Card/Card';
import Header from '../../component/header/header';
import SearchInput from '../../lib/SearchInput/SearchInput';

function HomeScreen() {
    return (
        <div>
            <Header />
            <SearchInput />
            <Card />
        </div>
    );
}

export default HomeScreen;
