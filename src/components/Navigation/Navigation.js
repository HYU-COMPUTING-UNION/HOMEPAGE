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
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  static contextTypes = {
    api: PropTypes.object.isRequired,
    history: PropTypes.object,
  };

  static propTypes = {
    viewer: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    viewer: null,
  };

  handleLogout = () => {
    this.logout();
  };

  logout = async () => {
    const { history, api } = this.context;

    try {
      const resp = await api.fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: `
            mutation {
              logout(input: {}) {
                state
              }
            }
          `,
        }),
      });

      const { errors } = await resp.json();

      if (errors) {
        console.error(errors);
      }

      if (history) {
        history.push('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { viewer } = this.props;

    return (
      <div className={s.root} role="navigation">
        {viewer ? (
          <div>
            <Link className={s.link} to="/auth">
              Profile
            </Link>
            <button
              className={cx(s.link, s.button)}
              onClick={this.handleLogout}
            >
              Log out
            </button>
          </div>
        ) : (
          <Link className={s.link} to="/login">
            Log in
          </Link>
        )}
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
