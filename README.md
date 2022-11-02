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
- Set up functionality to destroy and recreate the table on each time you click the calculate button. Currently you need to refresh, else it will keep appending to the table.
- Format the table and round the numbers. Right now, it is hard to read, and the table does not rebuild itself
- Consolidate the table. I left all of the columns there so it would be easier to locate where I went wrong if I made a mistake or misunderstood the assignment
- Spend more time learning this tech stack (haven't really used Angular/.NET core) so I could better structure the files, and approach this problem in a more modularised fashion (rather than "just get it going"). I ended up loading all functionality into the component.ts, wheras that functionality
should have been delegated to a controller. Also if I knew this stack better, I would have spent time making things pretty :p
- Apply CSS and styling, because it is very ugly. I chose to focus on functionality first. I apologize for the offensive layout
- Form validation. Error handling for if a user inputted something invalid. I just made the default values 0 for the inputs, and assume the user will put numbers in using the correct format (i.e. 2.5 if 2.5%).
- Tidy up the application. There is a lot of redundant/placeholder code as I just used the Angular starter project to get going
- More structured git commits. Usually I commit small and commit often. I also wouldn't be soley commiting to main, and would do each feature on a feature branch
- Refactor. Helper functions calculateTierRent and calculateTierLowEndBracket could be rolled into one

# Assumptions/Decisions
- That the compounding sales start from year 2. I.e. the annual sales for year two will have the multiplier of 2.5% applied
- For simplicity's sake, I only calculated the bottom range for each tier, rather than including an upper/lower range
- I left all of the columns there so it would be easier to locate where I went wrong if I made a mistake or misunderstood the assignment