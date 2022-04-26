# Day-Planner


## Live link to deployed app
https://mclanea92.github.io/Day-Planner/


## List of technologies used
-Javascript
-JQuery
-Bootstrap


## About Application:
This application, you are able to save things to do during the day to local storage based on the time of day you desire.  The time of day determines what color that the ties for each hour are.  The Gray color is for past hours, Red is for the current hour and Green is for the hours that are still coming up in the day.


## User Story

My task for this homework is to create a day planner that is interactive and saves the data so it stays if you refresh.  The color of the times change based on the time of day.

## My Task

My task is to create a daily planner for my client.  This will let you save events per hour and the hours are shown if they are present past or future hours based on the color.

## Acceptance Citeria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


## Github Link
https://mclanea92.github.io/Day-Planner/


## Screenshots

The screenshot below shows that the day and date are displayed at the top of the page

![day and date at top of page](./topofpage.png)


The screenshot below shows that when save button hit, it saves to localstorage and corresponds to the correct time of day.  When the page is refreshed, it will reload into the same time slot.

![screenshot of localstorage](./localStorage.png)
