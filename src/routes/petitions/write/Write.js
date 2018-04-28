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

import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';

class Write extends React.Component {
  static contextTypes = {
    api: PropTypes.object.isRequired,
    history: PropTypes.object,
  };

  state = {
    categories: {},
    selectedCategoryId: null,
    buttonDisabled: false,
    title: '',
    content: '',
    titleError: false,
    contentError: false,
  };

  async componentDidMount() {
    const { api } = this.context;

    try {
      const resp = await api.fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: `{ categories { edges { node { id name } } } }`,
        }),
      });

      const { data, errors } = await resp.json();
      if (!resp.ok || errors) {
        if (errors) console.error(errors);
        return;
      }

      if (data && data.categories) {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({ categories: data.categories });
      }
    } catch (e) {
      console.error(e);
    }
  }

  handleWrite = async () => {
    const { title, content, selectedCategoryId } = this.state;
    const { api, history } = this.context;

    this.setState({ titleError: false, contentError: false });

    if (!title.trim()) {
      this.setState({ titleError: true });
      return;
    }

    if (!content.trim()) {
      this.setState({ contentError: true });
      return;
    }

    this.setState({ buttonDisabled: true });

    try {
      const resp = await api.fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: `
            mutation createPetition($title: String!, $content: String!,
                                    $categoryId: ID) {
              createPetition(input: { title: $title, content: $content,
                                      categoryId: $categoryId }) {
                petition { id }
              }
            }
          `,
          variables: { title, content, categoryId: selectedCategoryId },
        }),
      });

      const { data, errors } = await resp.json();

      if (!resp.ok || errors) {
        if (errors) console.error(errors);
        return;
      }

      if (data && data.createPetition && data.createPetition.petition) {
        if (history) {
          history.replace('/');
        }
      } else {
        console.error('Unexpected error');
      }
    } catch (e) {
      console.error(e);
    }

    this.setState({ buttonDisabled: false });
  };

  handleCategory = event => {
    const id = event.target.value;
    if (!id.trim()) {
      this.setState({ selectedCategoryId: null });
    } else {
      this.setState({ selectedCategoryId: id });
    }
  };

  render() {
    const { categories, buttonDisabled, titleError, contentError } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.caution}>
            <h2>주의사항</h2>
            <div className={s.content}>
              <p>
                ·소프트웨어융합대학은 사상과 표현의 다양성을 존중합니다. 동시에
                타인의 권리를 침해하거나 명예를 훼손하는 내용은 제한합니다.
                방송통신심 의위원회의 &apos;정보통신에 관한 심의 규정&apos;,
                한국인터넷자율정책기구의 &apos;정책규정&apos; 등을 기반으로 문제
                게시물은 삭제될 수 있습니다. 자극적이고 혐오스러운 내용, 비속어,
                폭력적 내용, 특정 대상을 비하하거나 차별을 조장하는 내용,
                개인정보 유출을 비롯해 타인의 권리를 침해하는 내용, 반복되는
                내용 등은 제재될 수 있습니다.
              </p>
              <p className={s.bold}>
                ·한번 작성된 청원은 수정 및 삭제가 불가능합니다. 최초 청원취지와
                다른내용으로 변경되는 것을 방지하여 청원참여자의 의견을 보호하기
                위한 조치이니 신중하게 작성하여 주시기 바랍니다.
              </p>
            </div>
          </div>
          <select className={s.dropdown} onChange={this.handleCategory}>
            <option value="">카테고리</option>
            {categories.edges &&
              categories.edges.map(edge => (
                <option key={edge.node.id} value={edge.node.id}>
                  {edge.node.name}
                </option>
              ))}
          </select>
          <div className={s.inputWrapper}>
            <Input
              error={titleError}
              type="text"
              placeholder="제목을 입력해주세요."
              onChange={e =>
                this.setState({ titleError: false, title: e.target.value })
              }
            />
          </div>
          <div className={s.textareaWrapper}>
            <Textarea
              error={contentError}
              placeholder="내용을 작성해주세요."
              onChange={e =>
                this.setState({ contentError: false, content: e.target.value })
              }
            />
          </div>
          <div className={s.buttonWrapper}>
            <button
              className={s.button}
              onClick={this.handleWrite}
              disabled={buttonDisabled}
            >
              작성하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Write);
