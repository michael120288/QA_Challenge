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

### Postman

To run API tests in Postman you need to import .json files. 
1. Open Postman.
2. Click file-import (`command+O` for Mac or `ctrl+O` for Windows)
3. Choose directory from the project `~/QA_Challenge/postman`
4. Open `Collection`

#### Note

In this project we have allure report plugin, that generate reports.  
To open allure report you need to install `Java` (because there are some dependencies in it). 
Check if you have already installed Java on your machine by using command `java -version` 
You can download it from website `oracle.com/java`


