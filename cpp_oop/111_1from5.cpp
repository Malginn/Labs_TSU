/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <vector>
#include <cstdlib>
using namespace std;

typedef vector<int> Vec; 

Vec make_vector(int n) {
    Vec v; //пустой вектор
    
    for (int i = 0; i < n; i++) {
        int a = rand() % 100 - 50;
        v.push_back(a); //добавляем а в конец вектора
    }
    
    return v; //возвращаем вектор как результа работы функции
    }
    
    
//функция для печати вектора
void print_vector(Vec v) {
    for (int i = 0; i < v.size(); i++)
        cout << v[i] << " ";
        cout << endl;
}

//поиск максимального элемента
int max(Vec v) {
    int m = v[0]; //минимальный элемент
    int n = 0; //номер минимального элемента
    for (int i = 0; i < v.size(); i++) //перебор вектора
        if (m < v[i]) {
            m = v[i]; //максимальный элемент
            n = i; //номер максимального
}
return n;
}
//добавить элемент в начало
void insert_max(Vec &v, int pos) {
    v.insert(v.begin(), v[pos]); 
}
//основная функция
int main()
{
    try {
        vector<int> v;
        vector<int>::iterator vi = v.begin();
        //формирование вектора
        int n;
        cout << "N?";
        cin >> n;
        v = make_vector(n);
        print_vector(v);

        int n_max=max(v);//найти номер максимального
        insert_max(v, n_max);
        print_vector(v);
    } catch (int) //блок обработки ошибок
    {
        cout << "error!";
    }
    return 0;
}

