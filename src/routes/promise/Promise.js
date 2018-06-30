/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Promise.css';
import { Grid, Segment } from 'semantic-ui-react';

class Promise extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {/* <h1>{this.props.title}</h1> */}
          <Segment basic>
          <Grid columns='three' padded textAlign='center' stackable>
            <Grid.Row>
              {/* <h2>복지</h2> */}
              <Grid.Column>
                <div className={cx(s.box, s.img1)}/>
              </Grid.Column>
              <Grid.Column>
                <div className={cx(s.box, s.img2)}/>
              </Grid.Column>
              <Grid.Column>
                <div className={cx(s.box, s.img3)}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              {/* <h2>교육 및 취업</h2> */}
              <Grid.Column>
                <div className={cx(s.box, s.img4)}/>
              </Grid.Column>
              <Grid.Column>
                <div className={cx(s.box, s.img5)}/>
              </Grid.Column>
              <Grid.Column>
                <div className={cx(s.box, s.img6)}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              {/* <h2>소통</h2> */}
              <Grid.Column>
                <div className={cx(s.box, s.img7)}/>
              </Grid.Column>
              <Grid.Column>
                <div className={cx(s.box, s.img8)}/>
              </Grid.Column>
              <Grid.Column>
                <div className={cx(s.box, s.img9)}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Segment>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Promise);
