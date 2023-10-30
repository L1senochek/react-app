import React, { FC } from 'react';
import './loading.scss';

const Loading: FC = (): JSX.Element => {
  return (
    <div className="loading">
      <svg
        version="1.1"
        id="L4"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        height={120}
        viewBox="0 0 100 100"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
      >
        <circle fill="#15ff00" stroke="none" cx="20" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill="#15ff00" stroke="none" cx="50" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill="#15ff00" stroke="none" cx="80" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
