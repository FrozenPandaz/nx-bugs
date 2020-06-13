import React from 'react';
import { render } from '@testing-library/react';

import Lib995 from './lib995';

describe(' Lib995', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib995 />);
    expect(baseElement).toBeTruthy();
  });
});
