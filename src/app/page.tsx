import os from 'os';

export default function Home() {
  const hostname = os.hostname();

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Hello Kubernetes World!</h1>
      <p>If you see this, I am running inside a container!</p>
      <div style={{ 
        padding: '20px', 
        background: '#f0f0f0', 
        borderRadius: '8px', 
        marginTop: '20px' 
      }}>
        <strong>Current Pod ID (Hostname):</strong> 
        <span style={{ color: '#0070f3', marginLeft: '10px' }}>{hostname}</span>
      </div>
    </div>
  );
}