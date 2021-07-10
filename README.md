//QA_Challenge

## Get repository

Run command `git clone git@github.com:michael120288/QA_Challenge.git` with SSH key 
or run `git clone https://github.com/michael120288/QA_Challenge.git` with https web url.

## Local setup

Run `npm install`

To run UI tests use command `npm test` or run script `test` in package.json file.

To run API tests use command `newman:test-run`

You can generate reposts for tests by using command `reposrt:generate`(for UI tests)
and `newman:generate-report`(for API tests).  

In this project we have allure report plugin, that will generate report after you run `test`. 
To open allure report you need to install `Java` as well(because there are some dependencies in it). 
Check if you have already installed Java on your machine by using command `java -version` 
You can download it from website `oracle.com/java`


