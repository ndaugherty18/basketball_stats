import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/game';

@connect(
  dispatch => bindActionCreators({load}, dispatch)
)

const load = this.props
const CurrentGame = (props) => {
  const {name} = props;
}

CurrentGame.propTypes = {
  name: React.PropTypes.string
}
