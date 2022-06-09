import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'

function App() {
    return (
        <div>
            <div className="card-group">
                <Card cardTitle="Samsunspor"/>

                <Card cardTitle="Fenerbahçe"/>

                <Card cardTitle="Bucaspor"/>
            </div>
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);