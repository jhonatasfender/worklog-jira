import { FormEvent, useState } from 'react';

import useRequest from '../../hooks/use-request.ts';
import * as S from './styled';

const Login = (): JSX.Element => {
  const [url, updateHost] = useState('');
  const [token, updateToken] = useState('');

  const { mutate, error } = useRequest({
    url: '/rest/api/2/dashboard',
    headers: {
      'X-Worklog-Host-Send': url,
      Authorization: `Basic ${token}`,
      Accept: 'application/json',
    },
    method: 'GET',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();

    const { host, username, password } = Object.fromEntries(formData.entries());

    let hostValid = host.toString();
    if (hostValid.match(/\/$/)) {
      hostValid = hostValid.slice(0, -1);
    }

    updateHost(hostValid);

    const afterReq = Buffer.from(`${username}:${password}`).toString('base64');
    updateToken(afterReq);
    mutate();
    console.log(error);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <span>{process.env.PORT}</span>
      <S.Row>
        <S.Label htmlFor="host">Host</S.Label>
        <S.Input type="text" name="host" id="host" />
      </S.Row>
      <S.Row>
        <S.Label htmlFor="username">Username</S.Label>
        <S.Input type="text" name="username" id="username" />
      </S.Row>
      <S.Row>
        <S.Label htmlFor="password">Password</S.Label>
        <S.Input type="password" name="password" id="password" />
      </S.Row>
      <S.Button type="submit">Login</S.Button>
    </S.Form>
  );
};

export default Login;
