import React from 'react';
import { mount } from 'enzyme';
import Portal from '..';
const { PurePortal } = Portal;

describe('PurePortal', () => {
  function createContainer(className = 'custom-container') {
    const container = document.createElement('div');
    container.className = className;
    document.body.appendChild(container);
    return container;
  }
  function removeContainer(container) {
    container.parentNode.removeChild(container);
  }
  function unmountPortal(wrapper) {
    wrapper.unmount();
    // jest.runOnlyPendingTimers();
  }
  function mountPortal(container) {
    const selector = container || '.custom-container';
    if (!container) {
      container = createContainer('custom-container');
    }
    const wrapper = mount(
      <PurePortal selector={selector}>
        <div className="PurePortal-child">child</div>
      </PurePortal>,
    );
    return {
      wrapper,
      container,
    };
  }

  it('should render children to `selector` prop', () => {
    const { container, wrapper } = mountPortal();
    expect(container.querySelector('.PurePortal-child').textContent).toBe('child');
    unmountPortal(wrapper);
    removeContainer(container);
  });

  it('should render null no matter what is passed as child', () => {
    expect(
      mount(
        <div>
          <PurePortal>
            <p>will not render</p>
          </PurePortal>
        </div>,
      ).contains(<div>will not render</div>),
    ).toBe(false);
  });
});

describe('Portal', () => {
  function createContainer(classname = 'custom-container') {
    const container = document.createElement('div');
    container.className = classname;
    document.body.appendChild(container);
    return container;
  }
  function removeContainer(container) {
    container.parentNode.removeChild(container);
  }
  function unmountPortal(wrapper) {
    wrapper.unmount();
  }
  function mountPortal(container) {
    const selector = container || '.custom-container';
    if (!container) {
      container = createContainer('custom-container');
    }
    const wrapper = mount(
      <Portal visible selector={selector}>
        <div className="portal-child">child</div>
      </Portal>,
    );
    return {
      wrapper,
      container,
    };
  }

  it('should render null no matter what is passed as child', () => {
    expect(
      mount(
        <Portal>
          <div>will not render</div>
        </Portal>,
      ).contains(<div>will not render</div>),
    ).toBe(false);
  });

  it('should render children to `selector` prop', () => {
    const { container, wrapper } = mountPortal();
    expect(container.querySelector('.portal-child').textContent).toBe('child');
    unmountPortal(wrapper);
    removeContainer(container);
  });

  it('should re-mount when `selector` changes', () => {
    const { wrapper, container } = mountPortal();
    const anotherContainer = createContainer('another-container');

    expect(anotherContainer.querySelector('.portal-child')).toBeFalsy();
    wrapper.setProps({
      selector: '.another-container',
    });
    expect(anotherContainer.querySelector('.portal-child').textContent).toBe('child');
    expect(container.querySelector('.portal-child')).toBeFalsy();

    removeContainer(container);
    unmountPortal(wrapper);
    removeContainer(anotherContainer);
  });

  it('should support DOM Element as `selector`', () => {
    const container = createContainer();
    const { wrapper } = mountPortal(container);

    expect(container.querySelector('.portal-child').textContent).toBe('child');

    unmountPortal(wrapper);
    removeContainer(container);
  });

  it('should support mask click away', () => {
    const container = createContainer();
    const cancelFn = jest.fn();
    const wrapper = mount(
      <Portal
        className="portal"
        style={{ background: 'rgba(0, 0, 0, 0.2)' }}
        selector=".custom-container"
        mask
        maskClosable
        closeOnClickOutside
        visible
        onCancel={cancelFn}
      >
        <div className="portal-child">child</div>
      </Portal>,
    );
    expect(container.querySelector('.portal-child').textContent).toBe('child');
    const portalNode = document.querySelector('.portal');
    portalNode.dispatchEvent(new MouseEvent('click'));
    expect(cancelFn).toHaveBeenCalled();

    unmountPortal(wrapper);
    removeContainer(container);
  });

  // it('should support esc keyup', () => {
  //   const container = createContainer();
  //   const cancelFn = jest.fn();
  //   const wrapper = mount(
  //     <Portal
  //       className="portal"
  //       style={{ background: 'rgba(0, 0, 0, 0.2)' }}
  //       selector=".custom-container"
  //       mask
  //       maskClosable
  //       closeOnClickOutside
  //       visible
  //       onCancel={cancelFn}
  //     >
  //       <div className="portal-child">child</div>
  //     </Portal>,
  //   );
  //   unmountPortal(wrapper);
  //   removeContainer(container);
  // });
});
