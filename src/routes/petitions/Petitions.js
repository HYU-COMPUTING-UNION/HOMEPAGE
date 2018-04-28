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
import Progress from '../../components/Progress';
import s from './Petitions.css';

class Petitions extends React.Component {
  static contextTypes = {
    api: PropTypes.object.isRequired,
    history: PropTypes.object,
  };

  static propTypes = {
    viewer: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    petitionId: PropTypes.string.isRequired,
  };

  static defaultProps = {
    viewer: null,
  };

  state = {
    petition: null,
    buttonDisabled: false,
  };

  async componentDidMount() {
    const { petitionId } = this.props;
    const { api, history } = this.context;

    try {
      const resp = await api.fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: `
            query petition($id: ID!) {
              node(id: $id) { id ...on PetitionNode {
                title content issuedAt expiredAt isExpired isInProgress
                answer { id content answeredAt }
                assentientCount categories { edges { node { id name } } } }
              }
            }
          `,
          variables: { id: petitionId },
        }),
      });

      const { data, errors } = await resp.json();

      if (!resp.ok || errors) {
        if (errors) console.error(errors);
        return;
      }

      if (data) {
        if (data.node) {
          // eslint-disable-next-line react/no-did-mount-set-state
          this.setState({ petition: data.node });
        } else if (history) {
          history.push('/not-found');
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  handleRecommend = async () => {
    const { viewer, petitionId } = this.props;
    const { api } = this.context;

    if (!viewer) {
      console.info('login required');
      return;
    }

    if (!viewer.profile || !viewer.profile.isAffiliationAuthenticated) {
      console.info('affiliation authentication required');
      return;
    }

    this.setState({ buttonDisabled: true });

    try {
      const resp = await api.fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: `
            mutation agreePetition($petitionId: ID!) {
              agreePetition(input: { petitionId: $petitionId }) { state }
            }
          `,
          variables: { petitionId },
        }),
      });

      const { data, errors } = await resp.json();

      if (!resp.ok || errors) {
        if (errors) console.error(errors);
        return;
      }

      if (data && data.agreePetition && data.agreePetition.state) {
        console.info('succeed agreeing');
      }
    } catch (e) {
      console.error(e);
    }

    this.setState({ buttonDisabled: false });
  };

  render() {
    const { petition, buttonDisabled } = this.state;
    return petition ? (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.petition}>
            <h1 className={s.title}>{petition.title}</h1>
            <div className={s.info}>
              <p className={s.status}>
                {petition.isInProgress ? '진행' : '대기'}
              </p>
              <p className={s.spacer}> | </p>
              <p className={s.branch}>
                {petition.categories.edges.length
                  ? petition.categories.edges[0].node.name
                  : '없음'}
              </p>
              <p className={s.spacer}> | </p>
              <p className={s.date}>{petition.issuedAt}</p>
            </div>
            <h3>청원 개요</h3>
            <p>{petition.content}</p>
            <div className={s.buttonWrapper}>
              {!petition.answer ? (
                <div className={s.buttonWrapper}>
                  <button
                    className={s.button}
                    onClick={this.handleRecommend}
                    disabled={buttonDisabled}
                  >
                    추천하기
                  </button>
                </div>
              ) : (
                <div className={s.answer}>
                  <h2>답변</h2>
                  <p>{petition.answer.content}</p>
                </div>
              )}
            </div>
          </div>
          <div className={s.bannerWrapper}>
            <div className={s.banner}>
              <h3>추천순 TOP 5</h3>
              <ol>
                <li>d</li>
                <li>a</li>
                <li>q</li>
                <li>w</li>
                <li>r</li>
              </ol>
            </div>
            <div className={s.banner}>
              <h3>답변된 청원</h3>
              <div className={s.list}>
                <a href="/">asd</a>
                <a href="/">gfdv</a>
                <a href="/">tre</a>
              </div>
            </div>
            <div className={s.banner}>
              <div className={cx(s.ad, s.button)} />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className={s.root}>
        <Progress />
      </div>
    );
  }
}

export default withStyles(s)(Petitions);
