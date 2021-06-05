import java.util.ArrayList;
import java.util.List;

public class ObserberTest {
    public static void main(String[] args) {

        Observable observable = new Observable();

        IObserver graph = new Graph(observable);

        IObserver display = new Display(observable);


        observable.update("abc", 1);

        observable.update("def", 2);

        observable.update("ghi", 3);

    }


}

interface IObserver{

    public void notify(Object data);

}


class Observable{

    private List<IObserver> observers = new ArrayList<IObserver>();

    public void registObserver(IObserver observer){ observers.add(observer); }

    String []table = {"a","b","c","d","e"};

    public void update(String data, int index){

        table[index] = data;

        onUpdate();

    }


    public void onUpdate(){

        for(IObserver observer : observers){

            observer.notify(table);

        }

    }

}


class Graph implements IObserver{

    public Graph(Observable obervable){ obervable.registObserver(this); }

    public void notify(Object data){

        String[] table = (String[])data;

        System.out.println("Graph : ");

        for(int i = 0; i < 5; i++) System.out.println(table[i]);

    }

}


class Display implements IObserver{

    public Display(Observable obervable){ obervable.registObserver(this); }

    public void notify(Object data){

        String[] table = (String[])data;

        System.out.println("Display : ");

        for(int i = 0; i < 5; i++) System.out.println(table[i]);

    }

} 

