
/* eslint-disable-next-line */
export interface TableHeaderProps {
    searchPlaceholder?: string;
    statusOptions: string[];
    handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TableHeader(props: TableHeaderProps) {

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) {
            props.onChange(event);
        }
    }
    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (props.handleChange) {
            props.handleChange(event);
        }
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <div className="px-6 py-6 ">
                <div className="row justify-content-between">
                    {/* form */}
                    {props?.searchPlaceholder &&
                        <div className="col-lg-4 col-md-6 col-12 mb-2 mb-lg-0">
                            <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
                                <input className="form-control" type="search" placeholder={props.searchPlaceholder} aria-label="Search" onChange={handleOnChange} />
                            </form>
                        </div>
                    }
                    {/* select option */}
                    <div className="col-lg-2 col-md-4 col-12">
                        <select className="form-select" onChange={(e: any) => handleFilterChange(e)}>
                            {props.statusOptions.map((option) => (
                                <option key={option} value={option.toLowerCase()}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableHeader;
