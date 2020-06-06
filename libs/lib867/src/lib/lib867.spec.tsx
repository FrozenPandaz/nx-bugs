import React from 'react';
import { render } from '@testing-library/react';

import Lib867 from './lib867';

describe(' Lib867', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib867 />);
    expect(baseElement).toBeTruthy();
  });
});
