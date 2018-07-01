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
import s from './EventCard.css';
import { Segment, Image, Grid } from 'semantic-ui-react';

class EventCard extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    participants: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
  };

  render() {
    const { title, period, participants, budget } = this.props;
    return (
      <Segment basic className={s.box}>
        <div className={s.imageContainer}>
          <div className={s.image}>
            <div className={s.imageCover}>
            </div>
          </div>
          <div className={s.text}>
            <p>{title}</p>
          </div>
        </div>
        <Grid className={s.info}>
          <Grid.Row columns={3}>
            <Grid.Column className={s.infoBox}>
              <p className={s.label}>행사 기간</p>
              <h4 className={s.value}>{period}</h4>
            </Grid.Column>
            <Grid.Column className={s.infoBox}>
              <p className={s.label}>참여자</p>
              <h4 className={s.value}>{participants}</h4>
              <p className={s.mark}>명</p>
            </Grid.Column>
            <Grid.Column className={s.infoBox}>
              <p className={s.label}>예산 비율</p>
              <h4 className={s.value}>{budget}</h4>
              <p className={s.mark}>%</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default withStyles(s)(EventCard);
