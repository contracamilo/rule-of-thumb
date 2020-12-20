import { renderHook, act } from '@testing-library/react-hooks';
import { usePersonsAPI } from '../../hooks/usePersonsAPI';

import 'whatwg-fetch';

describe('useIsHealthyAPI', () => {
  beforeAll(() => {
    global.fetch = fetch;
  });

  test('hook without url passed', () => {
    const { result } = renderHook(() => usePersonsAPI);

    act(() => result.current.data);
    expect(result.current.data).toBeFalsy();
  });

  test('should return data with a successful request', async () => {
    const { result } = renderHook(() => usePersonsAPI('item'));
    const [{ data }] = result.current;

    await act(async () => (result.current.isError = false));

    expect(data).toStrictEqual({
      data: [],
    });
  });
});
