package com.company;

import java.util.Scanner;

public class outputFormatting {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("================================");
        for(int i=0;i<3;i++){
            String s1=sc.next();
            int x=sc.nextInt();
            //Complete this line
            int spaces = (15-s1.length());
            String add = "";
            for (int j = 0; j < spaces; j++) {
                add+=" ";
            }
            String x2 = "";
            if (x < 100 && x >9){
                x2 = "0"+x;
                System.out.println(s1+add+x2);

            } else if (x < 9){
                x2 = "000";
                System.out.println(s1+add+x2);
            }
            else {
                System.out.println(s1+add+x);
            }
        }
        System.out.println("================================");

    }

}
