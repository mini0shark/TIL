package chapter1to5;

public class CarTest {
    public static void main(String[] args) {
        Car c1 = new Car(); 
        Car c2 = new Car();
        System.out.println("c1의 speed = "+c1.speed+"입니다.");
        System.out.println("c2의 speed = "+c2.speed+"입니다.");
        for(int i =0; i<65; i++){c1.accelerator();} //65까지 악셀을 밟는다.
        System.out.println("c1의 속력을 65까지 올렸습니다.");

        System.out.println("c1의 speed = "+c1.speed+"입니다.");
        System.out.println("c2의 speed = "+c2.speed+"입니다.");

        c2 = c1;
        System.out.println("c2 = c1 실행");
        System.out.println("c1의 speed = "+c1.speed+"입니다.");
        System.out.println("c2의 speed = "+c2.speed+"입니다.");

        for(int i =0; i<10; i++){c1.accelerator();} //10 더 악셀을 밟는다.
        System.out.println("c1의 속력을 10 더 올렸습니다.");
        
        System.out.println("c1의 speed = "+c1.speed+"입니다.");
        System.out.println("c2의 speed = "+c2.speed+"입니다.");
    }
}
