#include <iostream>
#include <exception>
#include <fstream>
 
#define MAX_VALUE 255
 
//tree------------------------------------------------------
class Node
{
private:
char *m_value;
 
Node *m_right;
Node *m_left;
 
public:
 
Node( char *value )
{ 
m_value = new char[strlen(value) + 1];
strcpy(m_value, value);
 
m_left = NULL;
m_right = NULL;
};
~Node()
{
if( m_right != NULL )
{
delete m_right;
}
if( m_left != NULL )
{
delete m_left;
}
if(m_value != NULL)
{
delete m_value;
}
}
 
 
//создать правого потомка
Node* CreateRightChild(char *value)
{
if(m_right != NULL)
{
delete m_right;
}
 
m_right = new Node(value);
 
return m_right;
}
 
//создать левого потомка
Node* CreateLeftChild(char *value)
{
if(m_left != NULL)
{
delete m_left;
}
 
m_left = new Node(value);
 
return m_left;
}
 
//получить правого потомка
Node* GetRightChild()
{
return m_right;
}
//получить левого потомка
Node* GetLeftChild()
{
return m_left;
}
//Получить значение у вершины
char* GetValue()
{
return m_value;
}
 
//Добавляет лексему в дерево.
//возвращает указатель на созданную вершину и количество сравнений при добавлении
std::pair <Node*, int> AddLexem(char *lexem)
{
Node *current_node = this;
//тут хранится количество сравнений
int compares_count = 0;
 
while(1)
{
//а вот и сравнение (; регистрируем
int result = strcmp(lexem, current_node->GetValue());
compares_count++;
 
if(result > 0)
{
//если полученная строка меньше текущей, пытаемся добавить в левое поддерево
if(current_node->GetLeftChild() == NULL)
{
//если пустое - создаём вершину
current_node = current_node->CreateLeftChild(lexem);
break;
}
//если нет -- делаем левую вершину текущей и возвращаемся в начало цикла
current_node = current_node->GetLeftChild();
continue;
}
else if (result < 0)
{
//если строка больше текущей, пытаемся добавить в правое поддерево
if(current_node->GetRightChild() == NULL)
{
current_node = current_node->CreateRightChild(lexem);
break;
}
current_node = current_node->GetRightChild();
continue;
}
else
{
break;
}
}
//возвращаем пару значений - созданную вершину и количество сравнений
 
return std::make_pair<Node*, int>( current_node, compares_count );
}
 
std::pair <Node*, int> FindLexem( char *lexem )
{
//бинарный поиск по дереву
Node* current_node = this;
//количество сравнений
int compares_count = 0;
 
do
{ 
//сравнение
int result = strcmp( lexem, current_node->m_value );
compares_count++;
//если полученная строка меньше - ищем в левом поддереве
if( result > 0 )
{
current_node = current_node->m_left;
}
else if( result < 0 )
{
//иначе -- в правом
current_node = current_node->m_right;
}
else
{
// если нашли, возвращаем найденную вершину и количество сравнений
return std::make_pair<Node*, int>( current_node, compares_count );
}
 
} while ( current_node != NULL );
 
return std::make_pair<Node*, int>( current_node, compares_count );
}
};
 
//two-way linked list
class Item
{
private:
 
char* m_value;
 
Item* m_previous;
Item* m_next;
 
public:
Item( char *value )
{ 
m_value = new char[strlen(value) + 1];
strcpy(m_value, value);
m_previous = NULL;
m_next = NULL;
};
~Item()
{
m_previous->m_next = m_next;
m_next->m_previous = m_previous;
delete m_value;
}
 
//добавить элемент ПЕРЕД текущим
Item* InsertBefore( char *value )
{
Item* temp = m_previous;
m_previous = new Item( value );
m_previous->m_previous = temp;
m_previous->m_next = this;
return m_previous;
}
 
//Добавить элемент ПОСЛЕ текущего
Item* InsertAfter( char *value )
{ 
Item* temp = m_next;
m_next = new Item( value );
m_next->m_previous = this;
m_next->m_next = temp;
return m_next;
}
 
//Добавляем лексему. Список -- отсортированный
std::pair<Item*, int> AddLexem( char *lexem)
{
Item* current_item = this;
int compares_count = 0;
 
//если строка больше текущей и есть следующий элемент
while( current_item->m_next != NULL && strcmp( current_item->m_value, lexem ) < 0 )
//делаем следующий элемент текущим
{
current_item = current_item->m_next;
compares_count++;
}
//если следующего элемента нет, добавляем лексему после текущего
if(current_item->m_next == NULL)
{
return std::make_pair<Item*, int> ( current_item->InsertAfter( lexem ), compares_count );
}
else
{
//если же есть, значит текущее значение >= лексеме, добавляем её перед текущим элементом
return std::make_pair<Item*, int> ( current_item->InsertBefore( lexem ), compares_count );
}
}
 
//поиск лексемы в списке (последовательный)
std::pair<Item*, int> FindLexem ( char *lexem )
{
Item* current_item = this;
int compares_count = 1;
//если не нашли лексему в текущем элементе списка - переходим к следующему 
while( current_item != NULL && strcmp( current_item->m_value, lexem ) )
{
compares_count++;
current_item = current_item->m_next;
}
//количество сравнений и найденный элемент -- возвращаем.
return std::make_pair<Item*, int> ( current_item, compares_count );
}
};
 
