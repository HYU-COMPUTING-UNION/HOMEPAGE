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
            <a className={s.google} href="/login/google">
              <svg
                className={s.icon}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={
                    'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' +
                    '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' +
                    '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' +
                    '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' +
                    '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' +
                    '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' +
                    '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' +
                    '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z'
                  }
                />
              </svg>
              <span>Log in with Google</span>
            </a>
          </div>
          <div className={s.formGroup}>
            <a className={s.kakao} href="/login/kakao">
              <svg
                className={s.icon}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="translate(0.000000,35.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d={
                      'M105 275 c-40 -21 -55 -43 -55 -80 0 -21 9 -40 26 -55 18 -18 23 -31 ' +
                      '19 -48 -6 -23 -5 -23 22 -8 15 8 45 17 65 21 21 3 51 17 68 31 91 77 -34 196 ' +
                      '-145 139z'
                    }
                  />
                </g>
              </svg>
              <span className={s.kakaoText}>Log in with Kakao</span>
            </a>
          </div>
          <div className={s.formGroup}>
            <a className={s.naver} href="/login/naver">
              <svg
                className={s.icon}
                width="30"
                height="30"
                viewBox="0 0 340.000000 340.000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  stroke="none"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeDasharray="none"
                  strokeLinejoin="miter"
                  strokeLinecap="butt"
                  strokeDashoffset=""
                  fillRule="nonzero"
                  opacity="1"
                  markerStart=""
                  markerMid=""
                  markerEnd=""
                  d={
                    'M 84.62499492429204 92.12499481253333 L 84.6875 247.5 L ' +
                    '141.5625 247.5 L 142.5 168.125 L 195.9375 247.1875 L ' +
                    '254.6875 247.5 L 254.375 92.1875 L 196.25 92.1875 L ' +
                    '196.5625 173.4375 L 142.8125 92.5 L 84.62499492429204 ' +
                    '92.12499481253333 z'
                  }
                />
              </svg>
              <span>Log in with Naver</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
