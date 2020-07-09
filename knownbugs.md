**Known Bugs - Error Log**


**Existing Bugs**
- not removing content for “no” answers to Questions: 1, 2, 3, 4, 5 (all of the yes/no questions)


**Fixed Bugs**
*fixed by returning userName from first function and declaring for global use*
- userName likely not passed on for future use
- not asking Question 6
- not asking Question 7
*moved prompt for pet interest into pet function*
*changed definition of badSport*
- variables that badSport is referencing for assignment in Line 126 include userInterestedInBackground.  userInterestedInBackground is defined locally in each function and not global variables to be used on Line 126.
*add logical condition statement to IF STATEMENT for response to pet interest*
