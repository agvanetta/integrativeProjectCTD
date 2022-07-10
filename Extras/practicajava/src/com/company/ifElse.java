package com.company;

import java.util.Scanner;

public class ifElse {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        String responseA = "Weird";
        String responseB = "Not Weird";

        if ( a%2 != 0){
            System.out.println(responseA);
        } else if (a >= 2 && a <= 5){
            System.out.println(responseB);
        } else if (a >= 6 && a <= 20){
            System.out.println(responseA);
        } else {
            System.out.println(responseB);
        }
    }
}
