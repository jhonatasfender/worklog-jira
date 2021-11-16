import { useEffect, useState } from 'react';

import * as S from './styled';

type ProgressBarProps = {
  size: number;
  progress: number;
  strokeWidth: number;
  circleOneStroke: string;
  circleTwoStroke: string;
};

const ProgressBar = ({
  size,
  progress,
  strokeWidth,
  circleOneStroke,
  circleTwoStroke,
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
        <S.SVGCircleText x={`${center}`} y={`${center}`}>
          {progress}
        </S.SVGCircleText>
      </S.SVG>
    </>
  );
};

export default ProgressBar;
