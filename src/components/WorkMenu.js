import { convertToTitle } from "../utils";

export function WorkMenu({ covers, workType }) {
  return (
    <div className='work-menu'>
      {Object.keys(covers).map((work) => (
        <a key={work} href={`/${workType}/${work}`} className='work-item'>
          <img src={covers[work]} alt={work} />
          <div className='label'>{convertToTitle(work)}</div>
        </a>
      ))}
    </div>
  );
}
