import React from 'react';

import { Switch, Route} from 'react-router-dom';

import Fatosmilitares from '../pages/fatosmilitares';
import Mymeal from '../pages/mymeal';

const Routes: React.FC= () => (
    <Switch>
        <Route path="/" exact component= {Fatosmilitares} />
        <Route path="/mymeal" component={Mymeal} />
    </Switch>
);
export default Routes;
