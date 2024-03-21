class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    /** enqueue(val): add new value to end of the queue. Returns undefined. */
  
    enqueue(val) {
      const newNode = new Node(val);
      if(!this.first){
        this.first = newNode
        this.last = newNode
      }else{
        this.last.next = newNode
        this.last = newNode
      }
      this.size ++
    }
  
  
    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. */
  
    dequeue() {
    if(!this.first){
      throw new Error("Queue is empty")
    }
    // find the first node 
  
    const removeNode = this.first
    this.first = this.first.next;
    if(!this.first){
      this.last = null
    }
      this.size --
      return removeNode.val
  
    }
  
  
    /** peek(): return the value of the first node in the queue. */
  
    peek() {
      return this.first.val
    }
  
    /** isEmpty(): return true if the queue is empty, otherwise false */
  
    isEmpty() {
  if(size === 0){
    return true
  }else{
    return false
  }
    }
  }
  
  module.exports = Queue;