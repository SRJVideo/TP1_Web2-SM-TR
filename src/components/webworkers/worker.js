// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    // eslint-disable-next-line no-restricted-globals
    self.onmessage = (message) => {
        const nbr = message.data;

        const startTime = new Date().getTime()
        const result = fibonacciCalcul(nbr);
        const endTime = new Date().getTime()

        console.log("Temps début: "+startTime)
        console.log("Temps fin: "+endTime)
        postMessage([result, Math.abs(endTime-startTime)]);
    };

    function fibonacciCalcul(nbr) {
        let valeur;

        if(nbr === 0 || nbr === 1  ) {
            valeur = Number(nbr)
        }
        else {
            valeur = fibonacciCalcul(nbr - 1) + fibonacciCalcul(nbr - 2)
        }
        return valeur
    }
};

