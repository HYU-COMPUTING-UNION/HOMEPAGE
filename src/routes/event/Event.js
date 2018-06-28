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
import s from './Event.css';
import { Header, Grid, Segment, Image } from 'semantic-ui-react';
import image from './image.png';

class Event extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Grid>
            <Grid.Column width={4}>
              <Segment basic>
                <Header as='h1'>행사 목록</Header>
                <Header as='h2'>소융대</Header>
                <Header as='h2'>대외활동</Header>
                <Header as='h2'>공모전</Header>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment basic className={s.marginTop}>
                <Image src={image} size='small' className={s.imageShadow}/>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Event);
