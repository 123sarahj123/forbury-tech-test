# forbury-tech-test

# Setup/Installation
Using Visual Studio, open the generated .csproj file (forbury-tech-test.csproj), and run the app as normal from there.

The build process restores npm dependencies on the first run, which can take several minutes. Subsequent builds are much faster.

As the application runs up, you may be presented with this in the terminal before it compiles successfully. Select y or N based on your preference:
"Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics. (y/N)"


The application should be served at:
https://localhost:44405/

# What I'd do next time/if I had more time
- Write unit tests.
- Spend more time learning this tech stack (haven't really used Angular/.NET core) so I could better structure the files, and approach this problem in a more modularised fashion (rather than "just get it going"). I ended up loading all functionality into the component.ts, wheras that functionality
should have been delegated to a controller. 
- Apply CSS and styling, because it is very ugly. I chose to focus on functionality first. I apologize for the offensive layout
- Form validation. Error handling for if a user did not enter a number in the form. I just made the default values 0 for the inputs.
- Tidy up the application. There is a lot of redundant/placeholder code as I just used the start project to get going
- More structured git commits. Usually I commit small and commit often