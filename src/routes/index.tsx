import React from 'react';

import { Switch, Route} from 'react-router-dom';

import Iss from '../pages/iss';
import Animal from '../pages/animal';
//import Api from '../services';

const Routes: React.FC= () => (
    <Switch>
        <Route path="/" exact component= {Iss} />
        <Route path="/animal/:animal+" component={Animal} />
    </Switch>
);
export default Routes;
