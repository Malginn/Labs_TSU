/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <string>

using namespace std;

class MyString
{
    private:
        string str;
        int size;
    public:
        MyString(){
            string str = "d";
            int size = 10;
            cout << "Object creation..." << endl;
            cout << "Was created succesfully:" << endl;
            cout << "  str,\n  size." <<endl;
        }
        void set();
        void update();
        void print();
};



int main()
{
    MyString my_str;
    my_str.set();
    my_str.update();
    my_str.print();
    
    return 0;
}



void MyString::print(){
    cout << str;
}

void MyString::set(){
    cout << "Введите строку: " << endl;
    cin >> str;
}

void MyString::update(){
    if(size == 10){
        for (int i = 0; i < size; i++){
            
        }
    }
    cout << "string: " << str << endl;
    }
}