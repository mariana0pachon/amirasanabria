export function Work({
  title,
  subtitle,
  description,
  photos,
  conclusion,
  italic,
  halfCover,
}) {
  return (
    <div className='work'>
      <img
        src={photos[0]}
        className={"cover" + (halfCover ? " half-cover" : "")}
      />
      <div className='text'>
        <div>
          <div className='title'>{title}</div>
          <div className='subtitle'>{subtitle}</div>
        </div>
        <div className={"description" + (italic ? " italic" : "")}>
          {description}
        </div>
      </div>
      {photos.slice(1).map((photo, idx) => {
        return <img src={photo} key={idx} className='photo' />;
      })}
      {conclusion && (
        <div className='grid-container'>
          <div className={"conclusion" + (italic ? " italic" : "")}>
            {conclusion}
          </div>
        </div>
      )}
    </div>
  );
}
