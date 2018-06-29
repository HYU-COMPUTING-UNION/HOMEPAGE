import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Auth.css';
import { Image, Segment, Header, Form, Button, Message } from 'semantic-ui-react';
import image from './image.png';

class Auth extends React.Component {
  static contextTypes = {
    api: PropTypes.object.isRequired,
    history: PropTypes.object,
  };

  state = {
    email: '',
    name: '',
    error: null,
    succeed: false,
  };

  sendEmail = async () => {
    const { email, name } = this.state;
    const { api } = this.context;

    const re = /^[a-zA-Z0-9_.+-]+@hanyang\.ac\.kr$/;

    this.setState({ error: null, succeed: false });

    if (!name.trim()) {
      this.setState({ error: '이름을 입력하세요.' });
      return;
    }

    if (!email.trim()) {
      this.setState({ error: '이메일을 입력하세요.' });
      return;
    }

    if (!re.test(email)) {
      this.setState({ error: '학교메일을 입력해주세요' });
      return;
    }

    try {
      const resp = await api.fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: `
            mutation sendEmail($name: String!, $email: String!) {
              sendEmailAuth(input: {name: $name, email: $email}) {
                state
              }
            }
          `,
          variables: { name, email },
        }),
      });

      const { data, errors } = await resp.json();

      if (errors) {
        console.error(errors);
        this.setState({ error: errors[0].message });
        return;
      }

      if (data.sendEmailAuth.state) {
        this.setState({ succeed: true });
      } else {
        this.setState({
          error: '인증 메일을 보내는 동안 문제가 발생하였습니다',
        });
      }
    } catch (e) {
      console.error(e);
      this.setState({ error: e.message });
    }
  };

  render() {
    const { error, succeed } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Segment basic textAlign='center' className={s.profile}>
            <Header as='h2'>
              <Image circular src={image} />
              <Header.Content>
                이름
                <Header.Subheader>전공</Header.Subheader>
              </Header.Content>
            </Header>
            <Header as='h3'>
              학교 인증
            </Header>
            { true ? (
            <Form>
              <Form.Field inline>
                <label>한양 이메일</label>
                <input 
                  placeholder='hyu@hanyang.ac.kr'
                  id="email"
                  type="email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <Button type='submit' onClick={this.sendEmail}>인증메일 보내기</Button>
              </Form.Field>
              <Message
                error
                header='에러!'
                content={error}
              />
              <Message
                success
                header='성공!'
                content="확인 메일을 보냈습니다. 이메일을 확인해주세요." 
              />
              {error && <p>에러: {error}</p>}
              {succeed && <p>확인 메일을 보냈습니다. 이메일을 확인해주세요.</p>}
            </Form>) : (
              <p>학교인증되셨습니다</p>
            )
            }
            <Header as='h3'>
              참여한 행사
            </Header>
            { false ? (
              <div></div>
            ) : (
              <p>참여한 행사가 없습니다.</p>
            )
            }
            <Header as='h3'>
              대여 상태
            </Header>
            { false ? (
              <div></div>
            ) : (
              <p>대여 품목이 없습니다.</p>
            )
            }
          </Segment>
          {/*
          <label className={s.label} htmlFor="name">
            이름:
            <input
              className={s.input}
              id="name"
              type="text"
              onChange={e => this.setState({ name: e.target.value })}
            />
          </label>
          <label className={s.label} htmlFor="email">
            이메일:
            <input
              className={s.input}
              id="email"
              type="email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </label>
          <button onClick={this.sendEmail}>인증메일 보내기</button>
          */}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Auth);
