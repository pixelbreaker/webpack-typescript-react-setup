import * as React from 'react';
import BaseModule from './BaseModule';


interface Props {
  name: string;
}

export default class Entry extends BaseModule {
  render() {
    var styles:any = this.getStyles('Entry.css');

    return (
      <div className={styles.Entry}>
        {this.props.name}
      </div>
    );
  }
}
