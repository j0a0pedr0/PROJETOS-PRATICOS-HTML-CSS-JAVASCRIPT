#include <stdio.h>
#include <stdlib.h>

int main()
{


  char player[256];
  char player2[256];

  printf("player1 e sua vez...\n");
  scanf ("%s",&player);

  printf("player2 e sua vez...\n");
  scanf ("%s",&player2);

  printf ("\naguarde enquanto estamos calculando resultado");
  if(strcmp(player,"papel") == 0){
           if(strcmp(player2,"papel") == 0){
              printf("\nempate");
          }else if(strcmp(player2,"tesoura") == 0){
              printf("\nplayer2 ganhou,pq tesoura corta papel");
          }else if(strcmp(player2,"pedra") == 0){
             printf("\nplayer2 perdeu,pq papel embrulha/ganha da pedra");
          }else{
              printf("\nvc jogou uma imformaçao invalida");
              }

  }else if(strcmp(player,"tesoura") == 0){
     if(strcmp(player2,"papel") == 0){
              printf("\player2 perdeu,pq tesoura corta papel...");
          }else if(strcmp(player2,"pedra") == 0){
              printf("\nplayer2 ganhou,pq pedra quebra tesoura...");
          }else if(strcmp(player2,"tesoura") == 0){
             printf("\ndeu empate...");
          }else{
              printf("\nvc jogou uma imformaçao invalida...");
              }

  }else if(strcmp(player,"pedra") == 0){
     if(strcmp(player2,"papel") == 0){
              printf("\nplayer2 ganhou,pq papel embrulha/ganha da pedra...");
          }else if(strcmp(player2,"pedra") == 0){
              printf("\nEmpate...");
          }else if(strcmp(player2,"tesoura") == 0){
             printf("\nplayer1 ganhou,pq pedra esmaga tesoura...");
          }else{
              printf("\nvc jogou uma imformaçao invalida...");
              }
  }else{
      printf("\nvoce jogou uma imformaçao errada");
      }


    return 0;
}
