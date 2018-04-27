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

class Write extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
            <div className={s.caution}>
                <h2>
                    주의사항
                </h2>
                <div className={s.content}>
                    <p>·소프트웨어융합대학은 사상과 표현의 다양성을 존중합니다. 동시에 타인의 권리를 침해하거나 명예를 훼손하는 내용은 제한합니다. 방송통신심 의위원회의 '정보통신에 관한 심의 규정', 한국인터넷자율정책기구의 '정책규정' 등을 기반으로 문제 게시물은 삭제될 수 있습니다. 자극적이고 혐오스러운 내용, 비속어, 폭력적 내용, 특정 대상을 비하하거나 차별을 조장하는 내용, 개인정보 유출을 비롯해 타인의 권리를 침해하는 내용, 반복되는 내용 등은 제재될 수 있습니다.</p>
                    <p className={s.bold}>·한번 작성된 청원은 수정 및 삭제가 불가능합니다.  최초 청원취지와 다른내용으로 변경되는 것을 방지하여 청원참여자의 의견을 보호하기 위한 조치이니 신중하게 작성하여 주시기 바랍니다.</p>
                </div>
            </div>
            <select className={s.dropdown}>
                <option value="">카테고리</option>
                <option value="1">교육</option>
                <option value="2">복지</option>
                <option value="3">시설</option>
                <option value="4">행사</option>
                <option value="5">기타</option>
            </select>
            <div className={s.inputWrapper}>
                <input type="text" placeholder="제목을 입력해주세요."/>
            </div>
            <div className={s.textareaWrapper}>
                <textarea>내용을 작성해주세요.</textarea>
            </div>
            <div className={s.buttonWrapper}>
                <button className={s.button}>작성하기</button>
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Write);
