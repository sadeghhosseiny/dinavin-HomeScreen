import React from 'react';
import Card from '../../component/Card';
import Header from '../../component/header';
import SearchInput from '../../lib/SearchInput';

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
