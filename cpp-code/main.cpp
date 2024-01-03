#include "calc.h"

int main()
{
    std::cout << "SCIENTIFIC CALCULATOR\n\n";
    
    string ans;
   
    Calculator c;
    std::cout << "Enter the expression without spaces. Enter q to quit." << std::endl;
    std::cin >> ans;

    while (ans != "q")
    {
        double result = c.computeNew(ans);

        if (result == ((float)(1e+300 * 1e+300)))
            std::cout << "$ Invalid" << std::endl;
        else
            std::cout << "$ " << ans << " = " << result << std::endl;

        std::cin >> ans;
    }

    return 1;   // Quit after computation
}

/*
* Still need to addreess:
* Unmatching parentheses
* Invalid expression
*/