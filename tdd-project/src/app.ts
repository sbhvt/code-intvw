import { HttpClient } from './infrastructure/http';

export async function helloWorldAsync() {
  const httpClient = HttpClient.create();
  // return httpClient.get('/', { baseUrl: '127.0.0.1:2006' });
  return httpClient.get('http://127.0.0.1:2006/');
}
