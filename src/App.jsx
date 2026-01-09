import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ContactForm from "./components/ContactForm";
import FileUpload from "./components/FileUpload";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <div className="container py-4">
      <AuthProvider>
        <Header />
        <ProductList />
        <ContactForm />
        <FileUpload />
      </AuthProvider>
    </div>
  );
}

export default App;
