import { renderHook, act } from '@testing-library/react-hooks';
import { useIsHealthyAPI } from '../../hooks/useIsHealthyAPI';
import fetchMock from 'fetch-mock';
import 'whatwg-fetch';

describe('useIsHealthyAPI', () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterAll(() => {
    fetchMock.restore();
  });

  test('hook without url passed', () => {
    const { result } = renderHook(() => useIsHealthyAPI);

    act(() => result.current.data);
    expect(result.current.data).toBeFalsy();
  });

  test('should return data with a successful request', async () => {
    const { result } = renderHook(() => useIsHealthyAPI('item'));
    const [{ data }] = result.current;

    await act(async () => (result.current.isError = false));

    expect(data).toStrictEqual({
      data: [],
    });
  });
});
