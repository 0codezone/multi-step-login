import CreateProfileForm from "./components/CreateProfileForm";
import MailVerification from "./components/MailVerification";
import Role from "./components/Role";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="w-full">
      <SignupForm />
      <CreateProfileForm />
      <Role />
      <MailVerification />
    </div>
  );
}

export default App;
