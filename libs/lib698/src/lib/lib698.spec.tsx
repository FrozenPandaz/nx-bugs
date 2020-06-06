import React from 'react';
import { render } from '@testing-library/react';

import Lib698 from './lib698';

describe(' Lib698', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib698 />);
    expect(baseElement).toBeTruthy();
  });
});
