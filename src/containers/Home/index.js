import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';

const Home = (props) => {
  return (
    <div>
      <Header />
      this is Home!I'm {props.name}
    </div>
  )
};

const mapStateToProps = state => ({
  name: state.name
})

export default connect(mapStateToProps, null)(Home);