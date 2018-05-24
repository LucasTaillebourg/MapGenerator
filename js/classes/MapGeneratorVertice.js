class Vertice {
    constructor(head,tail) {
        this.head = head;
        this.tail = tail;
    }

    hasToLeft(point)
    {
        if(head.x == tail.x)
            return (this.head.y-this.tail.y)*(point.x-this.head.x) > 0;
        else
        {
            //return(this.head.x-this.tail.x)*(this.tail.y + 
            return((this.tail.y + (point.x - this.tail.x)*((this.head.y - this.tail.y)/(this.head.x - this.tail.x)) - point.y)*(this.head.x - this.tail.x));
        }
    }
}