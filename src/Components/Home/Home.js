// @flow
import React, { Component } from 'react';
import { observer }         from 'mobx-react';
// import { Link }             from 'react-router-dom';

/** Stylesheets **/
import './Home.css';

type State = {

}
type Props = {
  api: any
}

@observer
class Home extends Component {
  state: State;
  props: Props;
  constructor() {
    super();
    console.log("HI");
  }

  render() {
    const { api } = this.props;

    console.log("PROPS", this.props);

    return (
      <div className="Home">
        THIS IS HOME
      </div>
    );
  }
}

export default Home;
