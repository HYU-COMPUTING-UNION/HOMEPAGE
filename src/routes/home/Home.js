/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Link from '../../components/Link';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.p_box}>
            <h2>
              여러분의 불편한 점들, 개선할 점들, 해줬으면 하는 점들 알려주세요.
            </h2>
            <p>
              여러분들이 작성한 소중한 의견들 모두 검토 후 답변을
              남겨드리겠습니다.
            </p>
            <Link to="/petitions/write">
              <button className={s.button}>청원 작성하기</button>
            </Link>
          </div>
          <h1>청원 목록</h1>
          <Link to="/petitions">
            <div className={s.ask}>
              <div>
                <p className={s.status}>대기</p>
                <span className={s.spacer}> | </span>
                <p className={s.branch}>분류</p>
                <span className={s.spacer}> | </span>
                <p className={s.date}>2018.04.12</p>
              </div>
              <h2 className={s.title}>청원 제목</h2>
            </div>
          </Link>
          <div className={s.ask}>
            <p className={s.status}>진행</p>
            <span className={s.spacer}> | </span>
            <p className={s.branch}>분류</p>
            <span className={s.spacer}> | </span>
            <p className={s.date}>2018.04.12</p>
            <h2 className={s.title}>청원 제목</h2>
          </div>
          <h1>답변된 청원</h1>
          <div className={s.ask}>
            <p className={s.status}>완료</p>
            <span className={s.spacer}> | </span>
            <p className={s.branch}>분류</p>
            <span className={s.spacer}> | </span>
            <p className={s.date}>2018.04.12</p>
            <h2 className={s.title}>청원 제목</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
