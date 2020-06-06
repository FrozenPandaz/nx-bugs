import React from 'react';
import { render } from '@testing-library/react';

import Lib248 from './lib248';

describe(' Lib248', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib248 />);
    expect(baseElement).toBeTruthy();
  });
});
