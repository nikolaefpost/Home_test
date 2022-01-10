import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({pages, setPaginCount}) {
    console.log(pages)
    return (
        <Stack spacing={2}>
            <Pagination
                count={pages}
                variant="outlined"
                shape="rounded"
                onChange={(event,page)=>{
                    setPaginCount(page)
                }}
            />
        </Stack>
    );
}