package chapter6_ObjectOriented;

public class AreaTest {
    public static void main(String[] args) {
        System.out.println("Area 생성 전");
        Area a1 = new Area();
        Area a2 = new Area();
        Area a3 = new Area();
    }
}

class Area{
    static int number;
    static{
        number=0;
        System.out.println("number is generated as"+number);
    }
    {
        number++;
    }
    Area(){
        System.out.println("number : "+this.number);
    }
}
// Area 생성 전
// number is generated as0
// number : 1
// number : 2
// number : 3