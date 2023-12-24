# 🧮 Scientific calculator

As an engineering student who often forget to bring their TI-84 to class, I found it frustrating that there isn’t any calculator app available that features both scientific expression calculation and user-friendly, aesthetically pleasing design. After gaining knowledge on data structures and proficiency in C++, I wanted to build my own mobile scientific notation calculator, similar to [Shubham Singh’s work](https://www.instagram.com/p/CmmCcuHPijd/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==) but providing even more functions. I will apply the [Shunting yard algorithm](https://en.wikipedia.org/wiki/Shunting_yard_algorithm#:~:text=In%20computer%20science%2C%20the%20shunting,abstract%20syntax%20tree%20(AST).) and tree structure for the functionality and JavaScript frameworks (or other frontend frameworks) for the graphic interface.

🚧 This project is currently in progress. Any questions and suggesetions are welcome.

## I/O

At the preliminary step, a mathematical expression of four basic operations and brackets is given as the input. The output is computed and displayed in decimal. An instance of calculator class can take multiple expressions, one at a time.

Later, nearly all features in commercial calculators in the market will be implemented. The output may be displayed in its exact form.

## Structure

The operations performs on a class of calculator. Its member variables are an operator stack to function as described in the algorithm and a dictionary of calculation history. Thus, the class has member functions that can parse the string, convert into postfix, compute the postfix expression, and grant read access to the history. These are available for view in [calc.h](https://github.com/szshn/scientific-calculator/blob/master/calc.h) file.

## References

[Shunting yard algorithm](https://en.wikipedia.org/wiki/Shunting_yard_algorithm#:~:text=In%20computer%20science%2C%20the%20shunting,abstract%20syntax%20tree%20(AST))

[Calculator app by Shubham Singh • iOS Developer on Instagram](https://www.instagram.com/p/CmmCcuHPijd/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==)
