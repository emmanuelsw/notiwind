declare const notify: (notification: {
    [x: string]: unknown;
}, timeout: number) => () => void;
export default notify;
