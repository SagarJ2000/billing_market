import React,{useState, useEffect} from 'react';
import {useForm} from  "react-hook-form";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Report() {
    const [invoice, setInvoice] = useState([]);
    const {register, handleSubmit} = useForm();
    const [invoice_type, setInvoiceType] = useState('day');

    async function fetchReports(data){
        try{
            if(invoice_type === 'range')
            {
                data.date = ""
            }
            const resp = await axios.post('http://localhost:8000/report/daily/',data);
            setInvoice(resp.data);
            console.log(resp.data)
        }
        catch (e){
            alert(e);
        }
    }

    useEffect(()=>{fetchReports();},[])
    
    function changeForm(){
        let invoice_type = document.getElementById('rt').value;
        setInvoiceType(invoice_type);
    }

     return (
        <>  
            <br/>
            <form className='container bg-light' onSubmit={handleSubmit(fetchReports)}>
                <center><u><h1>Sales Reports</h1></u></center>
                <br/>
                <label htmlFor='rt'>Report Type:</label>
                <select id='rt' name='invoice_type' className='form-control' onChange={changeForm} default="day">
                    <option value="day">On Date</option>
                    <option value="range">Between Dates </option>
                </select>
                <br/>
                { invoice_type === "day"?
                <div>
                <label htmlFor='date'>Report Date:</label>
                <input type="date"  id="date" className='form-control' {...register("date")}  />
                <br/>
                </div>
                :
                <div>
                <label htmlFor='sd'>Start Date:</label>
                <input type="date"  id="sd" className='form-control' {...register("start_date")}  />
                <br/>
                <label htmlFor='sd'>End Date:</label>
                <input type="date"  id="sd" className='form-control' {...register("end_date")}  />
                <br/>
                </div>
                }
               <input type="submit" value="GET REPORT" className='btn btn-success col-6 btn-lg' />
               <br/>
               <br/>
            </form>
            <br/>
            <br/>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Invoice Date</th>
                        <th>Invoice Number</th>
                        <th>Customer</th>
                        <th>Invoice Creator</th>
                        <th>Total Cost Without Gst</th>
                        <th>Total Cost With Gst</th>
                        <th>Total Cost With Offer and Gst</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice.length === 0 ?
                    <tr><td style={{textAlign: 'center', color: 'red'}} colSpan={7}>  Currently no invoices are found...</td></tr>
                    :
                    invoice.map((report)=>{
                        return(
                            <>
                                <tr>
                                    <td>{report.invoice_date}</td>
                                    <td><NavLink to="#" onClick={()=>{}}>{report.invoice_number}</NavLink></td>
                                    <td>{report.customer}</td>
                                    <td>{report.invoice_created_by}</td>
                                    <td>{report.total_cost_without_gst}</td>
                                    <td>{report.total_cost_with_gst}</td>
                                    <td>{report.total_cost_with_offer_and_gst}</td>
                                </tr>
                            </>
                        )
                    })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Report;


// {
//     report.product_in_invoice.map((product)=>{
//         return(
//             <>
//                 <tr>
//                     <td>{report.invoice_date}</td>
//                     <td>{product.invoice}</td>
//                     <td>{product.product_invoice}</td>
//                     <td>{product.invoice_product_quantity}</td>
//                     <td>{product.invoice_product_cost_per_quantity}</td>
//                     <td>{product.invoice_product_total_cost}</td>
//                     <td>{product.invoice_product_total_cost_with_gst}</td>
//                     <td>{product.invoice_product_total_cost_with_offer}</td>
//                 </tr>
//             </>
//         )
//     })
// }