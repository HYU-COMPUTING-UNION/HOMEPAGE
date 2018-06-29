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
import s from './Write.css';
import { Form, Grid, Search, Header, Button, Segment } from 'semantic-ui-react';

const options = [
  { key: '1', text: '1', value: '1' },
  { key: '2', text: '2', value: '2' },
  { key: '3', text: '3', value: '3' },
  { key: '4', text: '4', value: '4' },
  { key: '5', text: '5', value: '5' },
  { key: '6', text: '6', value: '6' },
];

const source = {
  title: 'heeloo',
  description: 'who are you',
  image: '',
  price: '10.5$',
};

class Write extends React.Component {
  state = { type: 'c' };

  handleChange = (e, { type }) => this.setState({ type });

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: '' });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    this.setState({
      isLoading: false,
      results: [
        {
          title: 'Reinger - Paucek',
          description: 'Self-enabling 6th generation functionalities',
          image:
            'https://s3.amazonaws.com/uifaces/faces/twitter/noxdzine/128.jpg',
          price: '$93.28',
        },
        {
          title: 'Bernier Group',
          description: 'Intuitive well-modulated concept',
          image:
            'https://s3.amazonaws.com/uifaces/faces/twitter/joelcipriano/128.jpg',
          price: '$38.74',
        },
      ],
    });
    // setTimeout(() => {
    //     if (this.state.value.length < 1) return this.resetComponent()

    //     const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
    //     const isMatch = result => re.test(result.title)

    //     this.setState({
    //         isLoading: false,
    //         results: _.filter(source, isMatch),
    //     })
    // }, 300)
  };

  render() {
    const { isLoading, value, results } = this.state;
    const { type } = this.state;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Segment basic padded="very">
            <Header as="h2">
              4번 보조배터리
              <Header.Subheader>2018.6.20 ~ 2018.6.22</Header.Subheader>
            </Header>
            <Form>
              <Form.Group inline>
                <label>젠더</label>
                <Form.Radio
                  label="C타입"
                  value="c"
                  checked={type === 'c'}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="라이트닝"
                  value="ios"
                  checked={type === 'ios'}
                  onChange={this.handleChange}
                />
                <Form.Select options={options} placeholder="번호" />
              </Form.Group>
              <Form.Field>
                <label>대여자</label>
                <Search
                  loading={isLoading}
                  onResultSelect={this.handleResultSelect}
                  onSearchChange={this.handleSearchChange}
                  results={results}
                  value={value}
                  placeholder="대여자 검색"
                  {...this.props}
                />
              </Form.Field>
              <Button type="submit">대여등록</Button>
            </Form>
          </Segment>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Write);
