import React from 'react';
import { Button } from 'semantic-ui-react';
import './Ads.css';

function Ads() {
    return (
        <div className="ads">
            <h3>Get Splitwise Pro</h3>
            <img src="https://assets.splitwise.com/assets/pro/logo-337b1a7d372db4b56c075c7893d68bfc6873a65d2f77d61b27cb66b6d62c976c.svg" alt="" />
            <p>Subscribe to Splitwise Pro for no ads, currency conversion, charts, search, and more.</p>
            <Button color="orange">Learn More</Button>
        </div>
    )
}

export default Ads
