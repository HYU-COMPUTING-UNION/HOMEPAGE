/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Promise.css';

class Promise extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {/* <h1>{this.props.title}</h1> */}
          <section>
            {/* <h2>복지</h2> */}
            <div className={s.boxWrapper}>
              <div className={cx(s.box, s.img1)}>
                <div />
              </div>
              <div className={cx(s.box, s.img2)}>
                <div />
              </div>
              <div className={cx(s.box, s.img3)}>
                <div />
              </div>
            </div>
          </section>
          <section>
            {/* <h2>교육 및 취업</h2> */}
            <div className={s.boxWrapper}>
              <div className={cx(s.box, s.img4)}>
                <div />
              </div>
              <div className={cx(s.box, s.img5)}>
                <div />
              </div>
              <div className={cx(s.box, s.img6)}>
                <div />
              </div>
            </div>
          </section>
          <section>
            {/* <h2>소통</h2> */}
            <div className={s.boxWrapper}>
              <div className={cx(s.box, s.img7)}>
                <div />
              </div>
              <div className={cx(s.box, s.img8)}>
                <div />
              </div>
              <div className={cx(s.box, s.img9)}>
                <div />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Promise);
