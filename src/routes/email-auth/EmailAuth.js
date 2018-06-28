import React from 'react';
import PropTypes from 'prop-types';

class EmailAuth extends React.Component {
  static contextTypes = {
    api: PropTypes.object.isRequired,
  };

  static propTypes = {
    token: PropTypes.string.isRequired,
  };

  state = {
    isInProgress: true,
    error: false,
  };

  async componentDidMount() {
    const { token } = this.props;
    const { api } = this.context;

    try {
      const resp = await api.fetch('/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: `
            mutation authEmail($token: String!) {
              authenticateEmail(input: { token: $token }) { state }
            }
          `,
          variables: { token },
        }),
      });

      const { data, errors } = await resp.json();

      if (!resp.ok || errors) {
        if (errors) console.error(errors);
      }

      if (data && data.authenticateEmail && data.authenticateEmail.state) {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({ isInProgress: false });
        return;
      }
    } catch (e) {
      console.error(e);
    }

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ isInProgress: false, error: true });
  }

  render() {
    const { isInProgress, error } = this.state;

    if (isInProgress) {
      return <div>인증중...</div>;
    }

    return error ? (
      <div>인증하는 동안 문제가 발생하였습니다</div>
    ) : (
      <div>인증완료</div>
    );
  }
}

export default EmailAuth;
