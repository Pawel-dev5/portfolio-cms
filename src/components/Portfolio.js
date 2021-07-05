import { useState } from "react"
import firebase from 'firebase/app';
import MaterialTable from 'material-table';
import { tableIcons } from './Icons'

export const Portfolio = ({ data }) => {
    // console.log(data)
    const [data2, setData2] = useState(data)
    // console.log(data2.projects)
    const [sumDat, setSumDat] = useState({
        title: data.title,
        projects: [{
            description: data.projects.description,
            title: data.projects.title,
            // git: data.git,
            // category: data.category
        }],
    });
    const handleChangeData = (e) => {
        const { name, value } = e.target;
        setSumDat({
            ...sumDat,
            [name]: value
        });
    };
    const completeHeader = () => {
        const ref = firebase.database().ref('PL').child("portfolio");
        ref.update({
            title: sumDat.title,
            description: sumDat.description,
            git: sumDat.git,
            category: sumDat.category
        });
    };
    console.log(sumDat)
    return (
        <>
            <MaterialTable
                icons={tableIcons}
                title="Portfolio"
                data={data.projects}
                options={{
                    exportButton: true,
                    filtering: true,
                    cellStyle: {
                        // color: 'red',
                        width: '100px'
                    }
                }}
                columns={[
                    { title: 'Id', field: 'id' },
                    { title: 'Title', field: 'title' },
                    { title: 'Description', field: 'description' },
                    { title: 'Git url', field: 'git' },
                    { title: 'Live url', field: 'url' },
                    { title: 'Image url', field: 'image' },
                    {
                        title: 'Categories',
                        field: 'category',
                        render: rowData => {
                            return (
                                <>
                                    {
                                        rowData.category.map((cat, id) => {
                                            return (
                                                <p key={id}>{cat}</p>
                                            )
                                        })
                                    }
                                </>
                            )
                        },
                        // lookup: { 34: 'react', 63: 'wordpress', 20: 'others', 50: 'all' },
                    },
                ]}

                editable={{
                    // isEditable: rowData => rowData.name === 'a', // only name(a) rows would be editable
                    // isEditHidden: rowData => rowData.title !== 'Portfolio',
                    // isDeletable: rowData => rowData.name !== undefined, // only name(b) rows would be deletable,
                    // isDeleteHidden: rowData => rowData.name === 'y',
                    onBulkUpdate: changes =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                /* setData([...data, newData]); */
                                setData2([...data2, changes])
                                console.log(data2)
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
                                setData2([...dataUpdate]);

                                resolve();
                            }, 1000);
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData2([...dataDelete]);

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