import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {resetState} from "./redux/action";

import Header from "./components/header/header.component";
import PostPage from "./components/posts/post-page.jsx";


import './App.scss';

class App extends Component {

  constructor(props){
    super(props);

    this.state= {
      posts: [],
      isOpenModal: false
    }
  }

  componentWillUnmount() {
    const {resetState} = this.props;

    resetState();

  }

  render () {
    return (
      <div className="App">
        <Header  />
        <Switch>
          <Route exact path='/' component= {PostPage} />
          <Route path='/post'component= { PostPage } />
          <Route path='/category' component= {PostPage} />
        </Switch>
       
      </div>
    );
  } 
}

const mapDispatchToProps = dispatch => ({
  resetState: () => dispatch(resetState()),
})



export default connect(null, mapDispatchToProps)(App);
