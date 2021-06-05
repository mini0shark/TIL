package state;

public class JumpState implements State{
    static private State state;
    private JumpState(){}
    public static State getInstance(){
        if(state==null){
            state = new JumpState();
        }
        return state;
    }
    @Override
    public void downKey() {
        System.out.println("Look Dwon (아래 보기)");
    }
}
