import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function Table_Object({rows, columns, pageSize}) {

    return ( 
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            // checkboxSelection
        />
        </div>
     );
}

export default Table_Object;