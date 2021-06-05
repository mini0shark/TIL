public class Main{
    public static void main(String[] args) {
        Cat cat = new RussianBlue();
        Dog dog = new Pooddle();
        CatAdapter catAdapter = new CatAdapter(cat);

        behaivorDog(dog);
        behaivorDog(catAdapter);

    }
    static void behaivorDog(Dog dog){
        dog.walk();
        dog.bark();
    }
}