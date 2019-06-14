import React, { forwardRef, useEffect } from 'react';
import autosize from 'autosize';

interface TextareaPorps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  autoSize?: boolean;
}

const Textarea = forwardRef((props: TextareaPorps, ref: React.RefObject<HTMLTextAreaElement>) => {
  const { autoSize, ...rest } = props;

  useEffect(() => {
    if (autoSize && ref.current instanceof HTMLTextAreaElement) {
      autosize(ref.current);
    }
    return () => {
      if (ref.current instanceof HTMLTextAreaElement) {
        autosize.destroy(ref.current);
      }
    };
  }, [autoSize]);

  return <textarea ref={ref} {...rest} />;
});

export default Textarea;
