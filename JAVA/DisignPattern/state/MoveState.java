package state;

public class MoveState implements State{
    static private State state;
    private MoveState(){}
    public static State getInstance(){
        if(state==null){
            state = new MoveState();
        }
        return state;
    }
    @Override
    public void downKey() {
        System.out.println("Crawl (기어가기)");
    }
}
