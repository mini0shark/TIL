package Stratege;

public class Robot {
    String name;
    AttackStrategy attackStrategy;
    MoveStrategy moveStrategy;
    Robot(){}
    
    public void setMoveStrategy(MoveStrategy moveStrategy) {
        this.moveStrategy = moveStrategy;
    }
    public void setAttackStrategy(AttackStrategy attackStrategy) {
        this.attackStrategy = attackStrategy;
    }

    public void attack(){
        attackStrategy.attack();
    }
    public void move(){
        moveStrategy.move();    
    }
}
