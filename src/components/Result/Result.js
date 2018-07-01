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
import s from './Result.css';
import { Grid, Rating } from 'semantic-ui-react';

class Result extends React.Component {
  static propTypes = {
    satisfaction: PropTypes.string.isRequired,
    participants: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
  };

  render() {
    const { satisfaction, participants, budget } = this.props;
    return (
      <Grid className={s.info} textAlign='center' stackable padded>
      <Grid.Row columns={3} only='mobile'>
        <Grid.Column className={s.infoBox}>
          <p className={s.label}>참여인원</p>
          <h4 className={s.value}>{participants}</h4>
          <p className={s.mark}>명</p>
          <p className={s.subInfo}>*근사 추정치</p>
        </Grid.Column>
        <Grid.Column className={s.infoBox}>
          <p className={s.label}>결산</p>
          <h4 className={s.value}>{budget}</h4>
          <p className={s.mark}>%</p>
          <p className={s.subInfo}>*전체(학생회비 + 행정팀 지원금) 예산</p>
        </Grid.Column>
        <Grid.Column className={s.infoBox}>
          <p className={s.label}>만족도</p>
          <Rating className={s.rating} icon='star' defaultRating={3} maxRating={5} size='massive' clearable/>
          <p className={s.subInfo}>*현재 평균 {satisfaction}점</p>
        </Grid.Column>
      </Grid.Row>
        <Grid.Row columns={3} only='computer'>
          <Grid.Column className={s.infoBox}>
            <p className={s.label}>참여인원</p>
            <h4 className={s.value}>{participants}</h4>
            <p className={s.mark}>명</p>
            <p className={s.subInfo}>*근사 추정치</p>
          </Grid.Column>
          <Grid.Column className={s.infoBox}>
            <p className={s.label}>만족도</p>
            <Rating className={s.rating} icon='star' defaultRating={3} maxRating={5} size='massive' clearable/>
            <p className={s.subInfo}>*현재 평균 {satisfaction}점</p>
          </Grid.Column>
          <Grid.Column className={s.infoBox}>
            <p className={s.label}>결산</p>
            <h4 className={s.value}>{budget}</h4>
            <p className={s.mark}>%</p>
            <p className={s.subInfo}>*전체(학생회비 + 행정팀 지원금) 예산</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withStyles(s)(Result);
