import React from "react";
import json_data from "./data.json"

class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            data:json_data,
        }
        console.log(this.state.list)

        this.callAPI = this.callAPI.bind(this)
        this.callAPI()
        this.drawData()
        // json_data()
    }

    // function json_data() {
    //     this.setState({
    //         data:json_data
    //     })
    // }

    callAPI() {
        fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            console.log(json_data)
            this.setState({
                list:data,
                // data:json_data
            })
        })
    }





    drawData () {
        console.log("124");
        // let body = document.querySelector(".tableBody");
        let td = [];
        let data = this.state.data[0].Data;
        console.log(this.state.data[0].Data);
        for (let key in data) {
            let tr = document.createElement("tr");
            let row = data[key];
            console.log(row)
            let th = []
    
            for (let index in row) {
                // let td = document.createElement("td");
                var cell = row[index];
                console.log(cell);
                let tdTEXT = "";
                if (cell === null || cell === undefined) {
                    tdTEXT = ``;
                    cell = ``;
    
                } else if (typeof(cell) === "object") {
                    if (cell.title !== undefined && cell.title !== null) {
                        tdTEXT = `${cell.title}`;
                        cell = `${cell.title}`;
                    } else {
                        cell = ``;
                    }
                } else {
                    console.log(typeof(cell));
                    tdTEXT = `${cell}`;
                    cell = `${cell}`;  
                }
            row[index] = cell;
            console.log(cell)
            th.push(cell)
            console.log(th)
            }
            console.log(row)
            
        }
    }

    


    
    

    render() {
        console.log(this.state)
        console.log(this.state.data[0].Header)
        console.log(this.state.data[0].Total)
        console.log(this.state.data[0].Data)
        console.log(this.state.data[0].Data[0].data)

        let th = this.state.data[0].Header.map((item)=>{
            return(  
                    <th>{item.title}</th>  
            )   
        })
        
        let th0 = this.state.data[0].Data[0].map((item)=>{
            return(
                    <td>
                        {item}
                    </td>
            )
        })
        let th1 = this.state.data[0].Data[1].map((item)=>{
            return(
                    <td>
                        {item}
                    </td>
            )
        })
        let th2 = this.state.data[0].Data[2].map((item)=>{
            return(
                    <td>
                        {item}
                    </td>
            )
        })
        let th3 = this.state.data[0].Data[3].map((item)=>{
            return(
                    <td>
                        {item}
                    </td>
            )
        })
        let th4 = this.state.data[0].Data[4].map((item)=>{
            return(
                    <td>
                        {item}
                    </td>
            )
        })
        let th5 = this.state.data[0].Data[5].map((item)=>{
            return(
                    <td>
                        {item}
                    </td>
            )
        })
        let th6 = this.state.data[0].Data[6].map((item)=>{
            return(
                    <td>
                        {item}
                    </td>
            )
        })
        // let th7 = this.state.data[0].Data[7].map((item)=>{
        //     return(
        //             <td>
        //                 {item}
        //             </td>
        //     )
        // })
        let th8 = this.state.data[0].Data[8].map((item)=>{
            return(
                    <td>
                        {item}
                    </td>
            )
        })
        let th9 = this.state.data[0].Data[9].map((item)=>{
            return(
                    <td>
                        {item}
                    </td>
            )
        })
        let th10 = this.state.data[0].Data[10].map((item)=>{
            return(
                    <td>
                        {item}
                    </td>
            )
        })

        console.log(th0)


          
        
        

        let tf = this.state.data[0].Header.map((item)=>{
            return(  
                    <th>{item.total}</th>  
            )   
        })
        return(
            <div>
                <table className="table table-striped">
                    <tbody>
                        <thead>
                            {th}
                        </thead>
                        <tr>
                            {th0}
                        </tr>
                        <tr>
                            {th1}
                        </tr>
                        <tr>
                            {th2}
                        </tr>
                        <tr>
                            {th3}
                        </tr>
                        <tr>
                            {th4}
                        </tr>
                        <tr>
                            {th5}
                        </tr>
                        <tr>
                            {th6}
                        </tr>
                        {/* <tr>
                            {th7}
                        </tr> */}
                        <tr>
                            {th8}
                        </tr>
                        <tr>
                            {th9}
                        </tr>
                        <tr>
                            {th10}
                        </tr>
                        
                        <tfoot>
                            {tf}
                        </tfoot>
                    </tbody>
                </table>
            </div>
        )
       
       
    
}

 
}
export default Table;