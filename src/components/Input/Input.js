import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Input.css';

/* eslint-disable no-underscore-dangle */

class Input extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    error: false,
  };

  func = () => {};

  render() {
    const { error, className, ...props } = this.props;
    const cn = error ? s.error : null;

    if (error && this._input) {
      this._input.focus();
      this._input.value = '';
    }

    return (
      <input
        className={cx(className, cn)}
        ref={ref => (this._input = ref)} // eslint-disable-line no-return-assign
        {...props}
      />
    );
  }
}

export default withStyles(s)(Input);
