import message from '..';

describe('message', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    message.destroy();
    jest.useRealTimers();
  });

  it('render correctly', () => {
    message.success('success');
    expect(document.querySelectorAll('.ty-message__notice').length).toBe(1);
  });

  it('onClose should be called', () => {
    const onClose = jest.fn();
    message.success('success', 2, onClose);
    jest.runTimersToTime(1000);
    expect(onClose).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(onClose).toHaveBeenCalled();
  });

  it('should hide message correctly', () => {
    const hide = message.loading('success', 0);
    expect(document.querySelectorAll('.ty-message__notice').length).toBe(1);
    hide();
    jest.runAllTimers();
    expect(document.querySelectorAll('.ty-message__notice').length).toBe(0);
  });

  it('should be able to destroy globally', () => {
    message.info('whatever', 0);
    message.info('whatever', 0);
    expect(document.querySelectorAll('.ty-message').length).toBe(1);
    expect(document.querySelectorAll('.ty-message__notice').length).toBe(2);
    message.destroy();
    jest.runAllTimers();
    expect(document.querySelectorAll('.ty-message').length).toBe(0);
    expect(document.querySelectorAll('.ty-message__notice').length).toBe(0);
  });

  it('should not need to use duration argument when using the onClose arguments', () => {
    const onClose = jest.fn();
    message.info('whatever', onClose);
    message.destroy();
    jest.runAllTimers();
    expect(onClose).toHaveBeenCalled();
  });
});
