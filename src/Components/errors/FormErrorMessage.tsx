import React from 'react';

type ErrorProps = {
    msg: string | undefined;
};

const FormErrorMessage: React.FC<ErrorProps> = ({ msg }) => {
    return (
        <>
            {msg && (
                <p className="text-red-300 text-xs  mx-4">
                    {msg}
                </p>
            )}
        </>
    );
};

export default FormErrorMessage;
