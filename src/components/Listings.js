import React, { useEffect } from 'react'
import cookie from 'cookie'
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button
} from '@mui/material'
import { Link } from 'react-router-dom'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const Listings = (props) => {
    return (
      <Container maxWidth="lg" className="car-container">

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Hours</TableCell>
                    {checkAuth() ? <TableCell>Delete?</TableCell> : null}
                </TableRow>
            </TableHead>
            <TableBody>
            {props.listings.map((listing, idx) => (
                <TableRow key={listing.id}>
                    <TableCell component="th" scope="row">
                        {listing.id}
                    </TableCell>
                    <TableCell><Link to={`/Details/${listing.id}`}>{listing["name"]}</Link></TableCell>
                    <TableCell>{listing["description"]}</TableCell>
                    <TableCell>{listing["address"]}</TableCell>
                    <TableCell>{listing["hours"]}</TableCell>
                    {checkAuth() ? 
                    <TableCell>
                        <DeleteIcon
                            onClick={() => props.removeListing(idx)}
                            className="icon text-red" />
                    </TableCell> :
                    null
                    }
                    
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </Container>
    )
}

export default Listings