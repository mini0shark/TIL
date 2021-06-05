package proxy;

public class Proxy implements SomeInterface{
    private SomeInterface si;
    public void someMethod(){
        si = new SomeService();
        si.someMethod();
    }
}
public class SomeService implements SomeInterface{
    public void someMethod(){
        // Some Codes
    }
}
