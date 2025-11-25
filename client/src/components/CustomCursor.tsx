import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number; color: string }>>([]);

  useEffect(() => {
    let trailId = 0;
    const colors = [
      'hsl(351, 100%, 61%)',
      'hsl(221, 100%, 60%)',
      'hsl(262, 100%, 70%)',
      'hsl(18, 100%, 60%)'
    ];

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++, color: randomColor };
      setTrails(prev => [...prev, newTrail]);

      setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== newTrail.id));
      }, 800);

      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.tagName === 'INPUT' ||
                           target.tagName === 'TEXTAREA' ||
                           target.closest('button, a, input, textarea') !== null;
      setIsHovering(isInteractive);
    };

    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = '100px';
      ripple.style.height = '100px';
      document.body.appendChild(ripple);

      setTimeout(() => {
        document.body.removeChild(ripple);
      }, 600);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            background: trail.color,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </>
  );
}
