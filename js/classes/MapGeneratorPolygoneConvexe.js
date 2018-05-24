class PolygoneConvexe {
    constructor(sommets) {
        this.sommets = sommets;
        this.currentSummit = 0;
    }
 
    currentSummit() {
        return sommets[this.currentSummit];
    }

    nextSummit() {
        if(this.currentSummit + 1 == sommets.length)
            this.currentSummit = 0;
        else 
            this.currentSummit++;
    }

    currentVertice()
    {
        return new Vertice(this.sommets[this.currentSummit], this.sommets[this.currentSummit + 1]);
    }

    contains(point)
    {
        return true;
    }
    }