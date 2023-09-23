export default class WorkerBuilder extends Worker{
    constructor(worker) {
        const code = worker.toString();
        const blob = new Blob([`(${code})()`]);
        return new Worker(URL.createObjectURL(blob));
    }
}

//https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers