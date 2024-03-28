const Spinner = (props: any) => {
    return (
        props?.show ?
            <div className="d-flex justify-content-center align-items-lg-center" style={{ height: "30rem" }}>
                <div className="spinner-border primary" role="status">
                </div>
            </div> : props?.children
    )
}

export default Spinner