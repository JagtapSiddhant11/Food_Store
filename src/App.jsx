import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet , Link} from "react-router-dom";
import { createContext ,useState , useContext } from "react";

const LoginContext = createContext()

const LoginProvider = ({children}) => {

 const [formData, setFormData] = useState(null)
  

 
  return (
    <LoginContext.Provider value={{formData, setFormData}}>
        {children}
    </LoginContext.Provider>
  )
}






function App() {

  return (
    <div className="h-screen w-full font-serif">
      <LoginProvider>
      <Header />


		  <Outlet/>
     
      <Footer />
      </LoginProvider>
     
    </div>
  );
}

export const CustomizedLoginHook = () => useContext(LoginContext)
export default App;
