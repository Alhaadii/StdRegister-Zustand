import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useTemStudentStore = create((set) => ({
  temStudent: null,
  setTemStudent: (temStudent) => set({ temStudent }),
}));

const useStudentStore = create(
  devtools(
    persist(
      (set, get) => ({
        students: [],
        getStudents: () => get().students,
        addStudent: (student) => {
          try {
            set({ students: [...get().students, student] });
          } catch (error) {
            console.error("Failed to add student:", error);
          }
        },
        updateStudent: (student) => {
          try {
            const students = get().students.map((s) =>
              s.id === student.id ? student : s
            );
            set({ students });
          } catch (error) {
            console.error("Failed to update student:", error);
          }
        },
        deleteStudent: (studentId) => {
          try {
            if (confirm("Are you sure you want to delete this student?")) {
              const students = get().students.filter((s) => s.id !== studentId);
              set({ students });
            }
          } catch (error) {
            console.error("Failed to delete student:", error);
          }
        },
      }),
      {
        name: "student",
      }
    ),
    {
      anonymousActionType: "STUDENT",
    }
  )
);

export { useStudentStore, useTemStudentStore };
