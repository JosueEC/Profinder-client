import { create } from 'zustand'

export const useSessionState = create((set) => ({
  session: {
    id: 1,
    name: '',
    email: '',
    password: '',
    user: '',
    message: '',
    status: false
  },
  emptySession: {
    id: 1,
    name: '',
    email: '',
    password: '',
    user: '',
    message: '',
    status: false
  },

  setSessionState: (session) => set(() => ({ session })),
  removeSessionState: () => set((state) => ({ session: state.emptySession }))
}))