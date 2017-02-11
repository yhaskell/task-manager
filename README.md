# Task manager

Project task management written in react/redux

## Features

1. Tasks are sorted by projects
2. Users can add tasks, mark them as complete, remove them
3. Each task has a name and possibly a description, and also comments
4. Task can assigned to someone and have one of four states: 
  (a) neutral
  (b) deferred
  (c) active
  (d) done.
5. Tasks can be grouped. Meta-tasks progress can be computed by 
   a sum of subtasks progress.

## Technologies
Client is written in react/redux; server will be written in typescript using 
express.js + pgsql.

## Deploying

To start it, do the following:
```
$ git clone https://github.com/yhaskell/task-manager.git 
$ cd task-manager
$ npm install 
$ npm start
```

That's all.

