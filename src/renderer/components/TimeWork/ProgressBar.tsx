import { useEffect, useState } from 'react';

import * as S from './styled';

type ProgressBarProps = {
  size: number;
  progress: number;
  strokeWidth: number;
  circleOneStroke: string;
  circleTwoStroke: string;
  text: string;
  timeTask: string;
};

const ProgressBar = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
  text,
  timeTask,
}: ProgressBarProps): JSX.Element => {
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;

    setOffset(progressOffset);
  }, [circumference, progress]);

  return (
    <>
      <S.SVG className="svg" width={size} height={size}>
        <S.SVGCircleBG
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <S.SVGCircle
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <S.SVGTimeTotal x={center} y={center - 15}>
          {text}
        </S.SVGTimeTotal>
        <S.SVGTextTask x={center} y={center + 30}>
          AURORA-15619
        </S.SVGTextTask>
        <S.SVGTimeTask x={center} y={center + 60}>
          {timeTask}
        </S.SVGTimeTask>
      </S.SVG>
    </>
  );
};

export default ProgressBar;
