import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'
import Collapse from './components/Collapse'

function App() {
    return (
        <div>
            <div className="card-group">
                <Collapse collapseID="collapseExample1">
                    <Card cardTitle="Samsunspor" />
                </Collapse>
                <Collapse collapseID="collapseExample2">
                    <Card cardTitle="Fenerbahçe" />
                </Collapse>
                <Collapse collapseID="collapseExample3">
                    <Card cardTitle="Bucaspor" />
                </Collapse>
            </div>
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);