///hash function -- среднее арифметическое символов лексемы
int GetHashIndex( char *lexem )
{
double result = 0;
 
int length = strlen( lexem ); 
 
for (int i = 0; i < length; i++ )
{
result += static_cast<int>( lexem[i] );
}
result /= length;
 
return static_cast<int>(result);
}
 
 
int main(int argc, char **argv)
{
if(argc != 2 )
{
std::cout << "No file specified" << std::endl;
return 1;
}
 
//сколько всего лексем мы обработали
int tokens_count = 0;
//сколько раз искали лексемы
int search_tries = 0;
 
//Tree hash - массив, дополняемый деревьями
Node* tree_hash_array[MAX_VALUE]; 
//сколько всего раз проводилось сравнение при добавлении в дерево
int tree_add_compares = 0;
// ----- при поиске в дереве
int tree_search_compares = 0;
 
//List hash -- массив, дополняемый списками
Item* list_hash_array[MAX_VALUE];
//сколько раз сравнивалось при добавлении в список
int list_add_compares = 0;
//----- при поиске в списке
int list_search_compares = 0;
 
 
for( int i = 0; i < MAX_VALUE; i++ )
{
tree_hash_array[i] = NULL;
list_hash_array[i] = NULL;
}
 
std::ifstream input_file;
 
input_file.open(argv[1]);
 
char token[80];
 
while( !input_file.eof() )
{
//читаем по слову
input_file >> token;
 
tokens_count++;
 
//пытаемся получить для слова индекс через хэш
int index = GetHashIndex( token );
 
//занято
if( tree_hash_array[index] != NULL )
{
//добавляем в дерево, считаем сравнения
tree_add_compares += tree_hash_array[index]->AddLexem( token ).second;
}
else
{
//свободно?! создаём новое дерево
tree_hash_array[index] = new Node( token ); 
}
 
//по аналогии, только со списком
if( list_hash_array[index] != NULL )
{
list_add_compares += list_hash_array[index]->AddLexem( token ).second;
}
else
{
list_hash_array[index] = new Item( token );
}
}
 
while( 1 )
{
//просим ввести лексему для поиска
char answer[80];
std::cout << "Enter token to search or \":q\" to exit >> ";
std::cin >> answer;
if( !strcmp( ":q", answer ) )
{
return 0;
} 
 
//считаем индекс через хэш
int index = GetHashIndex( answer );
 
//пусто, нет таких. -- ничего не выводим, заново спрашиваем лексему
if( tree_hash_array[index] == NULL )
{
continue;
}
 
//есть дерево -- ищем в этом дереве
std::pair<Node*, int> tree_seach_results = tree_hash_array[index]->FindLexem( answer );
 
if( tree_seach_results.first == NULL )
{
continue;
}
 
search_tries++;
//считаем сравнения
tree_search_compares += tree_seach_results.second;
//и в списке тоже ищем, считаем сравнения
list_search_compares += list_hash_array[index]->FindLexem( answer ).second;
//выводим общее количество сравнений при добавлении и среднее при поиске
//для списка
std::cout << "List add: " << list_add_compares << "\tsearch: " << list_search_compares/search_tries << std::endl;
//для дерева
std::cout << "Tree add: " << tree_add_compares << "\tsearch: " << tree_search_compares/search_tries << std::endl;
 
}
 
return 0;
}