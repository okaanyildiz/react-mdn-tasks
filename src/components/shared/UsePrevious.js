import { useRef, useEffect } from 'react'

// Get the component's previous state to define the focus
export default function usePrevious(value) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}