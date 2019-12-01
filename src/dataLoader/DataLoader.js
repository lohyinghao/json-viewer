import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './DataLoader.css';

const DataLoader = props => {
  const [formData, setFormData] = useState({
    value:
      '{"zdtiic":["JsZbxHqM",-1933451531,true,[false,false,-400544804.8848603,"bTJ9sonw","c"]],"ujnjsnjpwra":[[329398297.34234834]],"eslygpyawkgs":351427425.0266722,"puyqhywhfh":false,"wltdqoduhjex":1175683688.9913287}'
  });

  const handleChange = e => {
    setFormData({ value: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit');
    setFormData({ value: e.target.value });
    console.log(JSON.stringify(JSON.parse(formData.value), null, 2));
    setFormData({ value: JSON.stringify(JSON.parse(formData.value), null, 2) });
  };

  return (
    <Fragment>
      {' '}
      <a>Input Json</a>
      <form onSubmit={e => handleSubmit(e)}>
        <textarea value={formData.value} onChange={e => handleChange(e)} />
        <input type='submit' value='Submit' />
      </form>
    </Fragment>
  );
};

DataLoader.propTypes = {};

export default DataLoader;
