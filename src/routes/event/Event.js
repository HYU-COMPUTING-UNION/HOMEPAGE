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

class Event extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Grid>
            <Grid.Column width={4}>
              <Segment basic>
                <Header as="h1">행사 목록</Header>
                <Header as="h2">소융대</Header>
                <Header as="h2">대외활동</Header>
                <Header as="h2">공모전</Header>
              </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
              <Grid className={s.marginTop}>
                <Grid.Row columns={3}>
                  <Grid.Column className={s.boxMargin}>
                    <Segment basic className={s.box}>
                    <Image src={image} className={s.image} size="big"/>
                    <Grid className={s.info}>
                      <Grid.Row columns={3}>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>행사 기간</p>
                          <h4 className={s.value}>3.2</h4>
                        </Grid.Column>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>참여자</p>
                          <h4 className={s.value}>532</h4>
                          <p className={s.mark}>명</p>
                        </Grid.Column>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>예산 비율</p>
                          <h4 className={s.value}>12.5</h4>
                          <p className={s.mark}>%</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment basic className={s.box}>
                    <Image src={image} className={s.image} size="big"/>
                    <Grid className={s.info}>
                      <Grid.Row columns={3}>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>행사 기간</p>
                          <h4 className={s.value}>3.2</h4>
                        </Grid.Column>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>참여자</p>
                          <h4 className={s.value}>532</h4>
                          <p className={s.mark}>명</p>
                        </Grid.Column>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>예산 비율</p>
                          <h4 className={s.value}>12.5</h4>
                          <p className={s.mark}>%</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment basic className={s.box}>
                    <Image src={image} className={s.image} size="big"/>
                    <Grid className={s.info}>
                      <Grid.Row columns={3}>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>행사 기간</p>
                          <h4 className={s.value}>3.2</h4>
                        </Grid.Column>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>참여자</p>
                          <h4 className={s.value}>532</h4>
                          <p className={s.mark}>명</p>
                        </Grid.Column>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>예산 비율</p>
                          <h4 className={s.value}>12.5</h4>
                          <p className={s.mark}>%</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment basic className={s.box}>
                    <Image src={image} className={s.image} size="big"/>
                    <Grid className={s.info}>
                      <Grid.Row columns={3}>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>행사 기간</p>
                          <h4 className={s.value}>3.2</h4>
                        </Grid.Column>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>참여자</p>
                          <h4 className={s.value}>532</h4>
                          <p className={s.mark}>명</p>
                        </Grid.Column>
                        <Grid.Column className={s.infoBox}>
                          <p className={s.label}>예산 비율</p>
                          <h4 className={s.value}>12.5</h4>
                          <p className={s.mark}>%</p>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                    </Segment>
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
