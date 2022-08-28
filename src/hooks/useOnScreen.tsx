import { RefObject, useEffect, useState } from 'react';

export const useOnScreen = (ref: RefObject<HTMLElement>, rootMargin = 0) => {
    const [isIntersectingOnScreen, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([{ isIntersecting }]) => {
                setIntersecting(isIntersecting);
            },
            {
                rootMargin: `${rootMargin}px`,
            },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, rootMargin]);

    return isIntersectingOnScreen;
};
