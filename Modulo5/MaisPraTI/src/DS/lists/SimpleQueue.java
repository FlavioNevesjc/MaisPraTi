package DS.lists;

public class SimpleQueue {
    
    private static class Node {
        int data;
        Node next;

        public Node (int data){
            this.data = data;
            this.next = null;
        }
    }

    public void enqueue (int data){
        Node newNode = new Node(data);

//        if (this.last == null){
//            this.first = newNode;
//            this.last = newNode;
//        } else {
//            this.last.next = newNode;
//            this.last = newNode;
//        }
//    }
//
//    public int dequeue(){
//        if (this.first == null){
//            throw new IllegalStateException("Fila vazia!!");
//        }
//
//        int data = this.first.data;
//        this.first = this.first.next;
//
//        if (this.first == null){
//            this.last = null;
//        }
//        return data;
//    }
//
//    public boolean isEmpty(){
//        return this.first == null;
    }
}
