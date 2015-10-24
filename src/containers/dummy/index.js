import React from 'react';

class Dummy extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Dummy';
    }
    render() {
        return <div>
        	<h2>Dummy content!</h2>
        	<p>I am just a dummy content page</p>
        </div>;
    }
}

export default Dummy;
