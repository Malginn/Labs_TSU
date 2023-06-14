#include <iostream>
#include <deque>
#include <string>
#include <cstdlib>

using namespace std;

class Point {
    public:
        double x;
        double y;
        
    public:
        Point(double x_, double y_) {
            this->x = x_;
            this->y = y_;
     }
    
};


int main()
{

// инициализируем переменные
int n;
cin >> n;
deque <Point> v;

// заполняем дек
for(int i = 1; i<=n; i++) {
    double x_;
    double y_;
    
    cout << "Введите х: ";
    cin >> x_;
    cout << "Введите y: ";
    cin >> y_;
    
    Point nums(x_, y_);
    v.push_front(nums);
    // cout << "Последний элемент: " << v.back().x << v.back().y;
};

// поиск максимальной точки по среднему x и y
double max_aver = 0;
double x_max = 0;
double y_max = 0;
for (int i = 0; i<=v.size(); i++) {
    double average;
    average = (v[i].x + v[i].y) / 2;
    if (average > max_aver) {
        max_aver = average;
        x_max = v[i].x;
        y_max = v[i].y;
    };
    
};

Point max_point(x_max, y_max);

v.push_back(max_point);
cout << "Максимальный элемент: x=" << max_point.x << " y=" << max_point.y << endl;
cout << "Последний элемент: x=" << v.back().x << " y=" << v.back().y;

}
