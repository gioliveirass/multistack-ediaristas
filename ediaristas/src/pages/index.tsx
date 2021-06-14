import Head from 'next/head'

// importando os componentes criados
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';

export default function Home() {
  return (
    <div>
      {/* INSERINDO COMPONENTE SafeEnvironment */}
      <SafeEnvironment />

      
    </div>
  )
}
