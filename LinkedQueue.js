class Node {
  constructor(item, next = false){
    this.item = item;
    this.next = next;
  }
}

class LinkedQueue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  
  is_empty(){
    return this.first == null;
  }
  
  enq(item){
    let old_last = this.last;
    this.last = new Node(item);
    this.is_empty() ? this.first = this.last : old_last.next = this.last;
  }
  
  deq(){
    let item = this.first.item;
    this.first = this.first.next;
    if(this.is_empty()) this.last = null;
    return item;
  }
}
