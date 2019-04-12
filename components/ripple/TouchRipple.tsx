import React, { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Ripple from './Ripple';
import './style';

interface TouchRippleProps {
  center?: boolean;
}

export interface RippleProps {
  rippleX: number;
  rippleY: number;
  rippleSize: number;
  classNames?: string;
  in?: boolean;
}

const TouchRipple: React.FunctionComponent<TouchRippleProps> = props => {
  const { center } = props;
  const [ripples, setRipples] = useState<Array<React.ReactElement>>([]);
  const [nextKey, setNextKey] = useState<number>(0);

  const container = React.createRef<HTMLDivElement>();

  const clacDiag = (a: number, b: number): number => {
    return Math.sqrt(a ** 2 + b ** 2);
  };

  const start = (event: React.MouseEvent) => {
    // console.log(event.type);

    const element = container.current;
    const rect = element
      ? element.getBoundingClientRect()
      : {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
        };

    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || (event.clientX === 0 && event.clientY === 0) || !event.clientX) {
      console.log('center');
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      rippleX = Math.round(event.clientX - rect.left);
      rippleY = Math.round(event.clientY - rect.top);
    }

    if (center) {
      console.log('center');
      rippleSize = clacDiag(rect.width, rect.height);
    } else {
      // 距离元素中心点的距离+元素长度的一半
      const deltaX = Math.abs(rect.width / 2 - rippleX) + rect.width / 2 + 2;
      const deltaY = Math.abs(rect.height / 2 - rippleY) + rect.height / 2 + 2;
      rippleSize = clacDiag(deltaX, deltaY) * 2;
    }

    startCommit({ rippleX, rippleY, rippleSize });
  };

  const end = () => {
    if (ripples.length === 0) return;
    setRipples([]);
  };

  const startCommit = (rippleProps: RippleProps) => {
    setRipples([...ripples, <Ripple key={nextKey} {...rippleProps} />]);
    setNextKey(nextKey + 1);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    // console.log('start');
    start(event);
  };

  // const handleTouchStart = (event: React.TouchEvent) => {
  //   console.log(event.touches[0]);
  // };

  return (
    <div
      className="touchRipple"
      ref={container}
      onMouseDown={handleMouseDown}
      onMouseUp={end}
      // onTouchStart={handleTouchStart}
    >
      <TransitionGroup component={null} enter exit>
        {/* {ripples.length &&
          ripples.map((ripple, index) => (
            <Transition key={`${ripple.key}-${index}`} timeout={2000}>
              {ripple}
            </Transition>
          ))} */}
        {ripples}
      </TransitionGroup>
    </div>
  );
};

// class TouchRipple extends React.Component<
//   {},
//   { nextKey: number; ripples: Array<React.ReactElement> }
// > {
//   state = {
//     nextKey: 0,
//     ripples: [],
//   };
//   container = React.createRef<HTMLDivElement>();
//   start = (event: React.MouseEvent) => {
//     // console.log(event.type);

//     const element = this.container.current;
//     const rect = element
//       ? element.getBoundingClientRect()
//       : {
//           width: 0,
//           height: 0,
//           left: 0,
//           top: 0,
//         };

//     let rippleX;
//     let rippleY;
//     let rippleSize;
//     rippleX = Math.round(event.clientX - rect.left);
//     rippleY = Math.round(event.clientY - rect.top);

//     // 距离元素中心点的距离+元素长度的一半
//     const deltaX = Math.abs(rect.width / 2 - rippleX) + rect.width / 2 + 2;
//     const deltaY = Math.abs(rect.height / 2 - rippleY) + rect.height / 2 + 2;
//     rippleSize = this.clacDiag(deltaX, deltaY) * 2;

//     this.startCommit({ rippleX, rippleY, rippleSize });
//   };
//   clacDiag = (a: number, b: number): number => {
//     return Math.sqrt(a ** 2 + b ** 2);
//   };
//   startCommit = (rippleProps: RippleProps) => {
//     const { rippleX, rippleY, rippleSize } = rippleProps;

