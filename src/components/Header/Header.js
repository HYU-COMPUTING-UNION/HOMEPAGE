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
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo.jpeg';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img src={logoUrl} width="57" height="38" alt="BE:US" />
          </Link>
          <div className={s.banner}>
            {/* <h1 className={s.bannerTitle}>React</h1>
            <p className={s.bannerDesc}>Complex web apps made easy</p> */}
            <Link className={s.link} to="/promise">
              공약
            </Link>
            <p>·</p>
            <Link className={s.link} to="">
              소융청원
            </Link>
            <p>·</p>
            <Link className={s.link} to="">
              대여사업
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
