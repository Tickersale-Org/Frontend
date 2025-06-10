import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />

      {/* Main content with enough height to test scroll effect */}
      <main style={{ paddingTop: "70px", flex: 1 }}>
        <section
          style={{
            height: "100vh",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <h1>¡Bienvenido a Tickersale!</h1>
            <p>Desplázate hacia abajo para ver el navbar y footer</p>
          </div>
        </section>

        <section
          style={{
            height: "100vh",
            background: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#333",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          <div>
            <h2>Sección de Entradas</h2>
            <p>Aquí puedes ver las entradas disponibles</p>
          </div>
        </section>

        <section
          style={{
            height: "100vh",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          <div>
            <h2>Sección de Contacto</h2>
            <p>Ponte en contacto con nosotros</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
