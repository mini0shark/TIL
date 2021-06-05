package proxy;

public class Main {
    public static void main(String[] args) {
        SomeInterface si = new Proxy();
        si.someMethod();
    }
}
