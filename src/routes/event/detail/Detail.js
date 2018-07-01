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
import s from './Detail.css';
import background from './background.mp4';
import Page from '../../../components/Page';
import Result from '../../../components/Result';
import Timeline from '../../../components/Timeline';
import privacy from './privacy.md';
import { Grid, Image, Header, Rating, Responsive } from 'semantic-ui-react';
import a from './1.jpg';
import b from './2.png';

class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'Build',
      timelineData: [
        {date: '06.09', content: '기획 시작'},
        {date: '06.11', content: '홍보 시작'},
        {date: '06.18', content: '행사 당일'},
        {date: '06.20', content: '후기 작성'},
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ tab: e.target.textContent});
  }

  render() {
    const { tab } = this.state;
    return (
      <div>
        <div className={s.headBanner}>
          <div className={s.videoWrapper}>
            <div className={s.cover}/>
            <Header as='h1' inverted>1학기 기말 야식사업</Header>
            <video height="240" width="100%" src={background} autoPlay loop muted/>
          </div>
        </div>
        <div className={s.root}>
          <div className={s.container}>
            <Responsive
              {...Responsive.onlyMobile}
              as={() =>
                <div className={s.mobileTab}>
                  <h2 onClick={this.handleClick} className={tab === 'Build' ? s.active : ''}>Build</h2>
                  <h2 onClick={this.handleClick} className={tab === 'Compile' ? s.active : ''}>Compile</h2>
                  <h2 onClick={this.handleClick} className={tab === 'Debug' ? s.active : ''}>Debug</h2>
                </div>
              }
            />
            <Responsive
              as={() => 
                <div className={s.tab}>
                  <h2 onClick={this.handleClick} className={tab === 'Build' ? s.active : ''}>Build</h2>
                  <h2 onClick={this.handleClick} className={tab === 'Compile' ? s.active : ''}>Compile</h2>
                  <h2 onClick={this.handleClick} className={tab === 'Debug' ? s.active : ''}>Debug</h2>
                </div>
              }
              minWidth={Responsive.onlyTablet.minWidth}
            />
            { tab === 'Build' &&
              <Grid stackable>
                <Grid.Column width={7} textAlign='center'>
                  <Image className={s.marginTop} src={a} size='medium' bordered rounded/>
                  {/*<Image src={b} size='medium' bordered rounded/>*/}
                </Grid.Column>
                <Grid.Column width={9}>
                  <Page {...privacy} />
                </Grid.Column>
              </Grid>
            }
            { tab === 'Compile' &&
              <Timeline timelineData={this.state.timelineData}/>
            }
            { tab === 'Debug' &&
              <Result satisfaction='4.2' participants='49' budget='13.4'/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Detail);
