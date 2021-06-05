package state;

public class Character {
    // int state; 전략패턴이 아닌 경우
    State state;
    Character(){
        state = new NormalState();
    }
    void changeState(State state){
        this.state = state;
    }
    void keyDown(){
        state.downKey();
    }
}
