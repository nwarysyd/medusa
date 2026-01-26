import isEqual from "lodash.isequal"
import { useMemo, useRef } from "react"
import { useSearchParams } from "react-router-dom"

type QueryParams<T extends string> = {
  [key in T]: string | undefined
}

/**
 * Hook to get query parameters from the URL.
 * Optimized to return a stable object reference if the extracted values haven't changed.
 */
export function useQueryParams<T extends string>(
  keys: T[],
  prefix?: string
): QueryParams<T> {
  const [params] = useSearchParams()

  // Use a string representation of keys to avoid unnecessary re-computations
  // when an array literal is passed as the 'keys' argument.
  const keyString = keys.join(",")

  const result = useMemo(() => {
    const res = {} as QueryParams<T>

    keys.forEach((key) => {
      const prefixedKey = prefix ? `${prefix}_${key}` : key
      const value = params.get(prefixedKey) || undefined

      res[key] = value
    })

    return res
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, keyString, prefix])

  // Use a ref to store the previous result and return it if the new result is deeply equal.
  // This prevents unnecessary downstream re-renders when the search params change but
  // the values for the keys we're interested in remain the same.
  const ref = useRef<QueryParams<T>>(result)

  if (!isEqual(ref.current, result)) {
    ref.current = result
  }

  return ref.current
}
