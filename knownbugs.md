Known Bugs

- userName likely not passed on for future use
- not removing content for “no” answers to Questions: 1, 2, 3, 4, 5 (all of the yes/no questions)
- not asking Question 6
- not asking Question 7
- variables that badSport is referencing for assignment in Line 126 include userInterestedInBackground.  userInterestedInBackground is defined locally in each function and not global variables to be used on Line 126.