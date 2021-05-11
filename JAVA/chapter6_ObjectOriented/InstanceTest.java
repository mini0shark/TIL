package chapter6_ObjectOriented;

public class InstanceTest {
    public static void main(String[] args) {
        
    }
    
}
class Instance{
    void instanceMethod(){
        staticMethod(); // 사용가능
        instanceMethod(); // 사용가능
    }
    static void staticMethod(){
        // instanceMethod();
        // Cannot make a static reference to the non-static method instanceMethod() 
    }
}