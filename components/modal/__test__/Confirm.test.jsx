import Modal from '..';
const { confirm } = Modal;

describe('Comfirm', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  function open(args) {
    confirm({
      title: 'Want to delete these items?',
      content: 'some descriptions',
      ...args,
    });
  }
  function $$(className) {
    return document.body.querySelectorAll(className);
  }

  it('onCancel should be called', () => {
    const onCancel = jest.fn();
    const onOk = jest.fn();
    open({
      onCancel,
      onOk,
    });
    $$('.ty-btn')[0].click();
    expect(onCancel.mock.calls.length).toBe(1);
    expect(onOk.mock.calls.length).toBe(0);
  });

  it('onOk should be called', () => {
    const onCancel = jest.fn();
    const onOk = jest.fn();
    open({
      onCancel,
      onOk,
    });

    $$('.ty-btn')[1].click();
    expect(onOk.mock.calls.length).toBe(1);
    expect(onCancel.mock.calls.length).toBe(0);
  });

  it('could be update', () => {
    const instance = confirm({
      title: 'title',
      content: 'content',
    });

    expect($$('.ty-confirm__title')[0].innerHTML).toBe('title');
    expect($$('.ty-confirm__content')[0].innerHTML).toBe('content');

    instance.update({
      title: 'new title',
      content: 'new content',
    });
    expect($$('.ty-confirm__title')[0].innerHTML).toBe('new title');
    expect($$('.ty-confirm__content')[0].innerHTML).toBe('new content');
  });

  it('could be destory', () => {
    jest.useFakeTimers();
    const instance = confirm({
      title: 'title',
      content: 'content',
    });
    expect($$('.ty-modal__root')).toHaveLength(1);
    instance.destroy();
    jest.runAllTimers();
    expect($$('.ty-modal__root')).toHaveLength(0);
    jest.useRealTimers();
  });
});
