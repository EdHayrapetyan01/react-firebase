import React, { Component } from 'react';
import Clients from '../clients/Clients';

class Dashboard extends Component {
  render () {
    return (
      <div>
        <div className="container">
          <Clients/>
        </div>
      </div>
    )
  }
}


export default Dashboard;