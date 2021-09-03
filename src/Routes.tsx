import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route />
            </Switch>
        </Router>
    );
};
export default Routes;
