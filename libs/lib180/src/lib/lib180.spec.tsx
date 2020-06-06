import React from 'react';
import { render } from '@testing-library/react';

import Lib180 from './lib180';

describe(' Lib180', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib180 />);
    expect(baseElement).toBeTruthy();
  });
});
