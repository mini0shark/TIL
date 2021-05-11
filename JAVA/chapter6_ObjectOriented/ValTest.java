package chapter6_ObjectOriented;

public class ValTest {
    public static void main(String[] args) {
        Val.classVal = 10;
        System.out.println("Val.classVal :  "+Val.classVal);
        //System.out.println("Val.instanceVal :  "+Val.instanceVal);
        //Cannot make a static reference to the non-static field 오류

        Val v1 = new Val();
        Val v2 = new Val();
        
        v1.instanceVal = 10;
        v2.instanceVal = 20;
        
        System.out.println("v1.clasVal : "+v1.classVal+", v1.instanceVal : "+v1.instanceVal);
        System.out.println("v2.clasVal : "+v2.classVal+", v2.instanceVal : "+v2.instanceVal);


        System.out.println("some works...");

        v1.instanceVal++;
        v2.instanceVal++;

        v1.classVal = 30;

        System.out.println("v1.clasVal : "+v1.classVal+", v1.instanceVal : "+v1.instanceVal);
        System.out.println("v2.clasVal : "+v2.classVal+", v2.instanceVal : "+v2.instanceVal);
    }
}
