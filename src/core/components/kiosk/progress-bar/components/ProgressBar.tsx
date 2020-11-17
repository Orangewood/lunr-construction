import React, { useEffect, useState, useRef } from "react";
import "../scss/ProgressBar.scss";

const ProgressBar = (props: {
  size: number;
  progress: number;
  text: string;
  strokeWidth: number;
  circleOneStroke: string;
  circleTwoStroke: string;
}) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);
  const {
    size,
    progress,
    text,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
  } = props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [setOffset, progress, circumference, offset]);

  return (
    <>
      <svg className='svg' width={size} height={size}>
        <circle
          className='svg-circle-bg'
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className='svg-circle'
          ref={circleRef}
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          x={`${center}`}
          y={`${center - center / 4}`}
          className='svg-circle-text'
        >
          {/* api information here */}
          TBD
        </text>
        <text
          x={`${center}`}
          y={`${center + center / 4}`}
          className='svg-circle-text'
        >
          {text}
        </text>
      </svg>
    </>
  );
};

export default ProgressBar;
