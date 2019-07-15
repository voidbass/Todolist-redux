import React from 'react';

import './App.css';
import FormNote from './formNote';
import ListNote from './listNote';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="titleApp">
                        <div className="container flex">
                            <i className="far fa-clipboard"></i>
                            <span>NoteWorx</span>
                        </div>
                    </div>
                </div>
                <br/>
                <FormNote></FormNote>
                <ListNote></ListNote>
            </div>
        );
    }
}

export default App;
