import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import SettingsCard from "./components/Settings/SettingsCard";

function App() {
    return (
        <div className="App flex justify-between px-16 items-center h-screen w-100">
            <Sidebar />
            <SettingsCard />
        </div>
    );
}

export default App;
