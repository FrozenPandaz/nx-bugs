import React from 'react';
import { render } from '@testing-library/react';

import Lib651 from './lib651';

describe(' Lib651', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib651 />);
    expect(baseElement).toBeTruthy();
  });
});
