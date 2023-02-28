import React,{useEffect, useState} from 'react';
import axios from 'axios';

function Report() {
    const [reports, setReports] = useState([])
    async function fetchDailyReports(){
        try{
            const resp = await axios.get('http://localhost:8000/report/daily/')
            setReports(resp.data)
        }
        catch (e){
            alert(e)
        }
 

    }

    useEffect(()=>{fetchDailyReports();},[])

    return (
        <>
            <center><u><h1>Todays Report</h1></u></center>
            <br/>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Invoice Date</th>
                        <th>Invoice Number</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Cost/Quantity</th>
                        <th>Total Cost</th>
                        <th>Total Cost with Gst</th>
                        <th>Total Cost with Offer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reports.map((report)=>{
                            return(
                                <>
                                    {
                                    report.product_in_invoice.map((product)=>{
                                        return(
                                            <>
                                                <tr>
                                                    <td>{report.invoice_date}</td>
                                                    <td>{product.invoice}</td>
                                                    <td>{product.product_invoice}</td>
                                                    <td>{product.invoice_product_quantity}</td>
                                                    <td>{product.invoice_product_cost_per_quantity}</td>
                                                    <td>{product.invoice_product_total_cost}</td>
                                                    <td>{product.invoice_product_total_cost_with_gst}</td>
                                                    <td>{product.invoice_product_total_cost_with_offer}</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                    }
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