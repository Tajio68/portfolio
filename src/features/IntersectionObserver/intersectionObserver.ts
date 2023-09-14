const threshold = 0;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: threshold
}

const handleIntersect: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > threshold) {
            entry.target.classList.add('reveal-visible');
        }
    })
}

export const observer = new IntersectionObserver(handleIntersect, options);