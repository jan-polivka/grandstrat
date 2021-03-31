import React, { Component, Fragment } from 'react';

import Select from 'react-select';

import {tags} from '../tags';
import {ideaGroups} from '../ideaGroups';

export default class SingleSelect extends Component {

  render() {
    return (
      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          name="tags"
          options={tags}
        />
        <br/>
        
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          name="ideaGroups"
          options={ideaGroups}
        />
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          name="ideaGroups"
          options={ideaGroups}
        />
      </Fragment>
    );
  }
}