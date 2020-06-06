module.exports = {
  name: 'lib303',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$':  'ts-jest' 
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/lib303'
};
