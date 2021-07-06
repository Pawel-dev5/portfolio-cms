import { useState } from "react"
import firebase from 'firebase/app';
import MaterialTable from 'material-table';
import { tableIcons } from './Icons'

export const Portfolio = ({ data }) => {
    // console.log(data)
    const [data2, setData2] = useState(data)
    const [show, setShow] = useState([])
    console.log(data2)
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

    console.log(data.projects)
    if (data.projects.length !== 0) {

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
                                if (rowData.category.length !== 0) {
                                    return (
                                        <>
                                            {rowData.category ? (
                                                <>
                                                    {
                                                        rowData.category.map((cat, id) => {
                                                            if (cat) {

                                                                return (
                                                                    <p key={id}>{cat}</p>
                                                                )
                                                            } else return <p>Brak</p>
                                                        })
                                                    }
                                                </>
                                            ) : (
                                                <>
                                                    <p>Brak</p>
                                                </>
                                            )}
                                        </>
                                    )
                                } else return <p>Brak</p>
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
                                    console.log('elooo ' + newData)
                                    const postID = data.projects.length;
                                    console.log(postID)
                                    const ref = firebase.database().ref('PL' + '/portfolio').child('projects');
                                    const pro = data.projects;
                                    const updateItem = {
                                        title: newData.title,
                                        description: newData.description,
                                        git: newData.git,
                                        image: newData.image,
                                        url: newData.url,
                                        category: [newData.category]
                                        // id: menu.length + 1,
                                        // href: title

                                    };
                                    var updates = {};
                                    updates[postID] = updateItem;
                                    // setData2([...pro, meniItem])
                                    ref.update(updates)
                                    // setData2(data.pro)
                                    resolve();
                                }, 1000);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    console.log('update całego wiersza')
                                    // const ref = firebase.database().ref('PL' + '/portfolio' + '/projects').child(newData.id - 1);
                                    // // ref.on("value", snapshot => {
                                    // //     const fetchData = snapshot.val()
                                    // const postID = data.projects.length;

                                    // const postData = {
                                    //     title: newData,
                                    //     // description: 
                                    //     // id: data2.length + 1,
                                    //     // href: title
                                    // };
                                    // console.log(postData)
                                    // var updates = {};
                                    // updates[postID] = postData;

                                    // // updates['/projects/'] = postData;
                                    // // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
                                    // // setData2([...data2, postData])

                                    // ref.update(updates)

                                    resolve();
                                }, 1000);
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    // const dataDelete = [...data2];
                                    // const index = oldData.dataDelete.id;
                                    // dataDelete.splice(index, 1);
                                    // setData2([...dataDelete]);
                                    const id = oldData.id
                                    console.log(oldData)
                                    const ref = firebase.database().ref('PL' + '/portfolio' + '/projects').child(oldData.id);
                                    ref.on("value", snapshot => {
                                        const fetchData = snapshot.val()
                                        console.log(fetchData)
                                        // ref.remove();
                                        // setData2(data)
                                    })
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
                                console.log(rowData.title)
                                console.log(rowData.id)

                                // const ref = firebase.database().ref('PL' + '/portfolio' + '/projects').child(rowData.id - 1);
                                // // ref.on("value", snapshot => {
                                // //     const fetchData = snapshot.val()
                                // const postID = data.projects.length;

                                // const postData = {
                                //     title: newValue,
                                //     // description: 
                                //     // id: data2.length + 1,
                                //     // href: title
                                // };
                                // console.log(postData)
                                // var updates = {};
                                // updates[postID] = postData;

                                // // updates['/projects/'] = postData;
                                // // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
                                // setData2([...data2, postData])

                                // ref.update(updates)

                                // setShow([...show, fetchData])
                                //     setTranslateData(fetchData.PL)
                                //     setAppState({
                                //         isLoading: false
                                //     })
                                // });

                                // console.log(ref)
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
                                if (rowData) {
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
                                } else return <p>brak</p>
                            },
                        },
                    ]}
                />
            </>
        )
    } else return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    )
}