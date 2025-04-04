import React, { useState, Suspense } from 'react'
import { componentsMap } from './componentsMap'
import './index.css'

// Define the type for dynamically loaded components
type LoadedComponentType = React.ComponentType<unknown> | null

const App: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('') // Destructure value + setter
  const [Component, setComponent] = useState<LoadedComponentType>(null) // Correct destructure

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value
    setSelectedComponent(selected)

    if (selected) {
      // Dynamically import the selected component
      const { default: LoadedComponent } = await componentsMap[selected]()
      setComponent(() => LoadedComponent) // Correct use of setter
    } else {
      setComponent(null)
    }
  }

  return (
    <div className='container'>
      <h1 className="main-header">Select a Component</h1>
      <div className="main-container">
        <select onChange={handleChange} value={selectedComponent}>
          <option value="">-- Choose a Component --</option>
          {Object.keys(componentsMap).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>

        <div style={{ marginTop: '20px' }}>
          <Suspense fallback={<div>Loading component...</div>}>
            {Component ? <Component /> : <div>Please select a component.</div>}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App
