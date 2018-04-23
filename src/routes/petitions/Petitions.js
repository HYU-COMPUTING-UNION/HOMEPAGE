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
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Petitions.css';

class Petitions extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.petition}>
            <h1 className={s.title}>{this.props.title}</h1>
            <div className={s.info}>
              <p className={s.status}>대기</p>
              <p className={s.spacer}> | </p>
              <p className={s.branch}>카테고리</p>
              <p className={s.spacer}> | </p>
              <p className={s.date}>2018.04.12</p>
            </div>
            <h3>청원 개요</h3>
            <p>...</p>
            <div className={s.buttonWrapper}>
              <button className={s.button}>추천하기</button>
            </div>
          </div>
          <div className={s.bannerWrapper}>
            <div className={s.banner}>
              <h3>추천순 TOP 5</h3>
              <ol>
                <li>d</li>
                <li>a</li>
                <li>q</li>
                <li>w</li>
                <li>r</li>
              </ol>
            </div>
            <div className={s.banner}>
              <h3>답변된 청원</h3>
              <ul>
                <li />
                <li />
                <li />
              </ul>
            </div>
            <div className={s.banner}>
              <div className={cx(s.ad, s.button)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Petitions);
