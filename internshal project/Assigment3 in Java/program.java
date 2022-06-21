import java.util.*;
public class program{ public static void main(final String[]args){
//scanner class
    final Scanner inputData = new Scanner(System.in);
    //
    System.out.println(."Enter a Sentence(any English sentence)");
    final String sentence = inputData.nextLine();
    System.out.println("Enter a Letter(any letter from A to Z)");
    final String letter = inputData.nextLine();
    //
    final int index = sentence.indexOf(letter);
    //
    if(index == -1){
        System.out.println("The letter does not exist in the sentence");
    }else{
        System.out.println(sentence.substring(index+1));
    }

} }