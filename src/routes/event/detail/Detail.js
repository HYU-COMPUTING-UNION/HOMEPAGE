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
import s from './Detail.css';
import background from './background.mp4';
import Page from '../../../components/Page';
import privacy from './privacy.md';

class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'Build',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ tab: e.target.textContent});
  }

  render() {
    const { tab } = this.state;
    return (
      <div>
        <div className={s.headBanner}>
          <div className={s.videoWrapper}>
            <div className={s.cover}/>
            <h1>2018 소융 학술제</h1>
            <video height="240" width="100%" src={background} autoPlay loop muted/>
          </div>
        </div>
        <div className={s.root}>
          <div className={s.container}>
            <div className={s.tab}>
              <h2 onClick={this.handleClick} className={tab === 'Build' ? s.active : ''}>Build</h2>
              <h2 onClick={this.handleClick} className={tab === 'Compile' ? s.active : ''}>Compile</h2>
              <h2 onClick={this.handleClick} className={tab === 'Debug' ? s.active : ''}>Debug</h2>
            </div>
            { tab === 'Build' &&
              <Page {...privacy} />
            }
            { tab === 'Compile' &&
              <p>{tab}</p>
            }
            { tab === 'Debug' &&
              <p>{tab}</p>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Detail);
