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
import s from './Timeline.css';

class Timeline extends React.Component {
  render() {
    const { timelineData } = this.props;
    return (
      <ul>
        <div className={s.line}/>
        {timelineData.map((data, i)=>
          {
            return (
              <li className={s.item} key={i}>
                <div className={s.date}>{data.date}</div>
                <div className={s.content}>{data.content}</div>
              </li>
            );
          }
        )}
      </ul>
    );
  }
}

export default withStyles(s)(Timeline);
