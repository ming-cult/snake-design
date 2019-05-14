import * as React from 'react'
const defaultEvents = ['mousedown', 'touchstart']

export function useClickOutSide(
  refs: React.RefObject<HTMLElement | null>[],
  onClickAway: (event: KeyboardEvent) => void,
  events: string[] = defaultEvents
) {
  React.useEffect(() => {
    const handler = event => {
      const test = refs.map(ref => {
        return ref.current && !ref.current.contains(event.target)
      })
      if (test.every(Boolean)) {
        onClickAway(event)
      }
    }

    for (const eventName of events) {
      window.addEventListener(eventName, handler)
    }

    return () => {
      for (const eventName of events) {
        window.removeEventListener(eventName, handler)
      }
    }
  }, [refs, onClickAway])
}

export const useEnhancedEffect = window !== undefined ? React.useLayoutEffect : React.useEffect
