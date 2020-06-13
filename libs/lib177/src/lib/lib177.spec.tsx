import React from 'react';
import { render } from '@testing-library/react';

import Lib177 from './lib177';

describe(' Lib177', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib177 />);
    expect(baseElement).toBeTruthy();
  });
});
