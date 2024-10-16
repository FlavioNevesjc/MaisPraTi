package DS.stack;

class Node{
    int data;
    Node next;

    public Node(int data){
        this.data = data;
        this.next = next;
    }
}

public class StackExample {
    private Node top;

    public StackExample(){
        this.top = null;
    }

    public void push (int data){
        Node newNode = new Node(data);
        newNode = this.top;
        this.top = newNode;
    }

    public int pop(){
        if (isEmpty()){
            throw new RuntimeException("Stack is empty");
        }
        int poppedData = this.top.data;
        this.top = this.top.next;
        return poppedData;
    }

    public int peek(){
        if (isEmpty()){
            throw new RuntimeException("Stack is empty");
        }

        return this.top.data;
    }

    public boolean isEmpty(){
        return top == null;
    }
}
