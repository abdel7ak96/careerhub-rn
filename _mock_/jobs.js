import { AxiosMockAdapterInstance } from '../libs/axios';
import { mockData } from './db';

AxiosMockAdapterInstance.onGet('https://jsearch.p.rapidapi.com/search').reply(
  (config) => {
    const { query } = config.params;
    console.log(query);

    return [
      200,
      {
        status: 'OK',
        request_id: '8739be65-eeab-43b6-859b-ccc6ec8b77e1',
        parameters: {
          query: 'web developer in texas usa',
          page: 1,
          num_pages: 1,
        },
        data: query
          ? mockData.filter(
              (e) =>
                e.job_description.includes(query) || e.job_title.includes(query)
            )
          : mockData,
      },
    ];
  }
);
AxiosMockAdapterInstance.onGet(
  'https://jsearch.p.rapidapi.com/job-details'
).reply((config) => {
  const { job_id } = config.params;

  if (!job_id) return [500, { error: 'Missing job_id!' }];
  else
    return [
      200,
      {
        status: 'OK',
        request_id: '93f618f2-c87d-432b-9ab9-e9b157f8f1f8',
        parameters: {
          job_id: 'iXki4pXSSRwAAAAAAAAAAA==',
          extended_publisher_details: false,
        },
        data: mockData.filter((e) => e.job_id == job_id),
      },
    ];
});
