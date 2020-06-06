import React from 'react';
import { render } from '@testing-library/react';

import Lib564 from './lib564';

describe(' Lib564', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib564 />);
    expect(baseElement).toBeTruthy();
  });
});
