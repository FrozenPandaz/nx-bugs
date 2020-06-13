import React from 'react';
import { render } from '@testing-library/react';

import Lib770 from './lib770';

describe(' Lib770', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib770 />);
    expect(baseElement).toBeTruthy();
  });
});
