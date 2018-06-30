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
import { Feed, Icon, Input, Comment } from 'semantic-ui-react';
import laura from './laura.jpg';
import elliot from './elliot.jpg';


class Home extends React.Component {
  static contextTypes = {
    api: PropTypes.object.isRequired,
    history: PropTypes.object,
  };

  state = {
    petitions: {},
    answeredPetitions: {},
    placeholder: "한양소융 만세~!~!",
  };

  async componentDidMount() {
    setInterval(
      () => this.tick(),
      3000
    );
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

  tick() {
    const text = ["안녕하세요! 19학번 신입생입니다~", "반가워요~ 저는 16학번 재학생이에요","여기는 뭐하는 곳인가요?"];
    this.setState({
      placeholder: text[Math.floor((Math.random() * 3))]
    })
  }

  render() {
    const { placeholder } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.p_box}>
            <h1 className={s.marginTop}>
              소융 담벼락
            </h1>
            <p>
              하루 한 사람당 하나의 댓글만 작성 가능합니다.
            </p>
            <Input icon={<Icon name='write' inverted circular link />} placeholder={placeholder} fluid/>
          </div>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src={laura} />
              <Comment.Content>
                <Comment.Author as='a'>영희</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:45PM</div>
                </Comment.Metadata>
                <Comment.Text>안녕하세요</Comment.Text>
              </Comment.Content>
            </Comment>
            <Comment>
              <Comment.Avatar src={elliot} />
              <Comment.Content>
                <Comment.Author as='a'>철수</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>누구세요</Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
          {/*
          <Feed>
            <Feed.Event image={laura} date='오늘' summary='영희 님이 부릅니다.' extraText='아니아니ㅣㅣ' />
            <Feed.Event image={elliot} date='오늘' summary='철수 님이 외쳤습니다.' extraText='세상에 마상에' />
          </Feed>
          */}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
