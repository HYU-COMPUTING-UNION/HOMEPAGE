import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Textarea.css';

/* eslint-disable no-underscore-dangle */

class Textarea extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
    error: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    children: null,
    error: false,
  };

  render() {
    const { className, children, error, ...props } = this.props;
    const cn = error ? s.error : null;

    if (error && this._input) {
      this._input.focus();
      this._input.value = '';
    }

    return (
      <textarea
        className={cx(cn, className)}
        {...props}
        ref={ref => (this._input = ref)} // eslint-disable-line no-return-assign
      >
        {children}
      </textarea>
    );
  }
}

export default withStyles(s)(Textarea);
