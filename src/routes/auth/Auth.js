import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Auth.css';

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
        {error && <div>에러: {error}</div>}
        {succeed && <div>확인 이메일을 보냈습니다. 이메일을 학인하세요.</div>}
      </div>
    );
  }
}

export default withStyles(s)(Auth);
