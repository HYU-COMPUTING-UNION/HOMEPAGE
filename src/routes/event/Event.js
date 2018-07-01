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
import Link from '../../components/Link';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subData: [
        {subtitle: '행사기간', content: '1', mark: ''},
        {subtitle: '참여자', content: '123', mark: '명'},
        {subtitle: '예산비율', content: '12.5', mark: '%'},
      ],
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Grid stackable>
            <Grid.Column width={4}>
              <Segment basic className={s.header}>
                <Header as="h1">행사 목록</Header>
                <Header as="h2" className={s.active}>
                  <a href='#'>소융대</a>
                </Header>
                <Header as="h2">
                  <a href='#'>대외활동</a>
                </Header>
                <Header as="h2">
                  <a href='#'>공모전</a>
                </Header>
              </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
              <Grid>
                <Grid.Row columns={1} only='mobile'>
                  <Grid.Column className={s.boxMargin}>
                    <Link className={s.link} to='/event/detail'>
                      <EventCard 
                        title='1학기 기말 야식사업'
                        subData={this.state.subData}
                      />
                    </Link>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <Link className={s.link} to='/event/detail'>
                      <EventCard 
                        title='1학기 기말 야식사업'
                        subData={this.state.subData}
                      />
                    </Link>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <Link className={s.link} to='/event/detail'>
                      <EventCard 
                        title='1학기 기말 야식사업'
                        subData={this.state.subData}
                      />
                    </Link>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <Link className={s.link} to='/event/detail'>
                      <EventCard 
                        title='1학기 기말 야식사업'
                        subData={this.state.subData}
                      />
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid className={s.marginTop}>
                <Grid.Row columns={3} only='computer'>
                  <Grid.Column className={s.boxMargin}>
                    <Link className={s.link} to='/event/detail'>
                      <EventCard 
                        title='1학기 기말 야식사업'
                        subData={this.state.subData}
                      />
                    </Link>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <Link className={s.link} to='/event/detail'>
                      <EventCard 
                        title='1학기 기말 야식사업'
                        subData={this.state.subData}
                      />
                    </Link>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <Link className={s.link} to='/event/detail'>
                      <EventCard 
                        title='1학기 기말 야식사업'
                        subData={this.state.subData}
                      />
                    </Link>
                  </Grid.Column>
                  <Grid.Column className={s.boxMargin}>
                    <Link className={s.link} to='/event/detail'>
                      <EventCard 
                        title='1학기 기말 야식사업'
                        subData={this.state.subData}
                      />
                    </Link>
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
