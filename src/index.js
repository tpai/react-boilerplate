/* global document */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import AppRouter from 'AppRouter';

render(
    <AppRouter />,
    document.getElementById('react')
);
