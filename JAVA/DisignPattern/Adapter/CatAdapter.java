public class CatAdapter implements Dog{
    private Cat cat;
    public CatAdapter(Cat cat){
        this.cat = cat;
    }
    @Override
    public void bark() {
        cat.meow();        
    }
    @Override
    public void walk() {
        cat.walk();
    }
}
