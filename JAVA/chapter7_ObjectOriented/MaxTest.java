package chapter7_ObjectOriented;
public class MaxTest{
    public static void main(String[] args) {
        //Max<Integer> m = new Max<>();
        String s = "abc";
        System.out.println(s);
       // System.out.println(m.max(10.0, 8.0));
    }
}
class Max<T> {
    void max(T a, T b) {
        if(a.getClass()==(new String().getClass()) && a.getClass()==b.getClass()){
            String x = (String)a;
            String y = (String)b;
            return x.length()>y.length()? a:b;
        }
        Number x = (a.getClass())a;
        Number y = (b.getClass())b;
        return x>y?a:b;
    }
}