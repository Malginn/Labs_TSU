#include <iostream>
#include <string>
#include <cstdlib>
#include <set>


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


int main() {
    set<Point> points;
    
    int n;
    cout << "Введите n\n";
    cin >> n;

    
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
    

    for(const auto &i:points) {
        cout << i.x << " " << i.y << endl;      //не получается достать x and y из эелмента set
    }
    
    
    
    }
