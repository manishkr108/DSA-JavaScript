/*
* we build a table of n row (1-indexed). we start by writing 0 in the 1st row . now in every subsequent row, we look the prevous row
* and replace each occurence of 0 with 01, and each occurence of 1 with 10

! for example . for n=3, the 1st row is 0, the 2nd row is 01, and the 03rd row is 0110.

todo= QUESTION

* is posible that n is given as 0 ? no
* can k be out of bound ? for ex. if n=3, there will be 5 numbers,can k be given as 5 ?  = No

*/