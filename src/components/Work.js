// import { useState } from "react"
// import firebase from 'firebase/app';
import MaterialTable from 'material-table';
import { tableIcons } from './Icons'

export const Work = ({ data }) => {
    return (
        <>
            <MaterialTable
                icons={tableIcons}
                title={data.worktitle}
                data={data.work}
                options={{
                    exportButton: true,
                    filtering: true,
                    cellStyle: {
                        // color: 'red',
                        width: '100px'
                    }
                }}
                columns={[
                    // { title: 'Id', field: 'id' },
                    { title: 'Company', field: 'title' },
                    // { title: 'Description', field: 'description' },
                    { title: 'Seniority', field: 'company' },
                    { title: 'Years', field: 'years' },
                    // { title: 'Image url', field: 'image' },
                    {
                        title: 'Description',
                        field: 'description',
                        render: rowData => {
                            return (
                                <>
                                    {
                                        rowData.description.map((cat, id) => {
                                            return (
                                                <p key={id}>{cat.title}<br />{cat.subtitle}</p>
                                            )
                                        })
                                    }
                                </>
                            )
                        },
                    },
                ]}

                editable={{
                    onBulkUpdate: changes =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                /* setData([...data, newData]); */
                                // setData2([...data2, changes])
                                // console.log(data2)
                                resolve();
                            }, 1000);
                        }),
                    onRowAddCancelled: rowData => console.log('Row adding cancelled'),
                    onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                /* setData([...data, newData]); */

                                resolve();
                            }, 1000);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                // setData2([...dataUpdate]);

                                resolve();
                            }, 1000);
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                // setData2([...dataDelete]);

                                resolve();
                            }, 1000);
                        })
                }}

                // Edit data function
                cellEditable={{
                    cellStyle: {},
                    onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
                        return new Promise((resolve, reject) => {
                            console.log('newValue: ' + newValue);
                            console.log(rowData)
                            console.log(columnDef)

                            // Działa ale dodaje się jako kolejny obiekt, trzeba wskazać na konkretny wiersz
                            // const ref = firebase.database().ref('PL' + '/portfolio').child("projects");
                            // ref.update({
                            //     title: newValue,
                            // });
                            setTimeout(resolve, 4000);
                        });
                    }
                }}

                detailPanel={[
                    {
                        tooltip: 'Show Name',
                        render: rowData => {
                            return (
                                <>
                                    <div>
                                        {rowData.title}
                                    </div>
                                    <div>
                                        {rowData.description}
                                    </div>
                                </>
                            )
                        },
                    },
                ]}
            />
        </>
    )
}