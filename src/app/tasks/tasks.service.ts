import { Injectable } from '@angular/core';

import { type NewTaskData } from './task/task.model';

@Injectable({providedIn: 'root'})    // used in conjuntion with the constructor and get function for Dependency Injection
export class TasksService {
   private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31'
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Master Angular',
          summary: 'Build a first prototype of the online shop website.',
          dueDate: '2024-10-21'
        },
        {
          id: 't3',
          userId: 'u2',
          title: 'Master Angular',
          summary: 'Prepare and describe an issue template which will help with project management.',
          dueDate: '2024-07-18'
        }
      ];

      constructor() {
        const tasks = localStorage.getItem('tasks');

        if(tasks) {
          this.tasks = JSON.parse(tasks);
        }

      }

      getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
      }

      addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          });
          this.saveTasks();
      }

      removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
        this.saveTasks();
      }

      private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    
}