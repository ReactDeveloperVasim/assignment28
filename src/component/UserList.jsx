import { Grid,Card , CardContent } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";


export const UserList=()=>{
    const[data,setData]=useState([]);

    const getData=async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(result.data);
    };

    useEffect(()=>{
            getData();
    },[])
    return(
        <Grid container spacing={1}>
            {
                data.map((item)=>
                    <Grid item xs={4}>
                        <Card sx={{bgcolor:"lightcyan" , height:"480px", width:"470px",margin:"10px 20px",boxShadow:"8px 10px 5px 5px gray" }}>
                            <CardContent sx={{lineHeight:"40px"}}>
                                <h2  style={{ color:"brown",marginBottom:"-0px"}}><span style={{marginRight:"10px",}}>{item.id} .</span><span>{item.name}</span></h2>
                             <span><b>User Name :</b>   {item.username}</span><br/>
                             <span><b>Email Id :</b>  {item.email}</span>   <br/>
                             <span><b>Address :</b></span>    {item.address.street} {item.address.suite}<span style={{margin:" 10px"}}>{item.address.city}</span><br/>
                             <span ><b>Zip Code : </b>{item.address.zipcode}</span><br/>
                             <span><b>Mobile Number : </b>{item.phone}</span><br />
                             <span><b>Company's Website : </b>{item.website}</span><br />
                             <span><b>Company Name : </b>{item.company.name}</span><br />
                             <span><b>Company's Catch Phrase : </b>{item.company.catchPhrase.slice(0,27)}</span><br />
                             <span><b>Company's Business : </b>{item.company.bs}</span><br />

                          

                            </CardContent>
                        </Card>
                    </Grid>
                )
            }
        </Grid>
    );
}