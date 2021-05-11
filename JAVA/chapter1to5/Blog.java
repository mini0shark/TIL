package chapter1to5;
public class Blog {
    public static void main(String[] args) {
        int[][] arr= new int[4][];
        arr[0] = new int[5];
        arr[1] = new int[3];
        arr[2] = new int[4];
        arr[3] = new int[1];

        for(int[] ar : arr){
            for(int a: ar){
                System.out.print(a+" ");
            }
            System.out.println();
        }
    }

}
