package state;

public class NormalState implements State{
    static private State state;
    private NormalState(){}
    public static State getInstance(){
        if(state==null){
            state = new NormalState();
        }
        return state;
    }
    @Override
    public void downKey() {
        System.out.println("Sit dwon (앉기)");
    }
}
