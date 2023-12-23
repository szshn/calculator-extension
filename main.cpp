#include "calc.h"

int main()
{
    std::cout << "SCIENTIFIC CALCULATOR\n\n";
    
    string ans;
    /*
    while (ans != "s" && ans != "q")
    {
        if (!ans.empty())
            std::cout << "Invalid input. ";
        
        std::cout << "Press s to start and q to quit.\n";
        std::cin >> ans;
    }

    if (ans == "q")
    {
        std::cout << "Ending the program...\n";
        return 0;   // Quit without computation
    }
    */
   
    Calculator c;
    //std::cout << "Enter the expression without spaces: ";
    //std::cin >> ans;

    //std::cout << "$ " << ans << " = " << c.computeNew(ans) << endl;

    return 1;   // Quit after computation
}
