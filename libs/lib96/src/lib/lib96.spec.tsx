import React from 'react';
import { render } from '@testing-library/react';

import Lib96 from './lib96';

describe(' Lib96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib96 />);
    expect(baseElement).toBeTruthy();
  });
});
