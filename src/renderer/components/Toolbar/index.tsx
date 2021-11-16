import { WindowMinimize } from 'styled-icons/fa-solid';
import { ShutDown } from 'styled-icons/remix-line';

import * as S from './styled';

const Toolbar = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.H2>Worklog</S.H2>
      <S.Action>
        <WindowMinimize size="20" />
        <ShutDown size="30" />
      </S.Action>
    </S.Wrapper>
  );
};

export default Toolbar;
