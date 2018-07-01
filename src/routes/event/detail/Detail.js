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
import privacy from './privacy.md';
import { Grid, Image, Header, Rating, Responsive } from 'semantic-ui-react';
import a from './1.jpg';
import b from './2.png';

class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'Build',
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
            <Header as='h1' inverted>2018 소융 학술제</Header>
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
              <ul>
                <div className={s.line}/>
                <li className={s.item}>
                  <div className={s.date}>06.09</div>
                  <div className={s.content}>기획 시작</div>
                </li>
                <li className={s.item}>
                  <div className={s.date}>06.11</div>
                  <div className={s.content}>홍보 시작</div>
                </li>
                <li className={s.item}>
                  <div className={s.date}>06.18</div>
                  <div className={s.content}>행사 당일</div>
                </li>
                <li className={s.item}>
                  <div className={s.date}>06.20</div>
                  <div className={s.content}>후기 작성</div>
                </li>
              </ul>
            }
            { tab === 'Debug' &&
              <Grid className={s.info} textAlign='center' stackable padded>
                <Grid.Row columns={3}>
                  <Grid.Column className={s.infoBox}>
                    <p className={s.label}>참여인원</p>
                    <h4 className={s.value}>49</h4>
                    <p className={s.mark}>명</p>
                    <p className={s.subInfo}>*근사 추정치</p>
                  </Grid.Column>
                  <Grid.Column className={s.infoBox}>
                    <p className={s.label}>만족도</p>
                    <Rating className={s.rating} icon='star' defaultRating={3} maxRating={5} size='massive' clearable/>
                    {/*<h4 className={s.value}>3.4</h4>
                    <p className={s.mark}>점</p>*/}
                    <p className={s.subInfo}>*현재 평균 4.2점</p>
                  </Grid.Column>
                  <Grid.Column className={s.infoBox}>
                    <p className={s.label}>결산</p>
                    <h4 className={s.value}>13.4</h4>
                    <p className={s.mark}>%</p>
                    <p className={s.subInfo}>*학생회비 예산</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Detail);
