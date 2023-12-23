#include "calc.h"
using namespace std;

Calculator::Calculator() : output(0)
{
	cout << "\nNew calculator generated.\n\n";
}

Calculator::Calculator(map<string, double> history): output(0), _history(history)
{	

	if (!history.empty())
	{
		auto it = --_history.end();
		infix = it->first;
		output = it->second;

	}
}

Calculator::~Calculator()
{
	_history.clear();
}

double Calculator::computeNew(string expression)
{
	infix = expression;
	postfix = toPostfix(infix);

	/*
	cout << "Infix: " << infix << endl;
	cout << "Expression: " << expression << endl;

	cout << "Postfix: ";
	for (auto it = postfix.begin(); it != postfix.end(); ++it)
		cout << *it << " ";
	cout << endl;
	*/

	if (postfix.empty())
		output = INFINITY; // return very large number to indicate error

	else {
		stack<double> numbers;
		while (!postfix.empty()) {
			string curr = postfix[0];

			bool isNum = curr.size() > 1 || charType(curr[0]) == 1;
			if (isNum)
			{
				double value = stod(curr);
				numbers.push(value);
			}

			else {
				output = numbers.top();
				numbers.pop();

				if (curr[0] == '+')
					output += numbers.top();

				else if (curr[0] == '-')
					output = numbers.top() - output;

				else if (curr[0] == '*')
					output *= numbers.top();

				else if (curr[0] == '/')
					output = numbers.top() / output;

				numbers.pop();
			}

			postfix.erase(postfix.begin());

		}
	}

	_history.insert(pair<string, double>(infix, output));

	return output;
}

vector<string> Calculator::infixHistory()
{
	vector<string> ret;
	for (auto it = _history.begin(); it != _history.end(); ++it)
		ret.push_back(it->first);

	return ret;
}

vector<double> Calculator::valueHistory()
{
	vector<double> ret;
	for (auto it = _history.begin(); it != _history.end(); ++it)
		ret.push_back(it->second);

	return ret;
}

void Calculator::clearHistory()
{
	_history.clear();

}

void Calculator::deleteHistory(int index)
{
	if (index < 0)
		return;

	auto it = _history.begin();
	for (int i = index; i > 0; i--)
		++it;
	
	_history.erase(it);

	if (index == 0) {
		it = --_history.end();
		infix = it->first;
		output = it->second;
	}
}

vector<string> Calculator::toPostfix(string input)	// something off about this
{
	vector<string> output;

	for (auto it = input.begin(); it != input.end(); ++it)
	{
		int validChar = charType(*it);

		if (!validChar)
			return vector<string>();

		if (validChar == 1) {
			string temp = string(1,*it);
			// continued number means a multiple-digit number
			if (!output.empty() && it != input.begin() && charType(*(it-1)) == 1) {
				int number = stoi(output.back()) * 10 + stoi(temp);
				output.back() = to_string(number);
			}
			else {
				output.push_back(temp);
			}
		}

		else if (validChar == 2) {
			op_stack.push(*it);
		}

		else if (validChar == 3) {
			if (op_stack.empty())	// mismatched parentheses
				return vector<string>();

			while (op_stack.top() != '(') {
				if (op_stack.empty())
					return vector<string>();
				
				output.push_back(string(1,op_stack.top()));
				op_stack.pop();
			}

			if (op_stack.top() == '(')
				op_stack.pop();
		}

		else if (validChar >= 4) {
			while (!op_stack.empty() && charType(op_stack.top()) >= validChar) {
				output.push_back(string(1, op_stack.top()));
				op_stack.pop();
			}
			op_stack.push(*it);
		}
		
	}

	while (!op_stack.empty()) {
		if (op_stack.top() != '(')
			output.push_back(string(1, op_stack.top()));
		
		op_stack.pop();
	}

	return output;
}

int Calculator::charType(char letter)
{
	if ('0' <= letter && letter <= '9') // is a number 0-9
		return 1;

	else if (letter == '(')
		return 2;

	else if (letter == ')')
		return 3;

	else if (letter == '+' || letter == '-') // is a precedence 1 operator
		return 4;

	else if (letter == '*' || letter == '/') // is a precedence 2 operator
		return 5;
	
	else
		return 0;	// invalid char
}
