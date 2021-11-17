import moment, { Duration } from 'moment';

import ProgressBar from './ProgressBar';
import * as S from './styled';

const TimeWork = (): JSX.Element => {
  const getHour = (duration: Duration): string => {
    return duration.hours() ? `${duration.hours()}h` : '';
  };

  const getMinute = (duration: Duration): string => {
    return duration.minutes() ? `${duration.minutes()}m` : '';
  };

  const getSecond = (duration: Duration): string => {
    return duration.seconds() ? `${duration.seconds()}s` : '';
  };

  // 8h => 28800s
  const timeSpent = 28800;
  const timeProgress = 28001;
  const progress = (timeProgress / timeSpent) * 100;
  const duration = moment.duration({ seconds: timeProgress });
  const text = `${getHour(duration)} ${getMinute(duration)} ${getSecond(
    duration,
  )}`;

  return (
    <S.Wrapper>
      <ProgressBar
        progress={progress}
        text={text}
        timeTask="2h 3m"
        size={250}
        strokeWidth={11}
        circleOneStroke="#2F384B"
        circleTwoStroke="#d9edfe"
      />
    </S.Wrapper>
  );
};

export default TimeWork;
