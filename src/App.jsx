import "./globals.css";
// Importamos todo desde la carpeta components (Vite buscará el index automáticamente)
import { Button, Badge, Alert, Avatar, Progress, Input } from "./components";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", paddingBottom: "5rem" }}>
      <header style={{ textAlign: "center", marginBottom: "4rem" }}>
        <Badge variant="amber">v1.0.0 • NC Design System</Badge>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", marginTop: "1rem", color: "var(--text-main)" }}>
          NC <span style={{ color: "var(--accent-amber)", fontStyle: "italic" }}>UI Kit</span>
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
          Biblioteca de componentes con estilo editorial — Cuenca, 2026.
        </p>
      </header>

      <section style={{ display: "grid", gap: "3rem" }}>
        {/* Fila de Botones */}
        <div>
          <h3 style={{ marginBottom: "1rem", opacity: 0.6, fontSize: "0.8rem", letterSpacing: "1px", textTransform: "uppercase" }}>Buttons</h3>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button variant="primary">Primary Action</Button>
            <Button variant="amber">Amber Style</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Fila de Feedback y Entradas */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          <div>
            <h3 style={{ marginBottom: "1rem", opacity: 0.6, fontSize: "0.8rem", letterSpacing: "1px", textTransform: "uppercase" }}>Forms</h3>
            <Input label="Tu Email" placeholder="ejemplo@correo.com" helperText="Te avisaremos cuando haya actualizaciones." />
          </div>
          <div>
            <h3 style={{ marginBottom: "1rem", opacity: 0.6, fontSize: "0.8rem", letterSpacing: "1px", textTransform: "uppercase" }}>Status</h3>
            <Alert variant="info" title="Información">
              Estamos trabajando en la v2.0 de este kit.
            </Alert>
          </div>
        </div>

        {/* Perfil y Progreso */}
        <div style={{ padding: "2rem", background: "rgba(0,0,0,0.03)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Avatar initials="NC" color="amber" online />
            <div>
              <p style={{ fontWeight: "600" }}>NC Developer</p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Software Engineer Student</p>
            </div>
          </div>
          <div style={{ width: "200px" }}>
            <Progress value={85} label="Portfolio Completion" color="amber" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;