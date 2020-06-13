import React from 'react';
import { render } from '@testing-library/react';

import Lib952 from './lib952';

describe(' Lib952', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib952 />);
    expect(baseElement).toBeTruthy();
  });
});
