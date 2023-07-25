import React from 'react'
import CreateUserForm from "./core/components/react-native/create-user-form";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();



export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CreateUserForm />
    </QueryClientProvider>
    )
}

