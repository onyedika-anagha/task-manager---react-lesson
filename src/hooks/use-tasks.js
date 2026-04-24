import { useState, useEffect, useCallback } from "react";
import { generateId, loadFromStorage, saveToStorage } from "../lib/tasks";

export function useTasks() {
  const [tasks, setTasks] = useState(loadFromStorage());

  useEffect(() => {
    saveToStorage(tasks);
  }, [tasks]);

  const addTask = useCallback(
    ({ title, description, dueDate = new Date(), priority = "medium" }) => {
      const now = new Date();

      const newTask = {
        id: generateId(),
        title,
        description,
        dueDate,
        priority,
        completed: false,
        createdAt: now,
        updatedAt: now,
      };

      setTasks((prev) => [...prev, newTask]);
    },
    [],
  );

  const updateTask = useCallback((id, updates) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, ...updates, updatedAt: new Date() } : task,
      ),
    );
  }, []);

  const removeTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const toggleTaskCompletion = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed, updatedAt: new Date() }
          : task,
      ),
    );
  }, []);

  const clearTasks = useCallback(() => {
    setTasks([]);
  }, []);

  const getByPriority = useCallback(
    (priority) => {
      return tasks.filter((task) => task.priority === priority);
    },
    [tasks],
  );

  const stats = {
    total: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    pending: tasks.filter((task) => !task.completed).length,
    byPriority: {
      high: tasks.filter((task) => task.priority === "high").length,
      medium: tasks.filter((task) => task.priority === "medium").length,
      low: tasks.filter((task) => task.priority === "low").length,
    },
  };

  const getPendingTasks = useCallback(() => {
    return tasks.filter((task) => !task.completed);
  }, [tasks]);

  const getCompletedTasks = useCallback(() => {
    return tasks.filter((task) => task.completed);
  }, [tasks]);

  return {
    tasks,
    addTask,
    updateTask,
    removeTask,
    toggleTaskCompletion,
    clearTasks,
    getByPriority,
    getPendingTasks,
    getCompletedTasks,
    stats,
  };
}
