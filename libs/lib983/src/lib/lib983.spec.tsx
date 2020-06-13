import React from 'react';
import { render } from '@testing-library/react';

import Lib983 from './lib983';

describe(' Lib983', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib983 />);
    expect(baseElement).toBeTruthy();
  });
});
