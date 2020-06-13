import React from 'react';
import { render } from '@testing-library/react';

import Lib674 from './lib674';

describe(' Lib674', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib674 />);
    expect(baseElement).toBeTruthy();
  });
});
