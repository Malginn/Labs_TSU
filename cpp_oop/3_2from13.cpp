
#include <iostream>
#include <string>
#include <cstdlib>
#include <set>
#include <vector>


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
    
    bool operator<(const Point &p) const{
        return p.x;
    };
    
};


int main() {
    
    int n;
    cout << "Введите n\n";
    cin >> n;
    set<Point> points;
    

    
    for(int i; i < n; i++) {
        int x_ = 0;
        int y_ = 0;
        
        
        //value
        cout << "Введите х: ";
        cin >> x_;
        cout << "Введите y: ";
        cin >> y_;
    
        Point tochka(x_, y_);
        
        points.insert(tochka);
    }
    
    //выведем на экран значения и посчитаем среднее значение для каждой координаты точки
    int aver_x = 0, aver_y = 0;
    for (auto i: points){
        cout << i.x << ' ' << i.y << endl;
        
        aver_x = aver_x + i.x;
        aver_y = aver_y + i.y;
    }
    
    aver_x = aver_x / n;
    aver_y = aver_y / n;
    
    cout << "Обновленный массив: " <<endl;
    
    
    //добавим к каждой координате точки ее среднее значение по множеству
    for (auto i: points){
        i.x = i.x + aver_x;
        i.y = i.y + aver_y;
        
        cout << i.x << ' ' << i.y << endl;
    }

    
    }

