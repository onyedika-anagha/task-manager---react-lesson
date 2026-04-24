import { useState } from "react";
import { TopNav } from "./components/layout/TopNav";
import { Sidebar } from "./components/layout/Sidebar";
import { HeaderSection } from "./components/sections/HeaderSection";
import { TaskList } from "./components/sections/TaskList";
import { StatsCard } from "./components/sections/StatsCard";
import { UpcomingDeadlines } from "./components/sections/UpcomingDeadlines";
import { MotivationCard } from "./components/sections/MotivationCard";
import { FloatingActionButton } from "./components/sections/FloatingActionButton";
import { ModalOverlay } from "./components/sections/ModalOverlay";
import { generateId } from "./lib/tasks";
import { useTasks } from "./hooks/use-tasks";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { tasks, addTask, stats, toggleTaskCompletion, clearTasks } =
    useTasks();

  return (
    <div className="min-h-screen bg-surface-container-low">
      {/* Top Navigation */}
      <TopNav onCreateTask={openModal} />

      {/* Main Layout */}
      <div className="flex max-w-screen-2xl mx-auto px-8 py-10 gap-12">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 space-y-12">
          {/* Page Header */}
          <HeaderSection stats={stats} />

          {/* Bento Grid - Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Task List - Left Column */}
            <div className="md:col-span-8">
              <TaskList
                tasks={tasks}
                toggleTaskCompletion={toggleTaskCompletion}
              />
            </div>

            {/* Right Sidebar - Stats & Info */}
            <div className="md:col-span-4 space-y-8">
              <StatsCard stats={stats} />
              <UpcomingDeadlines />
              <MotivationCard />
            </div>
          </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton onCreateTask={openModal} />
      {/* Modal Overlay */}
      <ModalOverlay
        isOpen={isModalOpen}
        onClose={closeModal}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
