import React from 'react';
import { render } from '@testing-library/react';

import Lib76 from './lib76';

describe(' Lib76', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib76 />);
    expect(baseElement).toBeTruthy();
  });
});
