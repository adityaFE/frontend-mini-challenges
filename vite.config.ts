import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(()=>{
  return {
    define:{
      'process.env':{},
      global:'globalThis'
    },
    base:'./',
    server:{
      port:3000,
      open:true
    },
    plugins: [react()],
  }
})
