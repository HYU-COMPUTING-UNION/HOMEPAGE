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
  };

  render() {
    const { title, subData } = this.props;
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
            {subData.map((data, i)=>
              {
                return(
                  <Grid.Column className={s.infoBox} key={i}>
                    <p className={s.label}>{data.subtitle}</p>
                    <h4 className={s.value}>{data.content}</h4>
                    <p className={s.mark}>{data.mark}</p>
                  </Grid.Column>
                );
              }
            )}
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default withStyles(s)(EventCard);
