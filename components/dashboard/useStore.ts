import create from "zustand";

interface Task {
  id: number;
  text: string;
  completed: boolean;
  time: string;
  timeCreated: string;
}

interface Store {
  tasks: Task[];
  points: number;
  addTask: (text: string, time: string) => void;
  saveTask: (updatedTask: Task) => void;
  completeTask: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
  sortTasks: (criteria: string) => void;
}

const useStore = create<Store>((set) => ({
  tasks: [],
  points: 0,
  addTask: (text: string, time: string) => set((state) => {
    const newTask = {
      id: state.tasks.length + 1,
      text,
      completed: false,
      time,
      timeCreated: new Date().toLocaleTimeString(),
    };
    return { tasks: [...state.tasks, newTask] };
  }),
  saveTask: (updatedTask: Task) => set((state) => ({
    tasks: state.tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)),
  })),
  completeTask: (taskId: number) => set((state) => {
    const updatedTasks = state.tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    return {
      tasks: updatedTasks,
      points: state.points + 10,
    };
  }),
  deleteTask: (taskId: number) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== taskId),
  })),
  sortTasks: (criteria: string) => set((state) => {
    let sortedTasks = [...state.tasks];

    switch (criteria) {
      case "completion":
        sortedTasks.sort((a, b) => Number(a.completed) - Number(b.completed));
        break;
      case "time":
        sortedTasks.sort((a, b) => (a.time > b.time ? 1 : -1));
        break;
      case "create":
        sortedTasks.sort((a, b) => (a.timeCreated > b.timeCreated ? 1 : -1));
        break;
      case "alphabet":
        sortedTasks.sort((a, b) => a.text.localeCompare(b.text));
        break;
      default:
        break;
    }

    return { tasks: sortedTasks };
  }),
}));

export default useStore;
