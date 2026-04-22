import './globals.css';
import { Button, Badge, Input, Card, CardBody, CardTitle, Alert, Avatar, Progress } from './index';

export default function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <Badge variant="amber">v1.0.0 • NC Design System</Badge>
        <h1 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>
          NC <span style={{ color: 'var(--accent-amber)', fontStyle: 'italic' }}>UI Kit</span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          A warm editorial component library — built with React + CSS Modules
        </p>
      </header>

      <section style={{ display: 'grid', gap: '3rem' }}>
        {/* Sección de Botones */}
        <div>
          <h2 style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Buttons</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="amber">Amber</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>

        {/* Sección de Feedback */}
        <div>
          <h2 style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Feedback</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <Alert variant="success" title="Success">Tu perfil ha sido actualizado.</Alert>
            <Alert variant="warning" title="Atención">Revisa los permisos de acceso.</Alert>
          </div>
        </div>

        {/* Sección de Cards y Progreso */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <Card>
            <CardBody>
              <CardTitle>Project Status</CardTitle>
              <Progress value={75} label="Portfolio Progress" />
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <Avatar initials="NC" color="amber" online />
                <Avatar initials="JD" color="blue" />
              </div>
            </CardBody>
          </Card>
          
          <div>
            <Input label="Email Address" placeholder="tu@correo.com" helperText="Nunca compartiremos tu email." />
          </div>
        </div>
      </section>
    </div>
  );
}