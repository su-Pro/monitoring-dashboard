import Typography from '@mui/material/Typography';
import React from "react";

const NotesHeader: React.FC = () => {
    return (
        <div className="flex flex-col sm:flex-row flex-1 items-center justify-between p-8 sm:p-24 sm:px-32 relative">
            <div className="flex items-center">
                <Typography className="text-24 md:text-32 font-extrabold tracking-tight leading-none">
                    Notes
                </Typography>
            </div>
        </div>
    )
}
export default NotesHeader
