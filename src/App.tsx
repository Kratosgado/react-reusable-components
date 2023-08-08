import { Checklist } from "./Checklist";

function App() { 
  return (
    <div className="p-10">
      <Checklist
        data={[
          { id: 1, name: 'Bridgette', role: 'Manager' },
          { id: 2, name: 'Kratos', role: 'Developer' },
          { id: 3, name: 'Killcode', role: 'Developer' },
          { id: 4, name: 'Prodigygenes', role: 'Developer' },
          { id: 5, name: 'Keren', role: 'UX' },
          { id: 6, name: 'NuellaViva', role: 'QA' }
        ]}
        id="id"
        primary="name"
        secondary="role"
        style={{
          width: '300px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      />
    </div>
  )
}

export default App;