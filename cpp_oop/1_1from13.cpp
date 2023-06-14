/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <deque>

using namespace std;

// // класс ноуд - один элемент двусвязного списка
// class Node {
// public:
//     double data;
//     Node* prev, * next;
    
// public:
//     Node(double data) {
//         this->data = data;
//         this->prev = this->next = NULL;
//     }
// };






int main()
{

// инициализируем переменные
int n;
cin >> n;
deque <double> v;

// заполняем дек
for(int i = 1; i<=n; i++) {
    double num;
    cin >> num;
    v.push_front(num);
};

// поиск максимум
double max = v[0];
for (int i = 1; i<=v.size(); i++) {
    if (v[i] > max) {
        max = v[i];
    };
};

// добавляем в конец и выводим
v.push_back(max);
cout << "Последний элемент: " << v.back();



}
