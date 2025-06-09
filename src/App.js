import Lanyard from './Lanyard';
import wowza from './wowza.gif';

export default function App() {
  return (
    <div 
      style={{ 
        position: 'relative', 
        width: '100vw', 
        height: '100vh', 
        backgroundColor: '#66284A',  // hotpink base color
        overflow: 'hidden'  // good practice for absolute children
      }}
    >
      {/* Semi-transparent background GIF */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${wowza})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: 0.5,    // fades GIF into hotpink behind it
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Foreground content */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
}
