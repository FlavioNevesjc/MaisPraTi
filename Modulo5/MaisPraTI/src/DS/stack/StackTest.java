package DS.stack;

public class StackTest {
    public static void main(String[] args) {
        StackExample stack = new StackExample();

        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);

        System.out.println("Elemento no topo "+ stack.peek());
        System.out.println("Emeento desimpilhado "+ stack.pop());
    }
}
