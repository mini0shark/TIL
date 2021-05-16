package chapter7_ObjectOriented;

public class Inheritance{
    public static void main(String[] args) {
        Parent par = new Parent();
        Child child = new Child();

        par.parMethod();
        child.ChildMethod();
    }
}
class Parent{
    int parInt;
    void parMethod(){
        System.out.println("부모 메서드");
    }
}
class Child extends Parent{
    void ChildMethod(){
        System.out.println("자식 메서드");
    }
}
