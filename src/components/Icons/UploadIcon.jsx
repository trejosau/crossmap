const UploadIcon = ({ fill = "#fff", ...props }) => {
    return (
        <>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                className="mx-auto mt-16 2xl:mt-40"
            >
                <path
                    d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                    stroke={fill}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 16V3M12 3L16 7.375M12 3L8 7.375"
                    stroke={fill}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <p className="text-center text-white text-2xl mt-2 font-basic-sans">
                Sube una miniatura
            </p>
        </>
    );
};

export default UploadIcon;
