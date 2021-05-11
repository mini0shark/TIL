package chapter6_ObjectOriented;

public class MyMathTest {
    public static void main(String[] args) {

        
        System.out.println("객체 생성 전");
        System.out.println("static MyMath.add(5,4) :"+MyMath.add(5,4));
        System.out.println("static MyMath.sub(5,4) :"+MyMath.sub(5,4));
        System.out.println("static MyMath.mul(5,4) :"+MyMath.mul(5,4));
        System.out.println("static MyMath.div(5,4) :"+MyMath.div(5,4));
        System.out.println();
        // System.out.println("MyMath.add() :"+MyMath.add());
        // System.out.println("MyMath.sub() :"+MyMath.sub());
        // System.out.println("MyMath.mul() :"+MyMath.mul());
        // System.out.println("MyMath.div() :"+MyMath.div());
        // Cannot make a static reference to the non-static method mul() from the type
        // 에러 발생

        MyMath cm = new MyMath();
        cm.a=10; cm.b=3;
        System.out.println("객체 생성");
        System.out.println("cm.add() :"+cm.add());
        System.out.println("cm.sub() :"+cm.sub());
        System.out.println("cm.mul() :"+cm.mul());
        System.out.println("cm.div() :"+cm.div());
    }
}
class MyMath{
    long a,b;
    long add(){return a+b;}
    long sub(){return a-b;}
    long mul(){return a*b;}
    long div(){return b!=0?a/b:0;}

    
    static long add(long a, long b){return a+b;}
    static long sub(long a, long b){return a-b;}
    static long mul(long a, long b){return a*b;}
    static long div(long a, long b){return b!=0?a/b:0;}
}