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
import s from './Rent.css';
import { Grid, Image, Icon, Segment } from 'semantic-ui-react';
import helen from './helen.jpg';
import jenny from './jenny.jpg';
import joe from './joe-2.jpg';
import elliot from './elliot-2.jpg';
import justen from './justen.jpg';
import Link from '../../components/Link';

class Rent extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
        <Segment basic>
          <h1 className={s.inline}>배터리 대여현황</h1>
          <p className={s.left}>관리</p>
          <Grid textAlign='center' columns={5}>
            <Grid.Row>
              <Grid.Column>
                <p className={s.number}>1</p>
                <Image className={s.margin} circular src={helen} />
              </Grid.Column>
              <Grid.Column>
                <p className={s.number}>2</p>
                <Image className={s.margin} circular src={jenny} />
              </Grid.Column>
              <Grid.Column>
                <p className={s.number}>3</p>
                <Image className={s.margin} circular src={joe} />
              </Grid.Column>
              <Grid.Column>
                <p className={s.number}>4</p>
                <Link to='/rent/write'>
                  <Icon name='circle thin' size='huge'/>
                </Link>
              </Grid.Column>
              <Grid.Column>
                <p className={s.number}>5</p>
                <Image className={s.margin} circular src={elliot} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <p className={s.number}>6</p>
                <Image className={s.margin} circular src={justen} />
              </Grid.Column>
              <Grid.Column>
                <p className={s.number}>7</p>
                <Image className={s.margin} circular src={joe} />
              </Grid.Column>
              <Grid.Column>
                <p className={s.number}>8</p>
                <Icon name='delete' size='huge'/>
              </Grid.Column>
              <Grid.Column>
                <p className={s.number}>9</p>
                <Image className={s.margin} circular src={jenny} />
              </Grid.Column>
              <Grid.Column>
                <p className={s.number}>10</p>
                <Image className={s.margin} circular src={helen} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <h1>우산 대여현황</h1>
        </Segment>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Rent);
