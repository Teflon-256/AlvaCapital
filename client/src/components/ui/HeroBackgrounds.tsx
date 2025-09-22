import React from 'react';

const HeroBackgrounds: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div
        style={{
          backgroundImage: 'url("/attached-assets/generated-images/Financial_tech_background_1c711708.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          borderRadius: '12px',
        }}
      />
      <div
        style={{
          backgroundImage: 'url("/attached-assets/generated-images/Futuristic_Wall_Street_9156e3fe.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          borderRadius: '12px',
        }}
      />
      <div
        style={{
          backgroundImage: 'url("/attached-assets/generated-images/Futuristic_stock_exchange_wallpaper_8045bc0a.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          borderRadius: '12px',
        }}
      />
    </div>
  );
};

export default HeroBackgrounds;
