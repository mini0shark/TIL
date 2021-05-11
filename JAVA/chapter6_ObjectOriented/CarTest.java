package chapter6_ObjectOriented;

class CarTest {
    public static void main(String[] args) {
        Car c1 = new Car("sonata", "white", 210);
        System.out.println("c1의 이름 : "+ c1.name+", 색 : "+ c1.color+", 최대속력 : "+ c1.maxSpeed);
        // c의 이름 : sonata, 색 : white, 최대속력 : 210

        Car c2 = new Car(c1);

        System.out.println("c1의 이름 : "+ c1.name+", 색 : "+ c1.color+", 최대속력 : "+ c1.maxSpeed);
        System.out.println("c2의 이름 : "+ c2.name+", 색 : "+ c2.color+", 최대속력 : "+ c2.maxSpeed);

        c2.name = "K5";
        c2.color = "black";
        
        System.out.println("c1의 이름 : "+ c1.name+", 색 : "+ c1.color+", 최대속력 : "+ c1.maxSpeed);
        System.out.println("c2의 이름 : "+ c2.name+", 색 : "+ c2.color+", 최대속력 : "+ c2.maxSpeed);


//          c1의 이름 : sonata, 색 : white, 최대속력 : 210
//          c1의 이름 : sonata, 색 : white, 최대속력 : 210
//          c2의 이름 : sonata, 색 : white, 최대속력 : 210
//          c1의 이름 : sonata, 색 : white, 최대속력 : 210
//          c2의 이름 : K5, 색 : black, 최대속력 : 210
    }
    
}
class Car{
    String name;
    String color;
    int maxSpeed;
    Car(){  // 매개변수가 있는 생성자를 만들기 위해서는 필수
    	this("", "silver", 200);
    }
    Car(Car c){  // 매개변수가 있는 생성자를 만들기 위해서는 필수
    	this(c.name, c.color, c.maxSpeed);
    }
    Car(String name){
    	this(name, "silver", 200);
    }
    Car(String name, String color, int maxSpeed){
        this.name = name;
        this.color=color;
        this.maxSpeed = maxSpeed;
    }
}