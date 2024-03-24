export function Work({ title, subtitle, description, photos, conclusion }) {
  return (
    <div className='work'>
      <img src={photos[0]} className='cover' />
      <div className='text'>
        <div>
          <div className='title'>{title}</div>
          <div className='subtitle'>{subtitle}</div>
        </div>
        <div className='description'>{description}</div>
      </div>
      {photos.slice(1).map((photo, idx) => {
        return <img src={photo} key={idx} className='photo' />;
      })}
      <div className='conclusion'>{conclusion}</div>
    </div>
  );
}
