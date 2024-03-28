
export default function Pagination({ handleNext, handlePrev, length, token }:any) {
  return (
    <div className="card-footer d-flex justify-content-between">
      {length > 1 && (
       <li onClick={handlePrev} className="btn btn-primary"><a className="text-light">Previous</a></li>
      )}
      <ul className="list-pagination pagination pagination-tabs card-pagination">
        <li className="active"></li>
      </ul>
      {token !== null && (
         <li onClick={handleNext} className="btn btn-primary"><a className="text-light">Next</a></li>
      )}
    </div>
  );
}