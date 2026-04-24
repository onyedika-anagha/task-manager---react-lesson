export const STORAGE_KEY = "task_manager_tasks";

export const loadFromStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
export const saveToStorage = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};
export const generateId = () => {
  return "task_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7);
};
