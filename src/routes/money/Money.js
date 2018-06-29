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
import s from './Money.css';
import { Header, Table } from 'semantic-ui-react';

class Money extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.header}>
            <h1 className={s.active}><a href='#'>예산안</a></h1>
            <h1><a href='#'>결산안</a></h1>
            <h1><a href='#'>영수증</a></h1>
          </div>
          <Table textAlign='center' celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>학기</Table.HeaderCell>
                <Table.HeaderCell>날짜</Table.HeaderCell>
                <Table.HeaderCell>수입</Table.HeaderCell>
                <Table.HeaderCell>지출</Table.HeaderCell>
                <Table.HeaderCell>잔액</Table.HeaderCell>
                <Table.HeaderCell>사업</Table.HeaderCell>
                <Table.HeaderCell>세부항목</Table.HeaderCell>
                <Table.HeaderCell>영수증</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell selectable>1학기</Table.Cell>
                <Table.Cell selectable>12/16/2017</Table.Cell>
                <Table.Cell selectable>97,243</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>97,243</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>학생회비 이월금</Table.Cell>
                <Table.Cell selectable>계좌이체</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>1학기</Table.Cell>
                <Table.Cell selectable>1/15/2018</Table.Cell>
                <Table.Cell selectable>1,700</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>98,943</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>신한할인캐쉬백</Table.Cell>
                <Table.Cell selectable>계좌이체</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>1학기</Table.Cell>
                <Table.Cell selectable>3/17/2018</Table.Cell>
                <Table.Cell selectable>24</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>98,967</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>이자 (12.16 ~ 03.16)</Table.Cell>
                <Table.Cell selectable>계좌이체</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>1학기</Table.Cell>
                <Table.Cell selectable>3/20/2018</Table.Cell>
                <Table.Cell selectable>390,799</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>489,766</Table.Cell>
                <Table.Cell selectable>꿈꾸는 배움터</Table.Cell>
                <Table.Cell selectable>공대 & 소융 신입생 꿈꾸는 배움터 잔여금</Table.Cell>
                <Table.Cell selectable>계좌이체</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>1학기</Table.Cell>
                <Table.Cell selectable>4/2/2018</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>1,000</Table.Cell>
                <Table.Cell selectable>488,766</Table.Cell>
                <Table.Cell selectable>소융대 해오름식</Table.Cell>
                <Table.Cell selectable>포스트잇(학생회 김승호 사비로 구매 후 입금)</Table.Cell>
                <Table.Cell selectable>해오름식_1</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>1학기</Table.Cell>
                <Table.Cell selectable>4/2/2018</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>6,160</Table.Cell>
                <Table.Cell selectable>482,606</Table.Cell>
                <Table.Cell selectable>소융대 해오름식</Table.Cell>
                <Table.Cell selectable>홍보 포스터 프린트</Table.Cell>
                <Table.Cell selectable>해오름식_2</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>1학기</Table.Cell>
                <Table.Cell selectable>4/2/2018</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>3,000</Table.Cell>
                <Table.Cell selectable>479,606</Table.Cell>
                <Table.Cell selectable>소융대 해오름식</Table.Cell>
                <Table.Cell selectable>물티슈, 별스티커(학생회 김승호 사비로 구매 후 입금)</Table.Cell>
                <Table.Cell selectable>해오름식_3</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>1학기</Table.Cell>
                <Table.Cell selectable>4/2/2018</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>7,040</Table.Cell>
                <Table.Cell selectable>472,566</Table.Cell>
                <Table.Cell selectable>소융대 해오름식</Table.Cell>
                <Table.Cell selectable>홍보 포스터 프린트(A3 용지), 설문지, 안내지</Table.Cell>
                <Table.Cell selectable>해오름식_4</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>1학기</Table.Cell>
                <Table.Cell selectable>4/2/2018</Table.Cell>
                <Table.Cell selectable></Table.Cell>
                <Table.Cell selectable>60,040</Table.Cell>
                <Table.Cell selectable>412,566</Table.Cell>
                <Table.Cell selectable>소융대 해오름식</Table.Cell>
                <Table.Cell selectable>코카콜라 50캔 추가 구입(1,200x50캔=60,000)</Table.Cell>
                <Table.Cell selectable>해오름식_5</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell selectable>.</Table.Cell>
                <Table.Cell selectable>.</Table.Cell>
                <Table.Cell selectable>.</Table.Cell>
                <Table.Cell selectable>.</Table.Cell>
                <Table.Cell selectable>.</Table.Cell>
                <Table.Cell selectable>.</Table.Cell>
                <Table.Cell selectable>.</Table.Cell>
                <Table.Cell selectable>.</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Money);
