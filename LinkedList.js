class Node {
  constructor(text, next = false){
    this.text = text;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.first = null;
  }
  
  push(text){
    let old_first = this.first;
    this.first = new Node(text, old_first);
  }
  
  pop(){
    let text = this.first.text;
    this.first = this.first.next;
    return text;
  }
}
