# worklog-jira

projeto base 
https://github.com/Splode/pomotroid/

https://typeorm.io/#/



escala de cores

#1F1727
#231D30
#252339
#292C42
#2F384B
#4A5763
#66757C
#819294
#9DACAB
#B9C4C1
#D5DCD9




```typescript
import axios, { AxiosRequestConfig, Method } from 'axios';

app.use('/', async (req: Request, res: Response) => {
  const headers = new Map(Object.entries(req.headers)) as Map<string, string>;

  const url = headers.get('x-worklog-host-send');

  if (url?.length === 0) {
    res.json({ err: 'x-worklog-host-send not found' });
    return;
  }

  const authorization = headers.get('authorization') as string;

  console.log(`${url}${req.path}`, authorization);

  const config: AxiosRequestConfig = {
    method: req.method as Method,
    url: `${url}${req.path}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
  };

  try {
    const response = await axios(config);

    res.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        res.status(error.response?.status).json({
          message:
            'Basic Authentication Failure - Reason : AUTHENTICATED_FAILED',
        });
      } else if (error.response?.status) {
        res.status(error.response?.status).json(error.response?.data);
      }
    }
  }
});
```