/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    viewer: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    viewer: null,
  };

  render() {
    const { viewer } = this.props;

    return (
      <div className={s.root}>
        {viewer ? <div>Hi, {viewer.id}</div> : <div>Home</div>}
      </div>
    );
  }
}

export default withStyles(s)(Home);
