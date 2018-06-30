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
import { Header, Grid, Segment, Image, Statistic } from 'semantic-ui-react';
import image from './image.png';
import EventCard from '../../components/EventCard';

class Event extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Grid stackable>
            <Grid.Column width={4}>
              <Segment basic>
                <Header as="h1">행사 목록</Header>
                <Header as="h2">소융대</Header>
                <Header as="h2">대외활동</Header>
                <Header as="h2">공모전</Header>
              </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
              <Grid>
                <Grid.Row columns={1} only='mobile'>
                  <Grid.Column className={s.boxMargin}>
                    <EventCard period='3.2' participants='532' budget='12.5'/>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <EventCard period='3.2' participants='532' budget='12.5'/>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <EventCard period='3.2' participants='532' budget='12.5'/>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <EventCard period='3.2' participants='532' budget='12.5'/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid className={s.marginTop}>
                <Grid.Row columns={3} only='computer'>
                  <Grid.Column className={s.boxMargin}>
                    <EventCard period='3.2' participants='532' budget='12.5'/>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <EventCard period='3.2' participants='532' budget='12.5'/>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <EventCard period='3.2' participants='532' budget='12.5'/>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <EventCard period='3.2' participants='532' budget='12.5'/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Event);
