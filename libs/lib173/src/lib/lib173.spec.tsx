import React from 'react';
import { render } from '@testing-library/react';

import Lib173 from './lib173';

describe(' Lib173', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib173 />);
    expect(baseElement).toBeTruthy();
  });
});
