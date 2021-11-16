import ProgressBar from './ProgressBar';
import * as S from './styled';

const TimeWork = (): JSX.Element => {
  return (
    <S.Wrapper>
      <ProgressBar
        progress={10}
        size={300}
        strokeWidth={15}
        circleOneStroke="#2F384B"
        circleTwoStroke="#d9edfe"
      />
    </S.Wrapper>
  );
};

export default TimeWork;
