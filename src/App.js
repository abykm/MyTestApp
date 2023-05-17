import React from 'react';
import './style.css';
import Login from './Login';

import { useParams, useSearchParams } from 'react-router-dom';

export default function App(props) {
  console.log(props)
  const { id } = useParams();
  const [qparams] = useSearchParams();
  console.log(id, qparams.get('page'));
  const obj = { test: 123 };
  return (
    <div>
      <Login test = {...obj} />
    </div>
  );
}
