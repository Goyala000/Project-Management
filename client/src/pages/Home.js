import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";
import Client from "../components/AddClientModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
      </div>

      <Projects />
      <hr />
      <Client />
    </>
  );
}