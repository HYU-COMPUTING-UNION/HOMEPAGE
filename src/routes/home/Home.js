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
import s from './Home.css';
import Link from '../../components/Link';

class Home extends React.Component {
  static contextTypes = {
    api: PropTypes.object.isRequired,
    history: PropTypes.object,
  };

  state = {
    petitions: {},
    answeredPetitions: {},
  };

  async componentDidMount() {
    const { api } = this.context;
    try {
      const resp = await api.fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: `
            fragment petitionsFields on PetitionNodeConnection {
              edges { node { id title issuedAt isAnswered isInProgress
                categories { edges { node { id name } } } } }
            }

            query petitions {
              p: petitions(isAnswered: false) { ...petitionsFields }
              ap: petitions(isAnswered: true) { ...petitionsFields } # answered petitions
            }
          `,
        }),
      });

      const { data, errors } = await resp.json();

      if (!resp.ok || errors) {
        if (errors) console.error(errors);
        return;
      }

      if (data) {
        if (data.p) {
          // eslint-disable-next-line react/no-did-mount-set-state
          this.setState({ petitions: data.p });
        }

        if (data.ap) {
          // eslint-disable-next-line react/no-did-mount-set-state
          this.setState({ answeredPetitions: data.ap });
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { petitions, answeredPetitions } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.p_box}>
            <h2>
              여러분의 불편한 점들, 개선할 점들, 해줬으면 하는 점들 알려주세요.
            </h2>
            <p>
              여러분들이 작성한 소중한 의견들 모두 검토 후 답변을
              남겨드리겠습니다.
            </p>
            <Link to="/petitions/write">
              <button className={s.button}>청원 작성하기</button>
            </Link>
          </div>
          <h1>청원 목록</h1>
          {petitions.edges &&
            petitions.edges.map(edge => (
              <Link key={edge.node.id} to={`/petitions/${edge.node.id}`}>
                <div className={s.ask}>
                  <div>
                    <p className={s.status}>
                      {edge.node.isInProgress ? '진행' : '대기'}
                    </p>
                    <span className={s.spacer}> | </span>
                    <p className={s.branch}>
                      {edge.node.categories.edges.length
                        ? edge.node.categories.edges[0].node.name
                        : '없음'}
                    </p>
                    <span className={s.spacer}> | </span>
                    <p className={s.date}>{edge.node.issuedAt}</p>
                  </div>
                  <h2 className={s.title}>{edge.node.title}</h2>
                </div>
              </Link>
            ))}
          <h1>답변된 청원</h1>
          {answeredPetitions.edges &&
            answeredPetitions.edges.map(edge => (
              <Link key={edge.node.id} to={`/petitions/${edge.node.id}`}>
                <div key={edge.node.id} className={s.ask}>
                  <p className={s.status}>완료</p>
                  <span className={s.spacer}> | </span>
                  <p className={s.branch}>
                    {edge.node.categories.edges.length
                      ? edge.node.categories.edges[0].node.name
                      : '없음'}
                  </p>
                  <span className={s.spacer}> | </span>
                  <p className={s.date}>{edge.node.issuedAt}</p>
                  <h2 className={s.title}>{edge.node.title}</h2>
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
