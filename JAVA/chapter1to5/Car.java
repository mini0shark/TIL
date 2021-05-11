package chapter1to5;
public class Car {
    boolean power;      /** 시동 상태 */
    int speed;          /* 속력 */

    void power(){ power = !power;}
    void accelerator(){ speed++; }
    void pushBreak(){ speed=0;}
}
