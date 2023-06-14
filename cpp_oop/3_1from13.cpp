#include <iostream>
#include <deque>
#include <string>
#include <cstdlib>
#include <list>

using namespace std;


template <class Point>
class MyList
{
    public:
        list<Point> lst;
    public:
        void push_front(Point nums);
        void show_list();
        void deletepos(int start, int end);
        
   
};

class Point {
    public:
        double x;
        double y;
        
    public:
        Point(double x_, double y_) {
            this->x = x_;
            this->y = y_;
     };
    
};


template <class Point>
void MyList<Point>::push_front(Point nums)
{
    this->lst.push_front(nums);
    // return std::sqrt(lengthSquare);
};


template <class Point>
void MyList<Point>::show_list()
{
    int n;
    cout << "Начало массива" << endl;
    for (auto v : this->lst)
        cout << v.x << ";" << v.y << endl;
    cout << "Конец массива" << endl;
};


template <class Point>
void MyList<Point>::deletepos(int start, int end)
{
    typename list<Point>::iterator startEle, endEle;
    
    startEle = this->lst.begin();
    advance(startEle, start);
    
    endEle = this->lst.end();
    advance(endEle, end);
    
    this->lst.erase(startEle, endEle);
}







int main()
{
    int n;
    cin >> n;
    MyList<Point> v;
    
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


    v.show_list();
    
    int start;
    int end;
    cout << "Введите начало диапазона для удаления: ";
    cin >> start;
    cout << "Введите конец диапазона для удаления: ";
    cin >> end;
    
    v.deletepos(start, end);
    v.show_list();



};