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
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo.jpeg';
import { Icon, Segment, Responsive } from 'semantic-ui-react';

class Header extends React.Component {
  static propTypes = {
    viewer: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    viewer: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleVisbility = this.toggleVisbility.bind(this);
  }

  toggleVisbility(e) {
    this.setState({ visible : !this.state.visible});
  }

  render() {
    const { viewer } = this.props;
    const { visible } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation viewer={viewer} />
          <Link className={s.brand} to="/">
            <img src={logoUrl} width="57" height="38" alt="BE:US" />
          </Link>
          <div className={s.banner}>
            {/* <h1 className={s.bannerTitle}>React</h1>
            <p className={s.bannerDesc}>Complex web apps made easy</p> */}
            <Responsive
            minWidth={Responsive.onlyTablet.minWidth}
            as = {()=>
              <div>
            <Link className={s.link} to="/petitions/list">
              소융청원
            </Link>
            <p>·</p>
            <Link className={s.link} to="/promise">
              공약
            </Link>
            <p>·</p>
            <Link className={s.link} to="/money">
              예·결산안
            </Link>
            <p>·</p>
            <Link className={s.link} to="/event">
              행사
            </Link>
            <p>·</p>
            <Link className={s.link} to="/rent">
              대여현황
            </Link>
            </div>
            }
            />
            <Responsive
              {...Responsive.onlyMobile}
              as={()=>
                <Icon onClick={this.toggleVisbility} name='bars'/>
              }
            />
          </div>
          {visible &&
            <div>
              <Segment vertical textAlign='center'>
                <Link className={s.link} to="/petitions/list" onClick={this.toggleVisbility}>
                  소융청원
                </Link>
              </Segment>
              <Segment vertical textAlign='center'>
                <Link className={s.link} to="/promise" onClick={this.toggleVisbility}>
                  공약
                </Link>
              </Segment>
              <Segment vertical textAlign='center'>
                <Link className={s.link} to="/money" onClick={this.toggleVisbility}>
                  예·결산안
                </Link>
              </Segment>
              <Segment vertical textAlign='center'>
                <Link className={s.link} to="/event" onClick={this.toggleVisbility}>
                  행사
                </Link>
              </Segment>
              <Segment vertical textAlign='center'>
                <Link className={s.link} to="/rent" onClick={this.toggleVisbility}>
                  대여현황
                </Link>
              </Segment>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
