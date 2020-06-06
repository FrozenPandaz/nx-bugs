import React from 'react';
import { render } from '@testing-library/react';

import Lib185 from './lib185';

describe(' Lib185', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib185 />);
    expect(baseElement).toBeTruthy();
  });
});
