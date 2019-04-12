import React, { useState } from 'react';
import clsx from 'clsx';
import { Transition } from 'react-transition-group';
import { RippleProps } from './TouchRipple';
import './style';

const DURATION = 550;

const Ripple = (props: RippleProps) => {
  const { rippleX, rippleY, rippleSize, ...restProps } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [leaving, setLeaving] = useState<boolean>(false);

  const handleEnter = () => {
    setVisible(true);
  };
  const handleExit = () => {
    setLeaving(true);
  };

  const rippleClassName = clsx({
    [`ripple`]: true,
    [`rippleVisible`]: visible,
  });

  const childClassName = clsx({
    [`ripple-child`]: true,
    [`childLeaving`]: leaving,
  });

  // const rippleClassName = clsx({
  //   // [`ripple`]: true,
  //   [`rippleVisible`]: visible,
  //   [`childLeaving`]: leaving,
  // });

  return (
    <Transition
      {...restProps}
      onEnter={handleEnter}
      onExit={handleExit}
      timeout={{
        enter: DURATION,
        exit: DURATION,
      }}
    >
      <div
        className={rippleClassName}
        style={{
          width: rippleSize,
          height: rippleSize,
          top: -(rippleSize / 2) + rippleY,
          left: -(rippleSize / 2) + rippleX,
        }}
      >
        <div className={childClassName} />
      </div>
      {/* <div
        className={rippleClassName}
        style={{
          width: rippleSize,
          height: rippleSize,
          top: rippleY - rippleSize / 2,
          left: rippleX - rippleSize / 2,
          backgroundColor: '#000',
        }}
      /> */}
    </Transition>
  );
};

// const Ripple = (props: RippleProps) => {
//   const { rippleX, rippleY, rippleSize } = props;
//   return (
//     <CSSTransition
//       onEnter={() => {
//         console.log(1);
//       }}
//       timeout={500}
//     >
//       <div
//         className="ripple"
//         style={{
//           width: rippleSize,
//           height: rippleSize,
//           top: rippleY - rippleSize / 2,
//           left: rippleX - rippleSize / 2,
//           backgroundColor: '#000',
//         }}
//       >
//         123
//       </div>
//     </CSSTransition>
//   );
// };

// class Ripple extends React.Component<RippleProps, {}> {
//   handleEnter = () => {
//     console.log('handleEnter');
//   };
//   render() {
//     return (
//       <Transition in={this.props.in} onEnter={this.handleEnter} timeout={500}>
//         <span>123</span>
//       </Transition>
//     );
//   }
// }

// const Ripple = (props: RippleProps) => {
//   const { rippleX, rippleY, rippleSize } = props;
//   return (
//     <div
//       className={'ripple ' + props.classNames}
//       style={{
//         width: rippleSize,
//         height: rippleSize,
//         top: rippleY - rippleSize / 2,
//         left: rippleX - rippleSize / 2,
//         backgroundColor: '#000',
//       }}
//     >
//       123
//     </div>
//   );
// };

export default Ripple;
