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
    studentID: '',
    name: '',
    authFail: false,
  };

  authenticate = async () => {
    const { studentID, name } = this.state;
    const { api, history } = this.context;

    try {
      const resp = await api.fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: `
            mutation auth($name: String!, $studentId: String!) {
              authenticate(input: {name: $name, studentId: $studentId}) {
                state
              }
            }
          `,
          variables: {
            name,
            studentId: studentID,
          },
        }),
      });

      const { data, errors } = await resp.json();

      if (errors) {
        console.error(errors);
        return;
      }

      if (data.authenticate.state) {
        history.push('/');
      } else {
        this.setState({ authFail: true });
      }
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { authFail } = this.state;

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
        <label className={s.label} htmlFor="studentID">
          학번:
          <input
            className={s.input}
            id="studentID"
            type="text"
            onChange={e => this.setState({ studentID: e.target.value })}
          />
        </label>
        <button onClick={this.authenticate}>인증하기</button>
        {authFail && <div>인증실패</div>}
      </div>
    );
  }
}

export default withStyles(s)(Auth);
