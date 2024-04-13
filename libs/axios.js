import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

// TODO: Fix environement variable loading 
// import { MOCK_API } from '@env';

const axiosMockInstance = axios.create();
// const axiosLiveInstance = axios.create();

export const AxiosMockAdapterInstance = new AxiosMockAdapter(
  axiosMockInstance,
  { delayResponse: 50 }
);

// export default MOCK_API == 'true' ? axiosMockInstance : axiosLiveInstance;
export default axiosMockInstance;
