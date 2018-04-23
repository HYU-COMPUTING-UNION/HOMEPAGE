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
import s from './Login.css';
import naver from './naver.jpg';
import kakao from './kakao.png';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p className={s.lead}>SNS 간편 로그인</p>
          <div className={s.formGroup}>
            <a className={s.facebook} href="/login/facebook">
              <svg
                className={s.icon}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z" />
              </svg>
              <span>Log in with Facebook</span>
            </a>
          </div>
          <div className={s.formGroup}>
            <a className={s.naver} href="/login/naver">
              <span>Log in with Naver</span>
            </a>
          </div>
          <div className={s.formGroup}>
            <a className={s.kakao} href="/login/kakao">
              <span>Log in with Kakao</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
