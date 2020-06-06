import React from 'react';
import { render } from '@testing-library/react';

import Lib166 from './lib166';

describe(' Lib166', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib166 />);
    expect(baseElement).toBeTruthy();
  });
});
