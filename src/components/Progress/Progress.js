import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './Progress.css';

class Progress extends React.Component {
  render() {
    return (
      <div className={s.skFoldingCube}>
        <div className={s.skCube} />
        <div className={cx(s.skCube2, s.skCube)} />
        <div className={cx(s.skCube3, s.skCube)} />
        <div className={cx(s.skCube4, s.skCube)} />
      </div>
    );
  }
}

export default withStyles(s)(Progress);
