import styles from './table.module.css';

/* eslint-disable-next-line */
export interface TableProps {
  rows: Array<RowData>;
  columns: string[];
}
interface RowData {
  image: string
  productName: string;
  category: string;
  statusClass: string;
  status: string;
  price: string;
  createdAt: string;
}
export function Table(props: TableProps) {
  const { rows, columns } = props;

  return (
    <div className={styles['container']}>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
            <thead className="bg-light">
              <tr>
                <th>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="checkAll" />
                    <label className="form-check-label" htmlFor="checkAll">
                    </label>
                  </div>
                </th>
                {
                  columns.map((columns) =>
                  (
                    <>
                      <th key={columns}>
                        {columns}
                      </th>
                    </>
                  )
                  )
                }
              </tr>
            </thead>
            <tbody>
              {
                rows.map((rows) => (
                  <>
                    <tr>
                      <td>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="productOne" />
                          <label className="form-check-label" htmlFor="productOne">
                          </label>
                        </div>
                      </td>
                      <td>
                        <a href="#!"> <img src={rows.image} className="icon-shape icon-md" /></a>
                      </td>
                      <td><a href="#" className="text-reset">{rows.productName}</a></td>
                      <td>{rows.category}</td>
                      <td>
                        <span className={rows.statusClass}>{rows.status}</span>
                      </td>
                      <td>{rows.price}</td>
                      <td>{rows.createdAt}</td>
                      <td>
                        <div className="dropdown">
                          <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="feather-icon icon-more-vertical fs-5" />
                          </a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#"><i className="bi bi-trash me-3" />Delete</a></li>
                            <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-square me-3 " />Edit</a>
                            </li>
                          </ul>
                        </div>

                      </td>
                    </tr>
                  </>

                ))

              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
