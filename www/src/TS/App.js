import React from 'react';
import NavBar from './component/nav-bar';
import SearchBar from './component/search-bar';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Login from './page/login';

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={SearchBar} />
                    <Route path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;