class Singletone{
    static private Singletone singletone;
    private Singletone(){ } 
    // 기본 생성자를 막아 생성하지 못하도록 한다.
    
    public static Singletone getInstance(){
        if(singletone==null){
            return singletone = new Singletone();
        }
        return singletone;
    }
}