//     this.setState(state => ({
//       nextKey: state.nextKey + 1,
//       ripples: [
//         ...state.ripples,
//         <Ripple key={state.nextKey} rippleX={rippleX} rippleY={rippleY} rippleSize={rippleSize} />,
//       ],
//     }));
//   };

//   handleMouseDown = (event: React.MouseEvent) => {
//     // console.log(event);
//     this.start(event);
//   };
//   render() {
//     return (
//       <div
//         className="touchRipple"
//         ref={this.container}
//         onMouseDown={this.handleMouseDown}
//         onMouseUp={end}
//         // onTouchStart={handleTouchStart}
//       >
//         <TransitionGroup component="span">{this.state.ripples}</TransitionGroup>
//       </div>
//     );
//   }
// }
// const TouchRipple: React.FunctionComponent<TouchRippleProps> = React.memo(props => {
//   const { center } = props;
//   const [ripples, setRipples] = useState<Array<React.ReactElement>>([]);
//   const [nextKey, setNextKey] = useState<number>(0);

//   const container = React.createRef<HTMLDivElement>();

//   const clacDiag = (a: number, b: number): number => {
//     return Math.sqrt(a ** 2 + b ** 2);
//   };

//   const start = (event: React.MouseEvent) => {
//     // console.log(event.type);

//     const element = container.current;
//     const rect = element
//       ? element.getBoundingClientRect()
//       : {
//           width: 0,
//           height: 0,
//           left: 0,
//           top: 0,
//         };

//     let rippleX;
//     let rippleY;
//     let rippleSize;
//     if (center || (event.clientX === 0 && event.clientY === 0) || !event.clientX) {
//       rippleX = Math.round(rect.width / 2);
//       rippleY = Math.round(rect.height / 2);
//     } else {
//       rippleX = Math.round(event.clientX - rect.left);
//       rippleY = Math.round(event.clientY - rect.top);
//     }

//     if (center) {
//       rippleSize = clacDiag(rect.width, rect.height);
//     } else {
//       // 距离元素中心点的距离+元素长度的一半
//       const deltaX = Math.abs(rect.width / 2 - rippleX) + rect.width / 2 + 2;
//       const deltaY = Math.abs(rect.height / 2 - rippleY) + rect.height / 2 + 2;
//       rippleSize = clacDiag(deltaX, deltaY) * 2;
//     }

//     startCommit({ rippleX, rippleY, rippleSize });
//   };

//   const end = () => {
//     if (ripples.length === 0) return;
//     setRipples(ripples.slice(1));
//   };

//   const startCommit = (rippleProps: RippleProps) => {
//     setRipples([...ripples, <Ripple key={nextKey} {...rippleProps} />]);
//     setNextKey(nextKey + 1);
//   };

//   const handleMouseDown = (event: React.MouseEvent) => {
//     // console.log(event);
//     start(event);
//   };

//   // const handleTouchStart = (event: React.TouchEvent) => {
//   //   console.log(event.touches[0]);
//   // };

//   let childClsx = '';
//   const handleRippleEnter = ripple => {
//     if (ripple) {
//       console.log(ripple.key);
//       ripple.c = 'rippleVisible';
//       console.log(ripple);
//     }
//     // ripple.props.classNames = 'rippleVisible';
//     // childClsx = 'rippleVisible';
//   };

//   return (
//     <div
//       className="touchRipple"
//       ref={container}
//       onMouseDown={handleMouseDown}
//       // onMouseUp={end}
//       // onTouchStart={handleTouchStart}
//     >
//       <TransitionGroup component={null}>
//         {ripples.length &&
//           ripples.map((ripple, index) => (
//             <Transition
//               onEnter={() => handleRippleEnter(ripple)}
//               key={`${ripple.key}-${index}`}
//               timeout={2000}
//             >
//               <Ripple {...ripple.props} classNames={childClsx} />
//             </Transition>
//           ))}
//         {/* {ripples} */}
//       </TransitionGroup>
//     </div>
//   );
// });

export default TouchRipple;
