import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'
import Collapse from './components/Collapse'

function App() {
    return (
        <div>
            <div className="card-group">
                <Collapse collapseID="collapseExample1">
                    <Card 
                    cardTitle="Samsunspor" 
                    cardText="Lorem Ipsum I"
                    cardTime="Updated 1 min ago"
                    image="https://picsum.photos/id/1/200/300"
                    />
                </Collapse>
                <Collapse collapseID="collapseExample2">
                    <Card 
                    cardTitle="Fenerbahçe"
                    cardText="Lorem Ipsum II"
                    cardTime="Updated 2 min ago"
                    image="https://picsum.photos/id/10/200/300" 
                    />
                </Collapse>
                <Collapse collapseID="collapseExample3">
                    <Card 
                    cardTitle="Bucaspor"
                    cardText="Lorem Ipsum III"
                    cardTime="Updated 3 min ago"
                    image="https://picsum.photos/id/100/200/300" 
                    />
                </Collapse>
            </div>
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);