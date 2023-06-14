#include<iostream>
using namespace std;

int main() {
double result = 0;
bool validInput = false;
string message;

while (!validInput) {
    double num1, num2;
    char oper;

    cout << "Enter the first number: ";
    cin >> num1;
    
    if (!cin)
    {
        cout << "Error: Input must to be digit!!\n";
        break;
    }
    
    cout << "Enter the operator (+, -, *, /): ";
    cin >> oper;
    
    cout << "Enter the second number: ";
    cin >> num2;
    
    if (!cin)
    {
        cout << "Error: Input must to be digit!\n";
        break;
    }

    
    switch (oper) {
    case '+':
        result = num1 + num2;
        validInput = true;
        break;
    case '-':
        result = num1 - num2;
        validInput = true;
        break;
    case '*':
        result = num1 * num2;
        validInput = true;
        break;
    case '/':
        if (num2 != 0) {
            result = num1 / num2;
            validInput = true;
        } else {
            cout << "Error: division by zero." << endl;
            validInput = true;
            message = "\nError: division by zero.";
        }
        break;
    default:
        validInput = true;
        message = "\nError: invalid operator.";
        
    }
    

    
}
cout.precision(5);
cout << "Result: " << result << message << endl;


}
