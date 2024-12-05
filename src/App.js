import AuthProvider from "./context/AuthProvider";
import BlogProvider from "./context/BlogProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <AppRouter />
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;
