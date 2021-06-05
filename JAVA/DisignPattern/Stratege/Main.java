package Stratege;

public class Main {
    public static void main(String[] args) {
        Robot taekwon = new RTaekwonV();
        Robot mazinga = new RMazingaZ();


        // ==== 이동 전략 ====
        taekwon.setMoveStrategy(new MWalkStrategy());
        mazinga.setMoveStrategy(new MFlyStrategy());
        taekwon.move();
        mazinga.move();

        // ==== 공격 전략 ====
        taekwon.setAttackStrategy(new AMissileStrategy());
        mazinga.setAttackStrategy(new APunchStrategy());
        taekwon.attack();
        mazinga.attack();
    }
}
