// /* eslint-disable import/extensions */

// eslint-disable-next-line import/extensions
import resizeImages from '../../src/handler/resizedImages';

describe('test the functonality of resize', () => {
  it('resized images to thumbnail size', () => {
    expect(resizeImages).not.toBeFalsy();
  });
});
