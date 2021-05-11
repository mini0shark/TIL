class ConstructorTest{
    public static void main(String[] args) {
        ConstTest c = new ConstTest(12);
        //The constructor ConstTest() is undefined

    }
}
class ConstTest{
    ConstTest(int a){
        System.out.println(a);
    }
}