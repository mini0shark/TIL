package state;

public class Main {
    public static void main(String[] args) {
        Character character = new Character();
        character.keyDown();
        character.changeState(MoveState.getInstance());
        System.out.println("=== state Chagen to move ===");
        character.keyDown();
        character.changeState(JumpState.getInstance());
        System.out.println("=== state Chagen to jump ===");
        character.keyDown();
        character.changeState(NormalState.getInstance());
        System.out.println("=== state Chagen to normal ===");
        character.keyDown();
    }
}

// Sit dwon (앉기)
// === state Chagen to move ===
// Crawl (기어가기)
// === state Chagen to jump ===
// Look Dwon (아래 보기)