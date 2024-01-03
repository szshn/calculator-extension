#include <map>
#include <stack>
#include <string>
#include <vector>
#include <iostream>

#pragma once

using namespace std;
class Calculator {
public:
	Calculator();
	Calculator(map<string, double> history);
	~Calculator();

	double computeNew(string expression);
	vector<string> infixHistory();
	vector<double> valueHistory();
	void clearHistory();
	void deleteHistory(int index);

private:
	vector<string> toPostfix(string input);
	int charType(char letter);

	string infix;
	vector<string> postfix;
	double output;
	stack<char> op_stack;
	map<string, double> _history;
};