import { Checklist } from "./Checklist";

function App() { 
  return (
    <div className="p-10">
      <Checklist
        data={[
          { id: 1, name: 'Mbeah', role: 'Manager' },
          {id: 2, name: 'Kratos', role: 'Developer'},
        ]}
        id="id"
        primary="name"
        secondary="role"
      />
    </div>
  )
}

export default App;