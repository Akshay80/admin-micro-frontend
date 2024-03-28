'use client';

export interface AdminPageHeaderProps {
  name?: string
  buttonName?: string
  link?: string
}

export function AdminPageHeader(props: AdminPageHeaderProps) {
  
  return (
    <div className="row mb-3 px-5">
      <div className="col-md-12">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h2>{props.name}</h2>
          </div>
          {
            props.buttonName && <div>
              <a href={props?.link} className="btn btn-dark">{props.buttonName}</a>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default AdminPageHeader;