#include <iostream>
#include <string>
#include <cstdlib>
#include <map>


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
    multimap<string, Point> points;
    
    int n;
    cout << "Введите n\n";
    cin >> n;
 
    string key;

    
    for(int i; i < n; i++) {
        int x_ = 0;
        int y_ = 0;
        
        //key
        cout << "Введите " << i << "-й" << " ключ" << endl;
        cin >> key;
        
        //value
        cout << "Введите х: ";
        cin >> x_;
        cout << "Введите y: ";
        cin >> y_;
    
        Point tochka(x_, y_);
        
        points.insert({key, tochka});
    }
    
    
    //выведем все элементы словаря
    for(auto it = points.begin(); it != points.end(); ++it){
        cout << it->first << " (" << it->second.x<< ", " << it->second.y << ")" "\n";
    }


    // создадим массив с ключами для удаления из словаря
    int n_del;
    
    cout << "Введите количество ключей к удалению" << endl;
    cin >> n_del;
    
    string arr_del[n_del];
    
    for(int i; i < n_del; i++){
        string key_del;
        
        cout << "Введите " << i + 1 << "-й" << " ключ к удалению" << endl;
        cin >> key_del;
        
        arr_del[i] = key_del;
    }
    
    
    //удалим элементы с ключами из масиива для удаления
    for(auto it = points.begin(); it != points.end(); ++it){
        for (int i; i <= n_del; i++){
            if (it->first == arr_del[i]){
                it = points.erase(it);
            }
        }
    }
    
    
    //выведеме получившийся словарь на экран
    for(auto it = points.begin(); it != points.end(); ++it){
        cout << it->first << " (" << it->second.x<< ", " << it->second.y << ")" "\n";
    }

}
